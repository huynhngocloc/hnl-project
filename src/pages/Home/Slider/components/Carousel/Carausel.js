import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styled.css'



export default class Carausel extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Tự động chuyển slide
        autoplaySpeed: 1500, // Tốc độ chuyển slide khi tự động
        cssEase: 'linear', // Kiểu chuyển đổi CSS
        prevArrow: <button className="slick-arrow"></button>, // Nút Previous
        nextArrow: <button className="slick-arrow"></button>, // Nút Next
      };
      return (
        <>
         
              <Slider {...settings}>
              <div className='w-[100%] h-[500px]'>
                  <img 
                  className='w-full h-full object-cover bg-cover bg-center' 
                  src="https://seve7.vn/wp-content/themes/yootheme/cache/1-1-4-scaled-ae546fe9.jpeg" 
                  alt="Slide 1" />
              </div>
              <div className='w-[100%] h-[500px]'>
                  <img 
                  className='w-full h-full object-cover' 
                  src="https://png.pngtree.com/background/20230527/original/pngtree-3d-icons-and-colored-shapes-surrounding-a-iphone-phone-picture-image_2762681.jpg" 
                  alt="Slide 1" />
              </div>
              <div className='w-[100%] h-[500px]'>
                  <img 
                  className='w-full h-full object-cover' 
                  src="https://appngon.com/wp-content/uploads/2021/04/Hinh-nen-iPhone-12-mau-tim-moi.jpg" 
                  alt="Slide 1" />
              </div>
            
            </Slider>

        </>

      );
    }
  }