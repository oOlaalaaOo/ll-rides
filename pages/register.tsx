import MainLayout from '../components/layouts/MainLayout'
import RegisterFormTemplate from '../components/templates/RegisterFormTemplate'
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
            minHeight: '93vh',
            paddingTop: '20px'
          }}
        >
          <Col xs={18} sm={18} md={14} lg={11} xl={9}>
            <RegisterFormTemplate />
          </Col>
        </Row>
      </div>
    </MainLayout>
  )
}

export default Register
