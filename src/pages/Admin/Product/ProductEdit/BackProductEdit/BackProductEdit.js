import React from 'react';
import { useNavigate } from 'react-router-dom';
const BackProductEdit = () => {

    const navigate = useNavigate();

  const handleGoBack = (props) => {
    navigate(-1); // Quay trở lại trang trước đó
  };

    return (
        
        <div>
            <button 
            type="button" 
            onClick={handleGoBack}
            class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-4 py-2 border rounded-md text-white font-medium"> 

                OK
            </button>
        </div>
    );
};

export default BackProductEdit;