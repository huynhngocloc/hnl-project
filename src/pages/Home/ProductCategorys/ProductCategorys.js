


import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Layout, Menu, theme } from 'antd';
import { Link, Route, Routes   } from 'react-router-dom';
import ProductIphone from './components/ProductIphone';
import ProductSamsung from './components/ProductSamsung';
import ProductOppo from './components/ProductOppo';
const { Header, Content } = Layout;


const ProductCategorys = () => {

  const location = useLocation();
  const [shouldLoadProducts, setShouldLoadProducts] = useState(false);


  useEffect(() => {
    // Kiểm tra nếu người dùng đang ở trang 'ProductIphone' và chưa chuyển đến trang khác từ trang này
    if (location.pathname === '/productiphone' && !shouldLoadProducts) {
      // Nếu đang ở trang 'ProductIphone', chuyển hướng người dùng đến '/productiphone' khi vào trang chủ
      window.location.href = '/productiphone';
    }
  }, [location.pathname, shouldLoadProducts]);


  const handleNavigate = (path) => {
    setShouldLoadProducts(true); // Thiết lập biến state khi chuyển đến trang khác
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
      <Layout className='my-6 py-10'>
        <Header className='shadow-xl'
          style={{
            background: colorBgContainer,
            width: "90%",
            display: 'block', 
            margin: '0 auto',
            padding: '10px',
          }}>
         <Menu 
          className='flex justify-center mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white'
          mode="horizontal"
          defaultSelectedKeys={[1]}
          items={[
            {
              key: '1',
              label: (
                <Link 
                className='text-lg uppercase font-medium'
                to="/productiphone" 
                onClick={() => handleNavigate('/productiphone')}>Iphone</Link>
              ),
            },
            {
              key: '2',
              label: (
                <Link 
                className='text-lg uppercase font-medium'
                to="/productsamsung" 
                onClick={() => handleNavigate('/productsamsung')}>Samsung</Link>
              ),
            },
            {
              key: '3',
              label: (
                <Link 
                  className='text-lg uppercase font-medium'
                  to="/productoppo" 
                  onClick={() => handleNavigate('/productoppo')}>Oppo</Link>

              ),
            },
          ]}
        />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            width: "90%",
            display: 'block', 
            margin: '40px auto',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}>
          <Routes>
            <Route path="/*" element={<ProductIphone/>} />
            <Route path="/productsamsung/*" element={<ProductSamsung/>} />
            <Route path="/productoppo/*" element={<ProductOppo/>} />
          </Routes>
         
        </Content>
      </Layout>
  );
};
export default ProductCategorys;