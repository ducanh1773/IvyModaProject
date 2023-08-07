import React, { useState } from "react";
import './index.css'
import Header from "../Header/Main_header";
import NewsBDSOnMain from "../NewsBDS/NewsBDSMain/NewsBDSReuse";
import Introduce from '../Introduce_BDS'
import moment from 'moment'
import LastIntroduce from '../Last_Introduce_Main'
import { Link } from "react-router-dom";
function EvaluteProjectMain() {


    const [showElement, setShowElement] = useState(true)
    const [hideElement, setHideElement] = useState(false)
    const [showNews, setShowNews] = useState(false)
    const [hideButton, setHideButton] = useState(true)

    const handleClickButton = () => {
        setShowNews(true)
        setHideButton(false)
    }

    const handleClick = () => {
        setShowElement(!showElement)
        setHideElement(!hideElement);

    }

    const handleClickHideElememt = () => {
        setShowElement(!showElement)
        setHideElement(!hideElement);

    }


    const NewsMain1 = [{
        link: '', imgUrl: 'https://img.iproperty.com.my/angel/520x300-crop/wp-content/uploads/sites/7/2023/08/MicrosoftTeams-image-39.jpg',
        TimeNews: '04/08/2023 03:59 • Đông Phong', name: 'Thị Trường BĐS Quận 10: Sức Hút Từ Trung Tâm Kinh Tế Lâu Đời Của TP.HCM',
        describe: 'Thị trường BĐS quận 10 là một trong những thị trường được người mua nhà quan tâm nhất hiện nay. Quận 10 sở hữu mạng lưới giao thông thuận tiện, nhịp sống sôi động, nhiều địa điểm vui chơi giải trí hấp dẫn, hoạt',
        News1: "Đánh giá khu vực", News2: 'Thị trường BĐS TP.HCM'
    }]

    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div style={{ width: '100%', height: '60px', backgroundColor: '#2c2c2c' }}>
                <div className="HeaderOnWiki">
                    <a href="">Phân tích đánh giá</a>
                    <a href="">Biểu đồ giá</a>
                    <a href="">Video đánh giá</a>
                    <a href="">Báo cáo thị trường</a>
                    <a href="">Góc nhìn chuyên gia</a>
                    <a href="">Interaktive Story</a>
                </div>
            </div>
            <div style={{ paddingTop: '20px', paddingBottom: '20px', }}>
                {showElement &&
                    <div style={{ display: 'flex' }}>
                        <a href="" style={{ textDecoration: 'none', color: 'black', display: 'flex' }}>
                            <div style={{ paddingLeft: '200px', paddingRight: '20px' }}>
                                <Link to="/"><box-icon name='home' color='#c3c0c0' ></box-icon></Link>
                            </div>
                            <div>
                                <box-icon name='chevron-right' type='solid' color='#c3c0c0' ></box-icon>
                            </div>
                            <div>
                                <p style={{ margin: '0', color: '#c3c0c0', paddingLeft: '30px' }}>Wiki BĐS</p>
                            </div>
                        </a>
                        <div style={{ width: '1000px' }}>

                        </div>
                        <div style={{ display: 'flex', cursor: 'pointer' }} onClick={handleClick}>
                            <box-icon name='search-alt-2'  ></box-icon>
                            <p style={{ margin: '0', color: '#c3c0c0', paddingLeft: '30px' }}>Hướng dẫn tìm kiếm</p>
                        </div>

                    </div>}
                {hideElement && <div style={{ display: 'flex', alignItems: 'center', height: '28px' }}>
                    <div style={{ paddingLeft: '200px', display: 'flex', alignItems: 'center' }}>
                        <box-icon name='search-alt-2'  ></box-icon>
                        <input type="search" placeholder="Nhập từ khóa và nhấn Enter để tìm kiếm" className="SearchEngineFromNews"></input>
                    </div>
                    <div className="LineOnSearchEngineFromNews"></div>
                    <div style={{ cursor: 'pointer' }} onClick={handleClick}>
                        <p style={{ margin: '0', paddingLeft: '20px', color: '#c3c0c0' }}>Hủy bỏ</p>
                    </div>
                </div>}

            </div>
            <div style={{ width: '100%', height: '1px', backgroundColor: 'rgb(241 239 239)', }}>

            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <div className="SubjectNewsBDS">
                    <h1>
                        Phân tích đánh giá

                    </h1>
                    <p>
                      Thông tin đa dạng và chuyên sâu với những phân tích, đánh giá về thị trường BĐS dựa trên dữ liệu lớn , khảo sát thực tế và chia sẻ kiến thức của các chuyên gia
                    </p>
                </div>
            </div>
            <div style={{ paddingLeft: '300px', display: 'flex', paddingTop: '60px' }}>
                <div>
                    <div style={{ height: '200px', }}>
                        <a href="">
                            <img src="https://img.iproperty.com.my/angel/750x1000-fit/wp-content/uploads/sites/7/2023/08/view-HBN-nhin-ve-khu-kenh-dao.png" className="" style={{ filter: 'grayscale(60%)', width: '800px', height: ' 450px' }}></img>
                        </a>
                    </div>
                    <div style={{ height: '280px', color: 'white', paddingLeft: '20px' }}>
                        <a href="" style={{ color: 'white', textDecoration: 'none', zIndex: '5', position: 'absolute' }}>
                            <p>04/08/2023 08:00 Tin tức</p>
                            <h3>Honas Residence - Căn hộ 1.3 tỷ hâm nóng thị trường bất động sản</h3>
                            <p style={{ width: '600px', height: '100px', textOverflow: 'ellipsis', zIndex: '5' }}>Nhu cần ở thực luôn hiện hữu , những dự án có vị trí thuận lợi , chính sách bán hàng tốt , giá sát với nhu cầu của nhóm khách hàng trẻ mong muốn sở hữu tổ ấm riêng luôn có sức hút nhất định. Honas Residence - căn hộ có giá chỉ từ 1.3 tỷ có thể nối là một trong những dự án góp phần tăng nhiệt cho thị trường BĐS giữa lúc thị trường đang có dấu hiệu ấm dần.</p>
                        </a>
                    </div>
                </div>
                <div style={{ paddingLeft: '60px', width: '296px', height: '200px', display: 'grid', gridTemplateRows: 'auto auto auto' }}>
                    <div style={{ height: '48px', width: '296px', paddingBottom: '20px' }}>
                        <p style={{ textTransform: 'capitalize', marginBottom: '5px', fontSize: '12px' }}>04/08/2023 08:00 Tin tức</p>
                        <a href='' style={{ textDecoration: 'none', color: 'black' }}>  <h4 style={{ textTransform: 'capitalize', marginTop: '0' }} className="SubjectOnNewsMain">Nhà trọ Hà Nội Bắt đầu sôi nổi</h4></a>
                        <div style={{ width: '296px', height: '1px', backgroundColor: 'rgb(241, 239, 239)' }}>

                        </div>
                    </div>
                    <div style={{ height: '48px', width: '296px', paddingBottom: '50px' }}>
                        <p style={{ textTransform: 'capitalize', marginBottom: '5px', fontSize: '12px' }}>04/08/2023 08:00 Tin tức</p>
                        <a style={{ textDecoration: 'none', color: 'black' }} href=""> <h4 style={{ textTransform: 'capitalize', marginTop: '0' }} className="SubjectOnNewsMain">Định giá đất phù hợp để tăng nguồn cung dự án</h4></a>
                        <div style={{ width: '296px', height: '1px', backgroundColor: 'rgb(241, 239, 239)' }}>

                        </div>
                    </div>
                    <div style={{ height: '48px', width: '296px' }}>
                        <p style={{ textTransform: 'capitalize', fontSize: '12px' }}>04/08/2023 08:00 Tin tức</p>
                        <a style={{ textDecoration: 'none', color: 'black' }} href=""> <h4 style={{ textTransform: 'capitalize', marginTop: '0' }} className="SubjectOnNewsMain">Honas Residence - Căn hộ 1.3 tỷ hâm nóng thị trường bất động sản</h4></a>
                        <div style={{ width: '296px', height: '1px', backgroundColor: 'rgb(241, 239, 239)' }}>

                        </div>
                    </div>
                </div>

            </div>
            <div style={{ marginTop: '80px', paddingLeft: '300px' }}>
                <h1>Chuyên mục</h1>
                <div style={{ width: '1300px', height: '1px', backgroundColor: '#e5e5e5', marginBottom: '50px', marginTop: '50px' }}>

                </div>
                <div style={{ width: '100%', display: "grid", justifyContent: 'center' }}>
                    <div style={{ display: 'grid', width: '1500px', gridTemplateColumns: 'repeat(4,auto)' }}>

                        <div>
                            <a href=""><svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_2044_4999" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="120"><rect width="120" height="120" fill="#C4C4C4"></rect></mask><g mask="url(#mask0_2044_4999)"></g><path d="M111.33 59.7799C111.331 52.0854 109.61 44.4883 106.292 37.5457C102.975 30.6031 98.1455 24.4911 92.1584 19.6579C86.1713 14.8247 79.1783 11.3929 71.6923 9.61421C64.2062 7.8355 56.417 7.75498 48.8958 9.37857C41.3745 11.0021 34.3121 14.2887 28.2264 18.9971C22.1407 23.7055 17.1861 29.7163 13.7259 36.5889C10.2657 43.4614 8.38771 51.0213 8.22963 58.7142C8.07156 66.407 9.63741 74.0377 12.8124 81.0466H106.736C109.769 74.3671 111.335 67.1155 111.33 59.7799V59.7799Z" fill="#FFECEB"></path><path d="M9.50586 81.0464H110.039" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.70703 81.0464H6.92925" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M112.617 81.0464H115.839" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M43.4716 49.8621H30.8534C30.4619 49.8621 30.1445 50.1794 30.1445 50.5709V80.3636C30.1445 80.7551 30.4619 81.0725 30.8534 81.0725H43.4716C43.8632 81.0725 44.1805 80.7551 44.1805 80.3636V50.5709C44.1805 50.1794 43.8632 49.8621 43.4716 49.8621Z" fill="#FFECEB" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M101.95 54.5405H89.203C88.8471 54.5405 88.5586 54.8291 88.5586 55.185V80.4279C88.5586 80.7838 88.8471 81.0723 89.203 81.0723H101.95C102.306 81.0723 102.595 80.7838 102.595 80.4279V55.185C102.595 54.8291 102.306 54.5405 101.95 54.5405Z" fill="#FFECEB" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M91.3069 78.7461L84.6875 85.3655L92.4069 93.0849L99.0263 86.4655L91.3069 78.7461Z" fill="white" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M114.466 99.6984C115.618 100.872 116.26 102.453 116.252 104.097C116.244 105.742 115.587 107.317 114.424 108.479C113.262 109.642 111.687 110.299 110.042 110.306C108.398 110.314 106.817 109.672 105.643 108.52L92.4103 95.2891C92.2654 95.1443 92.1504 94.9725 92.072 94.7833C91.9935 94.5941 91.9531 94.3912 91.9531 94.1864C91.9531 93.9816 91.9935 93.7788 92.072 93.5896C92.1504 93.4004 92.2654 93.2285 92.4103 93.0838L99.0262 86.4666C99.3188 86.1745 99.7154 86.0105 100.129 86.0105C100.542 86.0105 100.939 86.1745 101.231 86.4666L114.466 99.6984Z" fill="#e03c31" stroke="#e03c31" stroke-width="2"></path><path d="M65.9421 92.7499C84.0298 92.7499 98.6927 78.0869 98.6927 59.9992C98.6927 41.9115 84.0298 27.2485 65.9421 27.2485C47.8544 27.2485 33.1914 41.9115 33.1914 59.9992C33.1914 78.0869 47.8544 92.7499 65.9421 92.7499Z" fill="white"></path><path d="M65.9421 92.7499C84.0298 92.7499 98.6927 78.0869 98.6927 59.9992C98.6927 41.9115 84.0298 27.2485 65.9421 27.2485C47.8544 27.2485 33.1914 41.9115 33.1914 59.9992C33.1914 78.0869 47.8544 92.7499 65.9421 92.7499Z" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M65.9417 85.7319C80.1534 85.7319 91.6743 74.211 91.6743 59.9993C91.6743 45.7875 80.1534 34.2666 65.9417 34.2666C51.7299 34.2666 40.209 45.7875 40.209 59.9993C40.209 74.211 51.7299 85.7319 65.9417 85.7319Z" fill="#FFC7C3"></path><path d="M65.9417 85.7319C80.1534 85.7319 91.6743 74.211 91.6743 59.9993C91.6743 45.7875 80.1534 34.2666 65.9417 34.2666C51.7299 34.2666 40.209 45.7875 40.209 59.9993C40.209 74.211 51.7299 85.7319 65.9417 85.7319Z" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M54.1053 42.0642C53.7293 42.0642 53.3686 42.2136 53.1028 42.4795C52.8369 42.7454 52.6875 43.106 52.6875 43.482V82.0198C56.1761 84.1326 60.1186 85.3822 64.1874 85.6649C68.2561 85.9476 72.3336 85.2551 76.0808 83.6451V43.482C76.0808 43.106 75.9315 42.7454 75.6656 42.4795C75.3997 42.2136 75.0391 42.0642 74.6631 42.0642H54.1053Z" fill="#FFECEB" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M52.6875 46.7429H63.6044" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M52.6875 51.4216H58.9257" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M77.6425 79.4933C77.6425 79.0797 77.8068 78.683 78.0993 78.3906C78.3917 78.0981 78.7884 77.9338 79.2021 77.9338H82.3212C82.581 77.9376 82.8355 78.0074 83.061 78.1366C83.2864 78.2658 83.4754 78.4501 83.61 78.6723C86.1651 76.2645 88.2007 73.3595 89.5918 70.136H68.2852V85.613C71.5496 85.3175 74.7266 84.3959 77.6425 82.8986V79.4933Z" fill="white" stroke="#e03c31" stroke-width="2"></path><path d="M90.8698 66.2887L82.1169 61.5198C81.7015 61.2942 81.2363 61.176 80.7636 61.176C80.2909 61.176 79.8256 61.2942 79.4102 61.5198L66.4453 68.5765V70.136H89.595C90.1214 68.8895 90.5476 67.603 90.8698 66.2887V66.2887Z" fill="#FFC7C3"></path><path d="M90.8698 66.2887L82.1169 61.5198C81.7015 61.2942 81.2363 61.176 80.7636 61.176C80.2909 61.176 79.8256 61.2942 79.4102 61.5198L66.4453 68.5765V70.136H89.595C90.1214 68.8895 90.5476 67.603 90.8698 66.2887V66.2887Z" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M82.3193 77.9338H79.2041C78.7905 77.9338 78.3938 78.0981 78.1013 78.3906C77.8088 78.6831 77.6445 79.0798 77.6445 79.4934V82.8986C79.8258 81.7809 81.8365 80.3578 83.616 78.6724C83.4806 78.4491 83.2904 78.264 83.0635 78.1348C82.8366 78.0055 82.5805 77.9364 82.3193 77.9338V77.9338Z" fill="#FFC7C3" stroke="#e03c31" stroke-linecap="round" stroke-linejoin="round"></path><path d="M46.3084 57.6599C45.9324 57.6599 45.5718 57.8093 45.3059 58.0752C45.04 58.3411 44.8906 58.7017 44.8906 59.0777V74.7686C47.0343 77.8287 49.8198 80.3844 53.0527 82.2574C56.2856 84.1304 59.8882 85.2757 63.6092 85.6133V59.0777C63.6092 58.7017 63.4598 58.3411 63.1939 58.0752C62.928 57.8093 62.5674 57.6599 62.1914 57.6599H46.3084Z" fill="white"></path><path d="M44.8906 62.3384H63.6053" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M44.8906 67.0171H63.6053" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M44.8906 71.6956H63.6053" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M49.5703 60.7791V62.3386" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M54.248 60.7791V62.3386" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M58.9258 60.7791V62.3386" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M49.5703 65.4575V67.0171" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M54.248 65.4575V67.0171" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M58.9258 65.4575V67.0171" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M49.5703 70.136V71.6955" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M54.248 70.136V71.6955" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M58.9258 70.136V71.6955" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M49.5703 74.8152V76.3747" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M54.248 74.8152V76.3747" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M58.9258 74.8152V76.3747" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M54.248 79.4937V81.0532" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M58.9258 79.4937V81.0532" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M58.9258 84.1721V84.7598" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M51.1777 81.0532C54.8489 83.6391 59.1366 85.2119 63.6091 85.6133V81.0532H51.1777Z" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M51.1784 81.0532H63.6097V76.3745H46.0938C47.5717 78.1545 49.2819 79.7281 51.1784 81.0532V81.0532Z" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M63.6098 76.3746V59.0777C63.6098 58.7017 63.4605 58.3411 63.1946 58.0752C62.9287 57.8093 62.5681 57.6599 62.192 57.6599H46.3104C45.9343 57.6599 45.5737 57.8093 45.3078 58.0752C45.0419 58.3411 44.8926 58.7017 44.8926 59.0777V74.7686C45.2792 75.3164 45.6659 75.859 46.0938 76.3746H63.6098Z" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M65.9442 111.465C75.4187 111.465 83.0993 110.417 83.0993 109.125C83.0993 107.833 75.4187 106.786 65.9442 106.786C56.4697 106.786 48.7891 107.833 48.7891 109.125C48.7891 110.417 56.4697 111.465 65.9442 111.465Z" fill="#e03c31"></path><path d="M30.712 81.0724H16.002V73.0065L23.3576 66.7554L30.712 73.0065V81.0724Z" fill="#FFECEB" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30.819 74.0491C30.4486 74.0503 30.09 73.9186 29.8085 73.6779L23.4633 68.2852L17.1194 73.6779C16.8028 73.9326 16.3993 74.0538 15.9948 74.0155C15.5903 73.9773 15.2167 73.7827 14.9534 73.4731C14.6902 73.1635 14.5582 72.7635 14.5856 72.3581C14.6129 71.9526 14.7973 71.5739 15.0997 71.3024L22.4541 65.05C22.7357 64.8097 23.0937 64.6777 23.4639 64.6777C23.8341 64.6777 24.1922 64.8097 24.4738 65.05L31.8282 71.3024C32.0709 71.5092 32.2444 71.7855 32.3252 72.0939C32.4061 72.4023 32.3905 72.7281 32.2806 73.0274C32.1706 73.3267 31.9715 73.5851 31.7102 73.7677C31.4489 73.9504 31.1378 74.0486 30.819 74.0491V74.0491Z" fill="#FFECEB" stroke="#e03c31" stroke-width="2" stroke-linejoin="round"></path><path d="M25.3592 81.0529H21.4629V77.5433C21.476 77.0349 21.6871 76.5518 22.0513 76.1969C22.4154 75.8419 22.9038 75.6433 23.4123 75.6433C23.9208 75.6433 24.4093 75.8419 24.7734 76.1969C25.1376 76.5518 25.3487 77.0349 25.3618 77.5433L25.3592 81.0529Z" fill="#FFECEB" stroke="#e03c31" stroke-width="2" stroke-linejoin="round"></path></svg></a>
                            <h3>Biểu đồ giá</h3>
                        </div>
                        <div>
                            <a href=""><svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_2044_4999" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="120"><rect width="120" height="120" fill="#C4C4C4"></rect></mask><g mask="url(#mask0_2044_4999)"></g><path d="M111.33 59.7799C111.331 52.0854 109.61 44.4883 106.292 37.5457C102.975 30.6031 98.1455 24.4911 92.1584 19.6579C86.1713 14.8247 79.1783 11.3929 71.6923 9.61421C64.2062 7.8355 56.417 7.75498 48.8958 9.37857C41.3745 11.0021 34.3121 14.2887 28.2264 18.9971C22.1407 23.7055 17.1861 29.7163 13.7259 36.5889C10.2657 43.4614 8.38771 51.0213 8.22963 58.7142C8.07156 66.407 9.63741 74.0377 12.8124 81.0466H106.736C109.769 74.3671 111.335 67.1155 111.33 59.7799V59.7799Z" fill="#FFECEB"></path><path d="M9.50586 81.0464H110.039" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.70703 81.0464H6.92925" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M112.617 81.0464H115.839" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M43.4716 49.8621H30.8534C30.4619 49.8621 30.1445 50.1794 30.1445 50.5709V80.3636C30.1445 80.7551 30.4619 81.0725 30.8534 81.0725H43.4716C43.8632 81.0725 44.1805 80.7551 44.1805 80.3636V50.5709C44.1805 50.1794 43.8632 49.8621 43.4716 49.8621Z" fill="#FFECEB" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M101.95 54.5405H89.203C88.8471 54.5405 88.5586 54.8291 88.5586 55.185V80.4279C88.5586 80.7838 88.8471 81.0723 89.203 81.0723H101.95C102.306 81.0723 102.595 80.7838 102.595 80.4279V55.185C102.595 54.8291 102.306 54.5405 101.95 54.5405Z" fill="#FFECEB" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M91.3069 78.7461L84.6875 85.3655L92.4069 93.0849L99.0263 86.4655L91.3069 78.7461Z" fill="white" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M114.466 99.6984C115.618 100.872 116.26 102.453 116.252 104.097C116.244 105.742 115.587 107.317 114.424 108.479C113.262 109.642 111.687 110.299 110.042 110.306C108.398 110.314 106.817 109.672 105.643 108.52L92.4103 95.2891C92.2654 95.1443 92.1504 94.9725 92.072 94.7833C91.9935 94.5941 91.9531 94.3912 91.9531 94.1864C91.9531 93.9816 91.9935 93.7788 92.072 93.5896C92.1504 93.4004 92.2654 93.2285 92.4103 93.0838L99.0262 86.4666C99.3188 86.1745 99.7154 86.0105 100.129 86.0105C100.542 86.0105 100.939 86.1745 101.231 86.4666L114.466 99.6984Z" fill="#e03c31" stroke="#e03c31" stroke-width="2"></path><path d="M65.9421 92.7499C84.0298 92.7499 98.6927 78.0869 98.6927 59.9992C98.6927 41.9115 84.0298 27.2485 65.9421 27.2485C47.8544 27.2485 33.1914 41.9115 33.1914 59.9992C33.1914 78.0869 47.8544 92.7499 65.9421 92.7499Z" fill="white"></path><path d="M65.9421 92.7499C84.0298 92.7499 98.6927 78.0869 98.6927 59.9992C98.6927 41.9115 84.0298 27.2485 65.9421 27.2485C47.8544 27.2485 33.1914 41.9115 33.1914 59.9992C33.1914 78.0869 47.8544 92.7499 65.9421 92.7499Z" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M65.9417 85.7319C80.1534 85.7319 91.6743 74.211 91.6743 59.9993C91.6743 45.7875 80.1534 34.2666 65.9417 34.2666C51.7299 34.2666 40.209 45.7875 40.209 59.9993C40.209 74.211 51.7299 85.7319 65.9417 85.7319Z" fill="#FFC7C3"></path><path d="M65.9417 85.7319C80.1534 85.7319 91.6743 74.211 91.6743 59.9993C91.6743 45.7875 80.1534 34.2666 65.9417 34.2666C51.7299 34.2666 40.209 45.7875 40.209 59.9993C40.209 74.211 51.7299 85.7319 65.9417 85.7319Z" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M54.1053 42.0642C53.7293 42.0642 53.3686 42.2136 53.1028 42.4795C52.8369 42.7454 52.6875 43.106 52.6875 43.482V82.0198C56.1761 84.1326 60.1186 85.3822 64.1874 85.6649C68.2561 85.9476 72.3336 85.2551 76.0808 83.6451V43.482C76.0808 43.106 75.9315 42.7454 75.6656 42.4795C75.3997 42.2136 75.0391 42.0642 74.6631 42.0642H54.1053Z" fill="#FFECEB" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M52.6875 46.7429H63.6044" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M52.6875 51.4216H58.9257" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M77.6425 79.4933C77.6425 79.0797 77.8068 78.683 78.0993 78.3906C78.3917 78.0981 78.7884 77.9338 79.2021 77.9338H82.3212C82.581 77.9376 82.8355 78.0074 83.061 78.1366C83.2864 78.2658 83.4754 78.4501 83.61 78.6723C86.1651 76.2645 88.2007 73.3595 89.5918 70.136H68.2852V85.613C71.5496 85.3175 74.7266 84.3959 77.6425 82.8986V79.4933Z" fill="white" stroke="#e03c31" stroke-width="2"></path><path d="M90.8698 66.2887L82.1169 61.5198C81.7015 61.2942 81.2363 61.176 80.7636 61.176C80.2909 61.176 79.8256 61.2942 79.4102 61.5198L66.4453 68.5765V70.136H89.595C90.1214 68.8895 90.5476 67.603 90.8698 66.2887V66.2887Z" fill="#FFC7C3"></path><path d="M90.8698 66.2887L82.1169 61.5198C81.7015 61.2942 81.2363 61.176 80.7636 61.176C80.2909 61.176 79.8256 61.2942 79.4102 61.5198L66.4453 68.5765V70.136H89.595C90.1214 68.8895 90.5476 67.603 90.8698 66.2887V66.2887Z" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M82.3193 77.9338H79.2041C78.7905 77.9338 78.3938 78.0981 78.1013 78.3906C77.8088 78.6831 77.6445 79.0798 77.6445 79.4934V82.8986C79.8258 81.7809 81.8365 80.3578 83.616 78.6724C83.4806 78.4491 83.2904 78.264 83.0635 78.1348C82.8366 78.0055 82.5805 77.9364 82.3193 77.9338V77.9338Z" fill="#FFC7C3" stroke="#e03c31" stroke-linecap="round" stroke-linejoin="round"></path><path d="M46.3084 57.6599C45.9324 57.6599 45.5718 57.8093 45.3059 58.0752C45.04 58.3411 44.8906 58.7017 44.8906 59.0777V74.7686C47.0343 77.8287 49.8198 80.3844 53.0527 82.2574C56.2856 84.1304 59.8882 85.2757 63.6092 85.6133V59.0777C63.6092 58.7017 63.4598 58.3411 63.1939 58.0752C62.928 57.8093 62.5674 57.6599 62.1914 57.6599H46.3084Z" fill="white"></path><path d="M44.8906 62.3384H63.6053" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M44.8906 67.0171H63.6053" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M44.8906 71.6956H63.6053" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M49.5703 60.7791V62.3386" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M54.248 60.7791V62.3386" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M58.9258 60.7791V62.3386" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M49.5703 65.4575V67.0171" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M54.248 65.4575V67.0171" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M58.9258 65.4575V67.0171" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M49.5703 70.136V71.6955" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M54.248 70.136V71.6955" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M58.9258 70.136V71.6955" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M49.5703 74.8152V76.3747" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M54.248 74.8152V76.3747" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M58.9258 74.8152V76.3747" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M54.248 79.4937V81.0532" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M58.9258 79.4937V81.0532" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M58.9258 84.1721V84.7598" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M51.1777 81.0532C54.8489 83.6391 59.1366 85.2119 63.6091 85.6133V81.0532H51.1777Z" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M51.1784 81.0532H63.6097V76.3745H46.0938C47.5717 78.1545 49.2819 79.7281 51.1784 81.0532V81.0532Z" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M63.6098 76.3746V59.0777C63.6098 58.7017 63.4605 58.3411 63.1946 58.0752C62.9287 57.8093 62.5681 57.6599 62.192 57.6599H46.3104C45.9343 57.6599 45.5737 57.8093 45.3078 58.0752C45.0419 58.3411 44.8926 58.7017 44.8926 59.0777V74.7686C45.2792 75.3164 45.6659 75.859 46.0938 76.3746H63.6098Z" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M65.9442 111.465C75.4187 111.465 83.0993 110.417 83.0993 109.125C83.0993 107.833 75.4187 106.786 65.9442 106.786C56.4697 106.786 48.7891 107.833 48.7891 109.125C48.7891 110.417 56.4697 111.465 65.9442 111.465Z" fill="#e03c31"></path><path d="M30.712 81.0724H16.002V73.0065L23.3576 66.7554L30.712 73.0065V81.0724Z" fill="#FFECEB" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30.819 74.0491C30.4486 74.0503 30.09 73.9186 29.8085 73.6779L23.4633 68.2852L17.1194 73.6779C16.8028 73.9326 16.3993 74.0538 15.9948 74.0155C15.5903 73.9773 15.2167 73.7827 14.9534 73.4731C14.6902 73.1635 14.5582 72.7635 14.5856 72.3581C14.6129 71.9526 14.7973 71.5739 15.0997 71.3024L22.4541 65.05C22.7357 64.8097 23.0937 64.6777 23.4639 64.6777C23.8341 64.6777 24.1922 64.8097 24.4738 65.05L31.8282 71.3024C32.0709 71.5092 32.2444 71.7855 32.3252 72.0939C32.4061 72.4023 32.3905 72.7281 32.2806 73.0274C32.1706 73.3267 31.9715 73.5851 31.7102 73.7677C31.4489 73.9504 31.1378 74.0486 30.819 74.0491V74.0491Z" fill="#FFECEB" stroke="#e03c31" stroke-width="2" stroke-linejoin="round"></path><path d="M25.3592 81.0529H21.4629V77.5433C21.476 77.0349 21.6871 76.5518 22.0513 76.1969C22.4154 75.8419 22.9038 75.6433 23.4123 75.6433C23.9208 75.6433 24.4093 75.8419 24.7734 76.1969C25.1376 76.5518 25.3487 77.0349 25.3618 77.5433L25.3592 81.0529Z" fill="#FFECEB" stroke="#e03c31" stroke-width="2" stroke-linejoin="round"></path></svg></a>
                            <h3>Video đánh giá</h3>
                        </div>
                        <div>
                            <a href=""><svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_2044_4999" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="120"><rect width="120" height="120" fill="#C4C4C4"></rect></mask><g mask="url(#mask0_2044_4999)"></g><path d="M111.33 59.7799C111.331 52.0854 109.61 44.4883 106.292 37.5457C102.975 30.6031 98.1455 24.4911 92.1584 19.6579C86.1713 14.8247 79.1783 11.3929 71.6923 9.61421C64.2062 7.8355 56.417 7.75498 48.8958 9.37857C41.3745 11.0021 34.3121 14.2887 28.2264 18.9971C22.1407 23.7055 17.1861 29.7163 13.7259 36.5889C10.2657 43.4614 8.38771 51.0213 8.22963 58.7142C8.07156 66.407 9.63741 74.0377 12.8124 81.0466H106.736C109.769 74.3671 111.335 67.1155 111.33 59.7799V59.7799Z" fill="#FFECEB"></path><path d="M9.50586 81.0464H110.039" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.70703 81.0464H6.92925" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M112.617 81.0464H115.839" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M43.4716 49.8621H30.8534C30.4619 49.8621 30.1445 50.1794 30.1445 50.5709V80.3636C30.1445 80.7551 30.4619 81.0725 30.8534 81.0725H43.4716C43.8632 81.0725 44.1805 80.7551 44.1805 80.3636V50.5709C44.1805 50.1794 43.8632 49.8621 43.4716 49.8621Z" fill="#FFECEB" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M101.95 54.5405H89.203C88.8471 54.5405 88.5586 54.8291 88.5586 55.185V80.4279C88.5586 80.7838 88.8471 81.0723 89.203 81.0723H101.95C102.306 81.0723 102.595 80.7838 102.595 80.4279V55.185C102.595 54.8291 102.306 54.5405 101.95 54.5405Z" fill="#FFECEB" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M91.3069 78.7461L84.6875 85.3655L92.4069 93.0849L99.0263 86.4655L91.3069 78.7461Z" fill="white" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M114.466 99.6984C115.618 100.872 116.26 102.453 116.252 104.097C116.244 105.742 115.587 107.317 114.424 108.479C113.262 109.642 111.687 110.299 110.042 110.306C108.398 110.314 106.817 109.672 105.643 108.52L92.4103 95.2891C92.2654 95.1443 92.1504 94.9725 92.072 94.7833C91.9935 94.5941 91.9531 94.3912 91.9531 94.1864C91.9531 93.9816 91.9935 93.7788 92.072 93.5896C92.1504 93.4004 92.2654 93.2285 92.4103 93.0838L99.0262 86.4666C99.3188 86.1745 99.7154 86.0105 100.129 86.0105C100.542 86.0105 100.939 86.1745 101.231 86.4666L114.466 99.6984Z" fill="#e03c31" stroke="#e03c31" stroke-width="2"></path><path d="M65.9421 92.7499C84.0298 92.7499 98.6927 78.0869 98.6927 59.9992C98.6927 41.9115 84.0298 27.2485 65.9421 27.2485C47.8544 27.2485 33.1914 41.9115 33.1914 59.9992C33.1914 78.0869 47.8544 92.7499 65.9421 92.7499Z" fill="white"></path><path d="M65.9421 92.7499C84.0298 92.7499 98.6927 78.0869 98.6927 59.9992C98.6927 41.9115 84.0298 27.2485 65.9421 27.2485C47.8544 27.2485 33.1914 41.9115 33.1914 59.9992C33.1914 78.0869 47.8544 92.7499 65.9421 92.7499Z" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M65.9417 85.7319C80.1534 85.7319 91.6743 74.211 91.6743 59.9993C91.6743 45.7875 80.1534 34.2666 65.9417 34.2666C51.7299 34.2666 40.209 45.7875 40.209 59.9993C40.209 74.211 51.7299 85.7319 65.9417 85.7319Z" fill="#FFC7C3"></path><path d="M65.9417 85.7319C80.1534 85.7319 91.6743 74.211 91.6743 59.9993C91.6743 45.7875 80.1534 34.2666 65.9417 34.2666C51.7299 34.2666 40.209 45.7875 40.209 59.9993C40.209 74.211 51.7299 85.7319 65.9417 85.7319Z" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M54.1053 42.0642C53.7293 42.0642 53.3686 42.2136 53.1028 42.4795C52.8369 42.7454 52.6875 43.106 52.6875 43.482V82.0198C56.1761 84.1326 60.1186 85.3822 64.1874 85.6649C68.2561 85.9476 72.3336 85.2551 76.0808 83.6451V43.482C76.0808 43.106 75.9315 42.7454 75.6656 42.4795C75.3997 42.2136 75.0391 42.0642 74.6631 42.0642H54.1053Z" fill="#FFECEB" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M52.6875 46.7429H63.6044" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M52.6875 51.4216H58.9257" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M77.6425 79.4933C77.6425 79.0797 77.8068 78.683 78.0993 78.3906C78.3917 78.0981 78.7884 77.9338 79.2021 77.9338H82.3212C82.581 77.9376 82.8355 78.0074 83.061 78.1366C83.2864 78.2658 83.4754 78.4501 83.61 78.6723C86.1651 76.2645 88.2007 73.3595 89.5918 70.136H68.2852V85.613C71.5496 85.3175 74.7266 84.3959 77.6425 82.8986V79.4933Z" fill="white" stroke="#e03c31" stroke-width="2"></path><path d="M90.8698 66.2887L82.1169 61.5198C81.7015 61.2942 81.2363 61.176 80.7636 61.176C80.2909 61.176 79.8256 61.2942 79.4102 61.5198L66.4453 68.5765V70.136H89.595C90.1214 68.8895 90.5476 67.603 90.8698 66.2887V66.2887Z" fill="#FFC7C3"></path><path d="M90.8698 66.2887L82.1169 61.5198C81.7015 61.2942 81.2363 61.176 80.7636 61.176C80.2909 61.176 79.8256 61.2942 79.4102 61.5198L66.4453 68.5765V70.136H89.595C90.1214 68.8895 90.5476 67.603 90.8698 66.2887V66.2887Z" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M82.3193 77.9338H79.2041C78.7905 77.9338 78.3938 78.0981 78.1013 78.3906C77.8088 78.6831 77.6445 79.0798 77.6445 79.4934V82.8986C79.8258 81.7809 81.8365 80.3578 83.616 78.6724C83.4806 78.4491 83.2904 78.264 83.0635 78.1348C82.8366 78.0055 82.5805 77.9364 82.3193 77.9338V77.9338Z" fill="#FFC7C3" stroke="#e03c31" stroke-linecap="round" stroke-linejoin="round"></path><path d="M46.3084 57.6599C45.9324 57.6599 45.5718 57.8093 45.3059 58.0752C45.04 58.3411 44.8906 58.7017 44.8906 59.0777V74.7686C47.0343 77.8287 49.8198 80.3844 53.0527 82.2574C56.2856 84.1304 59.8882 85.2757 63.6092 85.6133V59.0777C63.6092 58.7017 63.4598 58.3411 63.1939 58.0752C62.928 57.8093 62.5674 57.6599 62.1914 57.6599H46.3084Z" fill="white"></path><path d="M44.8906 62.3384H63.6053" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M44.8906 67.0171H63.6053" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M44.8906 71.6956H63.6053" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M49.5703 60.7791V62.3386" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M54.248 60.7791V62.3386" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M58.9258 60.7791V62.3386" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M49.5703 65.4575V67.0171" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M54.248 65.4575V67.0171" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M58.9258 65.4575V67.0171" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M49.5703 70.136V71.6955" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M54.248 70.136V71.6955" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M58.9258 70.136V71.6955" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M49.5703 74.8152V76.3747" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M54.248 74.8152V76.3747" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M58.9258 74.8152V76.3747" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M54.248 79.4937V81.0532" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M58.9258 79.4937V81.0532" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M58.9258 84.1721V84.7598" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M51.1777 81.0532C54.8489 83.6391 59.1366 85.2119 63.6091 85.6133V81.0532H51.1777Z" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M51.1784 81.0532H63.6097V76.3745H46.0938C47.5717 78.1545 49.2819 79.7281 51.1784 81.0532V81.0532Z" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M63.6098 76.3746V59.0777C63.6098 58.7017 63.4605 58.3411 63.1946 58.0752C62.9287 57.8093 62.5681 57.6599 62.192 57.6599H46.3104C45.9343 57.6599 45.5737 57.8093 45.3078 58.0752C45.0419 58.3411 44.8926 58.7017 44.8926 59.0777V74.7686C45.2792 75.3164 45.6659 75.859 46.0938 76.3746H63.6098Z" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M65.9442 111.465C75.4187 111.465 83.0993 110.417 83.0993 109.125C83.0993 107.833 75.4187 106.786 65.9442 106.786C56.4697 106.786 48.7891 107.833 48.7891 109.125C48.7891 110.417 56.4697 111.465 65.9442 111.465Z" fill="#e03c31"></path><path d="M30.712 81.0724H16.002V73.0065L23.3576 66.7554L30.712 73.0065V81.0724Z" fill="#FFECEB" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30.819 74.0491C30.4486 74.0503 30.09 73.9186 29.8085 73.6779L23.4633 68.2852L17.1194 73.6779C16.8028 73.9326 16.3993 74.0538 15.9948 74.0155C15.5903 73.9773 15.2167 73.7827 14.9534 73.4731C14.6902 73.1635 14.5582 72.7635 14.5856 72.3581C14.6129 71.9526 14.7973 71.5739 15.0997 71.3024L22.4541 65.05C22.7357 64.8097 23.0937 64.6777 23.4639 64.6777C23.8341 64.6777 24.1922 64.8097 24.4738 65.05L31.8282 71.3024C32.0709 71.5092 32.2444 71.7855 32.3252 72.0939C32.4061 72.4023 32.3905 72.7281 32.2806 73.0274C32.1706 73.3267 31.9715 73.5851 31.7102 73.7677C31.4489 73.9504 31.1378 74.0486 30.819 74.0491V74.0491Z" fill="#FFECEB" stroke="#e03c31" stroke-width="2" stroke-linejoin="round"></path><path d="M25.3592 81.0529H21.4629V77.5433C21.476 77.0349 21.6871 76.5518 22.0513 76.1969C22.4154 75.8419 22.9038 75.6433 23.4123 75.6433C23.9208 75.6433 24.4093 75.8419 24.7734 76.1969C25.1376 76.5518 25.3487 77.0349 25.3618 77.5433L25.3592 81.0529Z" fill="#FFECEB" stroke="#e03c31" stroke-width="2" stroke-linejoin="round"></path></svg></a>
                            <h3>Báo cáo thị trường</h3>
                        </div>
                        <div>
                            <a href=""><svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_2044_4999" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="120"><rect width="120" height="120" fill="#C4C4C4"></rect></mask><g mask="url(#mask0_2044_4999)"></g><path d="M111.33 59.7799C111.331 52.0854 109.61 44.4883 106.292 37.5457C102.975 30.6031 98.1455 24.4911 92.1584 19.6579C86.1713 14.8247 79.1783 11.3929 71.6923 9.61421C64.2062 7.8355 56.417 7.75498 48.8958 9.37857C41.3745 11.0021 34.3121 14.2887 28.2264 18.9971C22.1407 23.7055 17.1861 29.7163 13.7259 36.5889C10.2657 43.4614 8.38771 51.0213 8.22963 58.7142C8.07156 66.407 9.63741 74.0377 12.8124 81.0466H106.736C109.769 74.3671 111.335 67.1155 111.33 59.7799V59.7799Z" fill="#FFECEB"></path><path d="M9.50586 81.0464H110.039" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.70703 81.0464H6.92925" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M112.617 81.0464H115.839" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M43.4716 49.8621H30.8534C30.4619 49.8621 30.1445 50.1794 30.1445 50.5709V80.3636C30.1445 80.7551 30.4619 81.0725 30.8534 81.0725H43.4716C43.8632 81.0725 44.1805 80.7551 44.1805 80.3636V50.5709C44.1805 50.1794 43.8632 49.8621 43.4716 49.8621Z" fill="#FFECEB" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M101.95 54.5405H89.203C88.8471 54.5405 88.5586 54.8291 88.5586 55.185V80.4279C88.5586 80.7838 88.8471 81.0723 89.203 81.0723H101.95C102.306 81.0723 102.595 80.7838 102.595 80.4279V55.185C102.595 54.8291 102.306 54.5405 101.95 54.5405Z" fill="#FFECEB" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M91.3069 78.7461L84.6875 85.3655L92.4069 93.0849L99.0263 86.4655L91.3069 78.7461Z" fill="white" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M114.466 99.6984C115.618 100.872 116.26 102.453 116.252 104.097C116.244 105.742 115.587 107.317 114.424 108.479C113.262 109.642 111.687 110.299 110.042 110.306C108.398 110.314 106.817 109.672 105.643 108.52L92.4103 95.2891C92.2654 95.1443 92.1504 94.9725 92.072 94.7833C91.9935 94.5941 91.9531 94.3912 91.9531 94.1864C91.9531 93.9816 91.9935 93.7788 92.072 93.5896C92.1504 93.4004 92.2654 93.2285 92.4103 93.0838L99.0262 86.4666C99.3188 86.1745 99.7154 86.0105 100.129 86.0105C100.542 86.0105 100.939 86.1745 101.231 86.4666L114.466 99.6984Z" fill="#e03c31" stroke="#e03c31" stroke-width="2"></path><path d="M65.9421 92.7499C84.0298 92.7499 98.6927 78.0869 98.6927 59.9992C98.6927 41.9115 84.0298 27.2485 65.9421 27.2485C47.8544 27.2485 33.1914 41.9115 33.1914 59.9992C33.1914 78.0869 47.8544 92.7499 65.9421 92.7499Z" fill="white"></path><path d="M65.9421 92.7499C84.0298 92.7499 98.6927 78.0869 98.6927 59.9992C98.6927 41.9115 84.0298 27.2485 65.9421 27.2485C47.8544 27.2485 33.1914 41.9115 33.1914 59.9992C33.1914 78.0869 47.8544 92.7499 65.9421 92.7499Z" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M65.9417 85.7319C80.1534 85.7319 91.6743 74.211 91.6743 59.9993C91.6743 45.7875 80.1534 34.2666 65.9417 34.2666C51.7299 34.2666 40.209 45.7875 40.209 59.9993C40.209 74.211 51.7299 85.7319 65.9417 85.7319Z" fill="#FFC7C3"></path><path d="M65.9417 85.7319C80.1534 85.7319 91.6743 74.211 91.6743 59.9993C91.6743 45.7875 80.1534 34.2666 65.9417 34.2666C51.7299 34.2666 40.209 45.7875 40.209 59.9993C40.209 74.211 51.7299 85.7319 65.9417 85.7319Z" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M54.1053 42.0642C53.7293 42.0642 53.3686 42.2136 53.1028 42.4795C52.8369 42.7454 52.6875 43.106 52.6875 43.482V82.0198C56.1761 84.1326 60.1186 85.3822 64.1874 85.6649C68.2561 85.9476 72.3336 85.2551 76.0808 83.6451V43.482C76.0808 43.106 75.9315 42.7454 75.6656 42.4795C75.3997 42.2136 75.0391 42.0642 74.6631 42.0642H54.1053Z" fill="#FFECEB" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M52.6875 46.7429H63.6044" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M52.6875 51.4216H58.9257" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M77.6425 79.4933C77.6425 79.0797 77.8068 78.683 78.0993 78.3906C78.3917 78.0981 78.7884 77.9338 79.2021 77.9338H82.3212C82.581 77.9376 82.8355 78.0074 83.061 78.1366C83.2864 78.2658 83.4754 78.4501 83.61 78.6723C86.1651 76.2645 88.2007 73.3595 89.5918 70.136H68.2852V85.613C71.5496 85.3175 74.7266 84.3959 77.6425 82.8986V79.4933Z" fill="white" stroke="#e03c31" stroke-width="2"></path><path d="M90.8698 66.2887L82.1169 61.5198C81.7015 61.2942 81.2363 61.176 80.7636 61.176C80.2909 61.176 79.8256 61.2942 79.4102 61.5198L66.4453 68.5765V70.136H89.595C90.1214 68.8895 90.5476 67.603 90.8698 66.2887V66.2887Z" fill="#FFC7C3"></path><path d="M90.8698 66.2887L82.1169 61.5198C81.7015 61.2942 81.2363 61.176 80.7636 61.176C80.2909 61.176 79.8256 61.2942 79.4102 61.5198L66.4453 68.5765V70.136H89.595C90.1214 68.8895 90.5476 67.603 90.8698 66.2887V66.2887Z" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M82.3193 77.9338H79.2041C78.7905 77.9338 78.3938 78.0981 78.1013 78.3906C77.8088 78.6831 77.6445 79.0798 77.6445 79.4934V82.8986C79.8258 81.7809 81.8365 80.3578 83.616 78.6724C83.4806 78.4491 83.2904 78.264 83.0635 78.1348C82.8366 78.0055 82.5805 77.9364 82.3193 77.9338V77.9338Z" fill="#FFC7C3" stroke="#e03c31" stroke-linecap="round" stroke-linejoin="round"></path><path d="M46.3084 57.6599C45.9324 57.6599 45.5718 57.8093 45.3059 58.0752C45.04 58.3411 44.8906 58.7017 44.8906 59.0777V74.7686C47.0343 77.8287 49.8198 80.3844 53.0527 82.2574C56.2856 84.1304 59.8882 85.2757 63.6092 85.6133V59.0777C63.6092 58.7017 63.4598 58.3411 63.1939 58.0752C62.928 57.8093 62.5674 57.6599 62.1914 57.6599H46.3084Z" fill="white"></path><path d="M44.8906 62.3384H63.6053" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M44.8906 67.0171H63.6053" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M44.8906 71.6956H63.6053" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M49.5703 60.7791V62.3386" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M54.248 60.7791V62.3386" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M58.9258 60.7791V62.3386" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M49.5703 65.4575V67.0171" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M54.248 65.4575V67.0171" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M58.9258 65.4575V67.0171" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M49.5703 70.136V71.6955" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M54.248 70.136V71.6955" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M58.9258 70.136V71.6955" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M49.5703 74.8152V76.3747" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M54.248 74.8152V76.3747" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M58.9258 74.8152V76.3747" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M54.248 79.4937V81.0532" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M58.9258 79.4937V81.0532" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M58.9258 84.1721V84.7598" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M51.1777 81.0532C54.8489 83.6391 59.1366 85.2119 63.6091 85.6133V81.0532H51.1777Z" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M51.1784 81.0532H63.6097V76.3745H46.0938C47.5717 78.1545 49.2819 79.7281 51.1784 81.0532V81.0532Z" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M63.6098 76.3746V59.0777C63.6098 58.7017 63.4605 58.3411 63.1946 58.0752C62.9287 57.8093 62.5681 57.6599 62.192 57.6599H46.3104C45.9343 57.6599 45.5737 57.8093 45.3078 58.0752C45.0419 58.3411 44.8926 58.7017 44.8926 59.0777V74.7686C45.2792 75.3164 45.6659 75.859 46.0938 76.3746H63.6098Z" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M65.9442 111.465C75.4187 111.465 83.0993 110.417 83.0993 109.125C83.0993 107.833 75.4187 106.786 65.9442 106.786C56.4697 106.786 48.7891 107.833 48.7891 109.125C48.7891 110.417 56.4697 111.465 65.9442 111.465Z" fill="#e03c31"></path><path d="M30.712 81.0724H16.002V73.0065L23.3576 66.7554L30.712 73.0065V81.0724Z" fill="#FFECEB" stroke="#e03c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30.819 74.0491C30.4486 74.0503 30.09 73.9186 29.8085 73.6779L23.4633 68.2852L17.1194 73.6779C16.8028 73.9326 16.3993 74.0538 15.9948 74.0155C15.5903 73.9773 15.2167 73.7827 14.9534 73.4731C14.6902 73.1635 14.5582 72.7635 14.5856 72.3581C14.6129 71.9526 14.7973 71.5739 15.0997 71.3024L22.4541 65.05C22.7357 64.8097 23.0937 64.6777 23.4639 64.6777C23.8341 64.6777 24.1922 64.8097 24.4738 65.05L31.8282 71.3024C32.0709 71.5092 32.2444 71.7855 32.3252 72.0939C32.4061 72.4023 32.3905 72.7281 32.2806 73.0274C32.1706 73.3267 31.9715 73.5851 31.7102 73.7677C31.4489 73.9504 31.1378 74.0486 30.819 74.0491V74.0491Z" fill="#FFECEB" stroke="#e03c31" stroke-width="2" stroke-linejoin="round"></path><path d="M25.3592 81.0529H21.4629V77.5433C21.476 77.0349 21.6871 76.5518 22.0513 76.1969C22.4154 75.8419 22.9038 75.6433 23.4123 75.6433C23.9208 75.6433 24.4093 75.8419 24.7734 76.1969C25.1376 76.5518 25.3487 77.0349 25.3618 77.5433L25.3592 81.0529Z" fill="#FFECEB" stroke="#e03c31" stroke-width="2" stroke-linejoin="round"></path></svg></a>
                            <h3>Góc nhìn chuyên gia</h3>
                        </div>

                    </div>
                    
                </div>
                <div style={{ width: '1300px', height: '1px', backgroundColor: '#e5e5e5', marginBottom: '50px', marginTop: '50px' }}>

                </div>
            </div>
            <div style={{paddingLeft:'300px' , paddingBottom:'60px'}}>
                <h1>Cẩm nang Phân tích đánh giá mới nhất</h1>
            </div>
            <div style={{ paddingLeft: '300px', display: 'flex' }}>
                <div style={{ paddingRight: '100px' }}>
                    <div>
                        <NewsBDSOnMain ImgElement={NewsMain1}></NewsBDSOnMain>
                    </div>
                    <div>
                        <NewsBDSOnMain ImgElement={NewsMain1}></NewsBDSOnMain>
                    </div>
                    <div>
                        <NewsBDSOnMain ImgElement={NewsMain1}></NewsBDSOnMain>
                    </div>
                    <div>
                        <NewsBDSOnMain ImgElement={NewsMain1}></NewsBDSOnMain>
                    </div>
                    <div>
                        <NewsBDSOnMain ImgElement={NewsMain1}></NewsBDSOnMain>
                    </div>
                    <div>
                        <NewsBDSOnMain ImgElement={NewsMain1}></NewsBDSOnMain>
                    </div>
                    <div>
                        <NewsBDSOnMain ImgElement={NewsMain1}></NewsBDSOnMain>
                    </div>
                    {hideButton &&
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px', marginBottom: '30px' }}>

                            <p className="MorOptionOnNewsMain" onClick={handleClickButton}>Xem thêm</p>

                        </div>}
                    {showNews && (
                        <div>
                            <div>
                                <NewsBDSOnMain ImgElement={NewsMain1}></NewsBDSOnMain>
                            </div>
                            <div>
                                <NewsBDSOnMain ImgElement={NewsMain1}></NewsBDSOnMain>
                            </div>
                            <div>
                                <NewsBDSOnMain ImgElement={NewsMain1}></NewsBDSOnMain>
                            </div>
                            <div>
                                <NewsBDSOnMain ImgElement={NewsMain1}></NewsBDSOnMain>
                            </div>
                            <div>
                                <NewsBDSOnMain ImgElement={NewsMain1}></NewsBDSOnMain>
                            </div>
                            <div>
                                <NewsBDSOnMain ImgElement={NewsMain1}></NewsBDSOnMain>
                            </div>
                            <div>
                                <NewsBDSOnMain ImgElement={NewsMain1}></NewsBDSOnMain>
                            </div>
                            <div>
                                <NewsBDSOnMain ImgElement={NewsMain1}></NewsBDSOnMain>
                            </div>
                            <div>
                                <NewsBDSOnMain ImgElement={NewsMain1}></NewsBDSOnMain>
                            </div>
                        </div>
                    )}

                </div>
                <div>
                    <div className="MostViewOnNews">
                        <div>
                            <h3 className="MostViewOnNewsSubject">Bài viết được xem nhiều nhất</h3>
                        </div>
                        <div className="LineMostViewOnNewsMain">

                        </div>
                        <div className="MostViewOnNewsMain">
                            <p>1</p>
                            <a href="">Lãi suất vay ngân hàng tháng 8/2023 mới cập nhật</a>

                        </div>
                        <div className="LineMostViewOnNewsMain">

                        </div>
                        <div className="MostViewOnNewsMain">
                            <p>2</p>
                            <a href="">Toàn cảnh thị trường BĐS quý 2/2023 qua báo cáo của Batdongsan.com.vn</a>
                        </div>
                        <div className="LineMostViewOnNewsMain">

                        </div>
                        <div className="MostViewOnNewsMain">
                            <p>3</p>
                            <a href="">môi giới bất động sản bắt đầu quay lại với nghề khi thị trường BĐS ấm lên</a>
                        </div>
                        <div className="LineMostViewOnNewsMain">

                        </div>
                        <div className="MostViewOnNewsMain">
                            <p>
                                4
                            </p>
                            <a href="">Thị trạng thị trường BĐS ở việt nam hiện nay : lượng giao dịch đang tăng</a>
                        </div>
                        <div className="LineMostViewOnNewsMain">

                        </div>
                        <div className="MostViewOnNewsMain">
                            <p>5</p>
                            <a href="">Nhiều lô đấy nền quận 9 giảm giá cả tỷ đồng</a>
                        </div>
                    </div>
                    <div style={{ border: '1px solid rgb(236, 234, 234)', marginTop: '30px', height: '200px', display: 'grid', justifyContent: 'center', borderRadius: '7px' }}>
                        <div>
                            <h3 className="MostViewOnNewsSubject">Thị trường BĐS tại các tỉnh / thành sôi động nhất</h3>
                        </div>
                        <div className="LineMostViewOnNewsMain" style={{ marginBottom: '20px' }}>

                        </div>
                        <div style={{ display: 'grid', paddingLeft: '20px', gridTemplateColumns: 'auto auto' }}>
                            <a href="" className="BDSHaNoiOnNews">
                                <div style={{ height: '50px' }}><img src="https://tse4.mm.bing.net/th?id=OIP.XGBUanR8qTp6KsFEawjXtgHaEK&pid=Api&P=0&h=220" className="BDSHaNoiOnNewsImg"></img></div>
                                <div>
                                    <p>Hà Nội</p>
                                </div>
                            </a>
                            <a href="" className="BDSHoChiMinhOnNews">
                                <div style={{ height: '50px' }}><img src="https://tse1.mm.bing.net/th?id=OIP.-epKe4QvbH56VWT9JDp-5AHaEK&pid=Api&P=0&h=220" className="BDSHaNoiOnNewsImg"></img></div>
                                <div>
                                    <p>Hồ Chí Minh</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="TopCityBDS">
                        <div>
                            <h3 className="MostViewOnNewsSubject">Thị trường Bđs tại 10 tỉnh / thành phố lớn</h3>
                        </div>
                        <div className="LineMostViewOnNewsMain" style={{ marginBottom: '20px' }}>

                        </div>
                        <div style={{ display: 'flex' }} className="AntherBDSOnNews">
                            <img src='https://tse1.mm.bing.net/th?id=OIP.Ht8ovmc9FeLOuAJYHdQomwHaEK&pid=Api&rs=1&c=1&qlt=95&w=211&h=118'></img>
                            <a href="" style={{ textDecoration: 'none' }}><p>Bà rịa - vũng tàu</p></a>
                        </div>
                        <div style={{ display: 'flex' }} className="AntherBDSOnNews">
                            <img src='https://tse3.mm.bing.net/th?id=OIP.vszm3d1P32YGtkYbqE8qhgHaEU&pid=Api&P=0&h=220'></img>
                            <a href="" style={{ textDecoration: 'none' }}><p>Bình dương</p></a>
                        </div>
                        <div style={{ display: 'flex' }} className="AntherBDSOnNews">
                            <img src='https://tse1.mm.bing.net/th?id=OIP.CaNgNpZ7ur4nGHapGutlkgHaE7&pid=Api&P=0&h=220'></img>
                            <a href="" style={{ textDecoration: 'none' }}><p> Đà Nẵng</p></a>
                        </div>
                        <div style={{ display: 'flex' }} className="AntherBDSOnNews">
                            <img src='https://tse3.mm.bing.net/th?id=OIP.cILSAsudd6SLSd_N9msaHAHaEB&pid=Api&P=0&h=220'></img>
                            <a href="" style={{ textDecoration: 'none' }}><p>Đồng Nai</p></a>
                        </div>
                        <div style={{ display: 'flex' }} className="AntherBDSOnNews">
                            <img src='https://tse3.mm.bing.net/th?id=OIP.MxGCQzM0KDtE-nplvupigwHaE6&pid=Api&P=0&h=220'></img>
                            <a href="" style={{ textDecoration: 'none' }}><p>hải phòng</p></a>
                        </div>
                        <div style={{ display: 'flex' }} className="AntherBDSOnNews">
                            <img src='https://tse3.mm.bing.net/th?id=OIP.M8G3MwZNVCJTYV8IlohrOAHaE7&pid=Api&P=0&h=220'></img>
                            <a href="" style={{ textDecoration: 'none' }}><p>hưng yên</p></a>
                        </div>
                        <div style={{ display: 'flex' }} className="AntherBDSOnNews">
                            <img src='https://tse1.mm.bing.net/th?id=OIP.I0H7d18qMD0vE_uTdTc2oQHaEW&pid=Api&P=0&h=220'></img>
                            <a href="" style={{ textDecoration: 'none' }}><p>khánh hòa</p></a>
                        </div>
                        <div style={{ display: 'flex' }} className="AntherBDSOnNews">
                            <img src='https://tse2.mm.bing.net/th?id=OIP.6VqfF-lCDjmIFekH3dKp4AHaEe&pid=Api&P=0&h=220'></img>
                            <a href="" style={{ textDecoration: 'none' }}><p>long an</p></a>
                        </div>
                        <div style={{ display: 'flex' }} className="AntherBDSOnNews">
                            <img src='https://tse3.mm.bing.net/th?id=OIP.dTeeJfNWJl-edevUtcWEyQHaFE&pid=Api&P=0&h=220'></img>
                            <a href="" style={{ textDecoration: 'none' }}><p>quảng nam</p></a>
                        </div>
                        <div style={{ display: 'flex' }} className="AntherBDSOnNews">
                            <img src='https://tse2.mm.bing.net/th?id=OIP.a9RmvJF6LvcXE3WrrCq4pAHaE7&pid=Api&P=0&h=220'></img>
                            <a href="" style={{ textDecoration: 'none' }}><p>quảng ninh</p></a>
                        </div>
                    </div>

                </div>
            </div>
            <div style={{ paddingTop: '40px' }}>
                <Introduce></Introduce>
            </div>
            <div style={{ paddingTop: '60px' }}>
                <LastIntroduce></LastIntroduce>
            </div>
        </div>
    )
}

export default EvaluteProjectMain;