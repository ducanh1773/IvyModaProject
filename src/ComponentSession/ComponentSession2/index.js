import React, { useState } from "react";
import './index.css';

function ComponentsSessionSecond() {
    const [showInformation, setShowInformation] = useState(false);
    const [showArrow, setShowArrow] = useState(true)
    const handleSubmit = () => {
        setShowInformation(!showInformation);
        setShowArrow(!showArrow);
    }



    return (
        <div className="AllpageFloral">
            <div className="HeaderOfFloral">
                <h2>Floral & Decor</h2>
            </div>
            <div className="AlinformationInFloral">
                <div className="MainLeftSession">
                    <div className="AllImgOnFloral">
                        <img src="https://tse3.mm.bing.net/th?id=OIP.P1PQLkeXlGNQ39Pr8ovJlQHaE8&pid=Api&P=0&h=220"></img>
                    </div>
                    <div className="AllOptionOfFloral">
                        <div className="OptionOfFloral" onClick={handleSubmit}>
                            <h3>Floral</h3>
                            {showArrow &&
                                <box-icon name='chevron-down' color='#ddd7d7' ></box-icon>
                            }
                            {showInformation &&
                                <box-icon name='chevron-up' color='#ddd7d7' ></box-icon>
                            }
                        </div>
                        {showInformation &&
                            <p>The Design is the imagination, creativit and insprition that makes yuor event unioue . we work closel with you to sleuth out your style andd then use that insight to devlop every aesthetic component of our event from stationery and lightting to flowers and furniture</p>
                        }

                    </div>
                    <div className="AllOptionOfFloral">
                        <div className="OptionOfFloral">
                            <h3>Decor selection</h3>
                            <box-icon name='chevron-down' color='#ddd7d7' ></box-icon>
                        </div>
                    </div>
                    <div className="AllOptionOfFloral">
                        <div className="OptionOfFloral">
                            <h3>Hair&makeup</h3>
                            <box-icon name='chevron-down' color='#ddd7d7' ></box-icon>
                        </div>
                    </div>
                    <div className="AllOptionOfFloral">
                        <div className="OptionOfFloral">
                            <h3>Lingting&Sound</h3>
                            <box-icon name='chevron-down' color='#ddd7d7' ></box-icon>
                        </div>
                    </div>
                </div>
                <div className="MainRightSession2">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.5uxJXJj5pn8PlS6uluEMqwHaKM&pid=Api&P=0&h=220" className="ImgMainRightFloral"></img>

                </div>
            </div>
        </div>
    )
}
export default ComponentsSessionSecond;