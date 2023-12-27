import React from 'react';
import AddProduct from './ProductList/AddProduct';
import ProductList from './ProductList';
import ProductEdit from './ProductEdit';
import {
  Routes,
  Route,
} from "react-router-dom";



// id, name, price, category, status, createdAt, image, 

const Product = () => (
    <>
    <Routes>
      <Route path="list" element={<ProductList />} />
      <Route path="add" element={<AddProduct/>} />
      <Route path="edit/:id" element={<ProductEdit />} />
    </Routes> 
   
        
  </>
);
export default Product;