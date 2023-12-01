import React from "react";
import Outstanding1 from './Oustanding2'
import './index.css'

function Main_Oustanding() {
    const OS1 = [{ ImgURL: 'https://file4.batdongsan.com.vn/crop/393x222/2023/08/09/20230809115513-b004_wm.jpg', Status: 'Đang mở bán- 25/6/2023 : Mở bán', number: '5', link: 'https://batdongsan.com.vn/du-an-can-ho-chung-cu-thu-dau-mot-bd/the-maison-pj5449', location: 'Thủ Dầu Một - Bình Dương ', name: 'The Maison', acreage: '5.607,4 m' }]
    return (
        <div className="AllInformationInOutstanding">
            <div className="headerOutstanding">
                <div>
                    <h1 className="headerOutstanding1">Dự án bất động sản nổi bật</h1>
                </div>
                <div className="headerOutstanding3">
                    <a className="headerOutstanding2" href="">Xem thêm</a>
                    <box-icon name='right-arrow-alt' color='#ff0202' size='12px' ></box-icon>
                </div>
            </div>
            <div className="main_oustanding">
                <Outstanding1 Imgelement={OS1}></Outstanding1>
                <Outstanding1 Imgelement={OS1}></Outstanding1>
                <Outstanding1 Imgelement={OS1}></Outstanding1>
                <Outstanding1 Imgelement={OS1}></Outstanding1>
            </div>
        </div>
    )
}

export default Main_Oustanding;