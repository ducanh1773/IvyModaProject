import React from "react";
import "./index.css"
import HeaderIvyMoDa from "../../HeaderIvymoda"
import { Link } from "react-router-dom";
import { useState } from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Range } from 'react-range';
import IntroduceAndEndIvyPage from "../../IntroduceAndEndIvyPage"
import ProductionOfIvyPage from "../ProductPortfolioReuse"
function DelicateurbanForWomanProduct() {
    const [showElement1, setShowElement1] = useState(false)
    const [showElement2, setShowElement2] = useState(false)
    const [showElement3, setShowElement3] = useState(false)
    const [showElement4, setShowElement4] = useState(false)
    const [showElement5, setShowElement5] = useState(false)

    const [showButon1, setShowbutton1] = useState(false)
    const [showButon2, setShowbutton2] = useState(false)
    const [showButon3, setShowbutton3] = useState(false)
    const [showButon4, setShowbutton4] = useState(false)
    const [showButon5, setShowbutton5] = useState(false)

    const [showMainButton1, setShowMainButton1] = useState(true)
    const [showMainButton2, setShowMainButton2] = useState(true)
    const [showMainButton3, setShowMainButton3] = useState(true)
    const [showMainButton4, setShowMainButton4] = useState(true)
    const [showMainButton5, setShowMainButton5] = useState(true)


    const HandleClick1 = () => {
        setShowbutton1(true);
        setShowElement1(true);
        setShowMainButton1(false);
    }

    const hideClick1 = () => {
        setShowElement1(false);
        setShowbutton1(false);
        setShowMainButton1(true);
    }

    const HandleClick2 = () => {
        setShowbutton2(true);
        setShowElement2(true);
        setShowMainButton2(false);
    }

    const hideClick2 = () => {
        setShowElement2(false);
        setShowbutton2(false);
        setShowMainButton2(true);
    }

    const HandleClick3 = () => {

        setShowbutton3(true);
        setShowElement3(true);
        setShowMainButton3(false);
    }

    const hideClick3 = () => {
        setShowElement3(false);
        setShowbutton3(false);
        setShowMainButton3(true);
    }

    const HandleClick4 = () => {
        setShowbutton4(true);
        setShowElement4(true);
        setShowMainButton4(false);
    }

    const hideClick4 = () => {
        setShowElement4(false);
        setShowbutton4(false);
        setShowMainButton4(true);
    }


    const HandleClick5 = () => {
        setShowbutton5(true);
        setShowElement5(true);
        setShowMainButton5(false);
    }

    const hideClick5 = () => {
        setShowElement5(false);
        setShowbutton5(false);
        setShowMainButton5(true);
    }


    const [showOptionBtnArrange, setShowOptionBtnArrange] = useState(true)
    const [showAnotherBtnArange, setShowAnotherBtnArange] = useState(false)
    const [showElementArrange, setShowElementArrnage] = useState(false)

    const handleClickToShowArrangeOption = () => {
        setShowOptionBtnArrange(false)
        setShowAnotherBtnArange(true)
        setShowElementArrnage(true)
    }

    const hideClickToShowArrangeOption = () => {
        setShowOptionBtnArrange(true)
        setShowAnotherBtnArange(false)
        setShowElementArrnage(false)
    }

    const Production1 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/09/16/c9ee9ccdf7ff3c77b3a0f3f16311e42b.JPG',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]
    const Production2 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/09/16/83b604fb7fb37d0acd3f214adf8024d9.JPG',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]
    const Production3 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/09/16/51017e5bfda9a4ff37acea92f20d8a34.JPG',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]
    const Production4 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/09/16/30fa281c097424dd5e6acb4b28fbbee7.JPG',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]
    const Production5 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/09/16/fb8c23971d5e8b63a5ebf9c5c8fd1ced.JPG',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]
    const Production6 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/09/16/3ae93075bb658cb4c3e1ac35c2c244ec.JPG',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]
    const Production7 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/09/16/87dc81b18528e5f81bf857ac8fe57259.JPG',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]
    const Production8 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/09/16/28f3b3317c557d464734f5b8b017c255.JPG',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]
    const Production9 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/08/28/a542a640a699c250cbbf9411181e4bc2.jpg',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]
    const Production10 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/08/03/9a56bdbc3438db71f330806cc4b0a2c6.jpg',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]
    const Production11 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/09/16/94c460cb7921bac2e87f9d0751b3206d.JPG',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]
    const Production12 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/1600/2023/10/23/1f5205b69ce476d625eda50b86919eae.jpg',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]
    const Production13 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/09/08/e9dbb756cef34c92badcbcfa026cf5d3.jpg',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]
    const Production14 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/1600/2023/10/23/1f5205b69ce476d625eda50b86919eae.jpg',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]
    const Production15 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/11/02/41ed380b9111c8b672bc7f4895ae5d9c.jpg',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]
    const Production16 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/09/28/572536b5a6eaa76df4b9d1b11f9cde69.jpg',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]


    return (
        <div>
            <div>
                <HeaderIvyMoDa></HeaderIvyMoDa>
                
            </div>
            
            <div className="ButtonToHomeAndNewArrival" >
                <h5 className="BackToHomeIvyModa" >Trang chủ</h5>
                <h5 className="BackToNewArrivalIvyModa">NEW ARRIVAL</h5>
            </div>
            <div className="AllOptionFilterAndProductOfIvyModa">
                <div className="AllOptionAndfilter">
                    <div className="AllOptionNewsArrivalClothes">
                        <div className="AllOptionFromNewArriaalPage">
                            {showMainButton1 && <div className="OptionFromNewArriaalPage" onClick={HandleClick1}  >
                                <h5 className="ObjectOfOption" >Size</h5>
                                <div className="IconFromOblectOption"><box-icon name='plus'></box-icon></div>
                            </div>
                            }
                            {showButon1 &&
                                <div className="OptionFromNewArriaalPage" onClick={hideClick1}  >
                                    <h5 className="ObjectOfOption" >Size</h5>
                                    <div className="IconFromOblectOption"><box-icon name='minus'></box-icon></div>
                                </div>

                            }
                            {showElement1 &&
                                <div className="AllSizeFromOption">
                                    <p className="SizeFromOption">S</p>
                                    <p className="SizeFromOption">M</p>
                                    <p className="SizeFromOption">L</p>
                                    <p className="SizeFromOption">xl</p>
                                    <p className="SizeFromOption">xxl</p>
                                </div>}


                            {showMainButton2 &&
                                <div className="OptionFromNewArriaalPage" onClick={HandleClick2}>
                                    <h5 className="ObjectOfOption">Màu sắc</h5>
                                    <div className="IconFromOblectOption"><box-icon name='plus'></box-icon></div>
                                </div>
                            }

                            {showButon2 &&
                                <div className="OptionFromNewArriaalPage" onClick={hideClick2}>
                                    <h5 className="ObjectOfOption">Màu sắc</h5>
                                    <div className="IconFromOblectOption"><box-icon name='minus'></box-icon></div>
                                </div>
                            }

                            {showElement2 &&
                                <div className="AllColorFromOption">
                                    <Tippy content="Vàng hoa cúc" className="TippyColor"><p className="ColorFromOption" style={{ backgroundColor: "#ffc107" }}></p></Tippy>
                                    <Tippy content="Xanh matcha"><p className="ColorFromOption" style={{ backgroundColor: "#20c997" }}></p></Tippy>
                                    <Tippy content="Hồng nhạt"><p className="ColorFromOption" style={{ backgroundColor: "#e83e8c" }}></p></Tippy>
                                    <Tippy content="Cam đỏ"><p className="ColorFromOption" style={{ backgroundColor: "#dc3545" }}></p></Tippy>
                                    <Tippy content="Tím thẫm"><p className="ColorFromOption" style={{ backgroundColor: "#6f42c1" }}></p></Tippy>
                                    <Tippy content="Trắng"><p className="ColorFromOption" style={{ backgroundColor: "#343a40" }}></p></Tippy>
                                    <Tippy content="Tím cà"><p className="ColorFromOption" style={{ backgroundColor: "#ffc107" }}></p></Tippy>
                                    <Tippy content="Tím khói"><p className="ColorFromOption" style={{ backgroundColor: "#6c757d" }}></p></Tippy>
                                    <Tippy content="Vàng mustard"><p className="ColorFromOption" style={{ backgroundColor: "#20c997" }}></p></Tippy>
                                    <Tippy content="Hồng tím"><p className="ColorFromOption" style={{ backgroundColor: "#dc3545" }}></p></Tippy>
                                    <Tippy content="Ngẫu nhiên"><p className="ColorFromOption" style={{ backgroundColor: "#ffc107" }}></p></Tippy>
                                </div>}

                            {showMainButton5 &&
                                <div className="OptionFromNewArriaalPage" onClick={HandleClick5}>
                                    <h5 className="ObjectOfOption">Mức giá</h5>
                                    <div className="IconFromOblectOption"><box-icon name='plus'></box-icon></div>
                                </div>}

                            {showButon5 &&
                                <div className="OptionFromNewArriaalPage" onClick={hideClick5}>
                                    <h5 className="ObjectOfOption">Mức giá</h5>
                                    <div className="IconFromOblectOption"><box-icon name='minus'></box-icon></div>
                                </div>}


                            {showElement5 &&
                                <div className="OptionPrice">
                                    <div className="InputPriceFromArrvalRange">
                                        <input type="range"></input>
                                    </div>
                                </div>
                            }


                            {showMainButton3 &&
                                <div className="OptionFromNewArriaalPage" onClick={HandleClick3}>
                                    <h5 className="ObjectOfOption">Mức chiết khấu</h5>
                                    <div className="IconFromOblectOption"><box-icon name='plus'></box-icon></div>
                                </div>}

                            {showButon3 &&
                                <div className="OptionFromNewArriaalPage" onClick={hideClick3}>
                                    <h5 className="ObjectOfOption">Mức chiết khấu</h5>
                                    <div className="IconFromOblectOption"><box-icon name='minus'></box-icon></div>
                                </div>
                            }
                            {showElement3 &&
                                <div className="AllCkFromOptionClothes">
                                    <div className="OptionDiscountOnIvyModa">
                                        <input type="radio"></input>
                                        <p className="NameOfOptionDiscountOnIvyModa">Dưới 30%</p>
                                    </div>
                                    <div className="OptionDiscountOnIvyModa">
                                        <input type="radio"></input>
                                        <p className="NameOfOptionDiscountOnIvyModa">Từ 30% - 50%</p>
                                    </div>
                                    <div className="OptionDiscountOnIvyModa">
                                        <input type="radio"></input>
                                        <p className="NameOfOptionDiscountOnIvyModa">Từ 50% - 70%</p>
                                    </div>
                                    <div className="OptionDiscountOnIvyModa">
                                        <input type="radio"></input>
                                        <p className="NameOfOptionDiscountOnIvyModa">Từ 70%</p>
                                    </div>
                                    <div className="OptionDiscountOnIvyModa">
                                        <input type="radio"></input>
                                        <p className="NameOfOptionDiscountOnIvyModa">Gía đặc biệt</p>
                                    </div>

                                </div>}

                            {showMainButton4 &&
                                <div className="OptionFromNewArriaalPage" onClick={HandleClick4}>
                                    <h5 className="ObjectOfOption">Nâng cao</h5>
                                    <div className="IconFromOblectOption"><box-icon name='plus'></box-icon></div>
                                </div>}
                            {showButon4 &&
                                <div className="OptionFromNewArriaalPage" onClick={hideClick4}>
                                    <h5 className="ObjectOfOption">Nâng cao</h5>
                                    <div className="IconFromOblectOption"><box-icon name='minus'></box-icon></div>
                                </div>}
                            {showElement4 &&
                                <div className="AllHighCystOpTion">
                                    <div className="HighSystOpTion">
                                        <input type="radio"></input>
                                        <p className="NameHighSystOpTion">Chất liệu</p>
                                    </div>
                                    <div className="HighSystOpTion">
                                        <input type="radio"></input>
                                        <p className="NameHighSystOpTion">Kiểu dáng</p>
                                    </div>
                                    <div className="HighSystOpTion">
                                        <input type="radio"></input>
                                        <p className="NameHighSystOpTion">Họa tiết</p>
                                    </div>
                                    <div className="HighSystOpTion">
                                        <input type="radio"></input>
                                        <p className="NameHighSystOpTion">Cổ áo</p>
                                    </div>
                                    <div className="HighSystOpTion">
                                        <input type="radio"></input>
                                        <p className="NameHighSystOpTion">Tay áo</p>
                                    </div>
                                    <div className="HighSystOpTion">
                                        <input type="radio"></input>
                                        <p className="NameHighSystOpTion">Cạp quần</p>
                                    </div>
                                    <div className="HighSystOpTion">
                                        <input type="radio"></input>
                                        <p className="NameHighSystOpTion">Cạp zuýt</p>
                                    </div>
                                </div>
                            }



                        </div>


                    </div>
                    <div className="FilterBTNForAllOptin">
                        <div className="RemoveFiltertn">
                            <h5>Bỏ Lọc</h5>

                        </div>
                        <div className="FilterBtn">
                            <h5>Lọc</h5>
                        </div>
                    </div>
                </div>
                <div className="BorderAllProductAndArangeProductOfIvy">

                    <div className="AllProductAndArangeProductOfIvy">
                        <div className="AllPrductAndOpArrangeOfIvyModa">
                            <div className="NameOfOptionProductIvyModa">
                                <h3 className="SubjectOfProductIvyModa">NEW ARRIVAL</h3>

                            </div>
                            {showOptionBtnArrange && <div className="AllOptionArrnageProductInIvyModa" onClick={handleClickToShowArrangeOption}>
                                <p className="MoreOptionArrangeIvyModa">Sắp xếp theo</p>
                                <box-icon name='chevron-down' rotate='180' color='#9f9f9f' ></box-icon>

                            </div>}
                            {showAnotherBtnArange &&
                                <div className="AllOptionArrnageProductInIvyModa" onClick={hideClickToShowArrangeOption}>
                                    <p className="MoreOptionArrangeIvyModa">Sắp xếp theo</p>
                                    <box-icon name='chevron-up' rotate='180' color='#9f9f9f' ></box-icon>

                                </div>}
                        </div>
                        {showElementArrange &&
                            <div className="AlloptionArrangeProductIVYmODA">
                                <p>Mặc định</p>
                                <p>Mới nhất</p>
                                <p>Được mua nhiều nhất</p>
                                <p>Được yêu thích nhất</p>
                                <p>Gía:cao đến thấp </p>
                                <p style={{ marginBottom: "10%" }}>Gía:thấp đến cao</p>
                            </div>
                        }
                        <h2>DELICATE URBAN: DẤU ẤN RIÊNG CỦA NHỮNG QUÝ CÔ THÀNH THỊ</h2>
                        <img src="https://pubcdn.ivymoda.com/files/news/2023/09/18/763adf6054c6f80388f529ab509315d4_1.jpg" className="ImgSaleOnIvyModa"></img>
                        
                        <div className="AllProductionOnArrivalPageIvy">
                            
                            <ProductionOfIvyPage ProductionElement ={Production1}></ProductionOfIvyPage>
                            <ProductionOfIvyPage ProductionElement ={Production2}></ProductionOfIvyPage>
                            <ProductionOfIvyPage ProductionElement ={Production3}></ProductionOfIvyPage>
                            <ProductionOfIvyPage ProductionElement ={Production4}></ProductionOfIvyPage>
                            <ProductionOfIvyPage ProductionElement ={Production5}></ProductionOfIvyPage>
                            <ProductionOfIvyPage ProductionElement ={Production6}></ProductionOfIvyPage>
                            <ProductionOfIvyPage ProductionElement ={Production7}></ProductionOfIvyPage>
                            <ProductionOfIvyPage ProductionElement ={Production8}></ProductionOfIvyPage>
                            <ProductionOfIvyPage ProductionElement ={Production9}></ProductionOfIvyPage>
                            <ProductionOfIvyPage ProductionElement ={Production10}></ProductionOfIvyPage>
                            <ProductionOfIvyPage ProductionElement ={Production11}></ProductionOfIvyPage>
                            <ProductionOfIvyPage ProductionElement ={Production12}></ProductionOfIvyPage>
                            <ProductionOfIvyPage ProductionElement ={Production13}></ProductionOfIvyPage>
                            <ProductionOfIvyPage ProductionElement ={Production14}></ProductionOfIvyPage>
                            <ProductionOfIvyPage ProductionElement ={Production15}></ProductionOfIvyPage>
                            <ProductionOfIvyPage ProductionElement ={Production16}></ProductionOfIvyPage>
                        </div>
                    </div>
                </div>
            </div>
           
            
            <IntroduceAndEndIvyPage></IntroduceAndEndIvyPage>
            
        </div>
    )
}

export default DelicateurbanForWomanProduct;