import React from "react";
import "./index.css"
import HeaderIvyMoDa from "../HeaderIvymoda"
import { Link } from "react-router-dom";
import { useState } from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Range } from 'react-range';
import IntroduceAndEndIvyPage from "../IntroduceAndEndIvyPage"
import ProductionOfIvyPage from "./ProductPortfolioReuse"
function OptionProduct() {
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
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/10/20/8a2241d4a39c3760bc7d6c9a29d82551.jpg',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]
    const Production2 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/11/02/cfa22959d2e9bf1aeaff1a89ae732b42.jpg',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]
    const Production3 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/10/17/69e65004e2318b48c1dda6ff59029436.jpg',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]
    const Production4 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/11/02/a541b8c5fc2f511e4dfd84fd88d571b9.jpg',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]
    const Production5 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/10/20/8a2241d4a39c3760bc7d6c9a29d82551.jpg',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]
    const Production6 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/10/23/08a3880cda4b6b2b688ef9fa070aeccd.jpg',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]
    const Production7 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/08/07/7aefe3f83c409beaf9c6ada41259a70e.jpg',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]
    const Production8 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/11/02/cfa22959d2e9bf1aeaff1a89ae732b42.jpg',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]
    const Production9 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/09/25/79df8a07addeb5f1e3b2729fbb3add59.jpg',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]
    const Production10 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/09/25/88794d91c0ee7397954109baf4b4140b.JPG',
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
                        <img src="https://pubcdn.ivymoda.com/files/news/2023/11/02/a98f68c65fefee040c603dc5a41b2a7b_1.jpg" className="ImgSaleOnIvyModa"></img>
                        <div className="AllProductionOnArrivalPageIvy">
                            
                            <Link to='/Chitietsanpham' className="LinkToMorePrd"> <ProductionOfIvyPage ProductionElement ={Production1}></ProductionOfIvyPage></Link>
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

export default OptionProduct