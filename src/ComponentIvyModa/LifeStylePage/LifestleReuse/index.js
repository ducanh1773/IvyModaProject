import React from "react";
import { ProductionIvy } from "../../NewArrivalIvyModa/arrivalReuse/arrivalSubject";
import './index.css';
import { Link } from "react-router-dom";

function Itermlifestyle_first(props) {
    const ProductionElement = props.ProductionElement.map((t) => {
        return (
            <Link to={t.ImgUrl2} className="LinkOfObJetcLifeSTe">
                <div className="AlìnormationInObjectOfLifeStyle">
                    <div className="MainLeftOfItermLifeStyle">
                        <div className="StoryOfLifeStyle">
                            STORY
                        </div>
                        <div className="SubjectItermOfLifeStye">
                            <h2>
                                {t.NameOfProduction}
                            </h2>
                            <p>
                                {t.ColorOfproduction}
                            </p>
                            <p className="DateOfObjectLifestle">{t.Date}</p>
                        </div>
                        <Link className="LinkMoreOftionInObjectLifeStle">Xem ngay</Link>
                    </div>
                    <div className="">
                        <img src={t.ImgUrl1} className="ImgOfItermlIFEsTLE"></img>
                    </div>
                </div>
            </Link>
        )
    })
    return (
        <div>
            {ProductionElement}
        </div>
    )

}

export default Itermlifestyle_first