import React, { useCallback, useState } from "react";
import st from "../../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Team.module.scss";
import tb from "../../../datatable.module.scss";
import {
  Card,
  Row,
  Col,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

import {AiOutlineInfoCircle,AiFillDelete} from "react-icons/ai";
import {FiUpload,FiDownload} from "react-icons/fi";



// --------- Images --------- //
import DemoInfo from "../../../components/DemoInfo/DemoInfo";

import TeamDataGrid from "./TeamDataGrid";
import admission from "../../../images/icon-team.svg";
import { MdPersonAdd } from "react-icons/md";

export default function Team() {
  

  return (
    <>
      <section className={`${st.pageWrapper}`}>
        <div className={`${st.pageTitle}`}>
          <Row>
            <Col md={6} lg={6}>
                <div className={`${st.titleInfo}`}>
                    <img src={admission} className={`${st.icon}`} />    
                    <div className={`${st.titleInfoBody}`}>
                           <h5>TEAMS</h5>
                      <p>All teams</p>
                    </div>
                </div>  
            </Col>
            <Col md={6} lg={6}>
              <DemoInfo />
            </Col>
          </Row>
        </div>


        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body>
              <Row className={`${tb.tableAction}`}>
                <Col lg={12}>
                  <div className="d-flex">
                    <NavLink to="/team/add-team-member" className={`btn ${tb.addBtn}`} >
                      <MdPersonAdd className={`${tb.icon}`} />
                      Add Team Member
                    </NavLink>
                    <button className={`btn ${tb.upload}`}>
                      <FiUpload className={`${tb.icon}`} />  
                      Upload CSV
                      <input type="file" />
                    </button>
                   
                    <button className={`btn ${tb.upload}`}>
                      <AiFillDelete className={`${tb.icon} m-0`} />
                    </button>
                  </div>
                </Col>
               
              </Row>
              <div className={`${tb.dataTable}`}>
                <TeamDataGrid/>
              </div>
              
            </Card.Body>
          </Card>
        </div>
      </section>
      
    </>
  );
}
