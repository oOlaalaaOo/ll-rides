import React, { useState } from 'react';
import authApi from '../../api/authApi';
import Router from 'next/router';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikValues,
  FormikErrors,
} from 'formik';
import { Alert, Button } from '../ui';
import {
  validValue,
  validEmail,
  validMinLength,
  validEqualTo,
  validAlpha,
} from '../../utils/validationUtil';

const RegisterFormTemplate: React.FC<any> = () => {
  const [error, setError] = useState({
    status: false,
    message: '',
    description: '',
  });

  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen px-8 text-center min-w'>
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
            name: '',
          }}
          validate={(values: FormikValues) => {
            let errors: FormikErrors<any> = {};

            if (!validValue(values.email)) {
              errors.email = 'Email address is required';
            } else if (!validEmail(values.email)) {
              errors.email = 'Invalid email address';
            }

            if (!validValue(values.password)) {
              errors.password = 'Password is required';
            } else if (!validMinLength(values.password, 5)) {
              errors.password = `Password must have atleast 5 characters long`;
            }

            if (!validEqualTo(values.password, values.confirmPassword)) {
              errors.confirmPassword = 'Confirm Password did not matched';
            }

            if (!validValue(values.name)) {
              errors.name = 'Name is required';
            } else if (!validAlpha(values.name)) {
              errors.name = 'Has Invalid characters';
            }

            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              setError({
                status: false,
                message: '',
                description: '',
              });

              await authApi.register(
                values.email,
                values.password,
                values.name
              );

              Router.push('/auth/login');
            } catch (err) {
              const { data } = err.response;

              setError({
                status: true,
                message: 'Login Error',
                description: data.error,
              });
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className='w-1/4 px-3 py-3 border rounded shadow'>
              <div>
                <img
                  src='/images/logo.png'
                  alt='ll-rides'
                  className='w-32 sm:w-32 md:w-40 lg:w-1/3 xl:w-1/3 mx-auto'
                />

                {error.status === true ? (
                  <Alert
                    type='danger'
                    title='Test Error Title ddddddddd'
                    message='Test Error Message lorem opsuom neonday no'
                    onClose={() => {
                      setError({
                        status: false,
                        message: '',
                        description: '',
                      });
                    }}
                  />
                ) : null}
              </div>
              <div className='my-2'>
                <Field
                  type='email'
                  name='email'
                  className='px-2 py-1 border w-full'
                  placeholder='Email Address'
                />
                <ErrorMessage
                  name='email'
                  component='div'
                  className='error-message'
                />
              </div>
              <div className='my-2'>
                <Field
                  type='password'
                  name='password'
                  className='px-2 py-1 border w-full'
                  placeholder='Password'
                />
                <ErrorMessage
                  name='password'
                  component='div'
                  className='error-message'
                />
              </div>
              <div className='my-2'>
                <Field
                  type='password'
                  name='confirmPassword'
                  className='px-2 py-1 border w-full'
                  placeholder='Confirm Password'
                />
                <ErrorMessage
                  name='confirmPassword'
                  component='div'
                  className='error-message'
                />
              </div>
              <div className='my-2'>
                <Field
                  type='text'
                  name='name'
                  className='px-2 py-1 border w-full'
                  placeholder='Full Name'
                />
                <ErrorMessage
                  name='name'
                  component='div'
                  className='error-message'
                />
              </div>
              <div className='my-2'>
                <Button
                  type='submit'
                  className='bg-blue-500 text-white py-1 w-full rounded'
                  label='Register'
                  disabled={isSubmitting}
                  loading={isSubmitting}
                />
              </div>

              <div style={{ textAlign: 'center', marginTop: '10px' }}>Or</div>

              <div>
                <Button
                  className='bg-white text-black py-1 w-full rounded'
                  onClick={(
                    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                  ) => {
                    e.preventDefault();
                    Router.push('/auth/register');
                  }}
                  disabled={isSubmitting}
                  label='Go To Login'
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default RegisterFormTemplate;
