import {useState} from 'react';
import { registeredUsers } from './Login';
import removePlaceholderText from '../formconfig';

const Signup = () => {

    // States
    const [email, setEmail] = useState("Register Email");
    const [userName, setUserName] = useState("User name");
    const [password, setPassword] = useState("Create a password");
    const [id, setId] = useState(5);

    const registeredUsers = [ 
        {id: 1 ,userName : "raich78", password: '12345', email: "raich@gmail.com"},
        {id: 2, userName: "SandyHandy", password: '54321', email: "sandysy92@outlook.com"},
        {id: 3, userName: "zelda92", password: '7362512', email: "zerine@info.com"},
        {id: 4, userName: "darksoulerforfun", password: '3764521', email: "oliver_trent77@msn.com"}
      ];
    // Event handlers

    const inputInformationBox = (event, information) =>
    {
        let infoBox = document.createElement("div");
        infoBox.innerHTML = information;
        infoBox.setAttribute("class", "inputinfobox")
        document.getElementById(event.target.id).appendChild(infoBox);
    }

    const signUpUser = () => 
    {
        // business logic here. Add a new user to the platform if possible
        const alreadyRegistered = registeredUsers.find(
            (person) => {
            person.email = email
        });

        if (alreadyRegistered != undefined)
        {
            console.log("User with that email is already registered!");
        }
        else
        {
            // Mail is NOT registered, but is it valid?
            if (email.includes("@"))
            {
                console.log(`${email} email is Valid!`);
                // now lets check if the username is valid ->
                if (registeredUsers.find(user => user.userName = userName) != undefined)
                {
                    console.log("Username is already taken, try again!");
                }
                else
                {
                    console.log("Username is Valid");
                    // lastly, lets see if password is valid aswell with regular expressions
                }
            }
            else
            {
                console.log(`${email} does NOT have a '@', try again!`);
            }
        }
    }

    function testPassword() {
        const passwordPattern = /[A-z][0-9]\S[~!#$%&*-?]+/g;
        const isMatch = passwordPattern.test(password);
        if (isMatch)
        {
            console.log("Password is VALID!");
        }
        else
        {
            console.log("Password NOT Valid");
        }
        
        testEmail();
    }

    function testEmail() {
        const emailPattern = /[a-z].?[a-z]@[a-z][.][a-z]/g;
        let isMatch = emailPattern.test(email);
        if(isMatch)
        {
            console.log("Email is VALID!");
        }
        else
        {
            console.log("Email NOT Valid");
        }
    }
    
    return (
        <>  
        <div>
            <form id='signupform' className='formgeneral'>
            <label> 
            <input  id='registeremailinput'
                    className='registertextinput'
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    //onClick={e => removePlaceholderText(e)}
            />
            <input  id='registerusernameinput'
                    className='registertextinput'
                    type="text"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    //onClick={e => removePlaceholderText(e)}
            />
            <div>
                <input
                    id='registerpasswordinput' 
                    className='registertextinput'
                    type="text"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <div  id='passwordinfo' className='inputexplanation' 
                    onClick={e => inputInformationBox(e, "You need to specify a password with a combination of at least six numbers, letters and special characters (like '!' '?' '&')")} >
                          (?)
                </div>
            </div>
            
            <div style={{position: 'relative', display: 'inline-block', fontSize: 'x-small', paddingTop: '5px'}}>Gender
                
                <div  id='genderinfo' className='inputexplanation' 
                    onClick={e => inputInformationBox(e, "Gender information is optional")}>
                (?)
                </div>
                <div className='choosegenderradio'> Male
                    <input
                        type="radio"
                        name='genderselector'
                    />
                </div>
                <div className="choosegenderradio"> Female
                    <input
                        type="radio"
                        name='genderselector'
                    />
                </div>
                <div className='choosegenderradio'> Not specified
                    <input 
                        type="radio"
                        name="genderselector"
                    />
                </div>
            </div>
            <div id='formborder'></div>
            <div>
            <input id='signupbutton'
                    className='buttongeneral'
                    type="button" 
                    value="Sign up"
                    onClick={testPassword}
            />
            </div>
            
            </label>
            </form>

        </div>
        </>
    );
}

export default Signup;

