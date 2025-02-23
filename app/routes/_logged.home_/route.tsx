import { Typography, Card, Space, Row, Col } from 'antd'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  return (
    <PageLayout layout="full-width">
      <Row justify="center" style={{ padding: '2rem' }}>
        <Col xs={24} sm={20} md={16} lg={14}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            {/* Header Section */}
            <div style={{ textAlign: 'center' }}>
              <Title level={1}>
                <i
                  className="las la-hospital-alt"
                  style={{ marginRight: '10px' }}
                ></i>
                Welcome to MedTrack
              </Title>
              <Paragraph style={{ fontSize: '18px' }}>
                Your comprehensive solution for medical inventory and patient
                management
              </Paragraph>
            </div>

            {/* Main Features */}
            <Card>
              <Title level={3}>
                <i className="las la-star" style={{ marginRight: '10px' }}></i>
                Key Features
              </Title>
              <Space
                direction="vertical"
                size="middle"
                style={{ width: '100%' }}
              >
                <div>
                  <Title level={4}>
                    <i
                      className="las la-pills"
                      style={{ marginRight: '10px' }}
                    ></i>
                    Inventory Management
                  </Title>
                  <Paragraph>
                    Track medications, monitor stock levels, and manage reorders
                    efficiently. Keep your pharmacy organized and never run out
                    of essential medicines.
                  </Paragraph>
                </div>

                <div>
                  <Title level={4}>
                    <i
                      className="las la-user-injured"
                      style={{ marginRight: '10px' }}
                    ></i>
                    Patient Records
                  </Title>
                  <Paragraph>
                    Maintain comprehensive patient profiles, including medical
                    history, prescriptions, and treatment plans. Access patient
                    information quickly and securely.
                  </Paragraph>
                </div>

                <div>
                  <Title level={4}>
                    <i
                      className="las la-notes-medical"
                      style={{ marginRight: '10px' }}
                    ></i>
                    Health Logs
                  </Title>
                  <Paragraph>
                    Record and track patient health progress, treatments, and
                    outcomes. Keep detailed logs for better patient care and
                    follow-up.
                  </Paragraph>
                </div>
              </Space>
            </Card>

            {/* Getting Started */}
            <Card>
              <Title level={3}>
                <i className="las la-flag" style={{ marginRight: '10px' }}></i>
                Getting Started
              </Title>
              <Space
                direction="vertical"
                size="middle"
                style={{ width: '100%' }}
              >
                <div>
                  <Title level={4}>
                    <i
                      className="las la-building"
                      style={{ marginRight: '10px' }}
                    ></i>
                    1. Select Your Organization
                  </Title>
                  <Paragraph>
                    Choose your organization to access its specific inventory
                    and patient data.
                  </Paragraph>
                </div>

                <div>
                  <Title level={4}>
                    <i
                      className="las la-tasks"
                      style={{ marginRight: '10px' }}
                    ></i>
                    2. Navigate Key Areas
                  </Title>
                  <Paragraph>
                    Use the navigation menu to access Inventory Management,
                    Patient Lists, and Health Logs.
                  </Paragraph>
                </div>

                <div>
                  <Title level={4}>
                    <i
                      className="las la-user-shield"
                      style={{ marginRight: '10px' }}
                    ></i>
                    3. Manage Permissions
                  </Title>
                  <Paragraph>
                    Different roles have different access levels. Contact your
                    administrator if you need additional permissions.
                  </Paragraph>
                </div>
              </Space>
            </Card>
          </Space>
        </Col>
      </Row>
    </PageLayout>
  )
}
