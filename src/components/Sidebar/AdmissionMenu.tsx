import React from "react";
import cx from './Sidebar.module.scss';
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';

import {MdKeyboardArrowDown} from "react-icons/md";


// --------- Images --------- //
import invoice from "../../images/icon-invoice.svg";
import admission from "../../images/icon-team.svg";
import receipt from "../../images/receipt-icon.svg";

const SetupMenu = () => {
  return (
    <>
    <div className={`${cx.moreMenuList}`}>
        <ul>
          <li>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
              <NavLink to="/admission">
                <div className={`${cx.menuIcon}`}>
                  <img src={admission} />
                </div>
                <div className={`${cx.menuName}`}>Admission</div>
              </NavLink>
              <MdKeyboardArrowDown className={`${cx.arrow}`} />
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <NavLink to="/admission">
                      <div className={`${cx.menuName}`}>Active Admission</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/admission">
                      <div className={`${cx.menuName}`}>Past Admission</div>
                    </NavLink>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </li>
          
          <li>
            <NavLink to="/invoice">
              <div className={`${cx.menuIcon}`}>
                <img src={invoice} />
              </div>
              <div className={`${cx.menuName}`}>Invoice</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/receipt">
              <div className={`${cx.menuIcon}`}>
                <img src={receipt} />
              </div>
              <div className={`${cx.menuName}`}>Receipt</div>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SetupMenu;
