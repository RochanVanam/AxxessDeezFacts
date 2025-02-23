import {
  Typography,
  Table,
  Input,
  Button,
  Form,
  Modal,
  DatePicker,
  Select,
  message,
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

export default function PatientListPage() {
  const { organizationId } = useParams()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [form] = Form.useForm()

  // Fetch patients
  const {
    data: patients,
    isLoading,
    refetch,
  } = Api.patient.findMany.useQuery({
    where: {
      organizationId,
      OR: [
        { firstName: { contains: searchTerm, mode: 'insensitive' } },
        { lastName: { contains: searchTerm, mode: 'insensitive' } },
        { email: { contains: searchTerm, mode: 'insensitive' } },
      ],
    },
  })

  // Create patient mutation
  const { mutateAsync: createPatient } = Api.patient.create.useMutation()

  const handleAddPatient = async (values: any) => {
    try {
      await createPatient({
        data: {
          ...values,
          organizationId,
          dateOfBirth: values.dateOfBirth.format('YYYY-MM-DD'),
          conditions: values.conditions || '',
        },
      })
      message.success('Patient added successfully')
      setIsModalOpen(false)
      form.resetFields()
      refetch()
    } catch (error) {
      message.error('Failed to add patient')
    }
  }

  const columns = [
    {
      title: 'Name',
      key: 'name',
      render: (record: any) => (
        <Text>{`${record.firstName} ${record.lastName}`}</Text>
      ),
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Date of Birth',
      dataIndex: 'dateOfBirth',
      key: 'dateOfBirth',
      render: (date: string) => dayjs(date).format('MMMM D, YYYY'),
    },
    {
      title: 'Contact',
      key: 'contact',
      render: (record: any) => (
        <div>
          <div>{record.email}</div>
          <div>{record.phone}</div>
        </div>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (record: any) => (
        <Button
          type="link"
          onClick={() =>
            navigate(`/organizations/${organizationId}/patients/${record.id}`)
          }
        >
          <i className="las la-eye"></i> View Profile
        </Button>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 24,
          }}
        >
          <Title level={2}>
            <i className="las la-users"></i> Patient Management
          </Title>
          <Button type="primary" onClick={() => setIsModalOpen(true)}>
            <i className="las la-plus"></i> Add New Patient
          </Button>
        </div>

        <Input
          placeholder="Search patients..."
          prefix={<i className="las la-search"></i>}
          style={{ marginBottom: 24 }}
          onChange={e => setSearchTerm(e.target.value)}
        />

        <Table
          columns={columns}
          dataSource={patients}
          loading={isLoading}
          rowKey="id"
        />

        <Modal
          title="Add New Patient"
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={null}
        >
          <Form form={form} onFinish={handleAddPatient} layout="vertical">
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="dateOfBirth"
              label="Date of Birth"
              rules={[{ required: true }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
              name="gender"
              label="Gender"
              rules={[{ required: true }]}
            >
              <Select>
                <Select.Option value="Male">Male</Select.Option>
                <Select.Option value="Female">Female</Select.Option>
                <Select.Option value="Other">Other</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="email" label="Email">
              <Input type="email" />
            </Form.Item>
            <Form.Item name="phone" label="Phone">
              <Input />
            </Form.Item>
            <Form.Item name="address" label="Address">
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              name="height"
              label="Height (cm)"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="weight"
              label="Weight (kg)"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="conditions" label="Medical Conditions">
              <Input.TextArea />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Add Patient
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}
