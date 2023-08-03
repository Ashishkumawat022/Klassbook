import React from "react";
import cx from './Sidebar.module.scss';
import { NavLink, useNavigate, useLocation } from "react-router-dom";

// --------- Images --------- //
import course from "../../images/icon-course.svg";
import subject from "../../images/icon-subject.svg";
import level from "../../images/icon-level.svg";
import curriculam from "../../images/icon-curriculam.svg";
import classIcon from "../../images/icon-class.svg";
import camp from "../../images/icon-camp.svg";


const CoursesMenu = () => {
  return (
    <>
    <div className={`${cx.moreMenuList}`}>
        <h5 className={`${cx.moreMenuTitle}`}>
          <div className={`${cx.menuIcon}`}>
            <img src={course} />
          </div>
          <div className={`${cx.menuName}`}>Courses</div>
        </h5>
        <ul>
          <li>
            <NavLink to="/courses/subject">
              <div className={`${cx.menuIcon}`}>
                <img src={subject} />
              </div>
              <div className={`${cx.menuName}`}>Subject</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses/level">
              <div className={`${cx.menuIcon}`}>
                <img src={level} />
              </div>
              <div className={`${cx.menuName}`}>Level</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses/curriculum">
              <div className={`${cx.menuIcon}`}>
                <img src={curriculam} />
              </div>
              <div className={`${cx.menuName}`}>Curriculum</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses/courses">
              <div className={`${cx.menuIcon}`}>
                <img src={course} />
              </div>
              <div className={`${cx.menuName}`}>Courses</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses/class">
              <div className={`${cx.menuIcon}`}>
                <img src={classIcon} />
              </div>
              <div className={`${cx.menuName}`}>Class</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses/event">
              <div className={`${cx.menuIcon}`}>
                <img src={camp} />
              </div>
              <div className={`${cx.menuName}`}>Event/Camp</div>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CoursesMenu;
