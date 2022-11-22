

const Accountsettings = () => {

    
    const changeDarkModeState = (event) => 
    {
        let darkbuttonouter = document.getElementById("darkbuttonouter");
        let stateChanger = document.getElementById("statechanger");
        // change the dark mode state to default or dark..
        if (stateChanger.style.left == "44em")
        {
            darkbuttonouter.style.backgroundColor = "rgba(93, 237, 105, 0.852)";
            stateChanger.style.left = "44.7em";
            document.body.style.backgroundColor = "rgba(50, 50, 50)";
            document.body.style.color = "azure";
            
        }

        else
        {
            darkbuttonouter.style.backgroundColor = "red";
            stateChanger.style.left = "44em";
            document.body.style.backgroundColor = "rgba(212, 195, 195, 0.199)";
            document.body.style.color = "rgba(36, 36, 35, 0.781)";
        }
    }

    function navbarColorSwitch(collection, color)
    {
        for (let index = 0; index < collection.length; index++) {
            collection[index].style.color = color;
        }
    }

    return (
        <>
            <div className="loggedinpagelayout" id="settingspanel">
                <nav>
                    <ul>
                        <li>
                            <a href="">General settings</a>
                        </li>
                        <li>
                            <a href="">Location</a>
                        </li>
                        <li>
                            <a href="">Update information</a>
                        </li>
                        
                        <li>
                            <a href="">Privacy Settings</a>
                        </li>
                        <div id="darkmodetext"> Darkside
                        </div>
                        
                        <div id="darkbuttonouter">
                        </div>
                        <div id="statechanger" onClick={e => changeDarkModeState(e)}>
                        </div>
                        
                    </ul>
                </nav>
            </div>
        </>
        );
}

export default Accountsettings;