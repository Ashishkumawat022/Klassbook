import React from "react";
import m from "../../modal.module.scss";
import st from "../../style.module.scss";
import { NavLink } from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";
import cx from "./Model.module.scss";
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

const AddEvent = (props: any) => {
  let { show, handleClose ,addevent} = props;
  
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
            <h5>Add Event</h5>
          </Col>
          <Row>
            <Col md={12} lg={12}>
              <Row>
                <Col lg={6} md={12}>
                  <Form.Group className={`${st.formField}`}>
                    <Form.Label>
                      Class Name<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Class Name</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={6} md={12}>
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
                          <Tab.Pane eventKey="tabId2"></Tab.Pane>
                          <Tab.Pane eventKey="tabId3"></Tab.Pane>
                          <Tab.Pane eventKey="tabId4">
                            <Row className={"align-items-center"}>

                            <Col lg={12} md={12}>
                              <Row>
                              <Col md={4} lg={6}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Location</Form.Label>
                                  <InputGroup>
                                  < MdLocationPin className={`${st.icon}`} />
                                  <Form.Select aria-label="Default select example">
                                    <option>Select Location</option>
                                  </Form.Select>
                                </InputGroup>
                                </Form.Group>
                              </Col>
                              <Col md={4} lg={2}>
                                <Form.Label></Form.Label>
                                  <p className="text-center mt-2 align-items-center">OR</p>
                              </Col>
                              <Col md={4} lg={4}>
                                <Form.Label></Form.Label>

                                <Form.Group>
                                <NavLink
                                  to="#"
                                  className={`btn ${cx.studenteditIcon}`}
                                >
                                  <MdContentCopy className="mx-2" />
                                  Copy Address from Branch
                                </NavLink>
                                </Form.Group>
                              </Col>

                              </Row>
                            </Col>

                            
                              <Col md={6} lg={4}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Facility/Room</Form.Label>
                                  <Form.Select aria-label="Facility/Room">
                                    <option>Facility/Room</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                              <Col md={6} lg={4}>
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

                              <Col lg={6}>
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
                              <Col lg={6}>
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

                <Col lg={12} className="mt-2 text-end">
                  <Button className={`${st.btnDisabled}`} onClick={()=>{
                    addevent("hello their")
                    handleClose();
                  }}>Save</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddEvent;
