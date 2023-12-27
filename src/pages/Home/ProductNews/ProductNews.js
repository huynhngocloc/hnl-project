import React ,{useEffect, useState} from 'react';
import { Button, Tooltip  } from 'antd';
import {
    ShoppingCartOutlined,
    InfoCircleOutlined
  } from '@ant-design/icons';
import { formatPrice } from '../../../utils/number';
import getApiUrl from '../../../helpers/getApiUrl';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsActions, ProductsSelectors } from '../../../store/modules/Products';
import { addToCart } from '../../../store/modules/CartProducts/actions';

const ProductNews = () => {


    const dispatch = useDispatch()
    const productnew = useSelector(ProductsSelectors.selectProductData)
    const handleAddToCart = (productId) => {
        dispatch(addToCart(productId))
        console.log('ID sản phẩm:', productId);
    }


    useEffect(()=>{
        dispatch(ProductsActions.get())
    },[dispatch])


    return (

        <div className='py-8 mt-2 px-12 block w-[90%] rounded-lg  shadow-2xl shadow-indigo-500/50 mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>
            <h1 className='flex justify-center text-3xl py-8 border-b-2 shadow-sm uppercase'>Sản Phẩm Mới </h1>
            <div className='product-news grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 gap-10 my-8  cursor-pointer'>
            {
                productnew.slice(0, 4).map((productnew) => (
                    <div key={productnew.id} className='product-items   bg-white   p-5 border rounded-lg shadow-md  hover:border-red-300 hover:shadow-2xl'>
                    <img 
                    src={productnew.image}
                    alt=""
                    className='w-full  object-cover'
                     />
                     <a href="#">
                        <h3 className='leading-6 py-2 text-sm hover:text-blue-500'>
                            {productnew.name}
                        </h3>
                     </a>
                     
                     <strong class="price flex justify-between text-red-500 ">
                        {formatPrice(productnew.price)}
                        <small className=''>-7%</small>
                    </strong>
                    <div className='flex justify-center'>
                        <Tooltip title="add card" placement="bottom">
                            <Button onClick={() => handleAddToCart(productnew.id)} className='my-4 mx-3' icon={<ShoppingCartOutlined />} />
                        </Tooltip> 
                        <Tooltip title="details" placement="bottom">
                            <Button className='my-4' icon={<InfoCircleOutlined />} />
                        </Tooltip> 
                    </div>
                </div>
                ))
            }
            </div>
        </div>
    );
};

export default ProductNews;
