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
import Media from './pages/Media';
import Accountsettings from './pages/Accountsettings';
import Loggedinlayout  from './pages/Loggedinlayout';

import Explore from './pages/Explore';



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
      <h1 id='slogan'>Come, connect, <span style={{fontFamily: 'cursive', color: 'rgba(86, 227, 97, 0.700)'}}>go</span></h1>
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
        </Route>

        <Route path="/" element={<Loggedinlayout />}>
          <Route path='profile' element={<Profile />} />
          <Route path="media" element={<Media />} />
          <Route path="accountsettings" element={<Accountsettings />} />
          <Route path="explore" element={<Explore />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainApp />);

