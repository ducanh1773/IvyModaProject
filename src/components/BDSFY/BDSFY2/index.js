import React from "react";
import './index.css'
import { useState } from "react";
import { BDSFY } from "../BDSFYRS";
import BDSFY_1 from '../BDSFY1'




function BDSFY_2() {
  
    const [hideOpenmore , sethideOpenmore] = useState(true)

    const [showComponent, setShowcomponet] = useState(null);

    const handleClick = () => {
        setShowcomponet(true);
        sethideOpenmore(false)
    };


    const FY1 = [{ ImgURL: 'https://file4.batdongsan.com.vn/crop/393x222/2023/08/09/20230809115513-b004_wm.jpg', name: 'Bán lô góc gần chợ Phú Chánh - Tân Uyên - Bình Dương', link: '', oscillate: '4 tỷ - 143m', position: 'Tân Uyên , Bình Dương', number: '4', date: 'Đăng hôm nay' }]
    const FY2 = [{ ImgURL: 'https://file4.batdongsan.com.vn/crop/393x222/2023/08/09/20230809115513-b004_wm.jpg', name: 'Cho thuê căn hộ 3 phòng ngủ Orchard Parkview , Phú Nhuận.DT:85m2;Gía thuê', link: '', oscillate: '68 tỷ - 354m', position: 'Long Biên -Hà Nội', date: 'Đăng hôm nay' }]
    const FY3 = [{ ImgURL: 'https://file4.batdongsan.com.vn/crop/393x222/2023/08/09/20230809115513-b004_wm.jpg', name: 'Chính chủ :Bán dơn lập Nguyệt Quế 16-09 , 354m2 , thô, liền sông , view check hồ điều hòa giá 68 tỷ', link: '', oscillate: 'Gía thỏa thuận - 100m', position: 'Củ Chi , Hồ Chí Minh', date: 'Đăng hôm nay' }]
    const FY4 = [{ ImgURL: 'https://file4.batdongsan.com.vn/crop/393x222/2023/08/09/20230809115513-b004_wm.jpg', name: 'Chính chủ bán siêu biệt thự 1100m2 , Vinhomes Riverside2 , sông to , đường chính , trung tâm hồ', link: '', oscillate: '19 tỷ - 230m', position: 'Long Biên - Hà Nội ', date: 'Đăng hôm nay' }]
    const FY5 = [{ ImgURL: 'https://file4.batdongsan.com.vn/crop/393x222/2023/08/09/20230809115513-b004_wm.jpg', name: '123', link: '', oscillate: '123', position: '123' }]
    const FY6 = [{ ImgURL: 'https://file4.batdongsan.com.vn/crop/393x222/2023/08/09/20230809115513-b004_wm.jpg', name: '123', link: '', oscillate: '123', position: '123' }]
    const FY7 = [{ ImgURL: 'https://file4.batdongsan.com.vn/crop/393x222/2023/08/09/20230809115513-b004_wm.jpg', name: '123', link: '', oscillate: '123', position: '123' }]
    const FY8 = [{ ImgURL: 'https://file4.batdongsan.com.vn/crop/393x222/2023/08/09/20230809115513-b004_wm.jpg', name: '123', link: '', oscillate: '123', position: '123' }]

    return (
        <div>
            <h1 className="SubjectBDSFY">Bất động sản dành cho bạn</h1>
            <div className="bdsfy_side1">
                <BDSFY_1 information={FY1}></BDSFY_1>
                <BDSFY_1 information={FY2}></BDSFY_1>
                <BDSFY_1 information={FY3}></BDSFY_1>
                <BDSFY_1 information={FY4}></BDSFY_1>
            </div>
            <div className="bdsfy_side1">
                <BDSFY_1 information={FY1}></BDSFY_1>
                <BDSFY_1 information={FY2}></BDSFY_1>
                <BDSFY_1 information={FY3}></BDSFY_1>
                <BDSFY_1 information={FY4}></BDSFY_1>
            </div>
            <div className="openMore">
                {hideOpenmore && (<button className="openMore_1" onClick={handleClick}>Mở rộng</button>)}
                {showComponent && (
                    <div className="AllOpenmoreBDFY">
                        <div className="bdsfy_side1">
                            <BDSFY_1 information={FY1}></BDSFY_1>
                            <BDSFY_1 information={FY2}></BDSFY_1>
                            <BDSFY_1 information={FY3}></BDSFY_1>
                            <BDSFY_1 information={FY4}></BDSFY_1>
                        </div>
                        <div className="bdsfy_side1">
                            <BDSFY_1 information={FY1}></BDSFY_1>
                            <BDSFY_1 information={FY2}></BDSFY_1>
                            <BDSFY_1 information={FY3}></BDSFY_1>
                            <BDSFY_1 information={FY4}></BDSFY_1>
                        </div>
                        <div className="openMore_3"><a href="https://batdongsan.com.vn/ban-can-ho-chung-cu-duong-song-hanh-phuong-an-phu-prj-estella-heights"><button className="openMore_2">Xem thêm</button></a></div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default BDSFY_2;