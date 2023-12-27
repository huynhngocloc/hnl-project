
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import FormProduct from './FormProduct';





const AddProduct = () => {



  const [open, setOpen] = useState(false);


  return (
    <>
      <button 
        type="button" 
        onClick={() => setOpen(true)}
        class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-4 py-2 my-5 border rounded-md text-white font-medium">
        Add Products
        </button>
      <Modal
        title="Product Add"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <FormProduct></FormProduct>
      </Modal>
    </>
  );
};
export default AddProduct;