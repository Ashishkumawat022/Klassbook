import React, { useCallback, useState } from "react";
import st from "../../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Curriculum.module.scss";
import tb from "../../../datatable.module.scss";
import m from "../../../modal.module.scss";
import {
  Card,
  Row,
  Col,Form,Modal,Button, InputGroup
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

import {AiOutlineInfoCircle,AiFillDelete,AiOutlineGlobal,AiOutlineSearch} from "react-icons/ai";
import {FiUpload,FiDownload} from "react-icons/fi";


// --------- Images --------- //
import course from "../../../images/icon-course.svg";
import curriculam from "../../../images/icon-curriculam.svg";
import CurriculumDataGrid from "./CurriculumDataGrid";
import CoursesMenu from "../../../components/Sidebar/CoursesMenu";
import DemoInfo from "../../../components/DemoInfo/DemoInfo";
import {MdClose} from "react-icons/md";

export default function Curriculum() {
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
                      <h5>Curriculum</h5>
                      <p>Main info about Curriculum</p>
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

        {/* Data Note Found First
          <Col lg={12} className={`${st.dataNotFound}`}>
              <span className="mb-3"><img src={curriculam} /></span>
              <NavLink to="#" className={`btn ${st.setupBtn}`}>Add Curriculam</NavLink> 
          </Col> */ }

        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body>
              <Row className={`${tb.tableAction}`}>
                <Col lg={12}>
                  <div className="d-flex">
                    <NavLink to="#" className={`btn ${tb.addBtn}`} onClick={handleShow}>
                      <img src={curriculam} className={`${tb.icon}`} />  
                      Add Curriculum
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
                <CurriculumDataGrid/>
              </div>
              
            </Card.Body>
          </Card>
        </div>
      </section>

      <Modal centered show={show} onHide={handleClose} className={`${m.modalCts}`}>
        <Modal.Body>
          <button className={`${m.closeIcon}`} title="Close" onClick={handleClose}><MdClose /></button>
          <Col lg={12} className={`${m.title}`}>
            <h5>Add Curriculam</h5>
          </Col>
          <Row>
            
            <Col md={12} lg={12}>
                  <Row>
                  <Col lg={12}>
                    <Form.Group className={`${st.formField}`}>
                      <Form.Label>Add Curriculam<span className="text-danger">*</span></Form.Label>
                      <input type="text" className={'form-control'} placeholder="Curriculam" />
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Form.Group className={`${st.formField}`}>
                      <Form.Label>Description<span className="text-danger">*</span></Form.Label>
                      <input type="text" className={'form-control'} placeholder="Description" />
                    </Form.Group>
                  </Col>
                  <Col lg={12} className="mt-2 text-center">
                    <Button className={`${st.btnDisabled}`}>Save</Button>
                  </Col>
                  </Row>
                </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
