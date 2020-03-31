import MainLayout from '../../components/layouts/MainLayout';
import { NextPage } from 'next';
import { Row, Col } from 'antd';
import withAuth from '../../components/hoc/withAuth';

const Dashboard: NextPage<any> = ({ authUser }) => {
  console.log(authUser)
  return (
    <MainLayout>
      <Row
        style={{
          minHeight: '100vh'
        }}>
        <Col xs={18} sm={14} md={10} lg={8} xl={6}>
          <div>
            <h1>Dashboard</h1>
          </div>
        </Col>
      </Row>
    </MainLayout>
  );
};

export default withAuth(Dashboard);
