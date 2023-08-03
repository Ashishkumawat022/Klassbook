import React from "react";
import cx from './Sidebar.module.scss';
import { NavLink} from "react-router-dom";

// --------- Images --------- //

import admission from "../../images/icon-team.svg";



const TeamMenu = () => {
  return (
    <>
    <div className={`${cx.moreMenuList}`}>
        <h5 className={`${cx.moreMenuTitle}`}>
          <div className={`${cx.menuIcon}`}>
            <img src={admission} />
          </div>
          <div className={`${cx.menuName}`}>Teams</div>
        </h5>
        <ul>
          <li>
            <NavLink to="/team">
              <div className={`${cx.menuIcon}`}>
                <img src={admission} />
              </div>
              <div className={`${cx.menuName}`}>All</div>
            </NavLink>
          </li>
          
         
          
        </ul>
      </div>
    </>
  );
};

export default TeamMenu;
