import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
    Link,
    Routes,
    Route,
  } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import Category from './Category';
import User from './User';
import Product from './Product';



const { Header, Sider, Content } = Layout;
const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[

            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: (
                <Link to="user">User</Link>
              ),
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: (
                <Link to="product/list">Product</Link>
              )
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: "90vh",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            <Route path="/user" element={<User/>} />
            <Route path="/product/*" element={<Product/>} />
        </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Admin;