import React, { useCallback, useState } from "react";
import st from "../../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Classes.module.scss";
import tb from "../../../datatable.module.scss";
import m from "../../../modal.module.scss";
import {
  Card,
  Row,
  Col,Form,Modal,Button,Tab,Nav,InputGroup
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

import {AiOutlineInfoCircle,AiFillDelete} from "react-icons/ai";
import {FiUpload,FiDownload} from "react-icons/fi";


// --------- Images --------- //
import course from "../../../images/icon-course.svg";
import classIcon from "../../../images/icon-class.svg";
import ClassesDataGrid from "./ClassesDataGrid";
import CoursesMenu from "../../../components/Sidebar/CoursesMenu";
import DemoInfo from "../../../components/DemoInfo/DemoInfo";
import {MdClose} from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import AddClass from "../../../components/Modals/AddClass";

export default function Classes() {
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
                      <h5>Classes</h5>
                      <p>Main info about Class</p>
                    </div>
                </div>  
            </Col>
            <Col md={6} lg={6}>
              <DemoInfo />
            </Col>
          </Row>
        </div>

        {/* Data Note Found First
          <Col lg={12} className={`${st.dataNotFound}`}>
              <span className="mb-3"><img src={classIcon} /></span>
              <NavLink to="#" className={`btn ${st.setupBtn}`}>Add Class</NavLink> 
          </Col> */ }

        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body>
              <Row className={`${tb.tableAction}`}>
                <Col lg={12}>
                  <div className="d-flex">
                    <NavLink to="#" className={`btn ${tb.addBtn}`} onClick={handleShow}>
                      <img src={classIcon} className={`${tb.icon}`} />  
                      Add Class
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
                <ClassesDataGrid/>
              </div>
              
            </Card.Body>
          </Card>
        </div>
      </section>
      <AddClass show={show} handleClose={handleClose}/>
    </>
  );
}
