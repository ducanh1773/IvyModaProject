import React from "react";
import './index.css'
import Header from "../Header/Main_header";
import SearchEngine from "../SearchEngine";
import News_BDS_Main from '../News_BDS/News_BDS_main'
import BDSFY from '../BDSFY/BDSFY2'
import Main_Oustanding from "../Outstanding";
import BDS_DD_Main from "../BDSđiaiem"
import Tintucmain from "../Tin_Tuc_bds/tintucmain"
import SupportClientMain from "../Support_client/Support_client_1/Support_client_main"
import Representative_Enterprise from "../Representative_Enterprise/Reppresen"
import BaoChiNoiVeBDS from "../BaoChiNoiveBDS";
import Introduce_BDS_Main from '../Introduce_BDS'
import LastIntroduceMain from '../Last_Introduce_Main'
function Main_Page_BDS(){
    return(
        <div>
            <div className="HeaderOnMainBatDongSan">
            <Header></Header>
            </div>
            <div className="SearchEngineOnMain">
                <SearchEngine></SearchEngine>
            </div>
            <div className="NewsBDSOnMain">
                <News_BDS_Main></News_BDS_Main>
            </div>
            <div className="MainBDSFYOnHomePageBDS">
                <BDSFY></BDSFY>
            </div>
            {/* <div>
                <Main_Oustanding></Main_Oustanding>
            </div> */}
            <div>
                < BDS_DD_Main></ BDS_DD_Main>
            </div>
            <div className="TinTucMainBDS">
                <Tintucmain></Tintucmain>
            </div>
            <div className="SPClientOnMain">
                <SupportClientMain></SupportClientMain>
            </div>
            <div className="DoanhNghiepTieuBieuOnMain">
                <Representative_Enterprise></Representative_Enterprise>
            </div>
            <div className="BaoChiNoiVeBDSMain">
                <BaoChiNoiVeBDS></BaoChiNoiVeBDS>
            </div>
            <div className="Lastpage_2">
                <div className="Last_Page">
                    <a href="" className="Link_Last_Page"><img src="https://staticfile.batdongsan.com.vn/images/box-link-footer/apagf-horizontal.svg"></img></a>
                    <a href="" className="Link_Last_Page"><img src="https://staticfile.batdongsan.com.vn/images/box-link-footer/ares-horizontal.svg"></img></a>
                    <a href="" className="Link_Last_Page2"><img src="https://staticfile.batdongsan.com.vn/images/box-link-footer/property-report.svg"></img></a>
                </div>
            </div>
            <div className="Main_Introduce">
                <Introduce_BDS_Main></Introduce_BDS_Main>
            </div>
            <div>
                <LastIntroduceMain></LastIntroduceMain>
            </div>

        </div>
    )
}

export default Main_Page_BDS;