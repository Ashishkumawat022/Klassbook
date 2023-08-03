import React, { useCallback, useState } from "react";
import st from "../../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Classes.module.scss";
import {
  Card,
  Row,
  Col,
  Form,
  Button,
  Tab,
  Nav,
  InputGroup,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

import {
  AiOutlineInfoCircle,
  AiOutlineGlobal,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsFacebook, BsTelegram } from "react-icons/bs";
import { MdLocationPin, MdModeEditOutline } from "react-icons/md";

// --------- Images --------- //

import course from "../../../images/icon-course.svg";
import uploadFile from "../../../images/business.jpg";
import DemoInfo from "../../../components/DemoInfo/DemoInfo";
import CoursesMenu from "../../../components/Sidebar/CoursesMenu";
import AddClass from "../../../components/Modals/AddClass";

export default function ClassDetails() {
  
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
              <div className="d-flex justify-content-end">
                <ul className={`${st.actionTop}`}>
                  <li>
                    <NavLink className={`btn ${st.info}`} to="#"  onClick={handleShow}>
                      <MdModeEditOutline />
                    </NavLink>
                  </li>
                </ul>
                <DemoInfo />
              </div>
            </Col>
          </Row>
        </div>

        {/* Data Note Found First
        <Col lg={12} className={`${st.dataNotFound}`}>
            <span><img src={business} /></span>
            <p>Add your first business</p>
            <NavLink to="#" className={`btn ${st.setupBtn}`}>Business Set Up</NavLink> 
        </Col> */}

        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body>
              <div className={`${cx.viewList}`}>
                <Row>
                  <Col md={12} lg={12} xl={12}>
                    <div className={`${cx.studentsCount}`}>
                      <div className={`${cx.uploadData} me-3`}>
                        <h5>Ukrainian Class</h5>
                        <p>Branch: Green Forest</p>
                      </div>
                      <div>
                        <ul>
                          <li>
                            <span>Total :</span> 
                            <strong className="ms-1">4 students</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                </Row>

                <div className={`${cx.uploadData} me-3 mb-5`}>
                  <Row className={'align-items-end'}>
                    <Col md={12} lg={3} xl={3}>
                      <ul>
                        <li>
                          <span>Course</span>
                          <strong>II</strong>
                        </li>
                        <li>
                          <span>Level</span>
                          <strong>Basic</strong>
                        </li>
                        <li>
                          <span>Subject</span>
                          <strong>Ukrainian language</strong>
                        </li>
                      </ul>
                    </Col>
                    <Col md={12} lg={3} xl={3}>
                      <ul>
                        <li>
                          <span>Team</span>
                          <strong>Main Team</strong>
                        </li>
                        <li>
                          <span>Capacity</span>
                          <strong>Capacity</strong>
                        </li>
                        <li>
                          <span>Facility/Room</span>
                          <strong>001</strong>
                        </li>
                      </ul>
                    </Col>
                    <Col md={12} lg={3} xl={3}>
                      <ul>
                        <li>
                          <span></span>
                          <strong></strong>
                        </li>
                        <li>
                          <span></span>
                          <strong></strong>
                        </li>
                        <li>
                          <span>Mode</span>
                          <strong>Online</strong>
                        </li>
                      </ul>
                    </Col>
                    <Col md={12} lg={3} xl={3}>
                      <ul>
                        <li>
                          <strong>Every day</strong>
                        </li>
                        <li>
                          <strong>22.06.2023-22.07.2023</strong>
                        </li>
                        <li>
                          <strong>09:00 am -11:00 am</strong>
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
                      <Nav.Link eventKey="tabId1">Schedule</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabId2">Student</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabId3">Details</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabId4">About Class</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <div className={`${st.contentBox}`}>
                    <Tab.Content>
                      <Tab.Pane eventKey="tabId1">
                        <Row>
                          <Col lg={12} className={`${st.tabTitle}`}>
                            <Row>
                              <Col md={9} lg={9}>
                                <h5>Address Details</h5>
                                <p>
                                  To help customers find your business on Google
                                  Maps and Search, enter your business address.{" "}
                                </p>
                              </Col>
                              <Col md={3} lg={3}>
                                <NavLink
                                  to="#"
                                  className={`btn ${st.editIcon}`}
                                  onClick={handleShow}
                                >
                                  <MdModeEditOutline />
                                </NavLink>
                              </Col>
                            </Row>
                          </Col>

                          <Col md={12} lg={9} xl={10}>
                            <div className={`${cx.uploadData}`}>
                              <ul className={`${cx.addedSocial}`}>
                                <li>
                                  <span>Location </span>
                                  <strong className="pb-1">Ukraine , Kyiv region , Kyiv</strong>
                                </li>
                                <li>
                                  <NavLink to="#">
                                    <span></span>
                                    <div style={{marginBottom:"-8px"}}>
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
                          <Col lg={12} className={`${st.tabTitle}`}>
                            <Row>
                              <Col md={9} lg={9}>
                                <h5>Links</h5>
                                <p>Share more information about you</p>
                              </Col>
                              <Col md={3} lg={3}>
                                <NavLink
                                  to="#"
                                  onClick={handleShow}
                                  className={`btn ${st.editIcon}`}
                                >
                                  <MdModeEditOutline />
                                </NavLink>
                              </Col>
                            </Row>
                          </Col>
                          <Col lg={12}>
                            <ul className={`${cx.addedSocial}`}>
                              <li>
                                <NavLink to="#">
                                  <span className={`${cx.iconBox}`}>
                                    <AiOutlineGlobal className={`${st.icon}`} />
                                  </span>
                                  <div className={`${cx.body}`}>
                                    {" "}
                                    https://green-forest.com
                                  </div>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#">
                                  <span className={`${cx.iconBox}`}>
                                    <AiFillInstagram className={`${st.icon}`} />
                                  </span>
                                  <div className={`${cx.body}`}>
                                    {" "}
                                    https://instagram.com
                                  </div>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#">
                                  <span className={`${cx.iconBox}`}>
                                    <BsFacebook className={`${st.icon}`} />
                                  </span>
                                  <div className={`${cx.body}`}>
                                    {" "}
                                    https://facebook.com
                                  </div>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#">
                                  <span className={`${cx.iconBox}`}>
                                    <AiFillTwitterCircle
                                      className={`${st.icon}`}
                                    />
                                  </span>
                                  <div className={`${cx.body}`}>
                                    {" "}
                                    https://twitter.com
                                  </div>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#">
                                  <span className={`${cx.iconBox}`}>
                                    <BsTelegram className={`${st.icon}`} />
                                  </span>
                                  <div className={`${cx.body}`}>
                                    {" "}
                                    https://telegram.com
                                  </div>
                                </NavLink>
                              </li>
                            </ul>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="tabId3">
                        <Row>
                          <Col lg={12} className={`${st.tabTitle}`}>
                            <Row>
                              <Col md={9} lg={9}>
                                <h5>Settings</h5>
                                <p>Settings your business</p>
                              </Col>
                              <Col md={3} lg={3}>
                                <NavLink
                                  to="#"
                                  onClick={handleShow}
                                  className={`btn ${st.editIcon}`}
                                >
                                  <MdModeEditOutline />
                                </NavLink>
                              </Col>
                            </Row>
                          </Col>
                          <Col md={12} lg={9} xl={10} className="mt-1">
                            <div className={`${cx.uploadData}`}>
                              <ul>
                                <li>
                                  <span>Time Zone </span>
                                  <strong>IST </strong>
                                </li>
                              </ul>
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="tabId4">
                        <Row>
                          <Col lg={12} className={`${st.tabTitle}`}>
                            <Row>
                              <Col md={10} lg={11}>
                                <h5>About Class</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                              </Col>
                              <Col md={2} lg={1}>
                                <NavLink
                                  to="#"
                                  onClick={handleShow}
                                  className={`btn ${st.editIcon}`}
                                >
                                  <MdModeEditOutline />
                                </NavLink>
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
      <AddClass show={show} handleClose={handleClose}/>
    </>
  );
}
