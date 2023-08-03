import React, { useCallback, useState } from "react";
import st from "../../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import tb from "../../../datatable.module.scss";
import m from "../../../modal.module.scss";
import camp from"../../../images/icon-camp.svg";
import {
  Card,
  Row,
  Col,Button,Modal,Form 
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

import {AiOutlineInfoCircle,AiFillDelete} from "react-icons/ai";
import {FiUpload,FiDownload} from "react-icons/fi";
import {MdClose} from "react-icons/md";


// --------- Images --------- //
import course from "../../../images/icon-course.svg";


import CoursesMenu from "../../../components/Sidebar/CoursesMenu";
import DemoInfo from "../../../components/DemoInfo/DemoInfo";
import uploadFile from "../../../images/iconUpload.svg";
import EventDataGrid from "./EventDataGrid";
import AddEvent from "../../../components/Modals/AddEvent";

export default function Events() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section className={`${st.pageWrapper} ${st.pageWrapperOpen}`}>
        <CoursesMenu />
        <div className={`${st.pageTitle}`}>
          <Row>
            <Col md={6} lg={6}>
                <div className={`${st.titleInfo}`}>
                    <img src={course} className={`${st.icon}`} />    
                    <div className={`${st.titleInfoBody}`}>
                      <h5>Events/Camps</h5>
                      <p>Main info about Event/Camp</p>
                    </div>
                </div>  
            </Col>
            <Col md={6} lg={6}>
            <div className="d-flex justify-content-end">
                <DemoInfo />
              </div>
            </Col>
          </Row>
        </div>

       
        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body>
              <Row className={`${tb.tableAction}`}>
                <Col lg={12}>
                  <div className="d-flex">
                    <NavLink to="#" className={`btn ${tb.addBtn}`} onClick={handleShow}>
                      
                <img src={camp} className={`${tb.icon}`} />
               
                      Add Event/Camp
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
                <EventDataGrid />
              </div>
              
            </Card.Body>
          </Card>
        </div>
      </section>

     
      <AddEvent show={show} handleClose={handleClose}/>
    </>
  );
}
