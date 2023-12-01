import React from "react";
import './index.css'
import { useState } from 'react';
import News_BDS_1 from "../News_BDS_1"
import News_BDS_2 from "../News_BDS_2";
import News_BDS_3 from "../News_BDS_3";
import News_BDS_4 from "../News_BDS_4";
import All_News_BDS from "../All_News_BDS";


function News_BDS_Main() {
    const [components, showComponent] = useState(true)
    const [components1, showComponent1] = useState(null)
    const [components2, showComponent2] = useState(null)
    const [components3, showComponent3] = useState(null)

    const hanldelClick = () => {
        showComponent(true)
        showComponent1(null)
        showComponent2(null)
        showComponent3(null)

    }

    const hanldelClick2 = () => {
        showComponent(null)
        showComponent1(true)
        showComponent2(null)
        showComponent3(null)
    }

    const hanldelClick3 = () => {
        showComponent(null)
        showComponent1(null)
        showComponent2(true)
        showComponent3(null)
    }

    const hanldelClick4 = () => {
        showComponent(null)
        showComponent1(null)
        showComponent2(null)
        showComponent3(true)
    }


    return (
        <div className="Page_NewsMain">

            <div className="News_BDS_2">

                <div className="News_bds_3"><button className="News_bds" onClick={hanldelClick}>Tin nổi bật</button></div>
                <div className="News_bds_3"><button className="News_bds" onClick={hanldelClick2}>Tin tức</button></div>
                <div className="News_bds_3"><button className="News_bds" onClick={hanldelClick3}>BĐS TPHCM</button></div>
                <div className="News_bds_3"><button className="News_bds" onClick={hanldelClick4}>BĐS Hà Nội</button></div>
                <div className="News_BDS_3_newsnext"><button className="next_news" >Xem thêm<i className="fa fa-arrow-right"></i></button></div>
            </div>
            <div>

                {components && (
                    <div className="TinNB"><All_News_BDS></All_News_BDS></div>
                )}


                {components1 && (
                    <div className="TinNB"><News_BDS_2></News_BDS_2></div>
                )}

                {components2 && (
                    <div className="TinNB"><News_BDS_3></News_BDS_3></div>
                )}

                {components3 && (
                    <div className="TinNB"><News_BDS_4></News_BDS_4></div>
                )}

            </div>
        </div>
    )
}

export default News_BDS_Main;