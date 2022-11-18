import React, { useEffect, useState, createContext, useContext, useRef, useReducer, useCallback, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import InvalidInput from './InvalidInput';

import InstagramImg from './logo_instagram.png';
import FacebookImg from './Facebook_logo.png';
import YouTubeLogo from './youtube_logo.png';



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();



// MAIN Component
export default function MainApp() {

  // useEffect
  /*useEffect(() => {
    <PersonLabel {...name}{...age}/>
  }, [name, age]);*/


  return (
    <>
    <div id='companycontainer'>
      <h1 id='companyname'> <span style={{fontSize: '65px', fontStyle: 'oblique'}}>o</span>rion</h1>
      <h1 id='slogan'>Come, connect, <span style={{color: 'darkgray'}}>go.</span></h1>
    </div>
          <div id='socialmediacontainer'>
            <a href='https://www.facebook.com/' className='socialmediaimgs'>
              <img src={FacebookImg} alt="Facebook" width='30px' height='30px'/>
            </a>
            <a href='https://www.instagram.com/' className='socialmediaimgs'>
              <img src={InstagramImg} alt="Instagram" width='30px' height='30px' />
            </a>
            <a href='https://www.youtube.com/' className='socialmediaimgs'>
              <img src={YouTubeLogo} alt="Youtube" width="50px" height="50px" style={{position: 'absolute'}} />
            </a>
          </div>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<NoPage />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
      <footer>
        <div id='footertextmain'>
          All Rights reserved.
        </div>
        <div>
          <div className='miscfootercontent'>Phoenix, AZ, U.S.</div>
          <div className='miscfootercontent'>Cookies enabled</div>
          <div className='miscfootercontent'>for questions, Contact @ info.special@gmail.com</div>
          <div className='miscfootercontent' id='langfooterdetails'> en, rus, esp, ger</div>
        </div>
      </footer>
  </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainApp />);

