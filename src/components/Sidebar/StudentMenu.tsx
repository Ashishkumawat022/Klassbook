import React from "react";
import cx from './Sidebar.module.scss';
import { NavLink} from "react-router-dom";

// --------- Images --------- //
import studentIcon from "../../images/icon-student.svg";
import { FaUserGraduate} from "react-icons/fa";
import { MdGridView } from "react-icons/md";



const StudentMenu = () => {
  return (
    <>
    <div className={`${cx.moreMenuList}`}>
        <h5 className={`${cx.moreMenuTitle}`}>
          <div className={`${cx.menuIcon}`}>
            <img src={studentIcon} />
          </div>
          <div className={`${cx.menuName}`}>Students</div>
        </h5>
        <ul>
          <li>
            <NavLink to="/student">
              <div className={`${cx.menuIcon}`}>
                <img src={studentIcon} />
              </div>
              <div className={`${cx.menuName}`}>Students</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/batch">
              <div className={`${cx.menuIcon}`}>
                
                <FaUserGraduate/>
              </div>
              <div className={`${cx.menuName}`}>Batch</div>
            </NavLink>
          </li>
         
          
        </ul>
      </div>
    </>
  );
};

export default StudentMenu;
