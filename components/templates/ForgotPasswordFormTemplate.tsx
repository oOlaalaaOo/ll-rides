import React, { useState } from 'react';
import authApi from '../../api/authApi';
import { Image, LineBreak } from '../ui';
import Router from 'next/router';
import cookieUtil from '../../utils/cookieUtil';
import localStorageUtil from '../../utils/localStorageUtil';
import { Formik } from 'formik';

const ForgotPasswordFormTemplate: React.FC<any> = () => {
  const [error, setError] = useState({
    status: false,
    message: '',
    description: ''
  });
  const [loginProcessing, setLoginProcessing] = useState(false);

  const submitForm = async (values: any) => {
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
      <div>
        <Image src='/images/logo.png' alt='ll-rides' width='35%' />

        <LineBreak top='10px' bottom='10px' />

        {error.status === true ? (
          <>
            <div>
              {error.message}
              {error.description}
            </div>
            <LineBreak top='10px' bottom='10px' />
          </>
        ) : null}

        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={async datas => {
            console.log(datas);
            const resp = await submitForm(datas);

            console.log(resp);
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => {
            <form onSubmit={handleSubmit}>
              <input
                type='email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Email Address'
              />
              <input
                type='password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Password'
              />

              <button type='submit' disabled={loginProcessing}>
                Log in
              </button>
              <div style={{ textAlign: 'center', marginTop: '10px' }}>Or</div>
              <button
                onClick={e => {
                  e.preventDefault();
                  Router.push('/auth/register');
                }}
                disabled={loginProcessing}
              >
                Register Now!
              </button>
            </form>;
          }}
        </Formik>
      </div>
    </>
  );
};

export default ForgotPasswordFormTemplate;
