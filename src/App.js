import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { Reuse } from './components/Reuse';
import { useState, useEffect } from 'react';
import { Range, getTrackBackground } from 'react-range';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import HeaderIvyMoDa from "./ComponentIvyModa/HeaderIvymoda"
import NewArrivalIvyModa from "./ComponentIvyModa/NewArrivalIvyModa"
import IntroduceAndEndIvyPage from "./ComponentIvyModa/IntroduceAndEndIvyPage"
import { Splide } from '@splidejs/react-splide';
import OptionProduct from "../src/ComponentIvyModa/ProductPortfolio"
import HomePageIvyModa from "../src/ComponentIvyModa/HomePageIVYModa"
import DelicateurbanForWomanProduct from "../src/ComponentIvyModa/ProductPortfolio/DelicateUrbanForWomanIvy"
import ProductDetail from "../src/ComponentIvyModa/ProductDetail"
function App() {

  return (
    <div>
      <HomePageIvyModa></HomePageIvyModa>
      <Routes >
        <Route path='/' element={<HomePageIvyModa></HomePageIvyModa>}></Route>
        <Route path='*' element={<HomePageIvyModa></HomePageIvyModa>}></Route>
        <Route path='/DanhMuc/HangNumoive' element={<OptionProduct></OptionProduct>}></Route>
        <Route path='/DanhMuc/DELICATEURBAN' element={<DelicateurbanForWomanProduct></DelicateurbanForWomanProduct>}></Route>
        <Route path='/Chitietsanpham' element={<ProductDetail></ProductDetail>}></Route>
      </Routes>
    </div>
  )
}

export default App;