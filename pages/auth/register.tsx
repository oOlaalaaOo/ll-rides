import MainLayout from '../../components/layouts/MainLayout';
import RegisterFormTemplate from '../../components/templates/RegisterFormTemplate';
import { NextPage } from 'next';

const Register: NextPage<any> = () => {
  return (
    <MainLayout>
      <RegisterFormTemplate />
    </MainLayout>
  );
};

export default Register;
