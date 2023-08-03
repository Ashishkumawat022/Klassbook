import React from "react";
import m from "../../modal.module.scss";
import st from "../../style.module.scss";
import { NavLink } from "react-router-dom";
import {
  AiFillDelete,
  AiOutlineGlobal,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import cx from "./Model.module.scss";
import tb from "../../datatable.module.scss";
import studentIcon from "../../images/icon-student.svg";
import {
  Card,
  Row,
  Col,
  Form,
  Modal,
  Button,
  Tab,
  Nav,
  InputGroup,
} from "react-bootstrap";
import { MdClose, MdContentCopy, MdLocationPin } from "react-icons/md";
import { FiUpload } from "react-icons/fi";
import StudentDataGrid from "./StudentDataGrid";
import Checkbox from "../Forms/Checkbox";
import Radio from "../Forms/Radio";
import OnOff from "../Forms/OnOff";

const AddClass = (props: any) => {
  let { show, handleClose } = props;
  return (
    <>
      <Modal
        centered
        show={show}
        onHide={handleClose}
        className={`${m.modalCts} ${m.modalSizeLg} ${m.modalBg}`}
      >
        <Modal.Body>
          <button
            className={`${m.closeIcon}`}
            title="Close"
            onClick={handleClose}
          >
            <MdClose />
          </button>
          <Col lg={12} className={`${m.title}`}>
            <h5>Add Class</h5>
          </Col>
          <Row>
            <Col md={12} lg={12}>
              <Row>
                <Col lg={6} md={6}>
                  <Form.Group className={`${st.formField}`}>
                    <Form.Label>
                      Class Name<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Class Name</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={6} md={6}>
                  <Form.Group className={`${st.formField}`}>
                    <Form.Label>
                      Branch<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Branch</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col lg={12}>
                  <div className={` mt-3 ${st.tabbingList}`}>
                    <Tab.Container
                      id="left-tabs-example"
                      defaultActiveKey="tabId1"
                    >
                      <Nav variant="pills">
                        <Nav.Item>
                          <Nav.Link eventKey="tabId1">Details</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="tabId2">Schedule</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="tabId3">Student</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="tabId4">Location</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <div className={`${st.contentBox} ${m.contentTaps}`}>
                        <Tab.Content>
                          <Tab.Pane eventKey="tabId1">
                            <Row>
                              <Col md={6} lg={6}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Course</Form.Label>
                                  <Form.Select aria-label="Default select example">
                                    <option>Course</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                              <Col md={6} lg={3}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Subject</Form.Label>
                                  <Form.Select aria-label="Default select example">
                                    <option>Subject</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                              <Col md={6} lg={3}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Level</Form.Label>
                                  <Form.Select aria-label="Default select example">
                                    <option>Level</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>

                              <Col md={6} lg={6}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Team</Form.Label>
                                  <Form.Select aria-label="Default select example">
                                    <option>Select Team</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                              <Col md={6} lg={3}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Facility/Room</Form.Label>
                                  <Form.Select aria-label="Default select example">
                                    <option>Subject</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                              <Col md={6} lg={3}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Capacity</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Capacity"
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={6} lg={4}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Mode</Form.Label>
                                  <Form.Select aria-label="Default select example">
                                    <option>Mode</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                            </Row>
                          </Tab.Pane>
                          <Tab.Pane eventKey="tabId2">
                            <Row>
                              <Col md={6} lg={6}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Time</Form.Label>
                                  <InputGroup>
                                    <AiOutlineGlobal className={`${st.icon}`} />
                                    <Form.Select aria-label="Default select example">
                                      <option>Time Zone</option>
                                    </Form.Select>
                                  </InputGroup>
                                </Form.Group>
                              </Col>
                              <Col md={6} lg={6}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Date</Form.Label>
                                  <Form.Control type="date" />
                                </Form.Group>
                              </Col>

                              <Col lg={12} md={12}>
                                <Row className="align-items-center">
                                  <Col md={4} lg={3}>
                                    <Form.Group className={`${st.formField}`}>
                                      <Form.Label>Time</Form.Label>
                                      <Form.Control type="time" />
                                    </Form.Group>
                                  </Col>
                                  <Col lg={1} md={1}>
                                    <Form.Label></Form.Label>
                                    <p className="text-center mt-2 align-items-center">
                                      to
                                    </p>
                                  </Col>
                                  <Col md={4} lg={3}>
                                    <Form.Group className={`${st.formField}`}>
                                      <Form.Label></Form.Label>

                                      <Form.Control type="time" />
                                    </Form.Group>
                                  </Col>
                                </Row>
                              </Col>

                              <Col md={12} lg={12} className="mb-3 mt-3">
                                <Form.Group className={`${st.formField}`}>
                                  Repeats
                                  <label className={`${st.onoff} mx-2`}>
                                    <OnOff />
                                  </label>
                                </Form.Group>
                              </Col>

                              <Col md={3} lg={3}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Every</Form.Label>
                                  <Form.Select aria-label="every">
                                    <option> Pick Value </option>
                                    <option> Month </option>
                                    <option> Week </option>
                                    <option>Day  </option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                              <Col md={2} lg={2}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>For next</Form.Label>
                                  <Form.Select aria-label="Country">
                                    <option> 5 </option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>

                              <Col md={3} lg={3}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Period</Form.Label>
                                  <Form.Select aria-label="Month">
                                    <option> Month </option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                              <Col md={1} lg={1}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>or</Form.Label>
                                </Form.Group>
                              </Col>
                              <Col md={3} lg={3}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Till Date</Form.Label>
                                  <Form.Control type="date" />
                                </Form.Group>
                              </Col>

                              <Col md={4} lg={3} className="mt-2">
                                <Form.Group className={`${st.formField}`}>
                                  <div className={`${cx.formFieldcheckbox}`}>
                                    <label className={`${st.checkbox}`}>
                                      <Checkbox />
                                      No class on Holidays
                                    </label>
                                  </div>
                                </Form.Group>
                              </Col>
                              <Col md={4} lg={3} className="mt-2">
                                <Form.Group className={`${st.formField}`}>
                                  <div className={`${cx.formFieldcheckbox}`}>
                                    <label className={`${st.checkbox}`}>
                                      <Checkbox />
                                      No class on Saturday
                                    </label>
                                  </div>
                                </Form.Group>
                              </Col>
                              <Col md={4} lg={3} className="mt-2">
                                <Form.Group className={`${st.formField}`}>
                                  <div className={`${cx.formFieldcheckbox}`}>
                                    <label className={`${st.checkbox}`}>
                                      <Checkbox />
                                      No class on Sunday
                                    </label>
                                  </div>
                                </Form.Group>
                              </Col>
                              

                              {/* Monthly Repetition */}

                              <Col lg={12} className={`${st.tabTitle} mt-2`}>
                                <h5>Monthly Repetition</h5>
                              </Col>

                              <Col lg={12}>
                                <Row className="align-items-center">
                                  <Col lg={2} md={3}>
                                    <Form.Group className={`${st.formField}`}>
                                      <Form.Label></Form.Label>
                                      <p>Every</p>
                                    </Form.Group>
                                  </Col>

                                  <Col md={4} lg={4}>
                                    <Form.Group className={`${st.formField}`}>
                                      <Form.Label></Form.Label>
                                      <Form.Control type="date" />
                                    </Form.Group>
                                  </Col>
                                  <Col md={4} lg={6}>
                                    <Form.Group className={`${st.formField}`}>
                                      <Form.Label>Day</Form.Label>
                                      <Form.Control type="date" />
                                    </Form.Group>
                                  </Col>
                                </Row>
                              </Col>

                              <Col lg={12} className="m-0">
                                <Form.Label style={{ color: "#f9560f" }}>
                                  OR
                                </Form.Label>
                              </Col>

                              <Col lg={12}>
                                <Row className="align-items-center">
                                  <Col lg={2} md={3}>
                                    <Form.Group className={`${st.formField}`}>
                                      <Form.Label></Form.Label>
                                      <p>on</p>
                                    </Form.Group>
                                  </Col>
                                  <Col md={4} lg={6}>
                                    <Form.Group className={`${st.formField}`}>
                                      <Form.Label>Date</Form.Label>
                                      <Form.Control type="date" />
                                    </Form.Group>
                                  </Col>
                                </Row>
                              </Col>

                              {/* Weekly Repetition */}
                              <hr />

                              <Col lg={12} className={`${st.tabTitle} mt-2`}>
                                <h5> Weekly Repetition</h5>
                              </Col>

                              <Col lg={12} md={12} className={`${cx.btnlist}`}>
                                <ul className="d-flex">
                                  <li>
                                    <Button className={`${st.btnDisabled}`}>
                                      Sunday
                                    </Button>
                                  </li>
                                  <li>
                                    <Button className={`${st.btnDisabled}`}>
                                      Monday
                                    </Button>
                                  </li>
                                  <li>
                                    <Button className={`${st.btnDisabled}`}>
                                      Tuesday
                                    </Button>
                                  </li>
                                  <li>
                                    <Button className={`${st.btnDisabled}`}>
                                      Wednesday
                                    </Button>
                                  </li>
                                  <li>
                                    <Button className={`${st.btnDisabled}`}>
                                      Thursday
                                    </Button>
                                  </li>
                                  <li>
                                    <Button className={`${st.btnDisabled}`}>
                                      Friday
                                    </Button>
                                  </li>
                                  <li>
                                    <Button className={`${st.btnDisabled}`}>
                                      Saturday
                                    </Button>
                                  </li>
                                </ul>
                              </Col>

                              <Col lg={12} md={12}>
                                <Row className="align-items-center">
                                  <Col md={4} lg={3}>
                                    <Form.Group className={`${st.formField}`}>
                                      <Form.Label>Time</Form.Label>
                                      <Form.Control type="time" />
                                    </Form.Group>
                                  </Col>
                                  <Col lg={1} md={1}>
                                    <Form.Label></Form.Label>
                                    <p className="text-center mt-2 align-items-center">
                                      to
                                    </p>
                                  </Col>
                                  <Col md={4} lg={3}>
                                    <Form.Group className={`${st.formField}`}>
                                      <Form.Label></Form.Label>

                                      <Form.Control type="time" />
                                    </Form.Group>
                                  </Col>
                                  <Col md={12} lg={5}>
                                    <Form.Group className={`${st.formField}`}>
                                      <Form.Label>Staff</Form.Label>
                                      <Form.Select aria-label="Days">
                                        <option>Maria ,Petrova</option>
                                      </Form.Select>
                                    </Form.Group>
                                  </Col>
                                  <Col md={4} lg={3} className="mt-2">
                                    <Form.Group className={`${st.formField}`}>
                                      <div
                                        className={`${cx.formFieldcheckbox}`}
                                      >
                                        <label className={`${st.checkbox}`}>
                                          <Checkbox />
                                          No class on Sunday
                                        </label>
                                      </div>
                                    </Form.Group>
                                  </Col>
                                </Row>
                              </Col>

                              {/* Daily Repetition  */}
                              <hr />

                              <Col lg={12} className={`${st.tabTitle} mt-2`}>
                                <h5>Daily Repetition</h5>
                              </Col>

                              <Col lg={12}>
                                <Row className="align-items-center">
                                  <Col lg={2} md={3}>
                                    <Form.Group className={`${st.formField}`}>
                                      <Form.Label></Form.Label>
                                      <p>No class on</p>
                                    </Form.Group>
                                  </Col>

                                  <Col md={9} lg={10}>
                                    <Form.Group className={`${st.formField}`}>
                                      <Form.Label>Days</Form.Label>
                                      <Form.Select aria-label="Days">
                                        <option>Sunday ,Monday</option>
                                      </Form.Select>
                                    </Form.Group>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </Tab.Pane>
                          <Tab.Pane eventKey="tabId3">
                            <Row>
                              <Col lg={12} className={`${st.tabTitle} my-1`}>
                                <h5>Assign Student Batch</h5>
                              </Col>

                              <Col lg={8} md={8} className={`${cx.btnlist}`}>
                                <ul className="d-flex">
                                  <li>
                                    <Button className={`${st.btnDisabled}`}>
                                      Batch Name 1
                                    </Button>
                                  </li>
                                  <li>
                                    <Button className={`${st.btnDisabled}`}>
                                      Batch Name 2
                                    </Button>
                                  </li>
                                  <li>
                                    <Button className={`${st.btnDisabled}`}>
                                      Batch Name 3
                                    </Button>
                                  </li>
                                </ul>
                              </Col>
                              <Col lg={4} md={4} className={`${cx.btnlist2}`}>
                                <ul>
                                  <li>
                                    <Button
                                      className={`${cx.studenteditIcon} text-end`}
                                    >
                                      + Assign Batch
                                    </Button>
                                  </li>
                                </ul>
                              </Col>

                              <Col lg={12} className={`${st.tabTitle} my-1`}>
                                <h5>Assign Student </h5>
                              </Col>

                              <Col lg={12}>
                                <div className={`${st.pageWrapperInside}`}>
                                  <Card>
                                    <Card.Body>
                                      <Row className={`${tb.tableAction}`}>
                                        <Col lg={12}>
                                          <div className="d-flex">
                                            <NavLink
                                              to="#"
                                              className={`btn ${tb.addBtn}`}
                                            >
                                              <img
                                                src={studentIcon}
                                                className={`${tb.icon}`}
                                              />
                                              New Student
                                            </NavLink>
                                            <button
                                              className={`btn ${tb.upload}`}
                                            >
                                              <FiUpload
                                                className={`${tb.icon}`}
                                              />
                                              Upload CSV
                                              <input type="file" />
                                            </button>

                                            <button
                                              className={`btn ${tb.upload}`}
                                            >
                                              <AiFillDelete
                                                className={`${tb.icon} m-0`}
                                              />
                                            </button>
                                          </div>
                                        </Col>
                                      </Row>
                                      <div className={`${tb.dataTable}`}>
                                        <StudentDataGrid />
                                      </div>
                                    </Card.Body>
                                  </Card>
                                </div>
                              </Col>
                            </Row>
                          </Tab.Pane>
                          <Tab.Pane eventKey="tabId4">
                            <Row className={"align-items-center"}>
                              <Col lg={12} md={12}>
                                <Row>
                                  <Col md={4} lg={6}>
                                    <Form.Group className={`${st.formField}`}>
                                      <Form.Label>Location</Form.Label>
                                      <InputGroup>
                                        <MdLocationPin
                                          className={`${st.icon}`}
                                        />
                                        <Form.Select aria-label="Default select example">
                                          <option>Select Location</option>
                                        </Form.Select>
                                      </InputGroup>
                                    </Form.Group>
                                  </Col>
                                  <Col md={2} lg={2}>
                                    <Form.Label></Form.Label>
                                    <p className="text-center mt-2 align-items-center">
                                      OR
                                    </p>
                                  </Col>
                                  <Col md={6} lg={4}>
                                    <Form.Label></Form.Label>

                                    <Form.Group>
                                      <NavLink
                                        to="#"
                                        className={`btn ${cx.studenteditIcon} mt-1`}
                                      >
                                        <MdContentCopy className="mx-2" />
                                        Copy Address from Branch
                                      </NavLink>
                                    </Form.Group>
                                  </Col>
                                </Row>
                              </Col>

                              <Col md={6} lg={6}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Facility/Room</Form.Label>
                                  <Form.Select aria-label="Facility/Room">
                                    <option>Facility/Room</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                              <Col md={6} lg={6}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Capacity</Form.Label>
                                  <Form.Control
                                    type="number"
                                    placeholder="Capacity"
                                  />
                                </Form.Group>
                              </Col>

                              <Col lg={12} className={`${st.tabTitle}`}>
                                <h5>Address</h5>
                              </Col>

                              <Col md={6} lg={3}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Country</Form.Label>
                                  <Form.Select aria-label="Default select example">
                                    <option>Country</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                              <Col md={6} lg={3}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>State</Form.Label>
                                  <Form.Select aria-label="Default select example">
                                    <option>State</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                              <Col md={6} lg={3}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>City</Form.Label>
                                  <Form.Select aria-label="Default select example">
                                    <option>City</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                              <Col md={6} lg={3}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Postal Code</Form.Label>
                                  <Form.Select aria-label="Default select example">
                                    <option>Postal Code</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>

                              <Col lg={6} md={6}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Address 1</Form.Label>
                                  <InputGroup>
                                    <MdLocationPin className={`${st.icon}`} />
                                    <Form.Control
                                      type="text"
                                      placeholder="Address 1"
                                    />
                                  </InputGroup>
                                </Form.Group>
                              </Col>
                              <Col lg={6} md={6}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Address 2</Form.Label>
                                  <InputGroup>
                                    <MdLocationPin className={`${st.icon}`} />
                                    <Form.Control
                                      type="text"
                                      placeholder="Address 2"
                                    />
                                  </InputGroup>
                                </Form.Group>
                              </Col>
                              <Col lg={12}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Landmark</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Landmark"
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                          </Tab.Pane>
                        </Tab.Content>
                      </div>
                    </Tab.Container>
                  </div>
                </Col>
                <Col lg={6} md={6}></Col>
                <Col lg={6} md={6}>
                  <Row>
                    <Col lg={6} md={6} className="mt-2 text-end">
                      <Button className={`${st.btnDisabled}`}>
                        Update Single Class
                      </Button>
                    </Col>
                    <Col lg={6} md={6} className="mt-2 text-end">
                      <Button className={`${st.btnDisabled}`}>
                        Update Future Classes
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddClass;
