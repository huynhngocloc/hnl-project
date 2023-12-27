

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectShoppingCartProducts, selectShoppingCartTotal } from '../../../store/modules/CartProducts/selectors';
import { formatPrice } from '../../../utils/number';
import './styled.css'
import { deleteCartProduct, updateCartProduct } from '../../../store/modules/CartProducts/actions';
import { Link } from "react-router-dom";

const ShoppingCart = () => {

  const dispatch = useDispatch()
  const total = useSelector(selectShoppingCartTotal)
  const data = useSelector(selectShoppingCartProducts)

  console.log('data', data)
  const handleUpdateProduct = (id, action) => {
    dispatch(updateCartProduct({
        id,
        action
  }))

}
    const handleDeleteProduct = (productId) =>{
      dispatch(deleteCartProduct(productId)) 

    }

  return (
    <div className='bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen pt-[30px] '>
      <div className='w-[80%] mx-auto'>
        <div className='flex justify-between px-5  pb-5' > 
        <Link to="/">
          <div>
            <button className=' hover:scale-125  transition duration-300 ease-in-out rounded-md px-5 py-2 text-white font-bold'>{'<-'} Back</button>
          </div>
        </Link>
          <div>
            <h1 className='text-3xl text-white'>Shopping - Cart</h1>
          </div>
        </div>
        <table class=" w-[100%] mx-auto bg-white shadow-2xl shadow-lg shadow-indigo-500/50 rounded-2xl  ...">
          <thead>
            <tr className='' >
              <th class=" py-8 ...">Name</th>
              <th class=" ...">Image</th>
              <th class="">Quantity</th>
              <th class=" ...">Price</th>
              <th class="..."></th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((product)=>(
                <tr key={product.id}>
                  <td class=" py-5 text-center ...">{product.name}</td>
                  <td class=" py-5 text-center ...">
                    <img className='mx-auto' src={product.image} width="80" alt="" />
                  </td>
                  <td class=" py-5 text-center ...">
                    <div className="flex items-center justify-center">
                      <button className="px-2 border" onClick={()=> handleUpdateProduct(product.id, 'decrement')}>-</button>
                        <span className="px-4">{product.quantity}</span>
                      <button className="px-2 border" onClick={()=> handleUpdateProduct(product.id, 'increment')}>+</button>
                    </div>
                  </td>
                  <td class=" py-5 text-center ...">{formatPrice(product.price)}</td>
                  <td class=" py-5 text-center ...">
                    <div className='flex justify-center items-center'>
                      <button 
                        onClick={() => handleDeleteProduct(product.id)}
                        className="bg-indigo-500 shadow-lg text-xs shadow-indigo-500/50 px-4 py-2 rounded text-white hover:scale-125  transition duration-300 ease-in-out...">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            }
            <tr>
              <td className='py-7'>
                <h2 className='text-2xl text-center'>Total: <span className='pl-4 text-red-500 text-xl font-bold'>{formatPrice(total)}</span></h2>
              </td>
              <td></td>
              <td></td>
              <td>
              <div className='flex justify-center items-center'>
                <button 
                  class="bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg text-xs shadow-pink-400-500/50 w-[100%] py-4 rounded text-white hover:scale-125  transition duration-300 ease-in-out...">
                  pay
                </button>
              </div>

              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>

  );
};

export default ShoppingCart;