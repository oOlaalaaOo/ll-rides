import React, { useState } from 'react';
import authApi from '../../api/authApi';
import { Card, Form, Input, Button, Checkbox, Alert } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Image, LineBreak } from '../ui';
import Router from 'next/router';
import cookieUtil from '../../utils/cookieUtil';
import localStorageUtil from '../../utils/localStorageUtil';

const ForgotPasswordFormTemplate: React.FC<any> = () => {
  const [error, setError] = useState({
    status: false,
    message: '',
    description: ''
  });

  const [loginProcessing, setLoginProcessing] = useState(false);

  const handleSubmit = async (values: any) => {
    try {
      setLoginProcessing(true);
      setError({
        status: false,
        message: '',
        description: ''
      });

      const resp = await authApi.login(values.email, values.password);

      await localStorageUtil.setItem('accessToken', resp.accessToken);
      cookieUtil.setCookie('accessToken', resp.accessToken);

      Router.push('/user/dashboard');
    } catch (err) {
      const { data } = err.response;

      setError({
        status: true,
        message: 'Login Error',
        description: data.error
      });
    } finally {
      setLoginProcessing(false);
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
            <Input prefix={<UserOutlined />} placeholder='Email Address' />
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
          <Form.Item>
            <Form.Item name='remember' valuePropName='checked' noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a
              style={{ float: 'right' }}
              href='#'
              onClick={e => {
                e.preventDefault();
                Router.push('/');
              }}>
              Forgot Password
            </a>
          </Form.Item>
          <Form.Item noStyle>
            <Button
              type='primary'
              htmlType='submit'
              block
              loading={loginProcessing}>
              Log in
            </Button>
          </Form.Item>
          <Form.Item noStyle>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>Or</div>
          </Form.Item>
          <Form.Item noStyle>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <Button
                type='link'
                htmlType='button'
                onClick={e => {
                  e.preventDefault();
                  Router.push('/register');
                }}
                disabled={loginProcessing}>
                Register Now!
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default ForgotPasswordFormTemplate;
