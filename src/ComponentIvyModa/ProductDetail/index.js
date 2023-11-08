import React from "react";
import HeaderIvyMoDa from "../HeaderIvymoda"
import { useState } from "react";
import './index.css'
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/sea-green';
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
                            <h2>Thêm vào giỏ</h2>
                        </div>
                        <div className="ButtonBuyProduct ButtonBuyProductRight">
                            <h2>Mua Hàng</h2>
                        </div>
                        <div className="ButtonBuyProduct">
                            <box-icon name='heart'></box-icon>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProductDetail;