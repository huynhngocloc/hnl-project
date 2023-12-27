import {createAsyncThunk } from '@reduxjs/toolkit'
import { deleteCart } from './services'



const addToCart = createAsyncThunk('cart/addToCart', async(id) => {
    return id
})

const updateCartProduct = createAsyncThunk('cart/updateCartProduct', async({id, action})=>{
    return{
        id, 
        type: action
    }
})

const deleteCartProduct = createAsyncThunk('cart/deleteCart', async(productId) => {
    return productId
})

export {
    addToCart,
    updateCartProduct,
    deleteCartProduct

}