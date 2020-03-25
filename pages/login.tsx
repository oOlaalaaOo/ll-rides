import MainLayout from '../components/layouts/MainLayout'
import LoginFormTemplate from '../components/templates/LoginFormTemplate'
import { NextPage } from 'next'
import { Row, Col } from 'antd'

const Login: NextPage<any> = () => {
  return (
    <MainLayout>
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{
          minHeight: '100vh'
        }}
      >
        <Col xs={18} sm={14} md={10} lg={8} xl={6}>
          <LoginFormTemplate />
        </Col>
      </Row>
    </MainLayout>
  )
}

export default Login
