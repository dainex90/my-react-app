import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Profile from './Profile';

const Login = () => {

  // login states

  const [userName, setUserName] = useState("Username or Email");
  const [password, setPassword] = useState("Password");
  const [id, setId] = useState(5);

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
    // do some business logic here. do the person exist in the db?
    
    for (let index = 0; index < registeredUsers.length; index++) {
      const element = registeredUsers[index];
      if (userName == element.userName && password == element.password)
      {
        // user CAN login ->
        alert("WELCOME!");

        removeElementById('signinform');
        removeElementById('mainnavlist');
        const li = document.createElement("li");
        const li2 = document.createElement("li");
        const li3 = document.createElement("li");
        const li4 = document.createElement("li");

        li.innerHTML =  `<Link to="/profile" className="navbarlinks">Profile</Link>`;
        li2.innerHTML = `<Link to="/account" className="loggedinlistitems">My Account</Link>`;
        li3.innerHTML = `<Link to="/settings"className="loggedinlistitems">Settings</Link>`;
        li4.innerHTML = `<Link to="/explore" className="loggedinlistitems">Explore</Link>`;

        const newUl = document.createElement("ul");
        newUl.setAttribute("id","mainnavlist");
        newUl.appendChild(li);
        newUl.appendChild(li2);
        newUl.appendChild(li3);
        newUl.appendChild(li4);        

        const nav = document.getElementById('linkcontainer');
        nav.appendChild(newUl);

        const welcomeMsg = document.createElement("h1");
        welcomeMsg.innerHTML = `Welcome ${userName}`;
        document.body.appendChild(welcomeMsg);

        <Profile />
    }
    }
  }

  function removePlaceholderText(e)
  {
    if (e.target.value == "Username or Email" || e.target.value == "Password")
    {
      e.target.value = "";
    }
  };

  function removeElementById (element){
    document.getElementById(element).remove();
  }

    return (
      <>
      <div>
        <form id='signinform'>
          <label> 
          <input  id='textinputusername'
                  className='textinput'
                  type="text"
                  value={userName}
                  onChange={e => setUserName(e.target.value)}
                  onClick={e => removePlaceholderText(e)}
          />
          <input  id='textinputpassword'
                  className='textinput'
                  type="text"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  onClick={e => removePlaceholderText(e)}
          />
          <div id='formborder'></div>
          <div>
          <input id='loginbutton'
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