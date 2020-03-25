import React from 'react'
import authApi from '../../api/authApi'
import { Card, Form, Icon, Input, Button, Checkbox } from 'antd'
import Image from '../ui/Image'
import Router from 'next/router'

type Props = {
  form: any
}

const LoginFormTemplate: React.FC<Props> = ({ form }) => {
  const { getFieldDecorator, validateFields } = form

  const handleSubmit = (e: any) => {
    e.preventDefault()
    validateFields((err: any, values: any) => {
      if (!err) {
        console.log(values)
        login(values.email, values.password)
      }
    })
  }

  const login = async (email: string, password: string) => {
    return await authApi.login(email, password)
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
              ],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
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
              ],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <a
              style={{ float: 'right' }}
              href=""
              onClick={e => {
                e.preventDefault()
                Router.push('/forgot-password')
              }}
            >
              Forgot password
            </a>
            <Button
              type="primary"
              htmlType="submit"
              block
            >
              Log in
            </Button>
            <div style={{ textAlign: 'center' }}>
              Or
              <br />
              <a
                href="#"
                onClick={e => {
                  e.preventDefault()
                  Router.push('/register')
                }}
              >Register Now!</a>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </>
  )
}

const WrappedLoginFormTemplate = Form.create({ name: 'LoginFormTemplate' })(LoginFormTemplate)

export default WrappedLoginFormTemplate
