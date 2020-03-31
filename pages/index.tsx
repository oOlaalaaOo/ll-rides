import MainLayout from '../components/layouts/MainLayout';
import { NextPage } from 'next';
import { Row, Col, Button, Typography } from 'antd';
import Image from '../components/ui/Image';
import Router from 'next/router';
// import { LineBreak } from '../components/ui';

const { Title, Paragraph } = Typography;

const Index: NextPage<any> = () => {
  return (
    <MainLayout bgColor='bg-secondary'>
      <div className='landing-menu'>
        <ul className='landing-menu-list'>
          <li>
            <Button
              type='primary'
              shape='round'
              onClick={() => Router.push('/auth/login')}
            >
              LOGIN
            </Button>
          </li>
          <li>
            <Button
              type='primary'
              shape='round'
              onClick={() => Router.push('/auth/register')}
            >
              REGISTER
            </Button>
          </li>
        </ul>
      </div>
      <Row justify='center' align='middle' style={{ minHeight: '90vh' }}>
        <Col>
          <>
            <div style={{ textAlign: 'center' }}>
              <Image src='/images/logo.png' alt='ll-rides' width='50%' />
              <Title level={1} style={{ fontSize: '28pt' }}>
                Been in a beautiful place?
              </Title>
              <Paragraph>
                Please share it to us, for sure we would love to see what you
                have experienced there.
              </Paragraph>
              <Title level={4}>Brought to you by LL RIDES</Title>
            </div>
          </>
        </Col>
      </Row>
    </MainLayout>
  );
};

export default Index;
