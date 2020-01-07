import React from 'react'
import MainLayout from '../components/layouts/MainLayout'
import { Form, Field } from 'react-final-form'
import Button from '../components/ui/inputs/Button'
import Input from '../components/ui/inputs/Input'
import authApi from '../api/authApi'
import { validValue, validEmail, validMinLength } from '../utils/validationUtil'

const Index = () => {
  const login = async ({ email, password }) => {
    return authApi.login(email, password)
  }

  const onSubmit = async (e) => {
    const resp = await login({ email: e.email, password: e.password })
    console.log(resp)
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

  return (
    <MainLayout withHeader={false}>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-sm px-8 py-5 rounded shadow-lg">
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
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

                  <div className="w-full mt-3" />
                  
                  <div className="flex items-center justify-between">
                    <Button
                      type="submit"
                      className="btn-primary"
                    >
                      LOGIN
                    </Button>

                    <Button
                      className="btn-default shadow-none bg-white pull-right"
                    >
                      Forgot Password?
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

export default Index
