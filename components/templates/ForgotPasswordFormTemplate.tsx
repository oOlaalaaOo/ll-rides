import React from 'react'
import authApi from '../../api/authApi'
import { Card, Form, Icon, Input, Button } from 'antd'
import Image from '../ui/Image'

type Props = {
  form: any
}

const ForgotPasswordFormTemplate: React.FC<Props> = ({ form }) => {
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
                placeholder="Please enter your email address"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  )
}

const WrappedForgotPasswordFormTemplate = Form.create({ name: 'ForgotPasswordFormTemplate' })(ForgotPasswordFormTemplate)

export default WrappedForgotPasswordFormTemplate
