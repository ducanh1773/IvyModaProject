import React from "react";
import Header_2 from "../Header_2";
import './index.css'
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";

function Header() {


    const NVB1 = [
        { name: 'Bán căn hộ chung cư', link: '/ban-can-ho-chung-cu' },
        { name: 'Bán nhà riêng', link: 'https://batdongsan.com.vn/ban-nha-rieng' },
        { name: 'Bán biệt thự , nhà liền kề', link: 'https://batdongsan.com.vn/ban-nha-biet-thu-lien-ke' },
        { name: 'Bán nhà mặt phố', link: 'https://batdongsan.com.vn/ban-nha-mat-pho' },
        { name: 'Bán shophouse , nhà phố thương mại', link: 'https://batdongsan.com.vn/ban-shophouse-nha-pho-thuong-mai' },
        { name: 'Bán đất nền dự án', link: 'https://batdongsan.com.vn/ban-dat-nen-du-an' },
        { name: 'Bán đất', link: 'https://batdongsan.com.vn/ban-dat' },
        { name: 'Bán trang trại , khu nghỉ dưỡng', link: 'https://aichat.coccoc.com/' },
        { name: 'Bán condotel', link: 'https://aichat.coccoc.com/' },
        { name: 'Bán kho , nhà xưởng', link: 'https://aichat.coccoc.com/' },
        { name: 'Bán loại bất động sản khác', link: 'https://aichat.coccoc.com/' },

    ]


    const NVB2 =
        [
            { name: 'Cho thuê căn hộ chung cư ', link: 'https://aichat.coccoc.com/' },
            { name: 'Cho thuê căn nhà riêng ', link: '' },
            { name: 'Cho thuê nhà biệt thự , liền kề', link: '' },
            { name: 'Cho thuê nhà mặt phố', link: '' },
            { name: 'Cho thuê shophouse , nhà phố thương mại', link: '' },
            { name: 'Cho thuê nhà trọ , phòng trọ', link: '' },
            { name: 'Cho thuê văn phòng', link: '' },
            { name: 'Cho thuê , sang nhượng cửa hàng , ki ốt', link: '' },
            { name: 'Cho thuê kho, nhà xưởng, đất', link: '' },
            { name: 'Cho thuê bất động sản khác', link: '' }
        ]

    const NVB3 = [
        { name: 'Căn hộ chung cư', link: '' },
        { name: 'Cao ốc văn phòng', link: '' },
        { name: 'Trung tâm thương mại', link: '' },
        { name: 'Khu đô thị mới', link: '' },
        { name: 'Khu phức hợp', link: '' },
        { name: 'Nhà ở xã hội ', link: '' },
        { name: 'Khu nghỉ dưỡng , Sinh thái', link: '' },
        { name: 'Khu công nghiệp', link: '' },
        { name: 'Biệt thự , liền kề', link: '' },
        { name: 'Shophouse', link: '' },
        { name: 'Nhà mặt phố', link: '' },
        { name: 'Dự án khác', link: '' },
    ]

    const NVB4 = [

    ]

    const NVB5 = [
        { name: 'Mua BĐS', link: '' },
        { name: 'Bán BĐS', link: '' },
        { name: 'Thuê BĐS', link: '' },
        { name: 'Tài chính BĐS', link: '' },
        { name: 'Quy hoạch-Pháp lý', link: '' },
        { name: 'Nội-Ngoại thất', link: '' },
        { name: 'Phong thủy', link: '' },
    ]

    const NVB6 = [
        { name: 'Biểu đồ giá', link: '' },
        { name: 'Video đánh giá', link: '' },
        { name: 'Báo cáo thị trường', link: '' },
        { name: 'Góc nhìn chuyên gia', link: '' },
        { name: 'Interkative Story', link: '' }

    ]

    const NVB7 = [
        { name: 'Nhà môi giới', link: '' },
        { name: 'Doanh nghiệp', link: '' },
    ]


    return (
        <div className="main_nvbar_2">
            <div className="main_nvbar">
                <div className="main_left" >
                    <Link  to="/" className="img_12" style={{cursor:'pointer'}} ><img src='https://batdongsan.com.vn/sellernet/static/media/header-logo-sisu.4b76e0ce.svg' className="logo_main"></img><br></br></Link>
                    <Link to='/nha_dat_ban' style={{textDecoration:'none'}}><Header_2 name='Nhà đất bán' NVB={NVB1} className='nv1'></Header_2></Link>
                    <Link to='/nha_dat_ban' style={{textDecoration:'none'}}><Header_2 name='Nhà đất cho thuê' NVB={NVB2} className='nv2'></Header_2></Link>
                    <Link to='/duan' style={{textDecoration:'none'}}><Header_2 name='Dự án' NVB={NVB3}></Header_2></Link>
                    <Link  to="/tintucbds" style={{textDecoration:'none'}}><Header_2 name='Tin tức' NVB={NVB4}></Header_2></Link>
                    <Link to="/wiki" className="li"><Header_2 name='Wiki BĐS' NVB={NVB5}></Header_2></Link>
                    <Link to="/phantichdanhgia" style={{textDecoration:'none'}}><Header_2 name='Phân tích đánh giá' NVB={NVB6}></Header_2></Link>
                    <Header_2 name='Danh bạ' NVB={NVB7} ></Header_2>
                </div>

                <div className="main_right">
                   <button className="button_icon" style={{cursor:'pointer'}}><i className="fa fa-heart-o icon_heart"></i></button>
                    <Link to='/dang-nhap-bds' className="main_dn"><button className="dn_dk">Đăng nhập</button></Link>
                    <Link to='/dang-ky-bds' className="main_dn"><button className="dn_dk">Đăng ký</button></Link>
                    <Link to='/dang-nhap-bds' className="main_dn"><button className="dn_dk_dt">Đăng tin</button></Link>
                </div>
                <br></br>
            </div>


        </div>






    )
}

export default Header;
