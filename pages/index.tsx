import MainLayout from '../components/layouts/MainLayout'
import { NextPage } from 'next'
import { Row, Col } from 'antd'
import Image from '../components/ui/Image'
import LineBreak from '../components/ui/LineBreak'

const Index: NextPage<any> = () => {
  return (
    <MainLayout>
      <div style={{ minHeight: '93vh' }}>
        <Row>
          <Col span={6}>
            <Image
              src="/images/logo.png"
              alt="ll-rides"
              width="100%"
            />
            <LineBreak top="5px" bottom="5px" />
          </Col>
        </Row>
      </div>
    </MainLayout>
  )
}

export default Index
