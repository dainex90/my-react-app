import { Link } from "react-router-dom";


function Newfooter (){
    return (
        <>
              <footer>
                <div>
                    <Link to="/about">About </Link>
                    <Link to="/contact">Contact</Link>
                </div>
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


export default Newfooter;