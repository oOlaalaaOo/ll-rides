import { FC, useState } from 'react';
import authApi from '../../api/authApi';
import { Card, Form, Input, Button, Alert } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { Image, LineBreak } from '../ui';
import Router from 'next/router';

const RegisterFormTemplate: FC<any> = () => {
  const [error, setError] = useState({
    status: false,
    message: '',
    description: ''
  });
  const [registerProcessing, setRegisterProcessing] = useState(false);

  const handleSubmit = async (values: any) => {
    try {
      setRegisterProcessing(true);
      setError({
        status: false,
        message: '',
        description: ''
      });

      const resp = await authApi.register(
        values.email,
        values.password,
        values.name
      );

      console.log(resp);

      Router.push('/auth/login');
    } catch (err) {
      const { data } = err.response;

      setError({
        status: true,
        message: 'Registration Error',
        description: data.error
      });
    } finally {
      setRegisterProcessing(false);
    }
  };

  return (
    <>
      <Card>
        <Image src='/images/logo.png' alt='ll-rides' width='35%' />

        <LineBreak top='10px' bottom='10px' />

        {error.status === true ? (
          <>
            <Alert
              message={error.message}
              description={error.description}
              type='error'
              closable
              showIcon
            />
            <LineBreak top='10px' bottom='10px' />
          </>
        ) : null}

        <Form onFinish={handleSubmit}>
          <Form.Item
            name='name'
            rules={[
              {
                required: true,
                message: 'Please input your name'
              }
            ]}>
            <Input prefix={<UserOutlined />} placeholder='Full Name' />
          </Form.Item>
          <Form.Item
            name='email'
            rules={[
              {
                required: true,
                message: 'Please input your email address'
              },
              {
                type: 'email',
                message: 'Please input valid email address'
              }
            ]}>
            <Input prefix={<MailOutlined />} placeholder='Email Address' />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your password'
              }
            ]}>
            <Input
              prefix={<LockOutlined />}
              type='password'
              placeholder='Password'
            />
          </Form.Item>
          <Form.Item
            name='confirm_password'
            rules={[
              {
                required: true,
                message: 'Please input your password confirmation'
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  console.log(rule);
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('Confirm password did not matched');
                }
              })
            ]}>
            <Input
              prefix={<LockOutlined />}
              type='password'
              placeholder='Confirm Password'
            />
          </Form.Item>
          <Form.Item noStyle>
            <Button
              type='primary'
              htmlType='submit'
              block
              loading={registerProcessing}>
              Register
            </Button>
          </Form.Item>
          <Form.Item noStyle>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>Or</div>
          </Form.Item>
          <Form.Item noStyle>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <Button
                htmlType='button'
                type='link'
                onClick={e => {
                  e.preventDefault();
                  Router.push('/auth/login');
                }}
                disabled={registerProcessing}>
                Go to Login
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default RegisterFormTemplate;
