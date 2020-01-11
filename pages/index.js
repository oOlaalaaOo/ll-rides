import React, { useState } from 'react'
import MainLayout from '../components/layouts/MainLayout'
import { Form, Field } from 'react-final-form'
import { Button, Input } from '../components/ui/inputs'
import authApi from '../api/authApi'
import { validValue, validEmail, validMinLength } from '../utils/validationUtil'
import { Modal, ModalTitle, ModalContent, ModalActions } from '../components/ui/feedbacks/modal'
import { useDispatch } from 'react-redux'
import { pushNotification } from '../store/actions/notificationAction'

const Index = () => {
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false)

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
        <div className="w-full max-w-sm px-8 py-5 rounded shadow-lg animated fadeIn faster">
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

                  <div className="w-full my-2" />

                  <div className="flex items-center justify-between">
                      <Button
                        type="submit"
                        className="btn-primary"
                      >
                        LOGIN
                      </Button>

                    <Button
                      className="btn-default shadow-none bg-white pull-right"
                      onClick={e => {
                        e.preventDefault()
                        dispatch(pushNotification({
                          type: 'danger',
                          message: 'Test Notification Message.',
                          duration: 5000
                        }))
                        // setShowModal(true)
                      }}
                    >
                      Forgot Password?
                    </Button>
                  </div>
              </form>
            )}
          />
        </div>
      </div>

      <React.Fragment>
        {
          showModal ?
            <Modal
              title={
                <ModalTitle>
                  <p>Modal Title</p>
                </ModalTitle>
              }
              content={
                <ModalContent>
                  <p>Modal Content</p>
                </ModalContent>
              }
              actions={
                <ModalActions>
                  <Button onClick={() => setShowModal(false)}>Close</Button>
                </ModalActions>
              }
              status={showModal}
              onClose={() => setShowModal(false)}
            /> :
            <React.Fragment />
        }
      </React.Fragment>
    </MainLayout>
  )
}

export default Index
