import React, { useCallback, useState } from "react";
import st from "../../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Subject.module.scss";
import tb from "../../../datatable.module.scss";
import m from "../../../modal.module.scss";
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
import subject from "../../../images/icon-subject.svg";
import SubjectDataGrid from "./SubjectDataGrid";
import CoursesMenu from "../../../components/Sidebar/CoursesMenu";
import DemoInfo from "../../../components/DemoInfo/DemoInfo";
import uploadFile from "../../../images/iconUpload.svg";

export default function Subject() {

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
                      <h5>Subject</h5>
                      <p>Main info about Subject</p>
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
              <span className="mb-3"><img src={subject} /></span>
              <NavLink to="#" className={`btn ${st.setupBtn}`}>Add Subject</NavLink> 
          </Col> */ }

        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body>
              <Row className={`${tb.tableAction}`}>
                <Col lg={12}>
                  <div className="d-flex">
                    <NavLink to="#" className={`btn ${tb.addBtn}`} onClick={handleShow}>
                      <img src={subject} className={`${tb.icon}`} />  
                      Add Subject
                    </NavLink>
                    <button className={`btn ${tb.upload}`}>
                      <FiUpload className={`${tb.icon}`} />  
                      Upload CSV
                      <input type="file" />
                    </button>
                    {/* <button className={`btn ${tb.upload}`}>
                      <FiDownload className={`${tb.icon} m-0`} />
                    </button> */}
                    <button className={`btn ${tb.upload}`}>
                      <AiFillDelete className={`${tb.icon} m-0`} />
                    </button>
                  </div>
                </Col>
              </Row>
              <div className={`${tb.dataTable}`}>
                <SubjectDataGrid />
              </div>
              
            </Card.Body>
          </Card>
        </div>
      </section>

      <Modal centered show={show} onHide={handleClose} className={`${m.modalCts}`}>
        <Modal.Body>
          <button className={`${m.closeIcon}`} title="Close" onClick={handleClose}><MdClose /></button>
          <Col lg={12} className={`${m.title}`}>
            <h5>Add Subject</h5>
          </Col>
          <Row>   
            <Col md={3} lg={3}>
              <div className={`${st.uploadForm} me-3 mb-3`}>
                <div className={`${st.fileUpload}`}>
                    <input type="file" />
                    <img src={uploadFile} className={`${st.icon}`} />
                </div>
                <Form.Label>Upload Photo<span className="text-danger">*</span></Form.Label>
              </div>
            </Col>
            
            <Col md={12} lg={9}>
                  <Row>
                  <Col lg={12}>
                    <Form.Group className={`${st.formField}`}>
                      <Form.Label>Subject Name<span className="text-danger">*</span></Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Subject</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Form.Group className={`${st.formField}`}>
                      <Form.Label>Description<span className="text-danger">*</span></Form.Label>
                      <Form.Control as="textarea" type="text" placeholder="Description" style={{ height: '100px' }} />
                    </Form.Group>
                  </Col>
                  <Col lg={12} className="mt-2">
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
