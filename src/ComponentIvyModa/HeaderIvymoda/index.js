import React from "react";
import "./index.css"
import { Link, Route } from "react-router-dom";
import { useState } from "react";
function HeaderIvyMoDa() {
    const [showElement, setShowelement] = useState(false)
    const [showElement2, setShowelement2] = useState(false)
    const [showElement3, setShowelement3] = useState(false)
    const [showElement4, setShowelement4] = useState(false)
    const [showElement5, setShowelement5] = useState(false)
    const [showElement6, setShowelement6] = useState(false)
    const handleClick = () => {
        setShowelement(true);
        setShowelement2(false)
        setShowelement3(false)
        setShowelement4(false)
        setShowelement5(false)
        setShowelement6(false)
    }

    const hideClick = () => {
        setShowelement(false)
    }

    const handleClick2 = () => {
        setShowelement(false)
        setShowelement2(true)
        setShowelement3(false)
        setShowelement4(false)
        setShowelement5(false)
        setShowelement6(false)
    }

    const hideClick2 = () => {
        setShowelement2(false)
    }

    const handleClick3 = () => {
        setShowelement3(true);
        setShowelement2(false)
        setShowelement(false)
        setShowelement4(false);
        setShowelement5(false)
        setShowelement6(false)
    }

    const hideClick3 = () => {
        setShowelement3(false)
    }

    const handleClick4 = () => {
        setShowelement4(true);
        setShowelement3(false);
        setShowelement(false);
        setShowelement2(false);
        setShowelement5(false)
        setShowelement6(false)

    }

    const hideClick4 = () => {
        setShowelement4(false);
    }


    const handleClick5 = () => {
        setShowelement5(true)
        setShowelement3(false);
        setShowelement(false);
        setShowelement2(false);
        setShowelement4(false)
        setShowelement6(false)
    }


    const hideClick5 = () => {
        setShowelement5(false)
    }

    const handleClick6 = () => {
        setShowelement6(true)
        setShowelement3(false);
        setShowelement(false);
        setShowelement2(false);
        setShowelement4(false);
        setShowelement5(false);
    }

    const hideClick6 = () => {
        setShowelement6(false)
    }
    return (
        <div className="HeaderAndOptionOnHeaderIvy">
            <div className="Header_IVYMoDa">

                <div className="OptioneIvyModa">
                    <p className="OptionIvyModa" onMouseEnter={handleClick} >NỮ</p>
                    <p className="OptionIvyModa " onMouseEnter={handleClick2}>NAM</p>
                    <p className="OptionIvyModa" onMouseEnter={handleClick3}>TRẺ EM</p>
                    <p className="OptionIvyModa SpecialOptionIvy" onMouseEnter={handleClick5}> SIÊU SALE THÁNG 10</p>
                    <Link to='/LifestyyleIVYMODA' className="LinkToMorePrd"><p className="OptionIvyModa">LIFESTYLE</p></Link>
                    <p className="OptionIvyModa" onMouseEnter={handleClick4}>VỀ CHÚNG TÔI</p>
                </div>
                <div className="LogoIvyOnHeader">
                   <img src="https://pubcdn.ivymoda.com/ivy2/images/logo.png" className="ImgInLogoIvy"></img>

                </div>
                <div className="SearchBoxOnIvy" onMouseEnter={handleClick6}>
                    <div className="NaviSearchBar">
                        <div className=""></div>
                        <div style={{paddingLeft:'2%'}}><box-icon name='search-alt-2'></box-icon></div>
                        <input type="search" className="InputSearchInHeaderIvy" placeholder="Tìm Kiếm Sản Phẩm"></input>
                    </div>
                    <div className="OptionSearchOnHeaderIvy">
                        <div className="OptioneHeaderIvyOnSearch"><box-icon name='headphone'></box-icon></div>
                       <Link to='/DangnhapIVYMODA' className="OptioneHeaderIvyOnSearch"><box-icon name='user' ></box-icon></Link>
                        <div className="OptioneHeaderIvyOnSearch"><box-icon name='shopping-bag' ></box-icon></div>
                    </div>
                </div>
            </div>
            {showElement && <div className="AllOptioneClothesForWoman" onMouseEnter={handleClick} onMouseLeave={hideClick}>
                <div className="OptionOnWomanClothes">
                    <div className="SpecialOptionForWoman">
                        <Link to='/DanhMuc/HangNumoive' className="LinkToMorePrd"><h5 className="SubjectOptionForWoman">New Arrival</h5></Link>
                        <Link to='/DanhMuc/DELICATEURBAN' className="LinkToMorePrd"  ><h5 className="SubjectOptionForWoman">Qiteluxury</h5></Link>
                        <Link to='/DanhMuc/DELICATEURBAN' className="LinkToMorePrd"  ><h5 className="SubjectOptionForWoman">DELICATE URBAN</h5></Link>
                        <Link to='/DanhMuc/DELICATEURBAN' className="LinkToMorePrd"  ><h5 className="SubjectOptionForWoman">EXPRESS - FALL/WINTER 2023 COLLECTION</h5></Link>
                        <Link to='/DanhMuc/HangNumoive' className="LinkToMorePrd"><h5 className="SubjectOptionForWoman">REFINED - NEW COLLECTION FW2023</h5></Link>
                    </div>
                    <div className="NoneSpecialClothes">
                        <div className="OptionShirtForWoman">
                            <h5 className="SubjectOptionForWoman">Áo</h5>
                            <p className="ItermForWomanClothes">Áo sơ mi</p>
                            <p className="ItermForWomanClothes">áo thun</p>
                            <p className="ItermForWomanClothes">áo kiểu</p>
                            <p className="ItermForWomanClothes">áo croptop</p>
                            <p className="ItermForWomanClothes">áo peplum</p>
                            <p className="ItermForWomanClothes">áo len</p>
                            <p className="ItermForWomanClothes">set bộ</p>
                        </div>

                        <div className="OptionJacketForWoman">
                            <h5 className="SubjectOptionForWoman">áo khoác</h5>
                            <p className="ItermForWomanClothes">áo vest/Blazer</p>
                            <p className="ItermForWomanClothes">áo dạ</p>
                            <p className="ItermForWomanClothes">áo măng tô</p>


                        </div>
                        <div className="OptionPantForWonman">
                            <h5 className="SubjectOptionForWoman">Quần</h5>
                            <p className="ItermForWomanClothes">quần jeans</p>
                            <p className="ItermForWomanClothes">quần dài</p>
                            <p className="ItermForWomanClothes">quần lửng/short</p>
                            <p className="ItermForWomanClothes">quần baggy</p>
                            <p className="ItermForWomanClothes">jumpsuit</p>

                        </div>

                        <div className="OptionDressForWoman">
                            <h5 className="SubjectOptionForWoman">Váy</h5>
                            <p className="ItermForWomanClothes">chân váy</p>
                            <p className="ItermForWomanClothes">chân váy xếp ly</p>
                            <p className="ItermForWomanClothes">chân váy chữ A</p>

                        </div>

                        <div className="OptionOldDressForWoman">
                            <h5 className="SubjectOptionForWoman">Đầm</h5>
                            <p className="ItermForWomanClothes">Đầm</p>
                            <p className="ItermForWomanClothes">đầm maxi/voan</p>
                            <p className="ItermForWomanClothes">senora-Đầm dạ hội</p>
                        </div>

                        <div className="OptionUnderWear">
                            <h5 className="SubjectOptionForWoman">đồ lót</h5>
                            <p className="ItermForWomanClothes">áo bra</p>
                            <p className="ItermForWomanClothes">quần lót</p>
                        </div>
                    </div>

                </div>
                <div className="AccesoryAndSale">
                    <div className="OptionAccesoryForWoman">
                        <h5 className="SubjectOptionForWoman">Phụ kiện</h5>
                        <p className="ItermForWomanClothes">Túi/ví</p>
                        <p className="ItermForWomanClothes">giày/dép&sandal</p>
                        <p className="ItermForWomanClothes">phụ kiện</p>
                    </div>
                    <div className="OptionSaleForWonman">
                        <h5 className="SpecialSaleOptionForWoman">Sale t10 | Giảm upto 70%</h5>
                        <p className="ItermForWomanClothes">áo</p>
                        <p className="ItermForWomanClothes">đầm</p>
                        <p className="ItermForWomanClothes">quần và jumpsuit</p>
                        <p className="ItermForWomanClothes">chân váy</p>
                        <p className="ItermForWomanClothes">đồ lót và phụ kiện</p>

                    </div>

                </div>

            </div>
            }


            {showElement2 && <div className="AllOptionClothesForMen" onMouseLeave={hideClick2}>
                <div className="OptionClothesForMen">
                    <div className="SpecialOptionClothesForMen">
                        <h5 className="SubjectOptionForWoman">New Arrival</h5>
                    </div>
                    <div className="OptionShirtForMen">
                        <h5 className="SubjectOptionForWoman">áo</h5>
                        <p className="ItermForWomanClothes">áo thun</p>
                        <p className="ItermForWomanClothes">áo khoác</p>
                        <p className="ItermForWomanClothes">áo polo</p>
                        <p className="ItermForWomanClothes"> áo sơ mi</p>
                        <p className="ItermForWomanClothes">áo phao</p>
                        <p className="ItermForWomanClothes">áo len</p>
                        <p className="ItermForWomanClothes">áo vest</p>
                    </div>
                    <div className="OptionPantsForMen">
                        <h5 className="SubjectOptionForWoman">Quần</h5>
                        <p className="ItermForWomanClothes"> quần jeans</p>
                        <p className="ItermForWomanClothes">quần lửng/short</p>
                        <p className="ItermForWomanClothes">  quần dài</p>
                        <p className="ItermForWomanClothes">quần khaki</p>
                        <p className="ItermForWomanClothes">quần tây</p>
                    </div>
                    <div className="OptionshoesForMen">
                        <h5 className="SubjectOptionForWoman">Gìay & dép</h5>
                        <p className="ItermForWomanClothes">Giày & Dép</p>
                    </div>
                    <div className="AccesoryForMen">
                        <h5 className="SubjectOptionForWoman">Phụ kiện</h5>
                        <p className="ItermForWomanClothes">phụ kiện</p>
                    </div>
                </div>


            </div>
            }


            {showElement3 &&

                <div className="AllOptionClothesForKids" >
                    <div className="OptionClothesForKids" onMouseLeave={hideClick3}>
                        <div className="SpecialOptionClothesForMen">
                            <h5 className="SubjectOptionForWoman">New Arrival</h5>
                        </div>
                        <div className="OptionClothesForGirls">
                            <h5 className="SubjectOptionForWoman">Bé gái</h5>
                            <p className="ItermForWomanClothes">áo bé gái</p>
                            <p className="ItermForWomanClothes">quần bé gái</p>
                            <p className="ItermForWomanClothes">váy bé gái</p>
                            <p className="ItermForWomanClothes">chân váy bé gái</p>
                            <p className="ItermForWomanClothes">phụ kiện bé gái</p>
                        </div>

                        <div className="OptionClothesForBoys">
                            <h5 className="SubjectOptionForWoman">Bé trai</h5>
                            <p className="ItermForWomanClothes">áo bé trai</p>
                            <p className="ItermForWomanClothes">quần bé trai</p>
                            <p className="ItermForWomanClothes">Phụ kiện bé trai</p>

                        </div>

                        <div className="OptionSaleForKids">
                            <h5 className="SpecialSaleOptionForWoman">SaleT10</h5>
                            <p className="ItermForWomanClothes">Bé gái</p>
                            <p className="ItermForWomanClothes">bé trai</p>
                        </div>
                    </div>
                </div>
            }
            {showElement4 &&
                <div className="AllInformationOfIvyOnNaviBar" onMouseLeave={hideClick4}>
                    <div className="InformationOfIvyOnNaviBar">
                       <Link to="/GioithieuIvymoda" className="LinkToMorePrd"> <div className="SubjectForInformationOnNaviBar"><h5 className="SubjectOptionForWoman SubjectOptionForInFormation">Về IVY MODA</h5></div></Link>
                        <div className="SubjectForInformationOnNaviBar"><h5 className="SubjectOptionForWoman SubjectOptionForInFormation        ">Fashion show</h5></div>
                        <div className="SubjectForInformationOnNaviBar"><h5 className="SubjectOptionForWoman SubjectOptionForInFormation">Hoạt động cộng đồng</h5></div>
                    </div>
                </div>

            }
            {showElement5 &&
                <div className="AllOptionSaleSubjectOnNaviBar" onMouseLeave={hideClick5}>
                    <div className="OptionSaleSubjectOnNaviBar">
                        <div className="OptionSaleFirst">
                            <h5 className="SpecialSaleOptionForWoman">Mua 2 giảm 50%</h5>
                            <p className="ItermForWomanClothes">Nữ</p>
                            <p className="ItermForWomanClothes">Nam</p>
                            <p className="ItermForWomanClothes">trẻ em</p>
                        </div>
                        <div className="OptionSaleSecond">
                            <h5 className="SpecialSaleOptionForWoman">Chỉ có tại Online</h5>
                            <p className="OptionSale">Sale off 70%</p>
                            <p className="OptionSale">Sale off 50%</p>

                        </div>

                    </div>

                </div>
            }

            {showElement6 &&
                <div className="AllMostSearchIterm" onMouseLeave={hideClick6}>
                    <div className="MostSearchIterm">
                        <div>
                            <h4>Tìm kiếm nhiều nhất</h4>
                        </div>
                        <div className="OptionMostSearchFirst">
                            <div className="OptionMostSearchBoder"><a href="" className="OptionMostSearch">Đầm</a></div>
                            <div className="OptionMostSearchBoder"><a href="" className="OptionMostSearch">  trễ vai</a></div>
                            <div className="OptionMostSearchBoder"><a href="" className="OptionMostSearch"> áo khoác</a></div>
                            <div className="OptionMostSearchBoder"><a href="" className="OptionMostSearch">quần</a></div>
                            <div className="OptionMostSearchBoder"><a href="" className="OptionMostSearch">áo sơ mi</a></div>

                        </div>
                        <div className="OptionMostSearchSecond">
                            <div className="OptionMostSearchBoder"> <a href="" className="OptionMostSearch">vest</a></div>
                            <div className="OptionMostSearchBoder"> <a href="" className="OptionMostSearch">parka</a></div>
                            <div className="OptionMostSearchBoder"><a href="" className="OptionMostSearch">tweed</a></div>
                            <div className="OptionMostSearchBoder">  <a href="" className="OptionMostSearch">croptop</a></div>
                            <div className="OptionMostSearchBoder">  <a href="" className="OptionMostSearch">chân váy</a></div>

                        </div>
                        <div>
                            <div className="OptionMostSearchBoder"> <a href="" className="OptionMostSearch">lông cừu</a></div>
                        </div>

                    </div>
                </div>

            }



        </div>


    )

}

export default HeaderIvyMoDa;       