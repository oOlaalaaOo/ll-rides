import React from 'react'
import MainLayout from '../components/layouts/MainLayout'
import { Form, Field } from 'react-final-form'
import Button from '../components/ui/inputs/Button'
import Input from '../components/ui/inputs/Input'
import authApi from '../api/authApi'
import { useRouter } from 'next/router'
import { validValue, validEmail, validMinLength } from '../utils/validationUtil'

const Register = () => {
  const router = useRouter()

  const register = async ({ email, password, name }) => {
    return authApi.register(email, password, name)
  }

  const onSubmit = async (e) => {
    const resp = await register({ email: e.email, password: e.password, name: e.name })
    console.log(resp)
  }

  const nameValidator = (value) => {
    if (!validValue(value)) {
      return 'Name is required.'
    }

    return undefined
  }

  const emailValidator = (value) => {
    if (!validValue(value)) {
      return 'Email is required.'
    }

    if (!validEmail(value)) {
      return 'Email is not valid.'
    }

    return undefined
  }

  const passwordValidator = (value) => {
    if (!validValue(value)) {
      return 'Password is required.'
    }

    if (!validMinLength(value, 5)) {
      return `Password must have atleast ${5} characters long.`
    }

    return undefined
  }

  const rePasswordValidator = (value) => {
    let password = document.getElementById('password').value

    if (password !== value) {
      return 'Confirm password did not match.'
    }

    return undefined
  }

  return (
    <MainLayout withHeader={false}>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-sm px-8 py-5 rounded shadow-lg">
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="name"
                  validate={nameValidator}
                  render={({ input, meta }) => (
                    <div className="w-full">
                      <Input
                        name="name"
                        id="name"
                        label="Name"
                        error={meta.touched && meta.error ? meta.error : null}
                        {...input}
                      />
                    </div>
                  )}
                />

                <Field
                  name="email"
                  validate={emailValidator}
                  render={({ input, meta }) => (
                    <div className="w-full">
                      <Input
                        name="email"
                        id="email"
                        label="Email"
                        error={meta.touched && meta.error ? meta.error : null}
                        {...input}
                      />
                    </div>
                  )}
                />

                <Field
                  name="password"
                  type="password"
                  validate={passwordValidator}
                  render={({ input, meta }) => (
                    <div className="w-full">
                      <Input
                        name="password"
                        id="password"
                        label="Password"
                        type="password"
                        error={meta.touched && meta.error ? meta.error : null}
                        {...input}
                      />
                    </div>
                  )}
                />

                <Field
                  name="rePassword"
                  type="password"
                  validate={rePasswordValidator}
                  render={({ input, meta }) => (
                    <div className="w-full">
                      <Input
                        name="rePassword"
                        id="rePassword"
                        label="Confirm Password"
                        type="password"
                        error={meta.touched && meta.error ? meta.error : null}
                        {...input}
                      />
                    </div>
                  )}
                />

                <div className="w-full mt-3" />
                  
                <div className="flex items-center justify-between">
                  <Button
                    type="submit"
                    className="btn-primary"
                  >
                    REGISTER
                  </Button>

                  <Button
                    type="button"
                    className="btn-default shadow-none bg-white pull-right"
                    onClick={(e) => {
                      e.preventDefault()
                      router.push('/')
                    }}
                  >
                    GO TO LOGIN
                  </Button>
                </div>
              </form>
            )}
          />
        </div>
      </div>
    </MainLayout>
  )
}

export default Register
