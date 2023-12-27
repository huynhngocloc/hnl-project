
import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import './styled.css'

const Account = ( ) => {



    return (

        <Breadcrumb
        
        items={[
          {
            title: <Link id='login' className='text-white text-base' to="/login">Login</Link>
          },
          {
            title:  <Link id='register' className='text-white text-base' to="/register">Register</Link>
          },
        ]}
      />
    );
};


export default Account;