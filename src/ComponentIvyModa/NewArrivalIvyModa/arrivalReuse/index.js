import React from "react";
import { useState } from "react";
import "./index.css"
import { ProductionIvy } from "../arrivalReuse/arrivalSubject"

function ProductionOfIvy(props) {
    const ProductionElement = props.ProductionElement.map((t) => {
        return (
            <div className="InformationOfProjectIvy">
                <div>
                    <div className="ImgOfProjectIvy">
                        <img src={t.ImgUrl1} className="ImgOfproductionIvy"></img>

                    </div>
                    <div className="ColorAndFavorite">
                        <div className=""></div>
                        <div className="IconOfProductInArrival"><box-icon name='heart'></box-icon></div>
                    </div>
                    <div className="NameOfProduction">
                        <p>{t.NameOfProduction}</p>
                    </div>
                    <div className="PriceAndBuy">
                        <p className="PriceOfProject">{t.Price}</p>
                        <div className="IconCartOfPorject"><box-icon name='cart'></box-icon></div>
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

export default ProductionOfIvy;