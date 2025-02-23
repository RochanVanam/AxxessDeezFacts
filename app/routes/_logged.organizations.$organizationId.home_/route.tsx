import { Typography, Card, Row, Col, Statistic, Button } from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const navigate = useNavigate()
  const { organizationId } = useParams()
  const { organization } = useUserContext()

  // Fetch required data
  const { data: patients } = Api.patient.findMany.useQuery({
    where: { organizationId },
  })

  const { data: medications } = Api.medication.findMany.useQuery({
    where: { organizationId },
  })

  const { data: prescriptions } = Api.prescription.findMany.useQuery({
    where: { medication: { organizationId } },
  })

  const { data: healthLogs } = Api.healthLog.findMany.useQuery({
    where: { patient: { organizationId } },
    include: { patient: true },
    orderBy: { createdAt: 'desc' },
    take: 5,
  })

  // Calculate metrics
  const lowStockMedications =
    medications?.filter(med => med.currentStock <= med.reorderThreshold)
      ?.length || 0

  const activePrescriptions =
    prescriptions?.filter(presc => presc.status === 'ACTIVE')?.length || 0

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px' }}>
        <Title level={2}>
          <i className="las la-clinic-medical"></i> Medical Dashboard
        </Title>
        <Text type="secondary">
          Welcome to your medical practice management dashboard
        </Text>

        {/* Quick Stats */}
        <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Total Patients"
                value={patients?.length || 0}
                prefix={<i className="las la-users"></i>}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Active Prescriptions"
                value={activePrescriptions}
                prefix={<i className="las la-prescription-bottle"></i>}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Low Stock Alerts"
                value={lowStockMedications}
                prefix={<i className="las la-exclamation-triangle"></i>}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Medications"
                value={medications?.length || 0}
                prefix={<i className="las la-pills"></i>}
              />
            </Card>
          </Col>
        </Row>

        {/* Quick Access */}
        <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
          <Col xs={24} md={12}>
            <Card
              title={
                <>
                  <i className="las la-compass"></i> Quick Navigation
                </>
              }
            >
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Button
                    type="primary"
                    block
                    icon={<i className="las la-warehouse"></i>}
                    onClick={() =>
                      navigate(`/organizations/${organizationId}/inventory`)
                    }
                  >
                    Inventory
                  </Button>
                </Col>
                <Col span={12}>
                  <Button
                    type="primary"
                    block
                    icon={<i className="las la-user-injured"></i>}
                    onClick={() =>
                      navigate(`/organizations/${organizationId}/patients`)
                    }
                  >
                    Patients
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card
              title={
                <>
                  <i className="las la-book-medical"></i> Documentation
                </>
              }
            >
              <Text>
                Access our comprehensive user guide for detailed instructions on
                using the platform effectively.
              </Text>
              <Button
                type="link"
                icon={<i className="las la-external-link-alt"></i>}
                href="https://docs.example.com"
                target="_blank"
              >
                View Documentation
              </Button>
            </Card>
          </Col>
        </Row>

        {/* Recent Activity */}
        <Card
          title={
            <>
              <i className="las la-history"></i> Recent Health Logs
            </>
          }
          style={{ marginTop: 24 }}
        >
          {healthLogs?.map(log => (
            <div key={log.id} style={{ marginBottom: 16 }}>
              <Text strong>
                {log.patient?.firstName} {log.patient?.lastName}
              </Text>
              <br />
              <Text type="secondary">
                {dayjs(log.createdAt).format('MMM D, YYYY')} - {log.type}
              </Text>
              {log.notes && <p>{log.notes}</p>}
            </div>
          ))}
        </Card>
      </div>
    </PageLayout>
  )
}
