import React from "react";
import './index.css'
import {Reuse} from '../../Reuse'
import { useState } from "react";
import News_BDS_1 from "../News_BDS_1";
function News_BDS_2(){
    const News_1 = [{ link_bds: 'https://batdongsan.com.vn/', name: 'Xếp hàng chờ môi giới thoát hộ suất đầu tư nhà đất tỉnh', imgUrl: '/img/tin1.png' }]
    const News_2 = [{ link_bds: '', name: 'chủ đầy tư BĐS bung hàng trở lại, giao dịch nhà đất có sớm "rã băng"?', imgUrl: '/img/tin2.jpg' }]
    const News_3 = [{ link_bds: '', name: 'nhiều dự án BĐS vùng ven thắng khi ưu tiên "đánh bắt sân nhà', imgUrl: '/img/tin3.jpg' }]
    const News_4 = [{ link_bds: '', name: 'chật vật thoát hàng vì lỡ mua căn hộ bình dương thời "đỉnh giá"', imgUrl: '/img/tt_4.webp' }]
    const News_5 = [{ link_bds: '', name: 'tìm hiêu đường giới đỏ vành đai 4 qua các quận huyện của hà nội', imgUrl: '/img/tt_5.jpg' }]
    const News_6 = [{ link_bds: '', name: 'sau xây dựng trọn gói , viettel construction tham gia vào thị trường nội thất', imgUrl: '/img/tt_6.png' }]

    const [hoveredElement, setHoveredElement] = useState(true);
    const [hoveredElement1, setHoveredElement1] = useState(null);
    const [hoveredElement2, setHoveredElement2] = useState(null);
    const [hoveredElement3, setHoveredElement3] = useState(null);
    const [hoveredElement4, setHoveredElement4] = useState(null);
    const [hoveredElement5, setHoveredElement5] = useState(null);

    const handleMouseEnter = () => {
        setHoveredElement1(null);
        setHoveredElement2(null)
        setHoveredElement3(null)
        setHoveredElement4(null)
        setHoveredElement5(null)
        setHoveredElement(true);
    };
    const handleMouseEnter1 = () => {
        setHoveredElement(null)
        setHoveredElement1(true);
        setHoveredElement2(null)
        setHoveredElement3(null)
        setHoveredElement4(null)
        setHoveredElement5(null)
    };
    const handleMouseEnter2 = () => {
        setHoveredElement(null)
        setHoveredElement1(null);
        setHoveredElement3(null)
        setHoveredElement4(null)
        setHoveredElement5(null)
        setHoveredElement2(true);
    }; 
    
    const handleMouseEnter3 = () => {
        setHoveredElement2(null)
        setHoveredElement4(null)
        setHoveredElement5(null)
        setHoveredElement(null)
        setHoveredElement1(null);
        setHoveredElement3(true);
    }; const handleMouseEnter4 = () => {
        setHoveredElement4(true);
        setHoveredElement2(null)
        setHoveredElement5(null)
        setHoveredElement(null)
        setHoveredElement1(null);
        setHoveredElement3(null);
    }; const handleMouseEnter5 = () => {
        setHoveredElement2(null)
        setHoveredElement4(null)
        setHoveredElement5(true)
        setHoveredElement(null)
        setHoveredElement1(null);
        setHoveredElement3(null);
    };

    const handleMouseLeave = () => {
        setHoveredElement(null);
    }; const handleMouseLeave1 = () => {
        setHoveredElement1(null);
    }; const handleMouseLeave2 = () => {
        setHoveredElement2(null);
    }; const handleMouseLeave3 = () => {
        setHoveredElement3(null);
    }; const handleMouseLeave4 = () => {
        setHoveredElement4(null);
    };
    const handleMouseLeave5 = () => {
        setHoveredElement5(null);
    };

    return(
        <div className="All_page_news">
            <div className="News_1">
                <div className="n123">

                    {hoveredElement && (
                        <div>
                            <News_BDS_1 News={News_1}></News_BDS_1>
                        </div>
                    )}
                    {hoveredElement1 && (
                        <div>
                            <News_BDS_1 News={News_2}></News_BDS_1>
                        </div>

                    )}

                    {hoveredElement2 && (
                        <div>
                            <News_BDS_1 News={News_3}></News_BDS_1>
                        </div>
                    )}
                    {hoveredElement3 && (
                        <div>
                            <News_BDS_1 News={News_4}></News_BDS_1>
                        </div>
                    )}
                    {hoveredElement4 && (
                        <div>
                            <News_BDS_1 News={News_5}></News_BDS_1>
                        </div>
                    )}
                    {hoveredElement5 && (
                        <div>
                            <News_BDS_1 News={News_6}></News_BDS_1>
                        </div>
                    )}





                </div>

                <div className="n456">
                    <div className = 'News_Right'onMouseEnter={() => handleMouseEnter()}><p className = 'News_Right'>chủ đầu tư bất động sản bắt đầu bung hàng trở lại</p></div>
                    <div className = 'News_Right'  onMouseEnter={() => handleMouseEnter1()} ><p className = 'News_Right'>chủ đầy tư BĐS bung hàng trở lại, giao dịch nhà đất có sớm "rã băng"?'</p></div>
                    <div  className = 'News_Right' onMouseEnter={() => handleMouseEnter2()} ><p className = 'News_Right'>nhiều dự án BĐS vùng ven thắng khi uuw tiên "đánh bắt sân nhà</p></div>
                    <div  className = 'News_Right'onMouseEnter={() => handleMouseEnter3()} ><p className = 'News_Right'>cách tính chi phí xây dựng biệt thự 2 tầng năm 2023</p></div>
                    <div className = 'News_Right'onMouseEnter={() => handleMouseEnter4()} ><p className = 'News_Right'>Nghị định 35 đang làm ấm thị trường đất nền nam định</p></div>
                    <div className = 'News_Right'onMouseEnter={() => handleMouseEnter5()} ><p className = 'News_Right'>Tìm hiểu chỉ giới đường đỏ vành đai 3 qua các quận , huyện của hà nội</p></div>
                </div>
            </div>
        </div>
    )

    
}

export default News_BDS_2;