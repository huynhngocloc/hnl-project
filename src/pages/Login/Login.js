import React, {useState, useEffect} from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import './styled.css'
import { checkLogin } from '../../store/modules/User/servicers';





const Login = ( ) => {

    const onFinish = async  (values) => {
        const {email, password} = values
        const reponse = await checkLogin(email, password)
        if(reponse)
        {
             alert(`dang nhap thanh cog`)
            window.location.href = '/' 
  
        }else{
            alert(`dang nhap that bai`)
        }
       
        console.log('Received values of form: ', values);
    };
    




  return (
    <div className="flex justify-start items-center h-screen bg-cover px-10" style={{ backgroundImage: `url('https://media.istockphoto.com/id/1182622517/vi/anh/b%C3%A1c-s%C4%A9-tr%E1%BB%B1c-tuy%E1%BA%BFn-giao-ti%E1%BA%BFp-y-t%E1%BA%BF-tr%E1%BB%B1c-tuy%E1%BA%BFn-v%E1%BB%9Bi-b%E1%BB%87nh-nh%C3%A2n-tr%C3%AAn-giao-di%E1%BB%87n-%E1%BA%A3o-t%C6%B0-v%E1%BA%A5n-tr%E1%BB%B1c-tuy%E1%BA%BFn.jpg?s=2048x2048&w=is&k=20&c=8MvUqqe3f2GLA4azT1pCS8IHIbskSEczCQH4z4FVxzY=')` }}>
        <div className="w-full max-w-md backdrop-blur-sm bg-white/30  shadow-lg shadow-fuchsia-200/50 rounded px-8 pt-8 pb-8 mb-4">
        <h2 className="text-center text-2xl ">Login Form</h2>
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            >
            <Form.Item
                name="email"
                rules={[
                {
                    required: true,
                    message: 'Please input your email!',
                },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your Password!',
                },
                ]}
            >
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button w-full mb-5">
                Log in
                </Button>
                Or <a href="">register now!</a>
            </Form.Item>
            </Form>
    </div>
    </div>
    
  );
};
export default Login;