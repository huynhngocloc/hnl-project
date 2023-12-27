import React, { useEffect} from 'react';
import { Button, Tooltip  } from 'antd';
import {
    ShoppingCartOutlined,
    InfoCircleOutlined
  } from '@ant-design/icons';
 import { useDispatch, useSelector } from 'react-redux';

import { formatPrice} from '../../../../../utils/number';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../../../store/modules/CartProducts/actions';
import { ProductCategoryActions, ProductCategorySelectors } from '../../../../../store/modules/ProductCategory';
;

const ProductOppo = () => {

    const dispatch = useDispatch()


    const productCategory = useSelector(ProductCategorySelectors.selectselectproductcategory)

    const handleAddToCart = (productId) => {
        dispatch(addToCart(productId))
        console.log('ID sản phẩm:', productId);
    }


    useEffect(()=> {
        dispatch(ProductCategoryActions.getByCategory('oppo'))
    },[dispatch])
 


    return (
         <div>
            Điện Thoại Oppo
            <div className='flex justify-center items-center'>
                <div className='product-news grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 gap-20 my-8  cursor-pointer'>
                 {
                    productCategory.map((productcategory)=>( 
                        <div className='product-items   bg-white p-5 border rounded-lg shadow-md  hover:border-red-300 hover:shadow-2xl'>
                            <img 
                            src={productcategory.image} 
                            alt=""
                            className='w-full  object-cover'
                            />
                            <a href="#">
                                <h3 className='leading-6 py-2 text-sm hover:text-blue-500'>
                                    {productcategory.name} 
                                </h3>
                            </a>
                            
                            <strong class="price flex justify-between text-red-500 ">
                               {formatPrice(productcategory.price)}
                                <small className=''>-7%</small>
                            </strong>
                            <div className='flex justify-center'>
                                <Tooltip title="add card" placement="bottom">
                                    <Button  onClick={() => handleAddToCart(productcategory.id)} className='my-4 mx-3' icon={<ShoppingCartOutlined />} />
                                </Tooltip> 
                                <Tooltip title="details" placement="bottom">
                                    <Button className='my-4' icon={<InfoCircleOutlined />} />
                                </Tooltip> 
                            </div>
                        </div>
                    ))
                } ;
                </div>
                
            </div>
            <Link to="/productoppos">
                    <div className='flex justify-center'>
                        <button 
                        className='px-14 text-white font-medium rounded-md inline-block py-3 bg-indigo-500 shadow-lg shadow-indigo-500/50 hover:border-blue-400'>
                        Xem Thêm  {'-->>'}
                        </button>
                    </div>  
                </Link>
        </div>
    );
};

export default ProductOppo;