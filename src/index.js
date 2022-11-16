import React, { useEffect, useState, createContext, useContext, useRef, useReducer, useCallback, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
//import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Layout from "./pages/Layout";
//import Home from "./pages/Home";
//import Blogs from "./pages/Blogs";
//import Contact from "./pages/Contact";
//import NoPage from "./pages/NoPage";
import PersonLabel from './PersonLabel.js'
import InvalidInput from './InvalidInput';

import InstagramImg from './logo_instagram.png';
import FacebookImg from './Facebook_logo.png';
import YouTubeLogo from './youtube_logo.png';


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

// list with objects
const persons = [
  {name : "Eirik", age: 49},
  {name: "Sandy", age: 35},
  {name: "Vincent", age: 12},
  {name: "Melissa", age: 28}
];

// MAIN Component
function MainApp() {

    // STATES
    const [info, setInfo] = useState("Add a person!")
    const [name, setName] = useState("Enter Name")
    const [age, setAge] = useState("Enter Age");    
    const [isHover, setIsHover] = useState(false);

    // Style Object
    const loginButtonStyle = {
      position: 'relative',
      display: 'inline-block',
      color: 'white',
      marginLeft: '50%', 
      backgroundColor: isHover ?  'rgba(0, 255, 255, 0.863' : 'grey',
      padding: '1.05em',
      borderTopRightRadius: '5px',
      borderBottomLeftRadius: '5px'
    };
  

  // Event handlers
  const addUser = () =>
  {
    // Add a user to the person List
    // First. check if input is valid. (etc. name is a string and age value is over 13)
    if (name.length > 0 && age > 13)
    {
      // input is valid
      persons.push({name: name, age: age})
      persons.forEach(element => {
        console.log(element);
      <PersonLabel />
      });
    }
    else
    {
      <InvalidInput />
    }
  }

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  }

  // useEffect
  useEffect(() => {
    <PersonLabel {...name}{...age}/>
  }, [name, age]);

  function changeLinkColor()
  {
    const links = document.getElementsByClassName('navbarlinks');
    links.style.color = "Red";
  }

  return (
    <>
    <body>
      <div>
        <div id='navbarcontainer'>
          <div id='linkcontainer'>
            <a href="./Home.js" className='navbarlinks' onClick={changeLinkColor}>Home</a>
            <a href="" className='navbarlinks'>About</a>
            <a href="" className='navbarlinks'>Contact</a>
            <a href="" className='navbarlinks' style={loginButtonStyle} onMouseEnter={handleMouseEnter}
                                                onMouseLeave={handleMouseLeave}>Login</a>
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
        </div>
        <div id='stripeeffect'></div>
      </div>
      <h1 id='maintitletext'>Add Users</h1>
      <div>
        <form>
          <label> 
            <div id='addpersoninfo'>
              {info}
            </div>
          <input  id='textinputname'
                  className='textinput'
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
          />
          <input  id='textinputage'
                  className='textinput'
                  type="text"
                  value={age}
                  onChange={e => setAge(e.target.value)}
          />
          <div id='formborder'></div>
          <input id='addbutton'
                type="button" 
                value="Add"
                onClick={addUser}     
          />
          </label>
        </form>
      </div>
      <footer>
        <div id='footertextmain'>
          All Rights reserved.
        </div>
        <div className='miscfootercontent'>City, State, Country.     Cookies</div>
        <div className='miscfootercontent'>for inquiries, Contact @ info.special@gmail.com</div>
      </footer>
    </body>
  </>

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainApp />);


export default persons;