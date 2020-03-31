import MainLayout from '../../components/layouts/MainLayout'
import RegisterFormTemplate from '../../components/templates/RegisterFormTemplate'
import { NextPage } from 'next'
import { Row, Col } from 'antd'

const Register: NextPage<any> = () => {
  return (
    <MainLayout>
      <div>
        <Row
          justify="center"
          align="middle"
          style={{
            minHeight: '100vh'
          }}
        >
          <Col xs={18} sm={14} md={10} lg={8} xl={6}>
            <RegisterFormTemplate />
          </Col>
        </Row>
      </div>
    </MainLayout>
  )
}

export default Register
