import MainLayout from '../../components/layouts/MainLayout';
import LoginFormTemplate from '../../components/templates/LoginFormTemplate';
import { NextPage } from 'next';

const Login: NextPage<any> = () => {
  return (
    <MainLayout>
      <LoginFormTemplate />
    </MainLayout>
  );
};

export default Login;
