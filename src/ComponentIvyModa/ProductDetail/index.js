import React from "react";
import HeaderIvyMoDa from "../HeaderIvymoda"
import { useState } from "react";
import './index.css'
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ProductionOfIvyPage from "../ProductPortfolio/ProductPortfolioReuse";
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/sea-green';
import IntroduceAndEndIvyPage from "../IntroduceAndEndIvyPage";
function ProductDetail() {
    const [value, setValue] = useState(0);


    const decreaseValue = () => {
        if (value - 1 >= 0)
            setValue(value - 1)


    }

    const IncreaseValue = () => {
        if (value + 1 <= 4) {
            setValue(value + 1)
        }

    }

    const [showElememt1, setShowElment1] = useState(true)
    const [showElememt2, setShowElment2] = useState(false)
    const [showElememt3, setShowElment3] = useState(false)

    const handleClick1 = () => {
        setShowElment1(true);
        setShowElment2(false)
        setShowElment3(false)

    }

    const handleClick2 = () => {
        setShowElment1(false);
        setShowElment2(true)
        setShowElment3(false)

    }

    const handleClick3 = () => {
        setShowElment1(false);
        setShowElment2(false)
        setShowElment3(true)

    }

    const [compactInformation, setCompactInformation] = useState(false)
    const [compactInformation2, setCompactInformation2] = useState(false)
    const [compactInformation3, setCompactInformation3] = useState(false)

    const [showButton1, setShowButton1] = useState(true)
    const [showButton2, setShowButton2] = useState(true)

    const [showButton3, setShowButton3] = useState(true)



    const HandelClickToMoreInformation1 = () => {
        setCompactInformation(!compactInformation)
        setShowButton1(!showButton1)
    }

    const Production2 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/11/02/cfa22959d2e9bf1aeaff1a89ae732b42.jpg',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]
    const Production3 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/10/17/69e65004e2318b48c1dda6ff59029436.jpg',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]


    return (
        <div>
            <div>
                <HeaderIvyMoDa></HeaderIvyMoDa>
            </div>
            <div className="SubjectOfProductDetail">
                <p><Link to='/' className="LinkToMorePrd">Trang chủ </Link>- <Link to='/' className="LinkToMorePrd">Nữ </Link>- <Link to='/' className="LinkToMorePrd">Đầm dáng Vest </Link></p>
            </div>
            <div className="AllImgAndPriceAndDescribeOfProduct">
                <div className="ProductContentLeft">
                    <div className="allBigImgProductIVY">
                        <img src="https://pubcdn.ivymoda.com/files/product/thumab/1400/2023/09/16/4736440847e79725bc3f78055a212c8a.JPG" className="ImgBigProduuctIvy"></img>
                    </div>
                    <div className="ALLSmallImgProductIVY">
                        <img src="https://pubcdn.ivymoda.com/files/product/thumab/1400/2023/09/16/4736440847e79725bc3f78055a212c8a.JPG" className="ImgSmallProductIVY"></img>
                        <img src="https://pubcdn.ivymoda.com/files/product/thumab/1400/2023/09/16/82d2558c7cbf97e2a6fc54477df6bccf.JPG" className="ImgSmallProductIVY"></img>
                        <img src="https://pubcdn.ivymoda.com/files/product/thumab/1400/2023/09/16/8c49d6e39ac2cea7b0da7aa38419c919.JPG" className="ImgSmallProductIVY"></img>
                        <img src="https://pubcdn.ivymoda.com/files/product/thumab/1400/2023/09/16/40cef601b976d9e3d0f4494325101353.JPG" className="ImgSmallProductIVY"></img>

                    </div>
                </div>
                <div className="ProductContentRight">
                    <div>
                        <h1 className="NameOfProductIVY">Đầm dáng VEST</h1>
                    </div>
                    <div className="IdNotableAndStarForProduct">
                        <p className="IdOfProductIVY">SKU:48M7136</p>
                        <div className="StarForProduct">
                            <box-icon name='star' type='solid' color='#dcd011' ></box-icon>
                            <box-icon name='star' type='solid' color='#dcd011' ></box-icon>
                            <box-icon name='star' type='solid' color='#dcd011' ></box-icon>
                            <box-icon name='star' type='solid' color='#dcd011' ></box-icon>
                            <box-icon name='star' type='solid' color='#dcd011' ></box-icon>
                        </div>
                        <p className="CommentForProduct">
                            (0 đánh giá)
                        </p>
                    </div>
                    <div className="PriceMainAndPriceAfterSale">
                        <h2>1.095.000đ </h2>
                        <p>2.190.000đ</p>
                    </div>
                    <div>
                        <h3>Màu sắc : Đỏ mận</h3>
                    </div>
                    <div className="AllSizeFromProductDetail">
                        <p className="SizeFromOption SizeFromProductDetail" >s</p>
                        <p className="SizeFromOption SizeFromProductDetail">m</p>
                        <p className="SizeFromOption SizeFromProductDetail">l</p>
                        <p className="SizeFromOption SizeFromProductDetail">xl</p>
                        <p className="SizeFromOption SizeFromProductDetail">xxl</p>
                    </div>
                    <div className="AllCheckSizeOfCustomer">
                        <a href="" className="CheckSizeOfCustomer">Kiểm tra size của bạn</a>
                    </div>
                    <div className="NumberBuyProduct">
                        <div>
                            <p>Số lượng</p>
                        </div>
                        <div className="AllInputNumberBuy">
                            <button onClick={decreaseValue} className="ButtonChangeNumberBuy"><p>-</p></button>
                            <input type="number" min={0} max={4} onChange={(e) => setValue(Number(e.target.value))} value={value} className="InputNumberBuyIVYModa"></input>
                            <button onClick={IncreaseValue} className="ButtonChangeNumberBuy"><p>+</p></button>
                        </div>
                    </div>
                    <div className="AllButtonBuy">
                        <div className="ButtonBuyProduct ButtonBuyProductLeft">
                            <h3 className="ButtonBuyOnDetailProduct">Thêm vào giỏ</h3>
                        </div>
                        <div className="ButtonBuyProduct ButtonBuyProductRight">
                            <h3 className="ButtonBuyOnDetailProduct">Mua Hàng</h3>
                        </div>
                        <div className="ButtonBuyProduct buttonIconLikeTheProduct">
                            <box-icon name='heart'></box-icon>
                        </div>
                    </div>
                    <div>
                        <a href="" className="CheckSizeOfCustomer" style={{ textDecoration: 'underline' }}>Tìm tại cửa hàng</a>
                    </div>
                    <div className="AllIntroduceTheProductDetail ">
                        <p className="IntroduceTheProductDetail" onClick={handleClick1}>giới thiệu</p>
                        <p className="IntroduceTheProductDetail" onClick={handleClick2}>Chi tiết sản phẩm</p>
                        <p className="IntroduceTheProductDetail" onClick={handleClick3}>Bảo quản</p>
                    </div>
                    <div>
                        {showElememt1 &&
                            <div>
                                <div className="DesCritionOfOptionInIntroduceDetail">
                                    <p>Set bộ vest với áo vest 2 khuy chiết eo kết hợp quần suông dáng lửng thể hiện sự thời trang, sành điệu của người phụ nữ, phù hợp cho nhiều dịp khác nhau như công sở, dự tiệc, hay các sự kiện quan trọng.</p>
                                    {compactInformation &&
                                        <div><p>Áo vest 2 khuy chiết eo tạo nét thanh lịch và chuyên nghiệp. Đảm bảo áo vest vừa vặn, tôn lên vóc dáng người mặc. </p>
                                            <p>Quần suông dáng lửng thoải mái, mang lại sự năng động lại phù hợp với áo vest.</p>
                                            <p>Nàng có thể mix bộ vest với giày cao gót hoặc giày oxford để tăng thêm vẻ lịch lãm. Bổ sung thêm phụ kiện như dây chuyền, đồng hồ, và túi xách phù hợp để hoàn thiện ensemble cho mình. </p>
                                            <h5>Thông tin mẫu</h5>
                                            <div className="InformationAboutPhotosample">
                                                <h5>Chiều cao : </h5>
                                                <p>167cm</p>
                                            </div>
                                            <div className="InformationAboutPhotosample">
                                                <h5>cân  nặng : </h5>
                                                <p>50 kg</p>
                                            </div>
                                            <div className="InformationAboutPhotosample">
                                                <h5>Số đo 3 vòng : </h5>
                                                <p>83-65-93 cm</p>
                                            </div>
                                            <p className="InformationAboutPhotosample">Mẫu mặc size M</p>
                                            <div >
                                                <p>Lưu ý : Lưu ý màu sắc sản phẩm thực tế sẽ có sự chênh lệch nhỏ so với ảnh do điều kiện ánh sáng khi chụp màu sắc hiển thị qua màn hình máy tính/điện thoại</p>
                                            </div>
                                        </div>}

                                </div>
                                {showButton1 &&
                                    <div className="ButtonShowMoreInformation">

                                        <box-icon name='chevron-down' onClick={HandelClickToMoreInformation1}></box-icon>
                                    </div>

                                }

                                {!showButton1 &&
                                    <div className="ButtonShowMoreInformation">
                                        <box-icon name='chevron-up' onClick={HandelClickToMoreInformation1}></box-icon>
                                    </div>
                                }


                            </div>

                        }
                        {showElememt2 &&
                            <div>
                                <div className="InformationAboutPhotosample">
                                    <h5>Dòng sản phẩm : </h5>
                                    <p>Ladies</p>
                                </div>
                                <div className="InformationAboutPhotosample">
                                    <h5>Nhóm sản phẩm : </h5>
                                    <p>	Áo khoác  </p>
                                </div>
                                <div className="InformationAboutPhotosample">
                                    <h5>Cổ áo : </h5>
                                    <p>Cổ hai ve</p>
                                </div>
                                {compactInformation &&
                                    <div>
                                        <div className="InformationAboutPhotosample">
                                            <h5>Tay áo : </h5>
                                            <p>Tay dài </p>
                                        </div>
                                        <div className="InformationAboutPhotosample">
                                            <h5>Kiểu dáng : </h5>
                                            <p>Eo</p>
                                        </div>
                                        <div className="InformationAboutPhotosample">
                                            <h5>Độ dài : </h5>
                                            <p>Ngang mông</p>
                                        </div>
                                        <div className="InformationAboutPhotosample">
                                            <h5>Họa tiết : </h5>
                                            <p>trơn</p>
                                        </div>
                                        <div className="InformationAboutPhotosample">
                                            <h5>Chất liệu : </h5>
                                            <p>Tuysi</p>
                                        </div>
                                    </div>
                                }

                                {showButton1 &&
                                    <div className="ButtonShowMoreInformation">

                                        <box-icon name='chevron-down' onClick={HandelClickToMoreInformation1}></box-icon>
                                    </div>

                                }

                                {!showButton1 &&
                                    <div className="ButtonShowMoreInformation">
                                        <box-icon name='chevron-up' onClick={HandelClickToMoreInformation1}></box-icon>
                                    </div>
                                }

                            </div>

                        }
                        {showElememt3 &&
                            <div>
                                <p>Chi tiết bảo quản sản phẩm</p>
                                <h4>* Các sản phẩm thuộc dòng cao cấp (Senora) và áo khoác (dạ, tweed, lông, phao) chỉ giặt khô, tuyệt đối không giặt ướt.</h4>
                                {compactInformation &&
                                    <div>
                                        <p>* Vải dệt kim: sau khi giặt sản phẩm phải được phơi ngang tránh bai giãn.</p>
                                        <p>* Vải voan, lụa, chiffon nên giặt bằng tay.</p>
                                        <p>* Vải thô, tuytsi, kaki không có phối hay trang trí đá cườm thì có thể giặt máy.</p>
                                        <p>* Vải thô, tuytsi, kaki có phối màu tương phản hay trang trí voan, lụa, đá cườm thì cần giặt tay.</p>
                                        <p>* Đồ Jeans nên hạn chế giặt bằng máy giặt vì sẽ làm phai màu jeans. Nếu giặt thì nên lộn trái sản phẩm khi giặt, đóng khuy, kéo khóa, không nên giặt chung cùng đồ sáng màu, tránh dính màu vào các sản phẩm khác. </p>
                                        <p>* Các sản phẩm cần được giặt ngay không ngâm tránh bị loang màu, phân biệt màu và loại vải để tránh trường hợp vải phai. Không nên giặt sản phẩm với xà phòng có chất tẩy mạnh, nên giặt cùng xà phòng pha loãng.</p>
                                        <p>* Các sản phẩm có thể giặt bằng máy thì chỉ nên để chế độ giặt nhẹ, vắt mức trung bình và nên phân các loại sản phẩm cùng màu và cùng loại vải khi giặt.</p>
                                        <p>* Nên phơi sản phẩm tại chỗ thoáng mát, tránh ánh nắng trực tiếp sẽ dễ bị phai bạc màu, nên làm khô quần áo bằng cách phơi ở những điểm gió sẽ giữ màu vải tốt hơn.</p>
                                        <p>* Những chất vải 100% cotton, không nên phơi sản phẩm bằng mắc áo mà nên vắt ngang sản phẩm lên dây phơi để tránh tình trạng rạn vải.</p>
                                        <p>* Khi ủi sản phẩm bằng bàn là và sử dụng chế độ hơi nước sẽ làm cho sản phẩm dễ ủi phẳng, mát và không bị cháy, giữ màu sản phẩm được đẹp và bền lâu hơn. Nhiệt độ của bàn là tùy theo từng loại vải. </p></div>}
                            </div>}
                        {showButton1 &&
                            <div className="ButtonShowMoreInformation">

                                <box-icon name='chevron-down' onClick={HandelClickToMoreInformation1}></box-icon>
                            </div>

                        }

                        {!showButton1 &&
                            <div className="ButtonShowMoreInformation">
                                <box-icon name='chevron-up' onClick={HandelClickToMoreInformation1}></box-icon>
                            </div>
                        }
                    </div>

                </div>
            </div>
            <div className="AllTheSameProductOniVY">
                <div className="TheSameProductOniVY">
                    <h1>Sản phẩm tương tự</h1>
                </div>
                <div className='ALLProductionOfivymodaOnSameProduct'>

                    <div className="ProductionOfivymodaOnSameProduct" ><ProductionOfIvyPage ProductionElement={Production2} ></ProductionOfIvyPage></div>
                    <div className="ProductionOfivymodaOnSameProduct" ><ProductionOfIvyPage ProductionElement={Production3} className="ProductionOfivymodaOnSameProduct"></ProductionOfIvyPage></div>
                    <div className="ProductionOfivymodaOnSameProduct" ><ProductionOfIvyPage ProductionElement={Production3} className="ProductionOfivymodaOnSameProduct"></ProductionOfIvyPage></div>
                    <div className="ProductionOfivymodaOnSameProduct" ><ProductionOfIvyPage ProductionElement={Production3} className="ProductionOfivymodaOnSameProduct"></ProductionOfIvyPage></div>
                </div>

            </div>
            <div className="AllTheProductSeenBefore">
                <div className="TheSameProductOniVY">
                    <h1>Sản phẩm đã xem</h1>
                </div>
                <div className='ALLProductionOfivymodaOnSameProduct'>

                    <div className="ProductionOfivymodaOnSameProduct" ><ProductionOfIvyPage ProductionElement={Production2} ></ProductionOfIvyPage></div>
                    <div className="ProductionOfivymodaOnSameProduct" ><ProductionOfIvyPage ProductionElement={Production3} className="ProductionOfivymodaOnSameProduct"></ProductionOfIvyPage></div>
                    <div className="ProductionOfivymodaOnSameProduct" ><ProductionOfIvyPage ProductionElement={Production3} className="ProductionOfivymodaOnSameProduct"></ProductionOfIvyPage></div>
                    <div className="ProductionOfivymodaOnSameProduct" ><ProductionOfIvyPage ProductionElement={Production3} className="ProductionOfivymodaOnSameProduct"></ProductionOfIvyPage></div>
                </div>

            </div>
            <div className="AllImgSaleOnIVYmodaPRODUCT">
                <div className="ImgSaleOnIVYmodaPRODUCT">
                    <div className="BorderIvyModa">
                    <Link to={"/"}>  <img src="https://pubcdn.ivymoda.com/files/news/2023/11/07/867f27ace7f96580715df7897f26b540.jpg" className="ImgSaleOnIvyModa"></img></Link>
                    </div>
                </div>
            </div>
            <div>
                <IntroduceAndEndIvyPage></IntroduceAndEndIvyPage>
            </div>

        </div>
    );
}

export default ProductDetail;