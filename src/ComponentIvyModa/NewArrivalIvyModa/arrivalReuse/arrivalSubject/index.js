import React from "react";

export const ProductionIvy = (props) => {
    const {ImgUrl1 , ImgUrl2 , ColorOfproduction , NameOfProduction , Price } = props
    return(
        <div>
            {ImgUrl1} - {ImgUrl2} - {ColorOfproduction} - {NameOfProduction} - {Price}
        </div>
    )
}