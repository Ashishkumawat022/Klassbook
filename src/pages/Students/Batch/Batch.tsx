import React, { useCallback, useState } from "react";
import st from "../../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Batch.module.scss";
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


// --------- Images --------- //
import DemoInfo from "../../../components/DemoInfo/DemoInfo";

import BatchDataGrid from "./BatchDataGrid";
import { FaUserGraduate } from "react-icons/fa";

export default function Batch() {
  
  

  return (
    <>
      <section className={`${st.pageWrapper} ${st.pageWrapperOpen}`}>
        <StudentMenu/>
        <div className={`${st.pageTitle}`}>
          <Row>
            <Col md={6} lg={6}>
                <div className={`${st.titleInfo}`}>
                    
                    <FaUserGraduate className={`${st.icon}`}/> 
                    <div className={`${st.titleInfoBody}`}>
                           <h5>Batch</h5>
                      <p>Batch of Students </p>
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
                    <NavLink to="/batch/add-batch" className={`btn ${tb.addBtn}`} >
                     
                      <FaUserGraduate className={`${tb.icon}`}/>
                      Add Batch
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
                <BatchDataGrid/>
              </div>
              
            </Card.Body>
          </Card>
        </div>
      </section>
      
    </>
  );
}
