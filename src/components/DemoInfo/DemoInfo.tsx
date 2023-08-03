import React from "react";
import st from "../../style.module.scss";
import { NavLink } from "react-router-dom";
import {AiOutlineInfoCircle} from "react-icons/ai";


const DemoInfo = () => {
  return (
    <>
      <ul className={`${st.actionTop}`}>  
          <li>
            <NavLink className={`btn ${st.info}`} to="#"><AiOutlineInfoCircle /></NavLink>    
          </li> 
          <li>
            <NavLink className={`btn`} to="#">Demo</NavLink>    
          </li>    
      </ul>  
    </>
  );
};

export default DemoInfo;
