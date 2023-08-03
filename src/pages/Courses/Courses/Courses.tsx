import React, { useCallback, useState } from "react";
import st from "../../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Courses.module.scss";
import tb from "../../../datatable.module.scss";
import m from "../../../modal.module.scss";
import {
  Card,
  Row,
  Col,Form,Modal,Button
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

import {AiOutlineInfoCircle,AiFillDelete} from "react-icons/ai";
import {FiUpload,FiDownload} from "react-icons/fi";


// --------- Images --------- //
import course from "../../../images/icon-course.svg";
import CoursesDataGrid from "./CoursesDataGrid";
import CoursesMenu from "../../../components/Sidebar/CoursesMenu";
import DemoInfo from "../../../components/DemoInfo/DemoInfo";
import {MdClose} from "react-icons/md";
export default function Courses() {
  
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
                      <h5>Courses</h5>
                      <p>Main info about courses</p>
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
              <span className="mb-3"><img src={course} /></span>
              <NavLink to="#" className={`btn ${st.setupBtn}`}>Add Course</NavLink> 
          </Col> */ }

        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body>
              <Row className={`${tb.tableAction}`}>
                <Col lg={12}>
                  <div className="d-flex">
                    <NavLink to="#" className={`btn ${tb.addBtn}`} onClick={handleShow}>
                      <img src={course} className={`${tb.icon}`} />  
                      Add Courses
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
                <CoursesDataGrid/>
              </div>
              
            </Card.Body>
          </Card>
        </div>
      </section>

      <Modal centered show={show} onHide={handleClose} className={`${m.modalCts}`}>
        <Modal.Body>
          <button className={`${m.closeIcon}`} title="Close" onClick={handleClose}><MdClose /></button>
          <Col lg={12} className={`${m.title}`}>
            <h5>Add Course</h5>
          </Col>
          <Row>
            
            <Col md={12} lg={12}>
                  <Row>
                  <Col lg={12}>
                    <Form.Group className={`${st.formField}`}>
                      <Form.Label>Name of Course<span className="text-danger"></span></Form.Label>
                        <input type="text" className={'form-control'} placeholder="Name of Course" />
                    </Form.Group>
                  </Col>
                  <Col lg={6} md={12}>
                    <Form.Group className={`${st.formField}`}>
                      <Form.Label>Curriculum<span className="text-danger"></span></Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>Curriculum</option>
                        </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={6} md={12}>
                    <Form.Group className={`${st.formField}`}>
                      <Form.Label>Mode<span className="text-danger"></span></Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>Mode</option>
                        </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Form.Group className={`${st.formField}`}>
                      <Form.Label>Subject<span className="text-danger">*</span></Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>Multiple assignment of subject</option>
                        </Form.Select>
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
