import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  Form,
  Input,
} from 'antd';
import './styled.css'
import { userActions } from '../../store/modules/User';


const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const Register = () => {

    const dispatch = useDispatch()
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    await dispatch(userActions.add(values))
    alert(`Đăng Kí Thành Công`)
    window.location.href = '/login'
    console.log('Received values of form: ', values);
  };


  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="w-full max-w-md bg-white  shadow-lg shadow-fuchsia-200/50 rounded px-8 pt-8 pb-8 mb-4">
        <h2 className="text-center mb-6 text-2xl pb-5">Registration Form</h2>
            <Form
                {...formItemLayout}
                form={form}
                className=""
                name="register"
                onFinish={onFinish}
                initialValues={{
                residence: ['zhejiang', 'hangzhou', 'xihu'],
                prefix: '86',
                }}
                style={{
                maxWidth: 600,
                minWidth:400,
                }}
                scrollToFirstError
                >
                <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                    },
                    {
                    required: true,
                    message: 'Please input your E-mail!',
                    },
                ]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                    required: true,
                    message: 'Please input your password!',
                    },
                ]}
                hasFeedback
                >
                <Input.Password />
                </Form.Item>

                <Form.Item
                name="repassword"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                    required: true,
                    message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                    validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                        }
                        return Promise.reject(new Error('The new password that you entered do not match!'));
                    },
                    }),
                ]}
                >
                <Input.Password />
                </Form.Item>

                <Form.Item
                name="name"
                label="Name"
                tooltip="What do you want others to call you?"
                rules={[
                    {
                    required: true,
                    message: 'Please input your nickname!',
                    whitespace: true,
                    },
                ]}
                >
                <Input />
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                <Button type='primary' htmlType="submit" >
                    Register
                </Button>
                </Form.Item>
            </Form>
        </div>
    </div>
    
  );
};
export default Register;
