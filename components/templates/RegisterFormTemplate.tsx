import React from 'react'
import authApi from '../../api/authApi'
import { Card, Form, Icon, Input, Button } from 'antd'
import Image from '../ui/Image'
import LineBreak from '../ui/LineBreak'
import Router from 'next/router'

type Props = {
  form: any
}

const RegisterFormTemplate: React.FC<Props> = ({ form }) => {
  const { getFieldDecorator, validateFields, getFieldValue } = form

  const handleSubmit = (e: any) => {
    e.preventDefault()
    validateFields((err: any, values: any) => {
      if (!err) {
        console.log(values)
        register(values.email, values.password, values.name)
      }
    })
  }

  const register = async (email: string, password: string, name: string): Promise<any> => {
    return await authApi.register(email, password, name)
  }

  const compareToFirstPassword = (rule: any, value: any, callback: any) => {
    console.log(rule)
    if (value && value !== getFieldValue('password')) {
      callback('Confirm password did not matched')
    } else {
      callback()
    }
  }

  return (
    <>
      <Card>
        <Image
          src="/images/logo.png"
          alt="ll-rides"
          width="40%"
        />
        <Form onSubmit={handleSubmit}>
          <Form.Item>
            {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: 'Please input your name'
                }
              ]
            })(
              <Input
                prefix={<Icon type="user" />}
                placeholder="Full Name"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [
                {
                  required: true,
                  message: 'Please input your email address'
                },
                {
                  type: 'email',
                  message: 'Please input valid email address'
                }
              ]
            })(
              <Input
                prefix={<Icon type="mail" />}
                placeholder="Email Address"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password'
                }
              ]
            })(
              <Input
                prefix={<Icon type="lock" />}
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('confirm_password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password confirmation'
                },
                {
                  validator: compareToFirstPassword
                }
              ]
            })(
              <Input
                prefix={<Icon type="lock" />}
                type="password"
                placeholder="Confirm Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="btn-success"
              block
            >
              Register
            </Button>
            <div style={{ textAlign: 'center' }}>
              Or
              <LineBreak />
              <a
                href="#"
                onClick={e => {
                  e.preventDefault()
                  Router.push('/login')
                }}
              >Go to Login</a>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </>
  )
}

const WrappedRegisterFormTemplate = Form.create({ name: 'RegisterFormTemplate' })(RegisterFormTemplate)

export default WrappedRegisterFormTemplate
