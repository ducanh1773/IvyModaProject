import React from "react";
import "./index.css"
import HeaderIvyMoDa from "../HeaderIvymoda"
import IntroduceAndEndIvyPage from "../IntroduceAndEndIvyPage";
import { Link } from "react-router-dom";
import Itermlifestyle_first from "./LifestleReuse"
function LifeStyePage() {
    const ps1 = [{
        ImgUrl1: 'https://pubcdn.ivymoda.com/files/news/2023/10/25/c7c8af75854a0ab6b6e60398451a1db2.jpg',
        NameOfProduction: 'đột nhập hậu trường của show diễn express_fw23 fashion show',
        Date :'25/10/2023',
        ColorOfproduction: 'Bên cạnh những hình ảnh trteen sàn caatwalk, khaornh khắc tại hậu trường là nơi thể hiện só động nhất tinh thần cóng hiến hết mình của toàn bộ đội ngũ ekip thực hiện'

    }]
    return (
        <div>
            <div>
                <HeaderIvyMoDa></HeaderIvyMoDa>
            </div>
            <div className="ButtonToHomeAndNewArrival" >
                <h5 className="BackToHomeIvyModa" ><Link to="*" className="LinkToMorePrd">Trang chủ </Link></h5>
                <h5 className="BackToNewArrivalIvyModa">Tin tức</h5>
            </div>
            <div className="MainLifeStlePage">



            </div>
            <div className="AllSubjectLifeSTLE">
                <h1 className="SubjectLifeSTLE">LIFESTYLE</h1>
            </div>
            <div className="AllOptionLifeStye">
                <h2 className="">TIN TỨC</h2>
                <h2>KIẾN THỨC</h2>
                <h2>XU HƯỚNG</h2>
                <h2>PHONG CÁCH</h2>
                <h2>BLOG CHIA SẺ</h2>
            </div>
            <Itermlifestyle_first ProductionElement={ps1}></Itermlifestyle_first>
            <Itermlifestyle_first ProductionElement={ps1}></Itermlifestyle_first>
            <div>
                <IntroduceAndEndIvyPage></IntroduceAndEndIvyPage>
            </div>
        </div>
    )
}

export default LifeStyePage;