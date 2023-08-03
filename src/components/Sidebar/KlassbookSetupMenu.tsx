import React from "react";
import cx from './Sidebar.module.scss';
import { NavLink} from "react-router-dom";

// --------- Images --------- //
import studentIcon from "../../images/icon-student.svg";
import { FaQuestion, FaUserGraduate} from "react-icons/fa";

import ksetup from "../../images/icon-k-setup.svg";

import branch from "../../images/icon-branch.svg";
import { AiFillCamera, AiFillStar, AiTwotoneMessage } from "react-icons/ai";

import courses from "../../images/icon-course.svg";



const KlassBookSetupMenu = () => {
  return (
    <>
    <div className={`${cx.moreMenuList}`}>
        <h5 className={`${cx.moreMenuTitle}`}>
          <div className={`${cx.menuIcon}`}>
            <img src={ksetup} />
          </div>
          <div className={`${cx.menuName}`}>Klassbook Set up </div>
        </h5>
        <ul>
          <li>
            <NavLink to="/k-setup/business-info">
              <div className={`${cx.menuIcon}`}>
                <img src={ksetup} />
              </div>
              <div className={`${cx.menuName}`}>BusinessInformation</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/k-setup/branch-location">
              <div className={`${cx.menuIcon}`}>
                
               
               <img src={branch} alt="branch" />
              </div>
              <div className={`${cx.menuName}`}>Branch & Location</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/k-setup/program-courses">
              <div className={`${cx.menuIcon}`}>
                
                <img src={courses} alt="courses" />
              </div>
              <div className={`${cx.menuName}`}>Program & Courses</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/k-setup/gallery">
              <div className={`${cx.menuIcon}`}>
                
                <AiFillCamera/>
              </div>
              <div className={`${cx.menuName}`}>Gallery</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/k-setup/faq">
              <div className={`${cx.menuIcon}`}>
                
                <FaQuestion/>
              </div>
              <div className={`${cx.menuName}`}>FAQ</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/k-setup/reviews">
              <div className={`${cx.menuIcon}`}>
                
                <AiFillStar/>
              </div>
              <div className={`${cx.menuName}`}>Reviews</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/k-setup/chat">
              <div className={`${cx.menuIcon}`}>
                
                <AiTwotoneMessage/>
              </div>
              <div className={`${cx.menuName}`}>Inbox</div>
            </NavLink>
          </li>
         
          
        </ul>
      </div>
    </>
  );
};

export default KlassBookSetupMenu;
