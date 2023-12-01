import React from "react";
import "./index.css";
import HeaderIvyMoDa from "../HeaderIvymoda"
import IntroduceAndEndIvyPage from "../IntroduceAndEndIvyPage";
import { Link } from "react-router-dom";
function IntroduceOfivyPage() {
    return (
        <div>
            <div>
                <HeaderIvyMoDa></HeaderIvyMoDa>
            </div>
            <div className="ButtonToHomeAndNewArrival" >
                <h5 className="BackToHomeIvyModa" ><Link className="LinkToMorePrd" to="/">Trang chủ</Link></h5>
                <h5 className="BackToNewArrivalIvyModa ">Fashion show</h5>
            </div>
            <div className="AllIntroducePage">
                <div className="AllImgfromIntroducePage">
                    <img src="https://pubcdn.ivymoda.com/files/news/2023/01/28/d9b35efcb2e9b92794dcd64cafb07f66.jpg" className="ImgfromIntroducePage"></img>
                    <img src="https://pubcdn.ivymoda.com/files/news/2023/01/28/3e954d8077a8893b32dc9c29ea1ca7fa.jpg" className="ImgfromIntroducePage"></img>
                    <img src="https://pubcdn.ivymoda.com/files/news/2023/01/28/01e12c182a7ac719b25821c7bf71964d.jpg" className="ImgfromIntroducePage"></img>
                    <img src="https://pubcdn.ivymoda.com/files/news/2023/01/28/62814f0335a3abeeffb126422a5f4a80.jpg" className="ImgfromIntroducePage"></img>
                    <img src="https://pubcdn.ivymoda.com/files/news/2023/03/31/71fd257ed566e95e2fa47ab0b1d9e763.jpg" className="ImgfromIntroducePage"></img>
                    <img src="https://pubcdn.ivymoda.com/files/news/2023/01/28/08d6fab2cb5d5dd44418706cb40754e6.jpg" className="ImgfromIntroducePage"></img>
                    <img src="https://pubcdn.ivymoda.com/files/news/2023/01/28/993e2eadafa16dd56079b45a4e858f73.jpg" className="ImgfromIntroducePage"></img>
                    <img src="https://pubcdn.ivymoda.com/files/news/2023/01/28/4eeadc06afb1d79a8041ad73e737a568.jpg" className="ImgfromIntroducePage"></img>
                    <img src="https://pubcdn.ivymoda.com/files/news/2023/01/28/6f8462667caf84b5904ae7c3cdbb5ed4.jpg" className="ImgfromIntroducePage"></img>
                    <img src="https://pubcdn.ivymoda.com/files/news/2023/01/30/96990ec5a3cafbe4441949dc6d5a11d4.jpg" className="ImgfromIntroducePage"></img>
                    <img src="https://pubcdn.ivymoda.com/files/news/2023/01/30/e8d1e3e0f3d4364156a9152fbb8480c9.jpg" className="ImgfromIntroducePage"></img>
                    <img src="https://pubcdn.ivymoda.com/files/news/2023/01/30/ddf0ce2eb0964fb6914ed482971250e0.jpg" className="ImgfromIntroducePage"></img>
                    <img src="https://pubcdn.ivymoda.com/files/news/2023/01/30/b5508e1b929d1e1b24d86c61d6d52f92.jpg" className="ImgfromIntroducePage"></img>
                </div>
                <div>
                    <IntroduceAndEndIvyPage></IntroduceAndEndIvyPage>
                </div>

            </div>
        </div>
    )
}

export default IntroduceOfivyPage