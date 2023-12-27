import React from 'react';
import iphone from './images/iphone.png'
import oppo from './images/oppo.png'
import sanmsung from './images/samsung.png'
import { Link} from 'react-router-dom';

const CateFeature = () => {
    return (
        <div className='mb-5'>
            <div className='flex flex-row justify-center items-center gap-20 my-10 py-8'>
                <div className="cate-feature-item basis-52 h-[130px] w-[200px] ">
                        <img 
                            className='h-full object-scale-down w-full bg-white hover:scale-110 transition duration-150 ease-in-out' 
                            src={iphone} 
                            alt="" />
                            <Link to="/productiphones" >
                                <span 
                                    className='block font-medium text-center py-4 uppercase cursor-pointer hover:text-red-600 hover:font-semibold transition-all'>
                                    Iphone
                                </span>
                            </Link>
                </div>
                <div className="cate-feature-item basis-52 h-[130px] w-[200px]">
                        <img className='h-full object-scale-down w-full  bg-white hover:scale-110 transition duration-150 ease-in-out ' 
                        src={oppo} 
                        alt="" />
                        <Link to="/productoppos" >
                            <span 
                                className='block font-medium  text-center py-4 uppercase cursor-pointer hover:text-red-600 hover:font-semibold transition-all'>
                                Oppo
                            </span>
                        </Link>
                </div>
                <div className="cate-feature-item basis-52 h-[130px] w-[200px]">
                        <img className='h-full w-full  object-scale-down  bg-white hover:scale-110 transition duration-150 ease-in-out ' 
                        src={sanmsung} 
                        alt="" />
                        <Link to="/productsamsungs" >
                            <span 
                                className='block  font-medium  text-center py-4 uppercase cursor-pointer hover:text-red-600 hover:font-semibold transition-all'>
                                Samsung
                            </span>
                        </Link>
                </div>
            </div>
            
        </div>
        
    );
};

export default CateFeature;