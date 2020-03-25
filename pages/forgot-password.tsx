import MainLayout from '../components/layouts/MainLayout'
import ForgotPasswordFormTemplate from '../components/templates/ForgotPasswordFormTemplate'
import { NextPage } from 'next'
import { Row, Col } from 'antd'

const Register: NextPage<any> = () => {
  return (
    <MainLayout>
      <div>
        <Row
          type="flex"
          justify="center"
          align="middle"
          style={{
            minHeight: '100vh'
          }}
        >
          <Col xs={18} sm={14} md={10} lg={8} xl={6}>
            <ForgotPasswordFormTemplate />
          </Col>
        </Row>
      </div>
    </MainLayout>
  )
}

export default Register
