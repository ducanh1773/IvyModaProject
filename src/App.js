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
import SigninIVYmoda from "../src/ComponentIvyModa/SignInIVYMODA"
import SignUpIvymoda from "../src/ComponentIvyModa/SignUpivymoda"
import IntroduceOfivyPage from "../src/ComponentIvyModa/IntroduceOfIvymodaPage";
import LifeStyePage from "../src/ComponentIvyModa/LifeStylePage";
import UserPage from "../src/ComponentIvyModa/UserPage";
import Inputfile from "../src/ComponentIvyModa/UserPage/aixosFile/inputfile.js"
import Session1 from "../src/ComponentSession/ComponentSesion1/Session1.js"



function App() {

  return (
    <div>
      <Session1></Session1>
   
    </div>
  )
}

export default App;