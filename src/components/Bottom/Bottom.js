import React from 'react';
import logo from '../Header/logo.png';

const Bottom = () => {
    return (
        <>
            <div className="flex justify-center px-10">
                <div className='px-10 py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-10'>
                        <div className="bottom-item">
                        <img 
                            src={logo} 
                            alt="logo" 
                            className='w-[200px] h-[110px] object-cover pb-3'
                        />
                        <h5 className='py-3  text-sm cursor-pointer hover:underline'>Địa Chỉ: 53 đường số 20 - hiệp bình chánh - TP.Thử Đức</h5>
                        <h5 className='py-3 text-sm cursor-pointer hover:underline'>Email:  huynhngocloc1505@gmail.com</h5>
                        <h5 className='py-3 text-sm cursor-pointer hover:underline'>Phone:  0965869213</h5>
                        </div>
                        <div className="bottom-item text-sm grid grid-rows-auto  gap-0 cursor-pointer">
                            <div className='hover:underline'>Tích điểm tặng quà</div>
                            <div className='hover:underline'>Lịch Sử Mua Hàng</div>
                            <div className='hover:underline'>Tìm Hiều Về Mua Trả Góp</div>
                            <div className='hover:underline'>Chính Sách Bảo Hành</div>
                            <div className='hover:underline'>Xem Thêm</div> 
                        </div>
                        <div className="bottom-item text-sm grid grid-rows-auto  gap-0 cursor-pointer">
                            <div className='hover:underline'>Giới Thiệu Về Công Ty</div>
                            <div className='hover:underline'>Tuyển Dụng</div>
                            <div className='hover:underline'>Tìm Hiều Về Mua Trả Góp</div>
                            <div className='hover:underline'>Chính Sách Bảo Hành</div>
                            <div className='hover:underline'>Xem Thêm</div> 
                        </div>
                        <div className="bottom-item text-sm  cursor-pointer">
                            <div className='font-bold pb-5'>Tổng đài hỗ trợ</div>
                            <div className='pb-5'>Khiếu nại:  <strong className='text-blue-600'>1800 1062 </strong> (8:00 - 21:30)</div>
                            <div>Bảo Hành:  <strong className='text-blue-600'>1900 232 464 </strong> (8:00 - 21:30)</div>
                        </div>
                </div> 
            </div>
            <div className="copyright text-xs my-2 mx-10 text-center">
                <p> Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở KH & ĐT TP.HCM cấp ngày 02/01/2007. GPMXH: 238/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 04/06/2020.
                    Địa chỉ: 128 Trần Quang Khải, P.Tân Định, Q.1, TP.Hồ Chí Minh. Địa chỉ liên hệ và gửi chứng từ: Lô T2-1.2, Đường D1, Đ. D1, P.Tân Phú, TP.Thủ Đức, TP.Hồ Chí Minh. Điện thoại: 028 38125960. Email: cskh@thegioididong.com. Chịu trách nhiệm nội dung: Huỳnh Văn Tốt. Email: Tot.huynhvan@thegioididong.com.</p>
            </div>
        </>
    );
};

export default Bottom;