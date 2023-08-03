import React, { useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import cx from './Sidebar.module.scss';
import { useContext, useState } from "react";
import GlobalContext from "../../store/global-context";


// --------- Images --------- //
import business from "../../images/icon-business.svg";
import overview from "../../images/icon-overview.svg";
import schedule from "../../images/icon-schedule.svg";
import team from "../../images/icon-team.svg";
import student from "../../images/icon-student.svg";
import courses from "../../images/icon-course.svg";
import resources from "../../images/icon-resources.svg";
import gradebook from "../../images/icon-gradebook.svg";
import account from "../../images/icon-account.svg";
import report from "../../images/icon-report.svg";
import ksetup from "../../images/icon-k-setup.svg";
import setup from "../../images/icon-setup.svg";



const Sidebar = (props: any) => {
  const param = useLocation();
  console.log(param, "param")
  const globalCtx = useContext(GlobalContext);
  const [reportsList, setReportsList] = useState(param.pathname.includes('reports'));
  const [inventoryList, setInventoryList] = useState(param.pathname.includes('inventory'));
  const [menuList, setMenuList] = useState(param.pathname.includes('menu'));
  const [manageList, setManageList] = useState(param.pathname.includes('manage'));



  return (
    <>
      <aside className={`${cx.sidebarBody} ${globalCtx.showMenu ? cx.show : ''}`}>
        <div className={`${cx.hideBg}`} onClick={() => { globalCtx.displayMenu(globalCtx.showMenu) }}></div>
       
        <div className={`${cx.sidebarMain}`}>
          <div className={`${cx.menuList}`}>
            <ul className={`${cx.scroll}`}>
              <li>
                <NavLink className={`${cx.signleMenu}`} to="/overview">
                  <div className={`${cx.menuIcon}`}>
                    <img src={overview} />
                  </div>
                  <div className={`${cx.menuName}`}>Overview</div>
                </NavLink>
              </li>
              <li>
                <NavLink className={`${cx.signleMenu}`} to="/schedule">
                  <div className={`${cx.menuIcon}`}>
                    <img src={schedule} />
                  </div>
                  <div className={`${cx.menuName}`}>Schedule</div>
                </NavLink>
              </li>
              <li>
                <NavLink className={`${cx.signleMenu}`} to="/student">
                  <div className={`${cx.menuIcon}`}>
                    <img src={student} />
                  </div>
                  <div className={`${cx.menuName}`}>Students</div>
                </NavLink>
              </li>
              <li>
                <NavLink className={`${cx.signleMenu}`} to="/admission">
                  <div className={`${cx.menuIcon}`}>
                    <img src={team} />
                  </div>
                  <div className={`${cx.menuName}`}>Admission</div>
                </NavLink>
              </li>
              <li>
                <NavLink className={`${cx.signleMenu}`} to="/courses/subject">
                  <div className={`${cx.menuIcon}`}>
                    <img src={courses} />
                  </div>
                  <div className={`${cx.menuName}`}>Courses</div>
                </NavLink>
              </li>
              <li>
                <NavLink className={`${cx.signleMenu}`} to="/team">
                  <div className={`${cx.menuIcon}`}>
                    <img src={team} />
                  </div>
                  <div className={`${cx.menuName}`}>Team Staff</div>
                </NavLink>
              </li>
              <li>
                <NavLink className={`${cx.signleMenu}`} to="/resources">
                  <div className={`${cx.menuIcon}`}>
                    <img src={resources} />
                  </div>
                  <div className={`${cx.menuName}`}>Resources</div>
                </NavLink>
              </li>
              <li>
                <NavLink className={`${cx.signleMenu}`} to="/report">
                  <div className={`${cx.menuIcon}`}>
                    <img src={report} />
                  </div>
                  <div className={`${cx.menuName}`}>Report</div>
                </NavLink>
              </li>
              <li>
                <NavLink className={`${cx.signleMenu}`} to="/k-setup/branch-location">
                  <div className={`${cx.menuIcon}`}>
                    <img src={ksetup} />
                  </div>
                  <div className={`${cx.menuName}`}>Klassbook<br /> Set up</div>
                </NavLink>
              </li>
              <li className={`${cx.fixBottom}`}>
                <NavLink className={`${cx.signleMenu}`} to="/business-setup">
                  <div className={`${cx.menuIcon}`}>
                    <img src={setup} />
                  </div>
                  <div className={`${cx.menuName}`}>Set up</div>
                </NavLink>
              </li>
            </ul>



            
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
