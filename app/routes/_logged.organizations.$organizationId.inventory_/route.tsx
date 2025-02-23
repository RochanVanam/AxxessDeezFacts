import {
  Typography,
  Table,
  Button,
  InputNumber,
  Modal,
  Form,
  notification,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function InventoryManagementPage() {
  const { organizationId } = useParams()
  const [orderModalVisible, setOrderModalVisible] = useState(false)
  const [selectedMedication, setSelectedMedication] = useState<any>(null)
  const [orderQuantity, setOrderQuantity] = useState<number>(0)
  const [thresholdModalVisible, setThresholdModalVisible] = useState(false)
  const [newThreshold, setNewThreshold] = useState<number>(0)

  // Fetch medications
  const { data: medications, refetch } = Api.medication.findMany.useQuery({
    where: { organizationId },
    orderBy: { name: 'asc' },
  })

  // Fetch orders
  const { data: orders } = Api.medicationOrder.findMany.useQuery({
    where: { organizationId },
    include: { medication: true },
    orderBy: { createdAt: 'desc' },
  })

  // Mutations
  const createOrder = Api.medicationOrder.create.useMutation()
  const updateMedication = Api.medication.update.useMutation()

  const handleOrder = async () => {
    try {
      await createOrder.mutateAsync({
        data: {
          quantity: orderQuantity,
          status: 'PENDING',
          medicationId: selectedMedication.id,
          organizationId: organizationId!,
        },
      })
      notification.success({ message: 'Order placed successfully' })
      setOrderModalVisible(false)
      refetch()
    } catch (error) {
      notification.error({ message: 'Failed to place order' })
    }
  }

  const handleUpdateThreshold = async () => {
    try {
      await updateMedication.mutateAsync({
        where: { id: selectedMedication.id },
        data: { reorderThreshold: newThreshold },
      })
      notification.success({ message: 'Threshold updated successfully' })
      setThresholdModalVisible(false)
      refetch()
    } catch (error) {
      notification.error({ message: 'Failed to update threshold' })
    }
  }

  const medicationColumns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    {
      title: 'Current Stock',
      dataIndex: 'currentStock',
      key: 'currentStock',
      render: (stock: number) => stock.toString(),
    },
    {
      title: 'Reorder Threshold',
      dataIndex: 'reorderThreshold',
      key: 'reorderThreshold',
      render: (threshold: number) => threshold.toString(),
    },
    {
      title: 'AI Recommended Quantity',
      dataIndex: 'recommendedQuantity',
      key: 'recommendedQuantity',
      render: (quantity: number) => quantity.toString(),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (record: any) => (
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button
            type="primary"
            icon={<i className="las la-shopping-cart" />}
            onClick={() => {
              setSelectedMedication(record)
              setOrderModalVisible(true)
            }}
          >
            Order
          </Button>
          <Button
            icon={<i className="las la-cog" />}
            onClick={() => {
              setSelectedMedication(record)
              setNewThreshold(record.reorderThreshold)
              setThresholdModalVisible(true)
            }}
          >
            Set Threshold
          </Button>
        </div>
      ),
    },
  ]

  const orderColumns = [
    {
      title: 'Medication',
      key: 'medication',
      render: (record: any) => record.medication.name,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (quantity: number) => quantity.toString(),
    },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    {
      title: 'Order Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD HH:mm'),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
        <Title level={2}>
          <i className="las la-pills" style={{ marginRight: '8px' }} />
          Inventory Management
        </Title>
        <Text type="secondary">
          Manage your medication inventory, track stock levels, and place orders
        </Text>

        <div style={{ marginTop: '24px' }}>
          <Title level={4}>Current Inventory</Title>
          <Table
            dataSource={medications}
            columns={medicationColumns}
            rowKey="id"
            pagination={{ pageSize: 10 }}
          />
        </div>

        <div style={{ marginTop: '24px' }}>
          <Title level={4}>Order History</Title>
          <Table
            dataSource={orders}
            columns={orderColumns}
            rowKey="id"
            pagination={{ pageSize: 5 }}
          />
        </div>

        <Modal
          title="Place Order"
          open={orderModalVisible}
          onOk={handleOrder}
          onCancel={() => setOrderModalVisible(false)}
        >
          <Form layout="vertical">
            <Form.Item label="Medication">
              <Text>{selectedMedication?.name}</Text>
            </Form.Item>
            <Form.Item label="Quantity">
              <InputNumber
                min={1}
                value={orderQuantity}
                onChange={value => setOrderQuantity(value || 0)}
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Form>
        </Modal>

        <Modal
          title="Set Reorder Threshold"
          open={thresholdModalVisible}
          onOk={handleUpdateThreshold}
          onCancel={() => setThresholdModalVisible(false)}
        >
          <Form layout="vertical">
            <Form.Item label="Medication">
              <Text>{selectedMedication?.name}</Text>
            </Form.Item>
            <Form.Item label="New Threshold">
              <InputNumber
                min={0}
                value={newThreshold}
                onChange={value => setNewThreshold(value || 0)}
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}
