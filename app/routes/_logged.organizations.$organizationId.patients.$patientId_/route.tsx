import {
  Typography,
  Card,
  Form,
  Input,
  Button,
  Table,
  Modal,
  DatePicker,
  Select,
  Space,
  Spin,
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

export default function PatientProfilePage() {
  const { patientId } = useParams()
  const [isEditMode, setIsEditMode] = useState(false)
  const [isPrescriptionModalOpen, setIsPrescriptionModalOpen] = useState(false)
  const [form] = Form.useForm()
  const [prescriptionForm] = Form.useForm()

  // Fetch patient data with health logs and prescriptions
  const {
    data: patient,
    isLoading,
    refetch,
  } = Api.patient.findFirst.useQuery({
    where: { id: patientId },
    include: {
      prescriptions: {
        include: { medication: true },
      },
      healthLogs: true,
    },
  })

  // Fetch medications for prescription modal
  const { data: medications } = Api.medication.findMany.useQuery({
    where: { organizationId: patient?.organizationId },
  })

  // Mutations
  const { mutateAsync: updatePatient } = Api.patient.update.useMutation()
  const { mutateAsync: createPrescription } =
    Api.prescription.create.useMutation()

  const handleUpdatePatient = async (values: any) => {
    await updatePatient({
      where: { id: patientId },
      data: values,
    })
    setIsEditMode(false)
    refetch()
  }

  const handleCreatePrescription = async (values: any) => {
    await createPrescription({
      data: {
        ...values,
        patientId,
        status: 'ACTIVE',
        startDate: values.startDate.format('YYYY-MM-DD'),
        endDate: values.endDate?.format('YYYY-MM-DD'),
      },
    })
    setIsPrescriptionModalOpen(false)
    prescriptionForm.resetFields()
    refetch()
  }

  if (isLoading || !patient) return <Spin size="large" />

  const prescriptionColumns = [
    {
      title: 'Medication',
      dataIndex: ['medication', 'name'],
      key: 'medication',
    },
    { title: 'Dosage', dataIndex: 'dosage', key: 'dosage' },
    { title: 'Frequency', dataIndex: 'frequency', key: 'frequency' },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
      render: (date: string) => dayjs(date).format('MM/DD/YYYY'),
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
      render: (date: string) =>
        date ? dayjs(date).format('MM/DD/YYYY') : 'Ongoing',
    },
    { title: 'Status', dataIndex: 'status', key: 'status' },
  ]

  const healthLogColumns = [
    { title: 'Type', dataIndex: 'type', key: 'type' },
    { title: 'Notes', dataIndex: 'notes', key: 'notes' },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (date: string) => dayjs(date).format('MM/DD/YYYY'),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Card>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 24,
            }}
          >
            <Title level={2}>
              <i className="las la-user-injured" style={{ marginRight: 8 }}></i>
              Patient Profile
            </Title>
            <Button
              type={isEditMode ? 'primary' : 'default'}
              onClick={() => setIsEditMode(!isEditMode)}
            >
              <i className={`las ${isEditMode ? 'la-save' : 'la-edit'}`}></i>
              {isEditMode ? ' Save' : ' Edit'}
            </Button>
          </div>

          {isEditMode ? (
            <Form
              form={form}
              initialValues={patient}
              onFinish={handleUpdatePatient}
              layout="vertical"
            >
              <Form.Item name="firstName" label="First Name">
                <Input />
              </Form.Item>
              <Form.Item name="lastName" label="Last Name">
                <Input />
              </Form.Item>
              <Form.Item name="email" label="Email">
                <Input />
              </Form.Item>
              <Form.Item name="phone" label="Phone">
                <Input />
              </Form.Item>
              <Form.Item name="address" label="Address">
                <Input />
              </Form.Item>
            </Form>
          ) : (
            <div>
              <Text strong>Name: </Text>
              <Text>{`${patient.firstName} ${patient.lastName}`}</Text>
              <br />
              <Text strong>Date of Birth: </Text>
              <Text>{dayjs(patient.dateOfBirth).format('MM/DD/YYYY')}</Text>
              <br />
              <Text strong>Gender: </Text>
              <Text>{patient.gender}</Text>
              <br />
              <Text strong>Email: </Text>
              <Text>{patient.email}</Text>
              <br />
              <Text strong>Phone: </Text>
              <Text>{patient.phone}</Text>
              <br />
              <Text strong>Address: </Text>
              <Text>{patient.address}</Text>
            </div>
          )}
        </Card>

        <Card style={{ marginTop: 24 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 24,
            }}
          >
            <Title level={3}>
              <i
                className="las la-prescription-bottle"
                style={{ marginRight: 8 }}
              ></i>
              Prescriptions
            </Title>
            <Button
              type="primary"
              onClick={() => setIsPrescriptionModalOpen(true)}
            >
              <i className="las la-plus"></i> Add Prescription
            </Button>
          </div>
          <Table
            dataSource={patient.prescriptions}
            columns={prescriptionColumns}
            rowKey="id"
          />
        </Card>

        <Card style={{ marginTop: 24 }}>
          <Title level={3}>
            <i className="las la-notes-medical" style={{ marginRight: 8 }}></i>
            Health History
          </Title>
          <Table
            dataSource={patient.healthLogs}
            columns={healthLogColumns}
            rowKey="id"
          />
        </Card>

        <Modal
          title="Add New Prescription"
          open={isPrescriptionModalOpen}
          onCancel={() => setIsPrescriptionModalOpen(false)}
          footer={null}
        >
          <Form
            form={prescriptionForm}
            onFinish={handleCreatePrescription}
            layout="vertical"
          >
            <Form.Item
              name="medicationId"
              label="Medication"
              rules={[{ required: true }]}
            >
              <Select>
                {medications?.map(med => (
                  <Select.Option key={med.id} value={med.id}>
                    {med.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="dosage"
              label="Dosage"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="frequency"
              label="Frequency"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="startDate"
              label="Start Date"
              rules={[{ required: true }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name="endDate" label="End Date">
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Create Prescription
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}
