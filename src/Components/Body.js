import "../Styles/Body.css";
import hero1 from "../Images/hero-1.png";
import leftVector from "../Images/leftVector.png";
import rightVector from "../Images/rightVector.png";
import leftVectorDark from "../Images/leftVectorDark.png";
import rightVectorDark from "../Images/rightVectorDark.png";
import { ThemeContext, theme } from "../App";
import { useContext, useState } from "react";
import {motion} from "framer-motion"
import { Button } from "antd";

const Body = () => {
  const { theme } = useContext(ThemeContext);
  const [move,setMove] = useState(false)

  return (
    <div className="body-container">
      <div className="frame-hero-container">
        <div className="frame">
          <p className="elevate">
            ELEVATE YOUR <br />
            DAPP DEVELOPMENT <br />
            WITH BLOCKFLOW
          </p>
          <p className="heading-efficient">
            <span className="text-wrapper">
              Efficient API Creation for Your{" "}
            </span>
            <span className="text-wrapper">
              {" "}
              <br />
              Blockchain Data Needs.{" "}
            </span>
            <span className="text-wrapper"></span>
          </p>
        </div>
        <div className="hero-section-diag">
          <img className="hero1" src={hero1} alt="" />
          {theme === "light" ? (
            <>
              <img className="hero2" src={leftVector} alt="" />
              <img className="hero3" src={rightVector} alt="" />
            </>
          ) : (
            <>
              <img className="hero2" src={leftVectorDark} alt="" />
              <img className="hero3" src={rightVectorDark} alt="" />
            </>
          )}
 
          <img className="hero4" src={hero1} alt="" />
        </div>
      </div>

      <div className="demo-btn">
        {/* <button className="btn">REQUEST DEMO</button> */}
        <Button className="btn">REQUEST DEMO</Button>
      </div>
      <div className="ellipse-container ">
        <motion.div 
        animate={{y: (theme === "light") ?100 : -1700}}  
        transition={{duration:1}}
        className="ellipse">
         
        </motion.div>
      </div>
    </div>
  );
};

export default Body;
