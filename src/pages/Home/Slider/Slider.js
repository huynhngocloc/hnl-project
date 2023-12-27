import React, { useEffect, useState } from 'react';
import Carausel from './components/Carousel/Carausel';
import ScrollSnap from './components/ScrollSnap';


const Slider = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <div className='mt-10'>
      {isLargeScreen ? (
        <div id='slider' className=' py-8 bg-gray-50 shadow-xl'>
          <Carausel></Carausel>
        </div>
      ):(
        <div id='scroll' className="pt-10 overflow-x-auto scroll-snap-x h-[220px] flex pt-5">
            <ScrollSnap></ScrollSnap>
        </div>
      )}
    </div>
  );
};

export default Slider;