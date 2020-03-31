import MainLayout from '../components/layouts/MainLayout';
import { NextPage } from 'next';
import { Row, Col, Button } from 'antd';
import Image from '../components/ui/Image';
import Router from 'next/router';

const Index: NextPage<any> = () => {
  return (
    <MainLayout bgColor='bg-secondary'>
      <Row
        justify='center'
        align='middle'
        style={{
          minHeight: '100vh'
        }}>
        <Col xs={14} sm={10} md={8} lg={6} xl={6}>
          <>
            <Image src='/images/logo.png' alt='ll-rides' width='100%' />
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <Button
                type='primary'
                htmlType='button'
                block
                onClick={() => Router.push('/auth/login')}>
                LOGIN
              </Button>
              <div style={{ marginTop: '10px', marginBottom: '10px' }} />
              <Button
                type='default'
                htmlType='button'
                block
                onClick={() => Router.push('/auth/register')}>
                REGISTER
              </Button>
            </div>
          </>
        </Col>
      </Row>
    </MainLayout>
  );
};

export default Index;
