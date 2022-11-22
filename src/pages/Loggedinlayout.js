import{Link, Outlet} from 'react-router-dom';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import mediabtn from'../mediafolder.png';
import homepagebtn from '../homealt.png';
import gearicon from '../settingsgear.png';
import exploreicon from '../explorewithglasses.png';
import hamburger from '../hamburgermenu.png';
import Newfooter from './Newfooter';
import Arrowicon from '../dropdownarrow.png';
import InstagramImg from '../logo_instagram.png';
import FacebookImg from '../Facebook_logo.png';
import YouTubeLogo from '../YTlogo.png';
import Userlogo from '../usericon.png';
import PinterestLogo from '../pinterestlight.png';

function Loggedinlayout() 
{
    // hooks
    const [search, setSearch] = useState("Search");
    


    // handler
    const resetSearchField = (e) => {
        if (e.target.value == "")
        {
            setSearch("Search");
        }
    }

    const homeMenuSlideEffect = () => {
        document.getElementById("leftbackground").style.transitionDuration = "1.0s";
    }

    return (
        <>

        <div id='navbarbackdrop'>
            <nav id='alt-nav'>
                <div id="arrowdropdown">
                    <img src={Arrowicon} alt="dropdown" width="30px" height="30px"></img>
                        <nav className='nav-dropdown'>

                            <Link to="/" className='altdroplinks'>Learn More</Link>

                            <Link to="/" className='altdroplinks'>Collaborate</Link>

                            <Link to="/" className='altdroplinks'>Forum</Link>
                            
                            <Link to={"/"} id='logoutbtn' style={{textDecoration: 'none', color: 'azure'}}> Log Out</Link>
                        </nav>
                        
                </div>
            </nav>
            <div>
                <img id='userlogo' src={Userlogo}></img>
            </div>
            <nav id='main-nav'>
                <div id='hamburger'>
                    <img src={hamburger} alt="hamburgermenu" height='30px' width='30px' ></img>
                        <nav className='nav-dropdown'>
                            <Link to="/profile" className="userspeclinks" onClick={homeMenuSlideEffect}>
                                Home
                            </Link>
                    
                            <Link to="/media" className="userspeclinks"> Media
                                </Link>
                    
                            <Link to="/accountsettings" className="userspeclinks">
                            Settings
                            </Link>
                        
                        <Link to="/explore" className='userspeclinks'> Explore
                        </Link>
                    
                    </nav>
                </div>
                
            </nav>
            <div id='headerbuttons'>
                <ul>
                    <li>Home</li>
                    <li>Information</li>
                    <li>Connect</li>
                </ul>
            </div>
            <input type="text"
                    value={search}
                    id='navbartextinput'
                    onChange={e => setSearch(e.target.value)}
                    onMouseLeave={e => resetSearchField(e)}
            />
            
            <div id='socialmediacontainer'>
                <a href='https://www.facebook.com/' className='socialmediaimgs'>
                    <img src={FacebookImg} alt="Facebook" width='25px' height='25px'/>
                </a>
                <a href='https://www.instagram.com/' className='socialmediaimgs'>
                    <img src={InstagramImg} alt="Instagram" width='25px' height='25px' />
                </a>
                <a src='https://www.pinterest.com/' className='socialmediaimgs'>
                    <img src={PinterestLogo} alt="pinterest" width='25px' height ='25px' />
                </a>

                <a href='https://www.youtube.com/' className='socialmediaimgs'>
                    <img src={YouTubeLogo} alt="Youtube" width="30px" height="30px" />
                </a>
          </div>

        </div>
        <div className="leftbackground" >

        </div>
       
            < Outlet />

            <Newfooter />
        </>
    );
}

export default Loggedinlayout;
