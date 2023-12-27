import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import { Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './styled.css'

const SearchHeader = () => {
  const [showInput, setShowInput] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState();

  useEffect(()=>{
    const handleResize = () =>{
      setIsLargeScreen(window.innerWidth > 840);
    }
    window.addEventListener('resize', handleResize);
  },[])


    return (
      <>
      {isLargeScreen ? (

        <Space>
            {showInput ? (
              <Input
                placeholder="Nhập từ khóa..."
                onPressEnter={(e) => {
                  console.log('Entered:', e.target.value);
                  setShowInput(false);
                }}
              />
            ) : (
              <SearchOutlined className='text-lg' onClick={() => setShowInput(true)} />
            )}
          </Space>
      ):(
        <div>
        <div className='search-header"'>
          <Space>
            {showInput ? (
              <Input
              className="search-input"
                placeholder="Nhập từ khóa..."
                onPressEnter={(e) => {
                  console.log('Entered:', e.target.value);
                  setShowInput(false);
                }}
              />
            ) : (
              <SearchOutlined className='text-lg' onClick={() => setShowInput(true)} />
            )}
          </Space>
        </div>
        </div>
      )}
       

       
      </>
    );
};

export default SearchHeader;