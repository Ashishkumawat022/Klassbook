import React, { useCallback, useState } from "react";
import st from "../../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Student.module.scss";
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

import { BsFacebook, BsTelegram } from "react-icons/bs";
import {
  MdEdit,
  MdLocationPin,
  MdModeEditOutline,
  MdOutlineCheck,
} from "react-icons/md";

// --------- Images --------- //

import course from "../../../images/icon-course.svg";
import materialicon from "../../../images/material.svg";
import DemoInfo from "../../../components/DemoInfo/DemoInfo";
import studenticons from "../../../images/studenticon.svg";
import {
  AiFillDelete,
  AiFillHome,
  AiOutlinePlus,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import StudentFilter from "../../../components/Sidebar/StudentFilter";
import EnrollNewStudentM from "../../../components/Modals/EnrollNewStudentM";
import StudentScheduleDataGrid from "./StudentScheduleDataGrid";

export default function StudentDetails() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section className={`${st.pageWrapper} ${st.pageWrapperOpen}`}>
        <StudentFilter />
        <div className={`${st.pageTitle}`}>
          <Row>
            <Col md={6} lg={6}>
              <div className={`${st.titleInfo}`}>
                <img src={course} className={`${st.icon}`} />
                <div className={`${st.titleInfoBody}`}>
                  <h5>Students</h5>
                  <p>Your students</p>
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
                            <span>Roll No</span>
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
                            <span>National ID</span>
                            <strong>0011</strong>
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
                          <Nav.Link eventKey="tabId2">Admission</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="tabId3">
                            Course Materials
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="tabId4">Other</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="tabId5">Personal Info</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                    <div>
                      <NavLink
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
                      </NavLink>
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
                                    </button>{" "}
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
                              <StudentScheduleDataGrid />
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
                          <Col lg={12} className={`${st.tabTitle}`}>
                            <Row className="align-items-center mb-2">
                              <Col md={8} lg={7} className="">
                                <div className={`${cx.admissionTitle}`}>
                                  <ul
                                    className={`${st.tabbingMenu} d-flex justify-content-start`}
                                  >
                                    <li>
                                      <button className={`${st.active}`}>
                                        Active Admission
                                      </button>{" "}
                                    </li>
                                    <li>
                                      <button>Past Admission</button>
                                    </li>
                                  </ul>
                                </div>
                              </Col>

                              <Col md={4} lg={5}>
                                <NavLink
                                  to="#"
                                  className={`${cx.addRow}`}
                                  onClick={handleShow}
                                >
                                  + Add new erollments
                                </NavLink>
                              </Col>
                            </Row>
                          </Col>
                          <Col lg={12}>
                            <div className={`${cx.viewList}`}>
                              <div className={`d-flex ${cx.studentadmission}`}>
                                <div className={`${cx.studentbanner}`}>
                                  <div
                                    className={`${cx.studentsCount} d-flex`}
                                    style={{ flexWrap: "wrap" }}
                                  >
                                    <div className={`${cx.uploadData} me-3`}>
                                      <h5>Math Champion </h5>
                                      <p>Branch Name</p>
                                    </div>
                                    <div className="mx-3">
                                      <NavLink
                                        to="#"
                                        className={`btn ${st.editIcon}`}
                                      >
                                        <MdModeEditOutline />
                                      </NavLink>
                                    </div>
                                  </div>

                                  <div
                                    className={`${cx.uploadData} ${cx.bannerinside} me-3 mb-3 d-flex`}
                                  >
                                    <div
                                      className="d-flex"
                                      style={{ paddingRight: "150px" }}
                                    >
                                      <ul>
                                        <li>
                                          <span>Batch</span>
                                          <strong>New Batch</strong>
                                        </li>
                                        <li>
                                          <span>Course</span>
                                          <strong> New Course</strong>
                                        </li>
                                        <li>
                                          <span>Duration</span>
                                          <strong>10 Weeks</strong>
                                        </li>
                                        <li>
                                          <span>No of Class</span>
                                          <strong>5</strong>
                                        </li>
                                        <li>
                                          <span>Joining Date</span>
                                          <strong>22.01.2021</strong>
                                        </li>
                                        <li>
                                          <span>Expiry Date</span>
                                          <strong>22.02.2022</strong>
                                        </li>
                                      </ul>
                                    </div>

                                    <div
                                      className="d-flex"
                                      style={{ paddingRight: "150px" }}
                                    >
                                      <ul>
                                        <li>
                                          <span>Price Code</span>
                                          <strong>43254435</strong>
                                        </li>
                                        <li>
                                          <span>Price Offered</span>
                                          <strong>100$</strong>
                                        </li>
                                        <li>
                                          <span>Discount</span>
                                          <strong>0</strong>
                                        </li>
                                        <li>
                                          <span>Payment Type</span>
                                          <strong>card</strong>
                                        </li>
                                        <li>
                                          <span>Admission By</span>
                                          <strong>26.03.2022</strong>
                                        </li>
                                        <li>
                                          <span>Notes</span>
                                          <strong>None</strong>
                                        </li>
                                      </ul>
                                    </div>

                                    <div className="d-flex">
                                      <ul>
                                        <li>
                                          <span>Next Payment Date</span>
                                          <strong>22.03.2022</strong>
                                        </li>
                                        <li>
                                          <span>Amount Paid</span>
                                          <strong>100$</strong>
                                        </li>
                                        <li>
                                          <span>Pending Installments</span>
                                          <strong>.</strong>
                                        </li>
                                        <li>
                                          <span>Next Payment Amount</span>
                                          <strong>100$</strong>
                                        </li>
                                        <li>
                                          <span>Amount Pending</span>
                                          <strong>None</strong>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>

                                  <div>
                                    <Row>
                                      <Col
                                        lg={12}
                                        md={12}
                                        className={`${cx.btnlist}`}
                                      >
                                        <div
                                          className={`${cx.uploadData} me-3`}
                                        >
                                          <h5>Included Subject </h5>
                                        </div>

                                        <ul className="d-flex">
                                          <li>
                                            <Button
                                              className={`${st.btnDisabled}`}
                                            >
                                              Mathematic
                                            </Button>
                                          </li>
                                          <li>
                                            <Button
                                              className={`${st.btnDisabled}`}
                                            >
                                              English Lang
                                            </Button>
                                          </li>
                                          <li>
                                            <Button
                                              className={`${st.btnDisabled}`}
                                            >
                                              Science
                                            </Button>
                                          </li>
                                        </ul>
                                      </Col>
                                    </Row>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className={`${cx.viewList}`}>
                              <div className={`d-flex ${cx.studentadmission}`}>
                                <div className={`${cx.studentbanner}`}>
                                  <div
                                    className={`${cx.studentsCount} d-flex`}
                                    style={{ flexWrap: "wrap" }}
                                  >
                                    <div className={`${cx.uploadData} me-3`}>
                                      <h5>Math Champion </h5>
                                      <p>Branch Name</p>
                                    </div>
                                    <div className="mx-3">
                                      <NavLink
                                        to="#"
                                        className={`btn ${st.editIcon}`}
                                      >
                                        <MdModeEditOutline />
                                      </NavLink>
                                    </div>
                                  </div>

                                  <div
                                    className={`${cx.uploadData} ${cx.bannerinside} me-3 mb-3 d-flex`}
                                  >
                                    <div
                                      className="d-flex"
                                      style={{ paddingRight: "150px" }}
                                    >
                                      <ul>
                                        <li>
                                          <span>Batch</span>
                                          <strong>New Batch</strong>
                                        </li>
                                        <li>
                                          <span>Course</span>
                                          <strong> New Course</strong>
                                        </li>
                                        <li>
                                          <span>Duration</span>
                                          <strong>10 Weeks</strong>
                                        </li>
                                        <li>
                                          <span>No of Class</span>
                                          <strong>5</strong>
                                        </li>
                                        <li>
                                          <span>Joining Date</span>
                                          <strong>22.01.2021</strong>
                                        </li>
                                        <li>
                                          <span>Expiry Date</span>
                                          <strong>22.02.2022</strong>
                                        </li>
                                      </ul>
                                    </div>

                                    <div
                                      className="d-flex"
                                      style={{ paddingRight: "150px" }}
                                    >
                                      <ul>
                                        <li>
                                          <span>Price Code</span>
                                          <strong>43254435</strong>
                                        </li>
                                        <li>
                                          <span>Price Offered</span>
                                          <strong>100$</strong>
                                        </li>
                                        <li>
                                          <span>Discount</span>
                                          <strong>0</strong>
                                        </li>
                                        <li>
                                          <span>Payment Type</span>
                                          <strong>card</strong>
                                        </li>
                                        <li>
                                          <span>Admission By</span>
                                          <strong>26.03.2022</strong>
                                        </li>
                                        <li>
                                          <span>Notes</span>
                                          <strong>None</strong>
                                        </li>
                                      </ul>
                                    </div>

                                    <div className="d-flex">
                                      <ul>
                                        <li>
                                          <span>Next Payment Date</span>
                                          <strong>22.03.2022</strong>
                                        </li>
                                        <li>
                                          <span>Amount Paid</span>
                                          <strong>100$</strong>
                                        </li>
                                        <li>
                                          <span>Pending Installments</span>
                                          <strong>.</strong>
                                        </li>
                                        <li>
                                          <span>Next Payment Amount</span>
                                          <strong>100$</strong>
                                        </li>
                                        <li>
                                          <span>Amount Pending</span>
                                          <strong>None</strong>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>

                                  <div>
                                    <Row>
                                      <Col
                                        lg={12}
                                        md={12}
                                        className={`${cx.btnlist}`}
                                      >
                                        <div
                                          className={`${cx.uploadData} me-3`}
                                        >
                                          <h5>Included Subject </h5>
                                        </div>

                                        <ul className="d-flex">
                                          <li>
                                            <Button
                                              className={`${st.btnDisabled}`}
                                            >
                                              Mathematic
                                            </Button>
                                          </li>
                                          <li>
                                            <Button
                                              className={`${st.btnDisabled}`}
                                            >
                                              English Lang
                                            </Button>
                                          </li>
                                          <li>
                                            <Button
                                              className={`${st.btnDisabled}`}
                                            >
                                              Science
                                            </Button>
                                          </li>
                                        </ul>
                                      </Col>
                                    </Row>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="tabId3">
                        <Row>
                          <Col lg={12} className={`${st.tabTitle}  `}>
                            <Row className="align-items-center">
                              <Col md={4} lg={4}>
                                <span></span>
                              </Col>
                              <Col md={8} lg={8}>
                                <NavLink
                                  to="#"
                                  onClick={handleShow}
                                  className={`btn ${st.editIcon}`}
                                >
                                  <MdModeEditOutline />
                                </NavLink>
                                <NavLink
                                  to="#"
                                  className={`btn ${cx.studenteditIcon} text-end`}
                                  style={{ width: "170px" }}
                                >
                                  <img
                                    src={materialicon}
                                    alt=""
                                    style={{ marginRight: "8px" }}
                                  />
                                  Assign new material
                                </NavLink>
                              </Col>
                            </Row>
                          </Col>

                          <Col lg={12} md={12} className="mt-3">
                            <table className={`table  ${tb.ctTable}`}>
                              <thead>
                                <tr>
                                  <th>Sr. No</th>
                                  <th>Course </th>
                                  <th>Subject</th>
                                  <th>Doc. Type</th>
                                  <th>Document</th>
                                  <th>Date</th>
                                  <th>Expiry Date</th>
                                  <th>Add</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td> Math Cham</td>
                                  <td>Math Primary</td>
                                  <td>pdf</td>
                                  <td>Math.pdf</td>
                                  <td>20/02/2023</td>
                                  <td>20/02/2023</td>
                                  <td>
                                    <ul className={`${tb.actionTable}`}>
                                      <li>
                                        <NavLink
                                          className={`btn ${tb.edit}`}
                                          title="Edit"
                                          to="#"
                                        >
                                          <AiOutlinePlus />
                                        </NavLink>
                                      </li>
                                    </ul>
                                  </td>
                                </tr>
                                <tr>
                                  <td>1</td>
                                  <td> Math Cham</td>
                                  <td>Math Primary</td>
                                  <td>pdf</td>
                                  <td>Math.pdf</td>
                                  <td>20/02/2023</td>
                                  <td>20/02/2023</td>
                                  <td>
                                    <ul className={`${tb.actionTable}`}>
                                      <li>
                                        <NavLink
                                          className={`btn ${tb.edit}`}
                                          title="Edit"
                                          to="#"
                                        >
                                          <AiOutlinePlus />
                                        </NavLink>
                                      </li>
                                    </ul>
                                  </td>
                                </tr>
                                <tr>
                                  <td>1</td>
                                  <td> Math Cham</td>
                                  <td>Math Primary</td>
                                  <td>pdf</td>
                                  <td>Math.pdf</td>
                                  <td>20/02/2023</td>
                                  <td>20/02/2023</td>
                                  <td>
                                    <ul className={`${tb.actionTable}`}>
                                      <li>
                                        <NavLink
                                          className={`btn ${tb.edit}`}
                                          title="Edit"
                                          to="#"
                                        >
                                          <AiOutlinePlus />
                                        </NavLink>
                                      </li>
                                    </ul>
                                  </td>
                                </tr>

                                <tr>
                                  <td></td>
                                  <td>
                                    <Form.Group
                                      className={`${st.formField} mb-0`}
                                    >
                                      <Form.Select aria-label="Name">
                                        <option>Select Course</option>
                                      </Form.Select>
                                    </Form.Group>
                                  </td>
                                  <td>
                                    <Form.Group
                                      className={`${st.formField} mb-0`}
                                    >
                                      <Form.Select aria-label="Role">
                                        <option>Select Subject</option>
                                      </Form.Select>
                                    </Form.Group>
                                  </td>

                                  <td>
                                    <Form.Group
                                      className={`${st.formField} mb-0`}
                                    >
                                      <Form.Select aria-label="Role">
                                        <option>.pdf</option>
                                      </Form.Select>
                                    </Form.Group>
                                  </td>
                                  <td>
                                    <Form.Group
                                      className={`${st.formField} mb-0`}
                                    >
                                      <Form.Select aria-label="Role">
                                        <option>Select</option>
                                      </Form.Select>
                                    </Form.Group>
                                  </td>
                                  <td></td>
                                  <td>
                                    <Form.Group
                                      className={`${st.formField} mb-0`}
                                    >
                                      <Form.Control
                                        type="date"
                                        placeholder="date"
                                      />
                                    </Form.Group>
                                  </td>
                                  <td>
                                    <ul className={`${tb.actionTable}`}>
                                      <li>
                                        <NavLink
                                          className={`btn ${tb.edit}`}
                                          title="Done"
                                          to="#"
                                        >
                                          <MdOutlineCheck />
                                        </NavLink>
                                      </li>

                                      <li>
                                        <NavLink
                                          className={`btn ${tb.delete}`}
                                          title="Delete"
                                          to="#"
                                        >
                                          <AiFillDelete />
                                        </NavLink>
                                      </li>
                                    </ul>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="tabId4">
                        <Col lg={12} className={`${st.tabTitle}`}>
                          <Row className="align-items-center">
                            <Col md={2} lg={4}>
                              <span>NOTE</span>
                            </Col>

                            <Col md={10} lg={8} className="">
                              <div className={`${cx.rightsec}`}>
                                <ul>
                                  <li style={{width:"120px"}}>

                                  <Form.Group className={`${st.formField}`}>
                                      {/* <Form.Label className={`${st.labelHide}`}>.</Form.Label> */}
                                      <Form.Select>
                                      <option>Teacher</option>
                                    </Form.Select>
                                    </Form.Group>
                                   
                                  </li>

                                  <li>
                                    <NavLink
                                      to="#"
                                      className={`btn ${cx.studenteditIcon}  text-end`}
                                    >
                                      <MdEdit style={{ marginRight: "8px" }} />
                                      Add Remark
                                    </NavLink>
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
                              </div>
                            </Col>
                          </Row>
                        </Col>

                        <div className={`${cx.otherNote}`}>
                          <Row>
                            <Col lg={6} md={6}>
                              <p className="mb-0">
                                <strong> Remark </strong>, by teacher Green
                                Forest,
                                <span> Anna Marias</span>
                              </p>
                            </Col>
                            <Col lg={6} md={6} className="text-end">
                              <span>25.03.2022</span>
                            </Col>
                          </Row>
                          <p className="mb-0 mt-2" style={{ fontSize: "14px" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Et veritatis architecto dolorem temporibus,
                            nesciunt nisi quis expedita. Iure tempora nostrum
                            non eum consequatur necessitatibus beatae quae
                            blanditiis! Illum nobis accusamus quaerat aperiam
                            non totam et fugit rerum odio, ratione in, nam
                            perspiciatis aliquam molestiae nemo quis aut
                            consequatur minima provident.
                          </p>
                        </div>
                        <div className={`${cx.otherNote}`}>
                          <Row>
                            <Col lg={6} md={6}>
                              <p className="mb-0">
                                <strong> Remark </strong>, by teacher Green
                                Forest,
                                <span> Anna Marias</span>
                              </p>
                            </Col>
                            <Col lg={6} md={6} className="text-end">
                              <span>25.03.2022</span>
                            </Col>
                          </Row>
                          <p className="mb-0 mt-2" style={{ fontSize: "14px" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Et veritatis architecto dolorem temporibus,
                            nesciunt nisi quis expedita. Iure tempora nostrum
                            non eum consequatur necessitatibus beatae quae
                            blanditiis! Illum nobis accusamus quaerat aperiam
                            non totam et fugit rerum odio, ratione in, nam
                            perspiciatis aliquam molestiae nemo quis aut
                            consequatur minima provident.
                          </p>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="tabId5">
                        <Row>
                          <Col lg={12} md={12}>
                            <div className={`${st.tabbingList}`}>
                              <Tab.Container
                                id="left-tabs-example"
                                defaultActiveKey="tabId2"
                              >
                                <Row className="align-items-center">
                                  <Col lg={11} md={11} className="text-center">
                                    <Nav
                                      variant="pills"
                                      className={`${cx.studentTabbar}`}
                                    >
                                      <Nav.Item className={`${cx.tabbaritem}`}>
                                        <Nav.Link
                                          eventKey="tabId1"
                                          className={`${cx.tabbarlink}`}
                                        >
                                          Personal info
                                        </Nav.Link>
                                      </Nav.Item>
                                      <Nav.Item className={`${cx.tabbaritem}`}>
                                        <Nav.Link
                                          eventKey="tabId2"
                                          className={`${cx.tabbarlink}`}
                                        >
                                          School Details
                                        </Nav.Link>
                                      </Nav.Item>
                                    </Nav>
                                  </Col>
                                  <Col lg={1} md={1}>
                                    <NavLink
                                      to="#"
                                      onClick={handleShow}
                                      className={`btn ${st.editIcon}  text-end`}
                                    >
                                      <MdModeEditOutline />
                                    </NavLink>
                                  </Col>
                                </Row>

                                <div className={`border-0 mt-2`}>
                                  <Tab.Content>
                                    <Tab.Pane eventKey="tabId1">
                                      <Row className="mt-4">
                                        <Col
                                          md={12}
                                          lg={9}
                                          xl={10}
                                          className="mt-1"
                                        >
                                          <div className={`${cx.uploadData}`}>
                                            <ul>
                                              <li>
                                                <span>Gender </span>
                                                <strong>Female</strong>
                                              </li>
                                            </ul>
                                          </div>
                                        </Col>
                                        <Col
                                          md={12}
                                          lg={9}
                                          xl={10}
                                          className="mt-1"
                                        >
                                          <div className={`${cx.uploadData}`}>
                                            <ul>
                                              <li>
                                                <span>D.O.B</span>
                                                <strong>11-11-22</strong>
                                              </li>
                                            </ul>
                                          </div>
                                        </Col>
                                        <Col
                                          md={12}
                                          lg={9}
                                          xl={10}
                                          className="mt-1"
                                        >
                                          <div className={`${cx.uploadData}`}>
                                            <ul>
                                              <li>
                                                <span>National ID </span>
                                                <strong>001</strong>
                                              </li>
                                            </ul>
                                          </div>
                                        </Col>

                                        <Col
                                          lg={6}
                                          className={`${st.tabTitle} mt-4`}
                                        >
                                          <Row>
                                            <Col md={12} lg={12}>
                                              <h5>Student Address</h5>
                                              <hr />
                                            </Col>
                                            <Col md={12} lg={12} xl={12}>
                                              <div
                                                className={`${cx.uploadData}`}
                                              >
                                                <ul
                                                  className={`${cx.addedSocial}`}
                                                >
                                                  <li>
                                                    <span>Location </span>
                                                    <strong className="pb-1">
                                                      Ukraine , Kyiv region ,
                                                      Kyiv
                                                    </strong>
                                                  </li>
                                                  <li>
                                                    <NavLink to="#">
                                                      <span></span>
                                                      <div
                                                        style={{
                                                          marginBottom: "-8px",
                                                        }}
                                                      >
                                                        <span
                                                          className={`${cx.iconBox}`}
                                                        >
                                                          <MdLocationPin
                                                            className={`${st.icon}`}
                                                          />
                                                        </span>

                                                        <strong>
                                                          20 Stepana Bandery
                                                          Street, 70800
                                                        </strong>
                                                      </div>
                                                    </NavLink>
                                                  </li>

                                                  <li>
                                                    <NavLink to="#">
                                                      <span></span>
                                                      <div>
                                                        <span
                                                          className={`${cx.iconBox}`}
                                                        >
                                                          <MdLocationPin
                                                            className={`${st.icon}`}
                                                          />
                                                        </span>
                                                        <strong>
                                                          {" "}
                                                          7B Pid Dubom Street,
                                                          70800
                                                        </strong>
                                                      </div>
                                                    </NavLink>
                                                  </li>
                                                  <li>
                                                    <span>Landmark </span>
                                                    <strong>
                                                      Opposite the black gate
                                                    </strong>
                                                  </li>
                                                </ul>
                                              </div>
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col
                                          lg={6}
                                          className={`${st.tabTitle} mt-4`}
                                        >
                                          <Row>
                                            <Col md={12} lg={12}>
                                              <h5>Parent Info</h5>
                                              <hr />
                                            </Col>
                                            <Col md={12} lg={12} xl={12}>
                                              <div
                                                className={`${cx.uploadData}`}
                                              >
                                                <ul
                                                  className={`${cx.addedSocial}`}
                                                >
                                                  <li>
                                                    <span>Phone</span>
                                                    <strong className="pb-1">
                                                      +380 96 10 90 700
                                                    </strong>
                                                  </li>
                                                  <li>
                                                    <span>Email</span>
                                                    <strong className="pb-1">
                                                      l-galab@gmail.com
                                                    </strong>
                                                  </li>
                                                  <li>
                                                    <span>Address</span>
                                                    <strong className="pb-1">
                                                      Ukraine, Lviv region,
                                                      Lviv, Brodiska st., 56,
                                                      70800
                                                    </strong>
                                                  </li>
                                                  <li>
                                                    <span>Relation</span>
                                                    <strong className="pb-1">
                                                      Great
                                                    </strong>
                                                  </li>
                                                </ul>
                                              </div>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="tabId2">
                                      <Row>
                                        <Col
                                          lg={12}
                                          className={`${st.tabTitle}`}
                                        >
                                          <Row className="align-items-center">
                                            <Col md={4} lg={4}>
                                              <span></span>
                                            </Col>
                                            <Col md={8} lg={8}>
                                              <NavLink
                                                to="#"
                                                className={`btn ${cx.studenteditIcon} text-end`}
                                              >
                                                <AiFillHome
                                                  style={{ marginRight: "8px" }}
                                                />
                                                Add School
                                              </NavLink>
                                            </Col>
                                          </Row>
                                        </Col>

                                        <Col lg={12} md={12} className="mt-3">
                                          <table
                                            className={`table ${tb.ctTable}`}
                                          >
                                            <thead>
                                              <tr>
                                                <th>School</th>
                                                <th></th>
                                                <th></th>
                                                <th>Level </th>
                                                <th>Grade</th>

                                                <th></th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td>
                                                  Zolochivska secondary school
                                                  I-III stages №1
                                                </td>
                                                <td></td>
                                                <td></td>
                                                <td> Basic</td>
                                                <td> 5</td>
                                                <td>
                                                  <ul
                                                    className={`${tb.actionTable}`}
                                                  >
                                                    <li>
                                                      <NavLink
                                                        className={`btn ${tb.edit}`}
                                                        title="Edit"
                                                        to="#"
                                                      >
                                                        <MdEdit />
                                                      </NavLink>
                                                    </li>
                                                    <li>
                                                      <NavLink
                                                        className={`btn ${tb.delete}`}
                                                        title="Delete"
                                                        to="#"
                                                      >
                                                        <AiFillDelete />
                                                      </NavLink>
                                                    </li>
                                                  </ul>
                                                </td>
                                              </tr>

                                              <tr>
                                                <td>
                                                  <Form.Group
                                                    className={`${st.formField} mb-0`}
                                                  >
                                                    <Form.Control
                                                      type="text"
                                                      placeholder="School"
                                                    />
                                                  </Form.Group>
                                                </td>

                                                <td>
                                                  <Form.Group
                                                    className={`${st.formField} mb-0`}
                                                  >
                                                    <Form.Select aria-label="Name">
                                                      <option>
                                                        Board/Curriculum
                                                      </option>
                                                    </Form.Select>
                                                  </Form.Group>
                                                </td>
                                                <td>
                                                  <Form.Group
                                                    className={`${st.formField} mb-0`}
                                                  >
                                                    <Form.Control
                                                      type="date"
                                                      placeholder="date"
                                                    />
                                                  </Form.Group>
                                                </td>

                                                <td>
                                                  <Form.Group
                                                    className={`${st.formField} mb-0`}
                                                  >
                                                    <Form.Select aria-label="Role">
                                                      <option>Level</option>
                                                    </Form.Select>
                                                  </Form.Group>
                                                </td>
                                                <td>
                                                  <Form.Group
                                                    className={`${st.formField} mb-0`}
                                                  >
                                                    <Form.Select aria-label="Role">
                                                      <option>Grade</option>
                                                    </Form.Select>
                                                  </Form.Group>
                                                </td>

                                                <td>
                                                  <ul
                                                    className={`${tb.actionTable}`}
                                                  >
                                                    <li>
                                                      <NavLink
                                                        className={`btn ${tb.edit}`}
                                                        title="Done"
                                                        to="#"
                                                      >
                                                        <MdOutlineCheck />
                                                      </NavLink>
                                                    </li>
                                                    <li>
                                                      <NavLink
                                                        className={`btn ${tb.delete}`}
                                                        title="Delete"
                                                        to="#"
                                                      >
                                                        <AiFillDelete />
                                                      </NavLink>
                                                    </li>
                                                  </ul>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </Col>
                                      </Row>
                                    </Tab.Pane>
                                  </Tab.Content>
                                </div>
                              </Tab.Container>
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
      <EnrollNewStudentM show={show} handleClose={handleClose} />
    </>
  );
}
