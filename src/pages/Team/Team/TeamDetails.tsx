import React, { useCallback, useState } from "react";
import st from "../../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Team.module.scss";
import tb from "../../../datatable.module.scss";
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
    MdArrowBackIosNew,
  MdModeEditOutline,
} from "react-icons/md";

// --------- Images --------- //

import admission from "../../../images/icon-team.svg";
import DemoInfo from "../../../components/DemoInfo/DemoInfo";
import studenticons from "../../../images/studenticon.svg";

import TeamScheduleDataGrid from "./TeamScheduleDataGrid";

export default function TeamDetails() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section className={`${st.pageWrapper}`}>
        <div className={`${st.pageTitle}`}>
          <Row>
            <Col md={6} lg={6}>
              <div className={`${st.titleInfo}`}>
              <NavLink className={`btn ${st.back}`} to="/team">
                  <MdArrowBackIosNew />
                </NavLink>
                <div className={`${st.titleInfoBody}`}>
                  <h5>Team</h5>
                  <p>Team Member Details</p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={6}>
              <div className="d-flex justify-content-end">
                <ul className={`${st.actionTop}`}>
                  <li>
                    <NavLink
                      className={`btn ${st.info}`}
                      to="#"
                      //   onClick={handleShow}
                    >
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
                <div className="d-flex">
                  <img
                    src={studenticons}
                    className={`${st.icon}`}
                    height="150px"
                  />
                  <div className={`${cx.studentbanner}`}>
                    <div
                      className={`${cx.studentsCount} d-flex`}
                      style={{ flexWrap: "wrap" }}
                    >
                      <div className={`${cx.uploadData} me-3`}>
                        <h5>Chrystyna Galabuda </h5>
                        <p>Green Forest</p>
                      </div>

                      <div>
                        <ul>
                          <li>
                            <span>Remark:</span>
                            <strong className="ms-1"> Сhocolate allergy</strong>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div
                      className={`${cx.uploadData} me-3 mb-5 d-flex`}
                      style={{ flexWrap: "wrap" }}
                    >
                      <div className="d-flex" style={{ paddingRight: "150px" }}>
                        <ul>
                          <li>
                            <span>Role</span>
                            <strong>B_001</strong>
                          </li>
                          <li>
                            <span>Email</span>
                            <strong>ch-galabuda@gmail.com</strong>
                          </li>
                          <li>
                            <span>Phone</span>
                            <strong>+380 96 60 90 100</strong>
                          </li>
                        </ul>
                      </div>

                      <div className="d-flex">
                        <ul>
                          <li>
                            <span>Gender</span>
                            <strong>Female</strong>
                          </li>
                          <li>
                            <span>DOB</span>
                            <strong>10.10.1991</strong>
                          </li>
                          <li>
                            <span>Qualification</span>
                            <strong>M.Tech</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${st.tabbingList}`}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="tabId2">
                  <div className="d-flex justify-content-between">
                    <div>
                      <Nav variant="pills">
                        <Nav.Item>
                          <Nav.Link eventKey="tabId1">Schedule</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="tabId2">Add Education</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="tabId3">Add Experience </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="tabId4">Subject</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                    <div>
                      {/* <NavLink
                                  to="#"
                                  className={`btn ${cx.studenteditIcon} text-end`}

                                  onClick={handleShow}
                                >
                                  <img
                                    src={materialicon}
                                    alt=""
                                    style={{ marginRight: "8px" }}
                                  />
                                  Add Enroll
                                </NavLink> */}
                    </div>
                  </div>
                  <div className={`${st.contentBox}`}>
                    <Tab.Content>
                      <Tab.Pane eventKey="tabId1">
                        <Row>
                          <Col lg={12} className={`${st.tabTitle}`}>
                            <Row className="align-items-center mb-2 justify-content-between ">
                              <Col md={9} lg={7}>
                                <ul
                                  className={`${st.tabbingMenu} d-flex justify-content-start`}
                                >
                                  <li>
                                    <button className={`${st.active}`}>
                                      Today
                                    </button>
                                  </li>
                                  <li>
                                    <button>Upcomming</button>
                                  </li>
                                  <li>
                                    <button>Past</button>
                                  </li>
                                </ul>
                              </Col>

                              <Col md={3} lg={5}>
                                <ul className="d-flex list-inline justify-content-end">
                                  <li>
                                    <Form.Group className={`${st.formField}`}>
                                    <Form.Control type="date"></Form.Control>
                                    </Form.Group>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="#"
                                      onClick={handleShow}
                                      className={`btn ${st.editIcon}  text-end`}
                                    >
                                      <MdModeEditOutline />
                                    </NavLink>
                                  </li>
                                </ul>
                              </Col>
                            </Row>
                          </Col>
                          <Col lg={12} md={12}>
                            <div className={`${tb.dataTable}`}>
                              <TeamScheduleDataGrid />
                            </div>
                          </Col>
                          {/* 
                          <Col lg={12} md={12} className="mt-4">
                            <table className={`table ${tb.ctTable}`}>
                              <thead>
                                <tr>
                                  <th>Sr .No.</th>
                                  <th>Date</th>
                                  <th>Time</th>
                                  <th>Class</th>
                                  <th>Program</th>
                                  <th>Location</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>001</td>
                                  <td> 22.01.22</td>
                                  <td> 1:00 pm</td>
                                  <td>11b</td>
                                  <td>Власник авторських прав</td>
                                  <td> Lviv, Brodiska st., 56, 70800</td>
                                </tr>
                                <tr>
                                  <td>001</td>
                                  <td> 22.01.22</td>
                                  <td> 1:00 pm</td>
                                  <td>11b</td>
                                  <td>Власник авторських прав</td>
                                  <td> Lviv, Brodiska st., 56, 70800</td>
                                </tr>
                                <tr>
                                  <td>001</td>
                                  <td> 22.01.22</td>
                                  <td> 1:00 pm</td>
                                  <td>11b</td>
                                  <td>Власник авторських прав</td>
                                  <td> Lviv, Brodiska st., 56, 70800</td>
                                </tr>
                                <tr>
                                  <td>001</td>
                                  <td> 22.01.22</td>
                                  <td> 1:00 pm</td>
                                  <td>11b</td>
                                  <td>Власник авторських прав</td>
                                  <td> Lviv, Brodiska st., 56, 70800</td>
                                </tr>
                              </tbody>
                            </table>
                          </Col>

                          <Col lg={12} md={12} className="mt-4">
                            <table className={`table ${tb.ctTable}`}>
                              <thead>
                                <tr>
                                  <th>Sr .No.</th>
                                  <th>Date</th>
                                  <th>Time</th>
                                  <th>Class</th>
                                  <th>Program</th>
                                  <th>Location</th>
                                  <th>Attended</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>001</td>
                                  <td> 22.01.22</td>
                                  <td> 1:00 pm</td>
                                  <td>11b</td>
                                  <td>Власник авторських прав</td>
                                  <td> Lviv, Brodiska st., 56, 70800</td>
                                  <td>
                                    <td>
                                      <ul className={`${tb.attendentTable}`}>
                                        <li>
                                          <NavLink
                                            className={`btn ${tb.Present}`}
                                            title="attended"
                                            to="#"
                                          >
                                            Present
                                          </NavLink>
                                        </li>
                                      </ul>
                                    </td>
                                  </td>
                                </tr>
                                <tr>
                                  <td>001</td>
                                  <td> 22.01.22</td>
                                  <td> 1:00 pm</td>
                                  <td>11b</td>
                                  <td>Власник авторських прав</td>
                                  <td> Lviv, Brodiska st., 56, 70800</td>
                                  <td>
                                    <td>
                                      <ul className={`${tb.attendentTable}`}>
                                        <li>
                                          <NavLink
                                            className={`btn ${tb.Present}`}
                                            title="attended"
                                            to="#"
                                          >
                                            Present
                                          </NavLink>
                                        </li>
                                      </ul>
                                    </td>
                                  </td>
                                </tr>
                                <tr>
                                  <td>001</td>
                                  <td> 22.01.22</td>
                                  <td> 1:00 pm</td>
                                  <td>11b</td>
                                  <td>Власник авторських прав</td>
                                  <td> Lviv, Brodiska st., 56, 70800</td>
                                  <td>
                                    <td>
                                      <ul className={`${tb.attendentTable}`}>
                                        <li>
                                          <NavLink
                                            className={`btn ${tb.Present}`}
                                            title="attended"
                                            to="#"
                                          >
                                            Present
                                          </NavLink>
                                        </li>
                                      </ul>
                                    </td>
                                  </td>
                                </tr>
                                <tr>
                                  <td>001</td>
                                  <td> 22.01.22</td>
                                  <td> 1:00 pm</td>
                                  <td>11b</td>
                                  <td>Власник авторських прав</td>
                                  <td> Lviv, Brodiska st., 56, 70800</td>
                                  <td>
                                    <td>
                                      <ul className={`${tb.attendentTable}`}>
                                        <li>
                                          <NavLink
                                            className={`btn ${tb.Absent}`}
                                            title="attended"
                                            to="#"
                                          >
                                            Absent
                                          </NavLink>
                                        </li>
                                      </ul>
                                    </td>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </Col> */}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="tabId2">
                        <Row>

                        <Col md={12} lg={12}>
                                <ul className="d-flex list-inline m-0 justify-content-end">
                                 
                                  <li>
                                    <NavLink
                                      to="#"
                                      onClick={handleShow}
                                      className={`btn ${st.editIcon}  text-end`}
                                    >
                                      <MdModeEditOutline />
                                    </NavLink>
                                  </li>
                                </ul>
                              </Col>
                          <Col lg={12}>
                            <div className={`${cx.viewList}`}>
                              <div className={` ${cx.teamList}`}>
                                <div
                                  className={` ${cx.uploadData} ${cx.teamBanner}`}
                                >
                                  <ul>
                                    <li>
                                      <span>School/Institute/University</span>
                                      <strong>
                                        Massachusetts Institute of Technology
                                        Estd.
                                      </strong>
                                    </li>
                                    <li>
                                      <span>Degree</span>
                                      <strong> MBA</strong>
                                    </li>
                                    <li>
                                      <span>Area of Study</span>
                                      <strong>Commerce </strong>
                                    </li>
                                    <li>
                                      <span>Dates Attended</span>
                                      <strong>
                                        22.02.22 <span className="mx-3">to</span>
                                        22.01.2021
                                      </strong>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className={` ${cx.teamList}`}>
                                <div
                                  className={` ${cx.uploadData} ${cx.teamBanner}`}
                                >
                                  <ul>
                                    <li>
                                      <span>School/Institute/University</span>
                                      <strong>
                                        Massachusetts Institute of Technology
                                        Estd.
                                      </strong>
                                    </li>
                                    <li>
                                      <span>Degree</span>
                                      <strong> MBA</strong>
                                    </li>
                                    <li>
                                      <span>Area of Study</span>
                                      <strong>Commerce </strong>
                                    </li>
                                    <li>
                                      <span>Dates Attended</span>
                                      <strong>
                                        22.02.22 <span className="mx-3">to</span>
                                        22.01.2021
                                      </strong>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="tabId3">
                      <Row>
                      <Col md={12} lg={12}>
                                <ul className="d-flex  m-0 list-inline justify-content-end">
                                 
                                  <li>
                                    <NavLink
                                      to="#"
                                      onClick={handleShow}
                                      className={`btn ${st.editIcon}  text-end`}
                                    >
                                      <MdModeEditOutline />
                                    </NavLink>
                                  </li>
                                </ul>
                              </Col>

                          <Col lg={12}>
                            <div className={`${cx.teamviewList}`}>
                              <div className={` ${cx.teamList}`}>
                                <div
                                  className={` ${cx.uploadData} ${cx.teamBanner}`}
                                >
                                  <ul>
                                    <li>
                                      <span>Company Name</span>
                                      <strong>
                                      Klassbook Pvt Ltd.
                                      </strong>
                                    </li>
                                    <li>
                                      <span>Location</span>
                                      <strong> india</strong>
                                    </li>
                                    <li>
                                      <span>Position</span>
                                      <strong>Software Developer </strong>
                                    </li>
                                    <li>
                                      <span>Dates Attended</span>
                                      <strong>
                                        22.02.22 <span className="mx-3">to</span>
                                        22.01.2021
                                      </strong>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className={` ${cx.teamList}`}>
                                <div
                                  className={` ${cx.uploadData} ${cx.teamBanner}`}
                                >
                                  <ul>
                                    <li>
                                      <span>Company Name</span>
                                      <strong>
                                      Klassbook Pvt Ltd.
                                      </strong>
                                    </li>
                                    <li>
                                      <span>Location</span>
                                      <strong> india</strong>
                                    </li>
                                    <li>
                                      <span>Position</span>
                                      <strong>Software Developer </strong>
                                    </li>
                                    <li>
                                      <span>Dates Attended</span>
                                      <strong>
                                        22.02.22 <span className="mx-3">to</span>
                                        22.01.2021
                                      </strong>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="tabId4">
                      <Row>
                      <Col md={12} lg={12}>
                                <ul className="d-flex m-0 list-inline justify-content-end">
                                 
                                  <li>
                                    <NavLink
                                      to="#"
                                      onClick={handleShow}
                                      className={`btn ${st.editIcon}  text-end`}
                                    >
                                      <MdModeEditOutline />
                                    </NavLink>
                                  </li>
                                </ul>
                              </Col>
                          <Col lg={12}>
                            <div className={`${cx.teamviewList}`}>
                              <div className={` ${cx.teamList}`}>
                                <div
                                  className={` ${cx.uploadData} ${cx.teamBanner}`}
                                >
                                  <ul>
                                    <li>
                                      <span>Subject</span>
                                      <strong>
                                      Mathematics
                                      </strong>
                                    </li>
                                    <li>
                                      <span>Class</span>
                                      <strong> X</strong>
                                    </li>
                                    <li>
                                      <span>Rate</span>
                                      <strong>0.00</strong>
                                    </li>
                                  </ul>
                                </div>
                              </div>
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
      {/* <EnrollNewStudentM show={show} handleClose={handleClose} /> */}
    </>
  );
}
