import React  from "react";
import st from "../../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Event.module.scss";

import tb from "../../../datatable.module.scss";
import {
  Card,
  Row,
  Col,
  Form,
  Tab,
  Nav,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { AiFillDelete } from "react-icons/ai";

import {
  MdArrowBackIosNew,
  MdLocationPin,
  MdModeEditOutline,
} from "react-icons/md";

import CoursesMenu from "../../../components/Sidebar/CoursesMenu";

// --------- Images --------- //

import DemoInfo from "../../../components/DemoInfo/DemoInfo";
import StudentDataGrid from "./StudentDataGrid";

export default function EventDetails() {
  return (
    <>
      <section className={`${st.pageWrapper} ${st.pageWrapperOpen}`}>
        <CoursesMenu />
        <div className={`${st.pageTitle}`}>
          <Row>
            <Col md={6} lg={6}>
              <div className={`${st.titleInfo}`}>
                <NavLink className={`btn ${st.back}`} to="/courses/event/">
                  <MdArrowBackIosNew />
                </NavLink>
                <div className={`${st.titleInfoBody}`}>
                  <h5>Events/Camps</h5>
                  <p>Main info about Event/Camp</p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={6}>
              <div className="d-flex justify-content-end">
                <ul className={`${st.actionTop}`}>
                  <li>
                    <NavLink className={`btn ${st.info}`} to="#">
                      <AiFillDelete />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={`btn ${st.info}`} to="#">
                      <MdModeEditOutline />
                    </NavLink>
                  </li>
                </ul>
                <DemoInfo />
              </div>
            </Col>
          </Row>
        </div>

       

        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body>
              <div className={`${cx.viewList}`}>
                <Row>
                  <Col md={12} lg={12} xl={12}>
                    <div className={`${cx.studentsCount}`}>
                      <div className={`${cx.uploadData}  me-3`}>
                        <h5>Summer Event</h5>

                        <p style={{ color: "#f9560f" }}>Branch: Green Forest</p>
                      </div>
                    </div>
                  </Col>
                </Row>

                <div className={`${cx.uploadData} me-3 mb-5`}>
                  <Row className={"align-items-end"}>
                    <Col md={12} lg={4} xl={3}>
                      <ul>
                        <li>
                          <span>Mode</span>
                          <strong>Mode</strong>
                        </li>
                        <li>
                          <span>Type</span>
                          <strong>Name of type</strong>
                        </li>
                      </ul>
                    </Col>
                    <Col md={12} lg={4} xl={3}>
                      <ul>
                        <li>
                          <strong>22 Apr 2023 - 22 Jun 2023</strong>
                        </li>
                        <li>
                          <strong>09:00 am -11:00 am</strong>
                        </li>
                      </ul>
                    </Col>

                    <Col md={12} lg={4} xl={3}>
                      <ul>
                        <li>
                          <strong>Every day</strong>
                        </li>
                        <li>
                          Total: <strong> 4 students</strong>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </div>
              </div>

              <div className={`${st.tabbingList}`}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="tabId2">
                  <Nav variant="pills">
                    <Nav.Item>
                      <Nav.Link eventKey="tabId1">Details</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="tabId2"> Schedule</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabId3">Student</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabId4">About Event/Camp</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <div className={`${st.contentBox}`}>
                    <Tab.Content>
                      <Tab.Pane eventKey="tabId1">
                        <Row>
                          <Col md={12} lg={9} xl={10} className="mt-1">
                            <div className={`${cx.uploadData}`}>
                              <ul>
                                <li>
                                  <span>Time </span>
                                  <strong>Female</strong>
                                </li>
                              </ul>
                            </div>
                          </Col>
                          <Col md={12} lg={9} xl={10} className="mt-1">
                            <div className={`${cx.uploadData}`}>
                              <ul>
                                <li>
                                  <span>Capacity </span>
                                  <strong>10.10.1991</strong>
                                </li>
                              </ul>
                            </div>
                          </Col>
                          <Col md={12} lg={9} xl={10} className="mt-1">
                            <div className={`${cx.uploadData}`}>
                              <ul>
                                <li>
                                  <span>Facility/Room </span>
                                  <strong>test-email@gmail.com</strong>
                                </li>
                              </ul>
                            </div>
                          </Col>

                          <Col md={12} lg={9} xl={10}>
                            <div className={`${cx.uploadData}`}>
                              <ul className={`${cx.addedSocial}`}>
                                <li>
                                  <span>Location </span>
                                  <strong className="pb-1">
                                    Ukraine , Kyiv region , Kyiv
                                  </strong>
                                </li>
                                <li>
                                  <NavLink to="#">
                                    <span></span>
                                    <div style={{ marginBottom: "-8px" }}>
                                      <span className={`${cx.iconBox}`}>
                                        <MdLocationPin
                                          className={`${st.icon}`}
                                        />
                                      </span>

                                      <strong>
                                        20 Stepana Bandery Street, 70800
                                      </strong>
                                    </div>
                                  </NavLink>
                                </li>

                                <li>
                                  <NavLink to="#">
                                    <span></span>
                                    <div>
                                      <span className={`${cx.iconBox}`}>
                                        <MdLocationPin
                                          className={`${st.icon}`}
                                        />
                                      </span>
                                      <strong>
                                        {" "}
                                        7B Pid Dubom Street, 70800
                                      </strong>
                                    </div>
                                  </NavLink>
                                </li>
                              </ul>
                            </div>
                          </Col>

                          <Col md={12} lg={9} xl={10} className="mt-1">
                            <div className={`${cx.uploadData}`}>
                              <ul>
                                <li>
                                  <span>Landmark </span>
                                  <strong>Opposite the black gate</strong>
                                </li>
                              </ul>
                            </div>
                          </Col>

                          
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="tabId2">
                        <Row>
                          <Col md={12} lg={9} xl={10} className="mt-1">
                            <div className={`${cx.uploadData}`}>
                              <ul>
                                <li>
                                  <span>Time Zone </span>
                                  <strong>UTC +8, SGT Singapore Time </strong>
                                </li>
                                <li>
                                  <span>Date </span>
                                  <strong>22.06.2023</strong>
                                </li>
                                <li>
                                  <span>Time </span>
                                  <strong>09:00 am -11:00 am </strong>
                                </li>
                                <li>
                                  <span>Repeat </span>
                                  <strong>Every day </strong>
                                </li>
                                <li>
                                  <span>Till </span>
                                  <strong>22.07.2023 </strong>
                                </li>
                              </ul>
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="tabId3">
                        <Row >
                          <Col lg={12} className={`${st.tabTitle} mb-3 `}>
                            <Row className="align-items-center mb-2">
                              <Col md={4} lg={4}>
                                {/* <span>You have : 3 students</span> */}
                              </Col>
                              <Col md={6} lg={8}>
                              <NavLink
                                  to="#"
                                  className={`btn ${st.editIcon}`}
                                >
                                  <MdModeEditOutline />
                                </NavLink>
                              <NavLink
                                  to="#"
                                  className={`btn ${cx.studenteditIcon}`}
                                >
                                 Quick Add Student
                                </NavLink>
                                <NavLink
                                  to="#"
                                  className={`btn ${cx.studenteditIcon}`}
                                >
                                 Add Student Batch
                                </NavLink>
                                <NavLink
                                  to="#"
                                  className={`btn ${cx.studenteditIcon}`}
                                >
                                  Assign Student
                                </NavLink>
                               
                                
                              </Col>
                            </Row>
                          </Col>
                          <Col lg={12}>
                            <div className={`${tb.dataTable}`}>
                              <StudentDataGrid />
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="tabId4">
                        <Row>
                          <Col lg={12} className={`${st.tabTitle}`}>
                            <Row>
                              <Col md={10} lg={11}>
                                <h5>About Event/Camp</h5>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, Lorem ipsum dolor sit amet
                                  consectetur adipisicing elit. Saepe minus
                                  tempora exercitationem eaque nemo non!
                                  Incidunt ipsa vel laborum eveniet! sed do
                                  eiusmod tempor incididunt ut labore et dolore
                                  magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud exercitation ullamco laboris nisi ut
                                  aliquip ex ea commodo consequat. Duis aute
                                  irure dolor in reprehenderit in voluptate
                                  velit esse cillum dolore eu fugiat nulla
                                  pariatur. Excepteur sint occaecat cupidatat
                                  non proident, sunt in culpa qui officia
                                  deserunt mollit anim id est laborum.
                                </p>
                              </Col>
                            </Row>
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
    </>
  );
}
