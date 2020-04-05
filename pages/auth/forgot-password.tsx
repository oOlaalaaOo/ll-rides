import MainLayout from '../../components/layouts/MainLayout';
import ForgotPasswordFormTemplate from '../../components/templates/ForgotPasswordFormTemplate';
import { NextPage } from 'next';

const ForgotPassword: NextPage<any> = () => {
  return (
    <MainLayout>
      <div>
      <ForgotPasswordFormTemplate />
      </div>
    </MainLayout>
  );
};

export default ForgotPassword;
