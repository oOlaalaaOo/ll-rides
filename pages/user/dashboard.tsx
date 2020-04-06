import MainLayout from '../../components/layouts/MainLayout';
import { NextPage } from 'next';
import withAuth from '../../components/hoc/withAuth';

const Dashboard: NextPage<any> = ({ authUser }) => {
  console.log(authUser);
  return (
    <MainLayout>
      <div>
        <h1>Dashboard</h1>
      </div>
    </MainLayout>
  );
};

export default withAuth(Dashboard);
