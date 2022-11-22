

const Accountsettings = () => {

    

    const changeDarkModeState = (event) => 
    {
        var stateChanger = document.getElementById("statechanger");
        // change the dark mode state to default or dark..
        if (stateChanger.style.backgroundColor == "red")
        {
            stateChanger.style.backgroundColor = "yellowgreen";
            stateChanger.style.left = "10px";
            document.body.style.backgroundColor = "rgba(50, 50, 50)";
            document.body.style.color = "azure";
        }

        else
        {
            stateChanger.style.backgroundColor = "red";
            stateChanger.style.left = "0px";
            document.body.style.backgroundColor = "rgba(212, 195, 195, 0.199)";
            document.body.style.color = "rgba(36, 36, 35, 0.781)";
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
                        <li id="darkbuttonouter">
                            <div>
                            </div>
                            <div id="statechanger" onClick={e => changeDarkModeState(e)}>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
        );
}

export default Accountsettings;