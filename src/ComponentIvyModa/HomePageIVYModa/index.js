

import * as React from 'react';

import { useState, useEffect } from 'react';
import { Range, getTrackBackground } from 'react-range';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import HeaderIvyMoDa from "../HeaderIvymoda"
import NewArrivalIvyModa from "../NewArrivalIvyModa"
import IntroduceAndEndIvyPage from "../IntroduceAndEndIvyPage"

import OptionProduct from "../ProductPortfolio"

function HomePageIvyModa() {
    return (
        <div>
            <HeaderIvyMoDa></HeaderIvyMoDa>
            <NewArrivalIvyModa></NewArrivalIvyModa>
            <IntroduceAndEndIvyPage></IntroduceAndEndIvyPage>
        </div>
    )
}

export default HomePageIvyModa

