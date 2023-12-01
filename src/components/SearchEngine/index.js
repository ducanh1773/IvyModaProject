import React, { useState } from "react";
import './index.css'
import SearchEngine_2 from "./SearchEgine_2";
import SearchEngine3 from "./SearchEgine_3";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

function SearchEngine() {


    const [showComponent, setshowComponet] = useState(true)
    const [showDropdown2, setShowDropdown2] = useState(false);
    const [showDropdown3, setShowDropdown3] = useState(false);

    const handleClick = () => {
        if (!showComponent === false && showDropdown2 === false && showDropdown3 === false) {

        } else {
            setshowComponet(!showComponent);
            setShowDropdown2(false)
            setShowDropdown3(false)


        }
    }

    const handleClick2 = () => {
        if (showComponent === false && showDropdown3 === false) {
            showDropdown2 = true

        }
        setShowDropdown2(!showDropdown2);
        setshowComponet(false)
        setShowDropdown3(false)

    }

    const handleClick3 = () => {
        if (showComponent === false && showDropdown2 === false) {
            showDropdown3 = true

        } else {
            setShowDropdown3(!showDropdown3)
            setShowDropdown2(false);
            setshowComponet(false)

        }
    }





    return (

        <div className="searchEngine">

            <div className="option_sg">
                <div className="OptionSGButton">
                    <button className={"bt_sg" + (showComponent ? ' active ' : "")} onClick={handleClick}>Nhà đất bán</button>
                    <button className={"bt_sg" + (showDropdown2 ? ' active ' : "")} onClick={handleClick2} >Nhà đất cho thuê</button>
                    <button className={"bt_sg" + (showDropdown3 ? ' active ' : "")} onClick={handleClick3}>Dự án</button>
                </div>

            </div>
            <div>
                {showComponent && (
                    <div className="sg_dr">
                        <SearchEngine_2></SearchEngine_2>
                    </div>
                )}

                {
                    showDropdown2 && (
                        <div className="sg_dr">
                            <SearchEngine_2></SearchEngine_2>
                        </div>
                    )
                }

                {
                    showDropdown3 && (
                        <div className="sg_dr">
                            <SearchEngine3></SearchEngine3>
                        </div>
                    )
                }
            </div>


        </div>
    )
}

export default SearchEngine;