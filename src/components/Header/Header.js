import React from 'react';
import MenuNav from './componets/MenuNav';
import ShoppingCartHeader from './componets/ShoppingCartHeader';
import SearchHeader from './componets/SearchHeader';
import Account from './componets/Account';

const Header = () => {

    return (
      <>
        <div className='mb-8 flex justify-center ' >
            <div className='px-8 flex w-[100%] justify-between py-2 fixed bg-gradient-to-r from-violet-500 to-fuchsia-500 z-20 '>
              <div className=' flex z-20 w-[50%]'> 
                <MenuNav></MenuNav>
              </div>
              <div className=' flex gap-5 py-2 text-white'>
                <SearchHeader></SearchHeader>
                <ShoppingCartHeader></ShoppingCartHeader>
                <Account></Account>
              </div>
            </div>
        </div>

      </>
    );
};

export default Header;
