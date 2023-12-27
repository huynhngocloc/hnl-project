import { configureStore } from "@reduxjs/toolkit";
import { newProductReducer } from "./modules/news-product";
import { userReducer } from "./modules/User";
import { LatestproductReducer } from "./modules/LatestProduct";
import { cartProductReducers } from "./modules/CartProducts";
import { ProductCategoryReducer } from "./modules/ProductCategory";
import { ProductsReducer } from "./modules/Products";




const store = configureStore ({
    reducer: {
        newProduct: newProductReducer,
        latestProduct: LatestproductReducer,
        user: userReducer,
        cart: cartProductReducers,
        productcategory: ProductCategoryReducer,
        products: ProductsReducer
    }

})


export default store