import { Outlet, Link } from "react-router-dom";
import {useState} from 'react';

const Layout = () => {

    // Login-button effect
    const [isHover, setIsHover] = useState(false);

    // Style Object
    const loginButtonStyle = {
        position: 'relative',
        display: 'inline-block',
        color: 'white',
        backgroundColor: isHover ? 'rgba(53, 156, 156, 0.955)': 'gray',
        padding: '0.5em',
        borderRadius: '5px',
        textDecoration: 'none',
        marginTop: '1.5em',
        marginBottom: '0.5em'
      };

      const handleMouseEnter = () => {
        setIsHover(true);
      };
    
      const handleMouseLeave = () => {
        setIsHover(false);
      }

    return (
        <>
            <nav id="linkcontainer">
                <ul id="mainnavlist">
                    <li>
                        <Link to="/" className="navbarlinks">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="navbarlinks">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="navbarlinks">Contact</Link>
                    </li>
                    <li>
                        <Link to="/login" id="navloginbtn" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={loginButtonStyle}>Log in</Link>
                    </li>
                    <li>
                        <Link to="/signup" id="signuplink">Not a member? Sign up</Link>
                    </li>
                </ul>
            </nav>

            <Outlet /> 
            
        </>
    );
}

export default Layout;