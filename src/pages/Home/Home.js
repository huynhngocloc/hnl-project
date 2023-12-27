import React from 'react';
import Header from '../../components/Header/Header';

import {
    Routes,
    Route,
  } from "react-router-dom";
import CateFeature from './Cate-Feature';
import ProductNews from './ProductNews';
import ProductCategorys from './ProductCategorys';
import SimpleSlider from './Slider';
import Bottom from '../../components/Bottom';

const Home = () => {
    return (
        <>
            <div className='px-10'>
                <Header></Header>
            </div>
                <SimpleSlider/>
            <div className='px-10'>
            <CateFeature></CateFeature>
                <ProductNews></ProductNews>
                <ProductCategorys></ProductCategorys>
                <Bottom></Bottom>
            </div>
        </>
    );
};

export default Home;