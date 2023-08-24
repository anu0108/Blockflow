import "../Styles/Header.css"
import { useContext } from "react"
import logo from "../Images/logo.png"
import logoDark from "../Images/logoDark.png"
import darkModeBtn from "../Images/ic_round-dark-mode.png"
import lightModeBtn from "../Images/lightMode.png"
import { ThemeContext,theme } from "../App"


const Header = () =>{
    const { toggleTheme,theme } = useContext(ThemeContext);

    return(
        <div className="header-container">
            <div className="logo-container">
                <div className="logo">
                    {/* <img id="left-vector" src={leftVector} alt="" /> */}
                    {/* <img id="right-vector" src={rightVector} alt="" /> */}
                    {(theme === "light" ? <img id="" src={logo}  alt=""  /> : <img src={logoDark}/>)}
                    
                </div>
                <div className="wordmark">blockflow</div>
            </div>

            <div className="navbar">
                <a href="/">DOCS</a>
                <a href="/">BLOG</a>
                <a href="/">PRICING</a>
                <a href="/">CONTACT US</a>
            </div>

            <div className="dark-mode" onClick={toggleTheme}>
                {(theme === "light" ? <img src={darkModeBtn} alt=""  /> : <img src={lightModeBtn}/>)}
            </div>
        </div>
    );
}

export default Header