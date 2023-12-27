import { Menu } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styled.css'


const items = [
    {
      label: (
        <Link className='text-base' to="/">Trang Chủ</Link>
        ),
        key: 'home',
    },

    {
      label: 'Sản Phẩm',
      children: [
        {
          type: 'group',

          children: [
            {
              label: (
                <Link to="/productiphones">Iphone</Link>
              ),
              key: 'iphone',
            },
            {
                label: (
                    <Link to="/productsamsungs">Samsung</Link>
                  ),
                  key: 'samsung',
            },
            {
                label: (
                    <Link to="/productoppos">Oppo</Link>
                  ),
                  key: 'oppo',
            },
          ],
        },
        
      ],
    },
    {
        label: 'Dịch Vụ',
        key: 'dich vu',
  
    },
    {
        label: 'Tin Tức',
        key: 'tin tuc',
  
    },
  ];

const MenuNav = () => {
 const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
    return (
        <>
            <Menu
              className='bg-inherit w-[100%] text-white'
                onClick={onClick} 
                selectedKeys={[current]} 
                mode="horizontal" 
                items={items}
            />
        </>
    ); 
};

export default MenuNav;