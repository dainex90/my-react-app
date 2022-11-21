import{Link, Outlet} from 'react-router-dom';
import mediabtn from'../mediaicon.png';
import homepagebtn from '../homepage.png';
import gearicon from '../gear.png';
import exploreicon from '../explore.png';
import hamburger from '../hamburgermenu.png';

const Loggedinlayout = (props) => 
{
    
    const footerVar = document.getElementsByTagName("footer");
    const newFooterContent = document.createElement("a");
    newFooterContent.innerHTML = "About";
    footerVar.namedItem
    return (
        <>
        <div style={{position: 'relative', display: 'flex', marginLeft: '7em', top: '1.5em'}}> Welcome, {props.name}</div>
        <div id='logoutbtn'>
            <Link style={{textDecoration: 'none', color: 'azure'}}> Log Out</Link>
        </div>
        <div id='hamburger'>
            <img src={hamburger} height='40px' width='40px'></img>
        </div>
        
        <nav id="userspecificnav">
                <ul>
                    <li>
                        <Link to="/profile" className="userspeclinks">
                        <img src={homepagebtn} alt="play" width='30px' height='30px'/> <span style={{position: 'absolute', margin: '7px', marginLeft: '15px'}}>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/media" className="userspeclinks">
                        <img src={mediabtn} alt="play" width='30px' height='30px'/> <span style={{position: 'absolute', margin: '7px', marginLeft: '15px'}}>Media</span>
                            </Link>
                    </li>
                    <li>
                        <Link to="/accountsettings" className="userspeclinks">
                        <img src={gearicon} alt="play" width='30px' height='30px'/> <span style={{position: 'ralative', margin: '7px', marginLeft: '10px'}}>Account Settings</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/explore" className='userspeclinks'>
                        <img src={exploreicon} alt="play" width='30px' height='30px'/> <span style={{position: 'absolute', margin: '7px', marginLeft: '15px'}}>Explore</span> 
                        </Link>
                    </li>
                </ul>
            </nav>
            < Outlet />
        </>
    );
}

export default Loggedinlayout;