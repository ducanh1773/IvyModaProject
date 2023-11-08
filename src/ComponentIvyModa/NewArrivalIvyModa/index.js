import React, { useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "./index.css"
import ProductionOfIvy from "../NewArrivalIvyModa/arrivalReuse"
import '@splidejs/react-splide/css';
function NewArrivalIvyModa() {
    // Bang Nu
    const Production1 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/10/20/8a2241d4a39c3760bc7d6c9a29d82551.jpg',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]
    const Production4 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/10/23/c4b8e47d2488dff5d0a910520c306f57.jpg',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]
    //Bang Nam
    const Production2 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/09/25/bfe1d5a36dc8d579602626e1fc68281a.jpg',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]
    const Production5 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/08/04/71465941684cd1106d7ae510ef940093.JPG',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]
    //Bang tre em


    const Production3 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/10/12/d4e6d3ce2610d7551a2fcb30449829b9.jpg',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]

    const Production6 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/09/13/ed47069ba9a8c1d60033268237201600.jpg',
        ColorOfproduction: 'Black', NameOfProduction: 'áo sơ mi lụa cổ đổ', Price: '950.000đ'
    }]






    const [showElement, setShowelement] = useState(true)
    const [showElement1, setShowelement1] = useState(false)
    const [showElement2, setShowelement2] = useState(false)
    const [showElement3, setShowelement3] = useState(false)
    const [showElement4, setShowelement4] = useState(true)
    const [showElement5, setShowelement5] = useState(false)
    const [showElement6, setShowelement6] = useState(false)


    const handleClick = () => {
        setShowelement(true)
        setShowelement1(false)
        setShowelement2(false)
    }


    const handleClick1 = () => {
        setShowelement(false)
        setShowelement1(true)
        setShowelement2(false)
    }

    const handleClick2 = () => {
        setShowelement(false)
        setShowelement1(false)
        setShowelement2(true)
    }

    const handleClick3 = () => {
        setShowelement4(false)
        setShowelement5(false)
        setShowelement3(true)

    }

    const handleClick4 = () => {
        setShowelement4(true)
        setShowelement5(false)
        setShowelement3(false)
    }


    const handleClick5 = () => {
        setShowelement4(false)
        setShowelement5(true)
        setShowelement3(false)
    }






    return (
        <div className="AllNewArrivalIvy">
            <div className="AllImgSaleOnIvyModa">
                <Splide options={{ rewind:'true' , type:'loop' , 
            padding:{left:'4.5%'}}}>
                    <SplideSlide>
                        <div className="BorderIvyModa">
                            <img src="https://pubcdn.ivymoda.com/files/news/2023/10/04/ff74da15a8c24facbaeb14418c38360a.jpg" className="ImgSaleOnIvyModa"></img>
                        </div>

                    </SplideSlide>
                    <SplideSlide>
                        <div className="BorderIvyModa">
                            <img src="https://pubcdn.ivymoda.com/files/news/2023/10/17/e0975ff464b1ba7b66b2f36b8fb2bfd0.jpg" className="ImgSaleOnIvyModa"></img>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="BorderIvyModa">
                            <img src="https://pubcdn.ivymoda.com/files/news/2023/10/27/2a437c9126c0a2445856e51c89e6b8c0.jpg" className="ImgSaleOnIvyModa"></img>
                        </div>
                    </SplideSlide>
                </Splide>

            </div>
            <div className="NewArrivalMain">
                <h1>New Arrival </h1>

            </div>
            <div className="OptionOfArrival">
                <h2 className="ArrivalForDifferenceObject" onClick={handleClick}>IVY moda</h2>
                <h2 className="ArrivalForDifferenceObject" onClick={handleClick1}>IVY men</h2>
                <h2 className="ArrivalForDifferenceObject" onClick={handleClick2}>IVY kids</h2>

            </div>
            <div>
                {showElement &&
                    <div className="ArrivalProductionForWoman">
                        <ProductionOfIvy ProductionElement={Production1} ></ProductionOfIvy>
                        <ProductionOfIvy ProductionElement={Production1} ></ProductionOfIvy>
                        <ProductionOfIvy ProductionElement={Production1} ></ProductionOfIvy>
                        <ProductionOfIvy ProductionElement={Production1} ></ProductionOfIvy>
                        <ProductionOfIvy ProductionElement={Production1} ></ProductionOfIvy>
                    </div>
                }
                {showElement1 &&
                    <div className="ArrivalProductionForWoman">
                        <ProductionOfIvy ProductionElement={Production2} ></ProductionOfIvy>
                        <ProductionOfIvy ProductionElement={Production2} ></ProductionOfIvy>
                        <ProductionOfIvy ProductionElement={Production2} ></ProductionOfIvy>
                        <ProductionOfIvy ProductionElement={Production2} ></ProductionOfIvy>
                        <ProductionOfIvy ProductionElement={Production2} ></ProductionOfIvy>
                    </div>
                }

                {showElement2 &&
                    <div className="ArrivalProductionForWoman">
                        <ProductionOfIvy ProductionElement={Production3} ></ProductionOfIvy>
                        <ProductionOfIvy ProductionElement={Production3} ></ProductionOfIvy>
                        <ProductionOfIvy ProductionElement={Production3} ></ProductionOfIvy>
                        <ProductionOfIvy ProductionElement={Production3} ></ProductionOfIvy>
                        <ProductionOfIvy ProductionElement={Production3} ></ProductionOfIvy>
                    </div>
                }


                <div className="AllOptionInArrival" href="">
                    <a href="" className="LinkArrvial"><p>Xem tất cả</p></a>
                </div>



                <div className="NewArrivalMain">
                    <h1>BEST SELLER </h1>

                </div>
                <div className="OptionOfArrival">
                    <h2 className="ArrivalForDifferenceObject" onClick={handleClick3}>IVY moda</h2>
                    <h2 className="ArrivalForDifferenceObject" onClick={handleClick4}>IVY men</h2>
                    <h2 className="ArrivalForDifferenceObject" onClick={handleClick5}>IVY kids</h2>

                </div>


                <div>
                    {showElement3 &&
                        <div className="ArrivalProductionForWoman">
                            <ProductionOfIvy ProductionElement={Production4} ></ProductionOfIvy>
                            <ProductionOfIvy ProductionElement={Production4} ></ProductionOfIvy>
                            <ProductionOfIvy ProductionElement={Production4} ></ProductionOfIvy>
                            <ProductionOfIvy ProductionElement={Production4} ></ProductionOfIvy>
                            <ProductionOfIvy ProductionElement={Production4} ></ProductionOfIvy>
                        </div>
                    }
                    {showElement4 &&
                        <div className="ArrivalProductionForWoman">
                            <ProductionOfIvy ProductionElement={Production5} ></ProductionOfIvy>
                            <ProductionOfIvy ProductionElement={Production5} ></ProductionOfIvy>
                            <ProductionOfIvy ProductionElement={Production5} ></ProductionOfIvy>
                            <ProductionOfIvy ProductionElement={Production5} ></ProductionOfIvy>
                            <ProductionOfIvy ProductionElement={Production5} ></ProductionOfIvy>
                        </div>
                    }

                    {showElement5 &&
                        <div className="ArrivalProductionForWoman">
                            <ProductionOfIvy ProductionElement={Production6} ></ProductionOfIvy>
                            <ProductionOfIvy ProductionElement={Production6} ></ProductionOfIvy>
                            <ProductionOfIvy ProductionElement={Production6} ></ProductionOfIvy>
                            <ProductionOfIvy ProductionElement={Production6} ></ProductionOfIvy>
                            <ProductionOfIvy ProductionElement={Production6} ></ProductionOfIvy>
                        </div>
                    }
                </div>
                <div className="AllOptionInArrival" href="">
                    <a href="" className="LinkArrvial"><p>Xem tất cả</p></a>
                </div>

                <div className="TheNoteFromRealValue">
                    <div className="SubjectNoteFromRealValue">
                        <h1 style={{ fontWeight: "500" }}>Lời bày tỏ từ giá trị đích thực</h1>
                    </div>
                    <div className="AllOptionFromTheNoteFromRealValue">
                        <div className="OptionFromTheRealValue">
                            <a href="">
                                <img src="https://pubcdn.ivymoda.com/files/news/2023/10/05/bf77ab02aa0d76266784c54c5c23142f.jpg" className="ImgOption"></img>
                                <h3>Sang trọng</h3>
                            </a>
                        </div>
                        <div className="OptionFromTheRealValue">
                            <a href="">
                                <img src="https://pubcdn.ivymoda.com/files/news/2023/10/05/eafa905f60a379488f3dcd322bd549d5.jpg" className="ImgOption"></img>
                                <h3>Đẳng cấp</h3>
                            </a>
                        </div>
                        <div className="OptionFromTheRealValue">
                            <a href="">
                                <img src="https://pubcdn.ivymoda.com/files/news/2023/10/05/4e9e273b3e53bca4ee63d21a0a80c2c3.jpg" className="ImgOption"></img>
                                <h3>Thời thượng</h3>
                            </a>
                        </div>
                        <div className="OptionFromTheRealValue"><a href="">
                            <img src="https://pubcdn.ivymoda.com/files/news/2023/10/05/5c9fa3e3445bdaa8352f46ef8b8d2f2b.jpg" className="ImgOption"></img>
                            <h3>Lôi cuốn</h3>
                        </a>
                        </div>
                    </div>
                </div>
                <div className="AllImgSaleOnIvyModa">
                    <div className="BorderIvyModa">
                        <img src="https://pubcdn.ivymoda.com/files/news/2023/10/19/9e3e410ed9963aae6e11288e9712c34d.jpg" className="ImgSaleOnIvyModa"></img>
                    </div>
                </div>

                <div className="GalleryFromIvyModa">
                    <div className="NewArrivalMain">
                        <h1>GALLERY</h1>

                    </div>
                    <div className="OptionFromGallery">
                        <a href=""> <img src="https://pubcdn.ivymoda.com/files/news/2023/10/23/75606fe95735c6be71e47784b4ee55ae.jpg" style={{}}></img></a>
                        <a href=""> <img src="https://pubcdn.ivymoda.com/files/news/2023/10/23/84122f992c83a8f0046e0cc6242584f2.jpg"></img></a>
                        <a href=""> <img src="https://pubcdn.ivymoda.com/files/news/2023/10/23/ab6cef1bc439783f092c0c3d2f7eb5b7.jpg"></img></a>
                        <a href=""> <img src="https://pubcdn.ivymoda.com/files/news/2023/10/23/3ba30d59e7497a1aebb9dee83cd475a7.jpg"></img></a>
                        <a href=""> <img src="https://pubcdn.ivymoda.com/files/news/2023/10/23/a93485b2213cc23d0913e1d32ebadc52.jpg"></img></a>
                    </div>
                </div>





            </div>

        </div>
    )
}

export default NewArrivalIvyModa;