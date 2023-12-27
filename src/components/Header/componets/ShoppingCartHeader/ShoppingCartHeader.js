 import React from 'react';
import { Badge } from 'antd';
import {
    ShoppingOutlined,
}from '@ant-design/icons';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectShoppingCartCount } from '../../../../store/modules/CartProducts/selectors';
import './styled.css'

const ShoppingCartHeader = () => {

    const count = useSelector(selectShoppingCartCount)
    return (
        <div>
            <Link to="/shoppingcart"  >
                <Badge count={count}>
                    <ShoppingOutlined  id='shoppingcart' className='text-2xl text-white opacity-80' />
                </Badge>
            </Link>
        </div>
    );
};

export default ShoppingCartHeader;
