import { createSelector } from "@reduxjs/toolkit"

const selectShoppingCartCount = createSelector(
    state => state.cart.products,
    products => products.reduce((acc, product) => acc + product.quantity, 0)
)



const selectShoppingCartProducts = createSelector(
  state => state.cart.products,
  state => state.products.data,
  (cartProducts, products) => 
    cartProducts.map(cartProducts => ({
      ...products.find(product => product.id === cartProducts.productId),
      quantity: cartProducts.quantity
  }))
)
const selectShoppingCartTotal = createSelector(
  [selectShoppingCartProducts],
  products => products.reduce((acc, product) => acc + (product.price * product.quantity), 0)
)

export {  

    selectShoppingCartCount,
    selectShoppingCartProducts,
    selectShoppingCartTotal
}