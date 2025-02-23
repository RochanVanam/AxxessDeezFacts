import {
  Typography,
  Table,
  Button,
  Modal,
  Form,
  Input,
  DatePicker,
  Select,
  Space,
  Card,
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

export default function HealthLogsPage() {
  const { patientId, organizationId } = useParams()
  const { user } = useUserContext()
  const [form] = Form.useForm()
  const [editForm] = Form.useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [selectedLog, setSelectedLog] = useState<any>(null)
  const [dateFilter, setDateFilter] = useState<string | null>(null)
  const [typeFilter, setTypeFilter] = useState<string | null>(null)

  // Fetch patient data
  const { data: patient } = Api.patient.findFirst.useQuery({
    where: { id: patientId },
  })

  // Fetch health logs
  const { data: healthLogs, refetch } = Api.healthLog.findMany.useQuery({
    where: {
      patientId,
      ...(dateFilter && { date: dateFilter }),
      ...(typeFilter && { type: typeFilter }),
    },
    orderBy: { date: 'desc' },
  })

  // Mutations
  const { mutateAsync: createHealthLog } = Api.healthLog.create.useMutation()
  const { mutateAsync: updateHealthLog } = Api.healthLog.update.useMutation()

  const handleCreate = async (values: any) => {
    await createHealthLog({
      data: {
        type: values.type,
        notes: values.notes,
        date: dayjs(values.date).format('YYYY-MM-DD'),
        patientId: patientId!,
        userId: user!.id,
      },
    })
    form.resetFields()
    setIsModalOpen(false)
    refetch()
  }

  const handleEdit = async (values: any) => {
    await updateHealthLog({
      where: { id: selectedLog.id },
      data: {
        type: values.type,
        notes: values.notes,
        date: dayjs(values.date).format('YYYY-MM-DD'),
      },
    })
    editForm.resetFields()
    setIsEditModalOpen(false)
    refetch()
  }

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (date: string) => dayjs(date).format('MMMM D, YYYY'),
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Notes',
      dataIndex: 'notes',
      key: 'notes',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (record: any) => (
        <Button
          type="link"
          onClick={() => {
            setSelectedLog(record)
            editForm.setFieldsValue({
              ...record,
              date: dayjs(record.date),
            })
            setIsEditModalOpen(true)
          }}
        >
          <i className="las la-edit"></i> Edit
        </Button>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>
          <i className="las la-notes-medical"></i> Health Logs
        </Title>
        <Text>
          Manage health logs for {patient?.firstName} {patient?.lastName}
        </Text>

        <Card style={{ marginTop: 24 }}>
          <Space style={{ marginBottom: 16 }}>
            <DatePicker
              onChange={date =>
                setDateFilter(date ? date.format('YYYY-MM-DD') : null)
              }
              placeholder="Filter by date"
            />
            <Select
              style={{ width: 200 }}
              onChange={setTypeFilter}
              allowClear
              placeholder="Filter by type"
              options={[
                { value: 'Checkup', label: 'Checkup' },
                { value: 'Treatment', label: 'Treatment' },
                { value: 'Prescription', label: 'Prescription' },
              ]}
            />
            <Button type="primary" onClick={() => setIsModalOpen(true)}>
              <i className="las la-plus"></i> Add Health Log
            </Button>
          </Space>

          <Table dataSource={healthLogs} columns={columns} rowKey="id" />
        </Card>

        <Modal
          title="Add Health Log"
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={null}
        >
          <Form form={form} onFinish={handleCreate} layout="vertical">
            <Form.Item name="type" label="Type" rules={[{ required: true }]}>
              <Select
                options={[
                  { value: 'Checkup', label: 'Checkup' },
                  { value: 'Treatment', label: 'Treatment' },
                  { value: 'Prescription', label: 'Prescription' },
                ]}
              />
            </Form.Item>
            <Form.Item name="date" label="Date" rules={[{ required: true }]}>
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name="notes" label="Notes" rules={[{ required: true }]}>
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Create
              </Button>
            </Form.Item>
          </Form>
        </Modal>

        <Modal
          title="Edit Health Log"
          open={isEditModalOpen}
          onCancel={() => setIsEditModalOpen(false)}
          footer={null}
        >
          <Form form={editForm} onFinish={handleEdit} layout="vertical">
            <Form.Item name="type" label="Type" rules={[{ required: true }]}>
              <Select
                options={[
                  { value: 'Checkup', label: 'Checkup' },
                  { value: 'Treatment', label: 'Treatment' },
                  { value: 'Prescription', label: 'Prescription' },
                ]}
              />
            </Form.Item>
            <Form.Item name="date" label="Date" rules={[{ required: true }]}>
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name="notes" label="Notes" rules={[{ required: true }]}>
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Update
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}
