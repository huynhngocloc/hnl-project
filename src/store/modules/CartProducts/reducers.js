import { createReducer } from '@reduxjs/toolkit'
import * as actions from './actions'

const reducer = createReducer({
  products: [],
},(builder) => {
  builder.addCase(actions.addToCart.fulfilled,(state, action)=>{
    const cartIndex = state.products.findIndex((cartProduct) => cartProduct.productId === action.payload)

    if (cartIndex >= 0) {
      state.products[cartIndex].quantity += 1
    } else {
      state.products.push({
        productId: action.payload,
        quantity: 1,
      })
    }
  })
/*   .addCase(actions.deleteCartProduct, (state, action) => {
    const updatedProducts = state.products.filter(
      (product) => product.productId !== action.payload
    );
    state.products = updatedProducts;
  });
 */
})


export default reducer