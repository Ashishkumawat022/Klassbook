import React, { useCallback, useState } from "react";
import st from "../../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./ProgramAndCourses.module.scss";
import tb from "../../../datatable.module.scss";
import { Card, Row, Col, Form, Button, Tab, Nav, Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";

// --------- Images --------- //

import KlassBookSetupMenu from "../../../components/Sidebar/KlassbookSetupMenu";

import ksetup from "../../../images/icon-k-setup.svg";

import courses from "../../../images/icon-course.svg";
import { MdClose, MdModeEditOutline } from "react-icons/md";
import CourseDataGrid from "./CourseDataGrid";
import SubjectDataGrid from "./SubjectDataGrid";
import TeacherDataGrid from "./TeacherDataGrid";
import uploadFile from "../../../images/iconUpload.svg";

import m from "../../../modal.module.scss";

export default function ProgramAndCourses() {
  const [showCourse, setCourseShow] = useState(false);
  const handleCourseClose = () => setCourseShow(false);
  const handleCourseShow = () => setCourseShow(true);

  const [showSubject, setSubjectShow] = useState(false);
  const handleSubjectClose = () => setSubjectShow(false);
  const handleSubjecteShow = () => setSubjectShow(true);

  const [showTeacher, setTeacherShow] = useState(false);
  const handleTeacherClose = () => setTeacherShow(false);
  const handleTeacherShow = () => setTeacherShow(true);

  return (
    <>
      <section className={`${st.pageWrapper} ${st.pageWrapperOpen}`}>
        <KlassBookSetupMenu />
        <div className={`${st.pageTitle}`}>
          <Row>
            <Col md={12} lg={12}>
              <div className={`${st.titleInfo}`}>
                <img src={ksetup} className={`${st.icon}`} />
                <div className={`${st.titleInfoBody}`}>
                  <h5>Klassbook Set Up</h5>
                  <p>Program/Subject /Teachers</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body>
              <div className={`${st.tabbingList}`}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="tabId1">
                  <div className="d-flex justify-content-between">

                    <div>
                      <Nav variant="pills" className={`${cx.setuptabs}`}>
                        <Nav.Item>
                          <Nav.Link eventKey="tabId1">Course</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="tabId2">Subjects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="tabId3">Teachers</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                    
                  </div>
                  <div>
                    <Tab.Content>
                      <Tab.Pane eventKey="tabId1">
                        <Row>
                          <Col lg={12} md={12}>
                            <div className={`${tb.dataTable}`}>
                              <div
                                className={`${tb.tableAction} ${cx.tabpositionbtn} text-end`}
                              >
                                <NavLink
                                  to="#"
                                  className={`btn ${tb.addBtn}`}
                                  onClick={handleCourseShow}
                                >
                                  <img src={courses} className={`${tb.icon}`} />
                                  Add Course
                                </NavLink>
                              </div>

                              <CourseDataGrid />
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="tabId2">
                        <Row>
                          <Col lg={12} md={12}>
                            <div className={`${tb.dataTable}`}>
                              <div
                                className={`${tb.tableAction} ${cx.tabpositionbtn} text-end`}
                              >
                                <NavLink
                                  to="#"
                                  className={`btn ${tb.addBtn}`}
                                  onClick={handleSubjecteShow}
                                >
                                  <img src={courses} className={`${tb.icon}`} />
                                  Add Subject
                                </NavLink>
                              </div>

                              <SubjectDataGrid />
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="tabId3">
                        <Row>
                          <Col lg={12} md={12}>
                            <div className={`${tb.dataTable}`}>
                              <div
                                className={`${tb.tableAction} ${cx.tabpositionbtn} text-end`}
                              >
                                <NavLink
                                  to="#"
                                  className={`btn ${tb.addBtn}`}
                                  onClick={handleTeacherShow}
                                >
                                  <img src={courses} className={`${tb.icon}`} />
                                  Add Teacher
                                </NavLink>
                              </div>

                              <TeacherDataGrid />
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Tab.Container>
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>



{/* Add Course Module */}
      <Modal
        show={showCourse}
        className={`${m.modalCts} ${m.modalSizeLg}`}
        centered
        onHide={handleCourseClose}
      >
        <Modal.Body>
          <button
            className={`${m.closeIcon}`}
            title="Close"
            onClick={handleCourseClose}
          >
            <MdClose />
          </button>
          <Col lg={12} className={`${m.title}`}>
            <h5>Computer architecture</h5>
          </Col>
          <Row>
            <Col md={12} lg={12}>
              <Form.Group className={`${st.formField}`}>
                <Form.Label>About Course</Form.Label>
                <Form.Control
                  as={"textarea"}
                  type="text"
                  rows={10}
                  cols={40}
                  style={{ height: "200px" }}
                  placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est necessitatibus iusto voluptatem accusamus, nemo esse! A, enim atque! Voluptates cumque corporis, neque optio nam cum tempora alias quia animi mollitia. Ipsum doloremque modi at consectetur voluptate. Deleniti, quisquam enim. "
                />
              </Form.Group>
            </Col>
            <Col lg={12} md={12} className={`${st.formField} text-center`}>
              <Form.Label className={`${st.labelHide}`}>.</Form.Label>
              <Button className={`${st.btnDisabled}`}>Save</Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>



{/* Add Subject Module */}

      <Modal
        show={showSubject}
        className={`${m.modalCts} ${m.modalSizeLg} `}
        centered
        onHide={handleSubjectClose}
      >
        <Modal.Body>
          <button
            className={`${m.closeIcon}`}
            title="Close"
            onClick={handleSubjectClose}
          >
            <MdClose />
          </button>
          <Col lg={12} className={`${m.title}`}>
            <h5>Add Subject</h5>
          </Col>
          <Row>
            <Col md={4} lg={3}>
              <div className={`${st.uploadForm} me-3 mb-3`}>
                <div className={`${st.fileUpload}`}>
                  <input type="file" />
                  <img src={uploadFile} className={`${st.icon}`} />
                </div>
                <Form.Label>
                  Upload Photo<span className="text-danger">*</span>
                </Form.Label>
              </div>
            </Col>

            <Col md={12} lg={9}>
              <Row>
                <Col md={12} lg={12}>
                  <Form.Group className={`${st.formField}`}>
                    <Form.Label>Subject Name</Form.Label>
                    <Form.Control type="text" placeholder="Subject" />
                  </Form.Group>
                </Col>
                <Col md={12} lg={12}>
                  <Form.Group className={`${st.formField}`}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" />
                  </Form.Group>
                </Col>
              </Row>
            </Col>
            <Col lg={12} md={12} className={`${st.formField} text-end`}>
              <Form.Label className={`${st.labelHide}`}>.</Form.Label>
              <Button className={`${st.btnDisabled}`}>Save</Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      
{/* Add Teacher Module */}

      <Modal
        show={showTeacher}
        className={`${m.modalCts} ${m.modalSizeLg}`}
        centered
        onHide={handleTeacherClose}
      >
        <Modal.Body>
          <button
            className={`${m.closeIcon}`}
            title="Close"
            onClick={handleTeacherClose}
          >
            <MdClose />
          </button>
          <Col lg={12} className={`${m.title}`}>
            <h5>Add Teacher</h5>
          </Col>
          <Row>
            <Col md={4} lg={3}>
              <div className={`${st.uploadForm} me-3 mb-3`}>
                <div className={`${st.fileUpload}`}>
                  <input type="file" />
                  <img src={uploadFile} className={`${st.icon}`} />
                </div>
                <Form.Label>
                  Upload Photo<span className="text-danger">*</span>
                </Form.Label>
              </div>
            </Col>

            <Col md={12} lg={9}>
              <Row>
                <Col md={12} lg={12}>
                  <Form.Group className={`${st.formField}`}>
                    <Form.Label>Teacher Name</Form.Label>
                    <Form.Control type="text" placeholder="Teacher" />
                  </Form.Group>
                </Col>
                <Col md={12} lg={12}>
                  <Form.Group className={`${st.formField}`}>
                    <Form.Label>About Teacher</Form.Label>
                    <Form.Control type="text" placeholder="Description" />
                  </Form.Group>
                </Col>
              </Row>
            </Col>
            <Col lg={12} md={12} className={`${st.formField} text-end`}>
              <Form.Label className={`${st.labelHide}`}>.</Form.Label>
              <Button className={`${st.btnDisabled}`}>Save</Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
