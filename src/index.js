import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "../src/Style.css";
import App from './App';
import Navbar from "../src/Navbar";
import Image from "../src/Image";
import Image2 from './Image2';
import Text from './Text';
import Image3 from "../src/Image3";
import Text2 from './Text2';
import Bestseller from './Bestseller';
import Get from "../src/Get";
import Get2 from "../src/Get2";
import Sim from "../src/Sim";
import Look from "../src/Look";
import Dirty from "../src/Dirty";
import Spot from "../src/Spot";
import Mini from "../src/Mini";
import Super from "../src/Super"
import Footer from "../src/Footer"




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <App />
    <Navbar/>
    <Image/>
    <Image2/>
    <Text/>
    <Image3/>
    <Text2/>
    <Bestseller/>
    <Get/>
    <Get2/>
    <Sim/>
    <Look/>
    <Dirty/>
    <Spot/>
    <Mini/>
    <Super/>
    <Footer/>
   

  </React.StrictMode>
);



