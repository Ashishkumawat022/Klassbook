import React from "react";
import cx from './Sidebar.module.scss';
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';

import {MdKeyboardArrowDown} from "react-icons/md";


// --------- Images --------- //
import setup from "../../images/icon-setup.svg";
import business from "../../images/icon-business.svg";
import branch from "../../images/icon-branch.svg";
import accounts from "../../images/icon-accounts.svg";
import gradebook from "../../images/icon-gradebook.svg";
import formate from "../../images/icon-formate.svg";
import receipt from "../../images/icon-receipt.svg";
import other from "../../images/icon-other.svg";
import p2 from "../../images/icon-p2.svg";

const SetupMenu = () => {
  return (
    <>
    <div className={`${cx.moreMenuList}`}>
        <h5 className={`${cx.moreMenuTitle}`}>
          <div className={`${cx.menuIcon}`}>
            <img src={setup} />
          </div>
          <div className={`${cx.menuName}`}>Set up </div>
        </h5>
        <ul>
          <li>
            <NavLink to="/business-setup">
              <div className={`${cx.menuIcon}`}>
                <img src={business} />
              </div>
              <div className={`${cx.menuName}`}>Business Set Up</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/branch">
              <div className={`${cx.menuIcon}`}>
                <img src={branch} />
              </div>
              <div className={`${cx.menuName}`}>Branch Set Up</div>
            </NavLink>
          </li>
          <li>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
              <NavLink to="/account-setup/invoice-format">
                <div className={`${cx.menuIcon}`}>
                <img src={accounts} />
                </div>
                <div className={`${cx.menuName}`}>Accounts Set Up</div>
              </NavLink>
              <MdKeyboardArrowDown className={`${cx.arrow}`} />
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                 
                  <li>
                    <NavLink to="/account-setup/invoice-format">
                      <div className={`${cx.menuIcon}`}>
                        <img src={formate} />
                      </div>
                      <div className={`${cx.menuName}`}>Invoice Format</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/account-setup/receipt-format">
                      <div className={`${cx.menuIcon}`}>
                        <img src={receipt} />
                      </div>
                      <div className={`${cx.menuName}`}>Receipt Format</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/account-setup/other-setup">
                      <div className={`${cx.menuIcon}`}>
                        <img src={other} />
                      </div>
                      <div className={`${cx.menuName}`}>Other Set Up</div>
                    </NavLink>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </li>
          
          <li>
            <NavLink to="/gradebook">
              <div className={`${cx.menuIcon}`}>
                <img src={p2} />
              </div>
              <div className={`${cx.menuName}`}>Prefix</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/gradebook">
              <div className={`${cx.menuIcon}`}>
                <img src={gradebook} />
              </div>
              <div className={`${cx.menuName}`}>Gradebook</div>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SetupMenu;
