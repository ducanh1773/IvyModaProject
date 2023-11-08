import { ProductionIvy } from "../../NewArrivalIvyModa/arrivalReuse/arrivalSubject"
import React from "react"
import "./index.css"
import { useState } from "react";
function ProductionOfIvyPage(props) {
    const ProductionElement = props.ProductionElement.map((t) => {
        return (
            <div className="InformationOfProjectIvyFullPage">
                <div>
                    <div className="ImgOfProjectIvyFullPage">
                        <img src={t.ImgUrl1} className="ImgOfproductionIvyFullPage"></img>

                    </div>
                    <div className="ColorAndFavoriteFullPage">
                        <div className=""></div>
                        <div className="IconOfProductInArrivalFullPage"><box-icon name='heart'></box-icon></div>
                    </div>
                    <div className="NameOfProductionFullPageIvy">
                        <p>{t.NameOfProduction}</p>
                    </div>
                    <div className="PriceAndBuyFullPageIvy">
                        <p className="PriceOfProjectFullPageIvy">{t.Price}</p>
                        <div className="IconCartOfPorjectFullPageIvy"><box-icon name='shopping-bags' type='solid' color='#bdbaba' ></box-icon></div>
                    </div>
                </div>
            </div>
        )
    }
    )

    return(
        <div>
            {ProductionElement}
        </div>
    )

}

export default ProductionOfIvyPage;