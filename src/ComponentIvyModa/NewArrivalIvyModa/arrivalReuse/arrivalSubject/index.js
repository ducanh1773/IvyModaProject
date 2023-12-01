import React from "react";

export const ProductionIvy = (props) => {
    const {ImgUrl1 , ImgUrl2 , ColorOfproduction , NameOfProduction , Price , Date } = props
    return(
        <div>
            {ImgUrl1} - {ImgUrl2} - {ColorOfproduction} - {NameOfProduction} - {Price} - {Date}
        </div>
    )
}