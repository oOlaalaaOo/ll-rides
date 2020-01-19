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
  const { getFieldDecorator } = form

  const handleSubmit = (e: any) => {
    e.preventDefault()
    form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log(values)
        register(values.email, values.password, values.name)
      }
    })
  }

  const register = async (email: string, password: string, name: string): Promise<any> => {
    return await authApi.register(email, password, name)
  }

  const compareToFirstPassword = (value: any, callback: any) => {
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!')
    } else {
      callback()
    }
  }

  const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  }

  return (
    <>
      <Card>
        <Image
          src="/images/logo.png"
          alt="ll-rides"
          width="40%"
        />
        <Form onSubmit={handleSubmit} layout="horizontal">
          <Form.Item
            label="Full Name"
            {...formItemLayout}
          >
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
          <Form.Item
            label="Email Address"
            {...formItemLayout}
          >
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
                prefix={<Icon type="user" />}
                placeholder="Email Address"
              />
            )}
          </Form.Item>
          <Form.Item
            label="Password"
            {...formItemLayout}
          >
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password'
                }
              ],
            })(
              <Input
                prefix={<Icon type="lock" />}
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            {...formItemLayout}
          >
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
