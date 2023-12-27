import React from 'react';
import ContainerProduct from '../ProductSamsung/components/ContainerProduct';

import Bottom from '../../../components/Bottom';
import Header from '../../../components/Header/Header';

const ProductSamsung = () => {
    return (
        <div>
            <Header></Header>
            <ContainerProduct></ContainerProduct>
            <Bottom></Bottom>
        </div>
    );
};

export default ProductSamsung;