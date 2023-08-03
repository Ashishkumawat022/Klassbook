import React, { useCallback, useState } from "react";
import st from "../../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Student.module.scss";
import tb from "../../../datatable.module.scss";
import {
  Card,
  Row,
  Col,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

import {AiOutlineInfoCircle,AiFillDelete} from "react-icons/ai";
import {FiUpload,FiDownload} from "react-icons/fi";

import StudentMenu from "../../../components/Sidebar/StudentMenu";
import AddStudentDataGrid from "./AddStudentDataGrid";


// --------- Images --------- //
import DemoInfo from "../../../components/DemoInfo/DemoInfo";

import studentIcon from "../../../images/icon-student.svg";

export default function Branch() {
  

  return (
    <>
      <section className={`${st.pageWrapper} ${st.pageWrapperOpen}`}>
        <StudentMenu/>
        <div className={`${st.pageTitle}`}>
          <Row>
            <Col md={6} lg={6}>
                <div className={`${st.titleInfo}`}>
                    <img src={studentIcon} className={`${st.icon}`} />    
                    <div className={`${st.titleInfoBody}`}>
                           <h5>Students</h5>
                      <p>Your students</p>
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
                    <NavLink to="/student/add-student" className={`btn ${tb.addBtn}`} >
                      <img src={studentIcon} className={`${tb.icon}`} />  
                      Add Student
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
                <AddStudentDataGrid/>
              </div>
              
            </Card.Body>
          </Card>
        </div>
      </section>
      
    </>
  );
}
