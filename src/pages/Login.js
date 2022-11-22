import React, {useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import Profile from './Profile';
import removePlaceholderText from '../formconfig';
import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
import Loggedinlayout from './Loggedinlayout';
import { render } from '@testing-library/react';
import About from './About';

const Login = () => {

  // login states

  const [userName, setUserName] = useState("Username or Email");
  const [password, setPassword] = useState("Password");

  // list with registered users 
    const registeredUsers = [ 
    {id: 1 ,userName : "raich78", password: '12345'},
    {id: 2, userName: "SandyHandy", password: '54321'},
    {id: 3, userName: "zelda92", password: '7362512'},
    {id: 4, userName: "darksoulerforfun", password: '3764521'}
  ];
  
  // event handlers
  const loginUser = () =>
  {
    let isRegistered = false;
    // do some business logic here. do the person exist in the db?
    for (let index = 0; index < registeredUsers.length; index++) {
      const element = registeredUsers[index];
      if (userName == element.userName && password == element.password)
      {
        isRegistered = true;

        // user are logged-in:
        alert("WELCOME!");      

        const welcomeMsg = document.createElement("h1");
        welcomeMsg.innerHTML = `Welcome ${userName}`;
        document.body.appendChild(welcomeMsg);

        return <About />;
      }
    }

    if (!isRegistered)
    {
      for (let index = 0; index < 1000000000; index++) {
        // simulate a server request delay
      }
      document.getElementById("formborder").innerHTML = "Invalid username/Email or password, try again!";
    }
  }

  document.body.addEventListener("click", () => {
    if (password == "")
    {
      setPassword("Password");
    }

    if (userName == "")
    {
      setUserName("Username or Email");
    }
  });
    return (
      <>
      <div>
        <form id='loginform' className='formgeneral'>
          <label> 
          <input  id='textinputusername'
                  className='logintextinput'
                  type="text"
                  value={userName}
                  onChange={e => setUserName(e.target.value)}
                  onClick={e => removePlaceholderText(e)}
          />
          <input  id='textinputpassword'
                  className='logintextinput'
                  type="text"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  onClick={e => removePlaceholderText(e)}
          />
          <div id='formborder'></div>
          <div>
          <input id='loginbutton'
                className='buttongeneral'
                type="button" 
                value="Log in"
                onClick={loginUser}     
          />
            <Link to="/resetpassword" id="resetpassword">forgot password? click here</Link>
          </div>

          </label>
        </form>
      </div>
      </>
    );
  };
  
  export default Login;

