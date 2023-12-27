import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import ContainerProduct from './components/ContainerProduct';
import Header from '../../../components/Header/Header';
import Bottom from '../../../components/Bottom';

const ProductIphone = () => {
  

  return (
    <div>
      <Header></Header>
      <ContainerProduct></ContainerProduct>
      <Bottom></Bottom>
    </div>
  );
};

export default ProductIphone;
