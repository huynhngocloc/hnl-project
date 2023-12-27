import React, { useEffect, useState } from 'react';
import { Button, Tooltip } from 'antd';
import { Pagination} from 'antd';
import axios from 'axios';
import { InfoCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import './styled.css'
import getApiUrl from '../../../../../helpers/getApiUrl';
import { formatPrice } from '../../../../../utils/number';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../../store/modules/CartProducts/actions';

const ContainerProduct = () => {
    const dispatch = useDispatch()
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; // Số sản phẩm trên mỗi trang
    const API_URL = getApiUrl('products')
    const categorypro = "samsung";

    const handleAddToCart = (productId) => {
        dispatch(addToCart(productId))
        console.log('ID sản phẩm:', productId);
    }

    useEffect(() => {
        // Gọi API để lấy dữ liệu sản phẩm
        const fetchData = async () => {
          try {
            const response = await axios.get(`${API_URL}?category=${categorypro}&page=${currentPage}&limit=${itemsPerPage}`);
            setProducts(response.data);
          } catch (error) {
            console.error('Error fetching products: ', error);
          }
        };
    
        fetchData();
      }, [currentPage, API_URL, categorypro, itemsPerPage]); 

    const handlePageChange = (page) => {
        setCurrentPage(page); // Thay đổi trang hiện tại khi người dùng chọn trang mới
      };
    return (
        <>
            <div className='w-[90%] my-[100px] pt-6 block mx-auto  rounded-lg shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-cyan-500/50  '>
                <h1 className='text-white  opacity-75 font-medium text-lg pl-[150px] uppercase'>Điện Thoại Iphone (Apple) - {products.length} sản phẩm</h1>
                <div className='py-8 px-12 flex justify-center '>
                    <div className='product-news grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10  cursor-pointer'>
                    {
                        products.map((productcategory)=>( 
                            <div className='product-items  bg-white p-5 border rounded-lg shadow-2xl shadow-black-500/50  hover:border-red-300 hover:shadow-2xl'>
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
                                        <Button onClick={() => handleAddToCart(productcategory.id)} className='my-4 mx-3' icon={<ShoppingCartOutlined />} />
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
            </div> 
            <div className='p-2 opacity-90 mb-[100px]'>
                <Pagination
                    className='flex gap-5 justify-center ant-pagination-item'
                    defaultCurrent={1} total={10}
                    current={currentPage}
                    pageSize={itemsPerPage}
                    onChange={handlePageChange}
                />
            </div>
        </>
    );
};

export default ContainerProduct;