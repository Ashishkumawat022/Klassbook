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

import PhoneNumber from "../Phonenumber/Phonenumber";
import addtax from "../../images/addtax.svg";
import addcoupon from "../../images/addcoupon.svg";
import adddiscount from "../../images/adddiscount.svg";
import otherfee from "../../images/otherfee.svg";

const EnrollNewStudentM = (props: any) => {
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
            <h5>Enroll New Student</h5>
          </Col>
          <Row>
            <Col md={12} lg={12}>
              <Row>
                <Col lg={12} md={12}>
                  <Form.Group className={`${st.formField}`}>
                    <Form.Label>Enroll</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option> Select Type</option>
                      <option>Enroll New Student</option>
                      <option>Enroll Existing Student</option>
                      <option></option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={6} md={6}>
                  <Form.Group className={`${st.formField}`}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder=" First Name" />
                  </Form.Group>
                </Col>
                <Col lg={6} md={6}>
                  <Form.Group className={`${st.formField}`}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" />
                  </Form.Group>
                </Col>

                <Col lg={6} md={6}>
                  <Form.Group className={`${st.formField}`}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                </Col>
                <Col lg={6} md={6}>
                  <Form.Group className={`${st.formField}`}>
                    <Form.Label>Phone No</Form.Label>
                    <div className={`${cx.phoneNumber}`}><PhoneNumber /></div>
                  </Form.Group>
                </Col>

                <Col lg={6} md={6}>
                  <Form.Group className={`${st.formField}`}>
                    <Form.Label>Assign Branch</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option> Assign Branch</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={6} md={6}>
                  <Form.Group className={`${st.formField}`}>
                    <Form.Label>Assign Student Batch</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option> Assign Student Batch</option>
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
                          <Nav.Link eventKey="tabId1">Course Details</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <div className={`${st.contentBox} ${m.contentTaps}`}>
                        <Tab.Content>
                          <Tab.Pane eventKey="tabId1">
                            <Row className={`${cx.courseDtlM}`}>
                              <Col md={4} lg={4}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Course</Form.Label>
                                  <Form.Select aria-label="Default select example">
                                    <option>Course</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                              <Col md={4} lg={4}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Class</Form.Label>
                                  <Form.Select aria-label="Default select example">
                                    <option>Class</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                              <Col md={4} lg={4}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Subjects</Form.Label>
                                  <Form.Select aria-label="Default select example">
                                    <option>Mathematic</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6} lg={6}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Price</Form.Label>
                                  <Form.Select aria-label="Default select example">
                                    <option>Class based pricing </option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                              <Col md={6} lg={6}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Package</Form.Label>
                                  <Form.Select aria-label="Default select example">
                                    <option>Select package</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>


                              <Col lg={12} md={12}>
                                <Row className="align-items-center">
                                  <Col md={4} lg={4}>
                                    <Form.Group className={`${st.formField}`}>
                                      <Form.Label> Start Day</Form.Label>
                                      <Form.Control type="date" />
                                    </Form.Group>
                                  </Col>

                                  <Col md={4} lg={4}>
                                    <Form.Group className={`${st.formField}`}>
                                      <Form.Label> End Day</Form.Label>

                                      <Form.Select aria-label="Default select example">
                                        <option> Select package </option>
                                      </Form.Select>
                                    </Form.Group>
                                  </Col>

                                  <Col md={4} lg={4}>
                                    <Form.Group className={`${st.formField}`}>
                                      <Form.Label> No of Classes</Form.Label>

                                      <Form.Select aria-label="Default select example">
                                        <option>Cl-12</option>
                                      </Form.Select>
                                    </Form.Group>
                                  </Col>
                                </Row>
                              </Col>

                              <Col lg={12} md={12} className="mt-4">
                                <Row className="justify-content-end">
                                  <Col lg={7} md={7} className={`${st.tabTitle} ${cx.coursepricesec}`}>
                                    <Row className="align-items-center">
                                      <Col md={9} lg={9}>
                                        <h5>Course price</h5>
                                      </Col>
                                      <Col md={3} lg={3} className="text-end">
                                        5,000.00
                                      </Col>
                                    </Row>
                                    <hr />

                                    <Row className={`${cx.enrollMain}`}>
                                      <Col lg={9} md={9}>
                                        <div className={`${cx.enrollList}`}>
                                          <Form.Label> Discount</Form.Label>
                                          <Form.Group className={`${st.formField} ${cx.formenroll}`}>
                                            <Form.Control type="number" placeholder="%" />
                                          </Form.Group>
                                          <Form.Group className={`${st.formField} ${cx.formenroll}`}>
                                            <Form.Control type="text" placeholder="22" disabled />
                                          </Form.Group>
                                        </div>
                                      </Col>
                                      <Col lg={3} md={3} className="text-end">
                                        <div className={`${cx.coursePrice}`} >
                                          <p>0.00</p>
                                          <NavLink
                                            className={`btn ${cx.delete}`}
                                            title="Delete"
                                            to="#"
                                          >
                                            <AiFillDelete />
                                          </NavLink>
                                        </div>
                                      </Col>
                                    </Row>

                                    
                                    <Row className={`${cx.enrollMain}`}>
                                      <Col lg={9} md={9}>
                                        <div className={`${cx.enrollList}`}>
                                          <Form.Label>Coupon</Form.Label>
                                          <Form.Group className={`${st.formField} ${cx.formenroll}`}>
                                            <Form.Control type="number" placeholder="%" />
                                          </Form.Group>
                                        </div>
                                      </Col>
                                      <Col lg={3} md={3} className="text-end">
                                        <div className={`${cx.coursePrice}`} >
                                          <p>0.00</p>
                                          <NavLink
                                            className={`btn ${cx.delete}`}
                                            title="Delete"
                                            to="#"
                                          >
                                            <AiFillDelete />
                                          </NavLink>
                                        </div>
                                      </Col>
                                    </Row>

                                    
                                    <Row className={`${cx.enrollMain}`}>
                                      <Col lg={9} md={9}>
                                        <div className={`${cx.enrollList}`}>
                                          <Form.Label>Tax #1</Form.Label>
                                          <Form.Group className={`${st.formField} ${cx.formenroll}`}>
                                          <Form.Control type="number" placeholder="Good and service tax" />
                                          </Form.Group>
                                        </div>
                                      </Col>
                                      <Col lg={3} md={3} className="text-end">
                                        <div className={`${cx.coursePrice}`} >
                                          <p>900.00</p>
                                          <NavLink
                                            className={`btn ${cx.delete}`}
                                            title="Delete"
                                            to="#"
                                          >
                                            <AiFillDelete />
                                          </NavLink>
                                        </div>
                                      </Col>
                                    </Row>




                                    <Row className="align-items-center mt-2 border-bottom ">
                                      <Col lg={8} md={8}>
                                        <Form.Group className={`${st.formField}`}>
                                          <Form.Label> Rounded</Form.Label>

                                        </Form.Group>
                                      </Col>

                                      <Col lg={4} md={4} className="text-end">
                                        <div className={`${cx.coursePrice}`} >


                                          <p>0.00</p>

                                        </div>
                                      </Col>
                                    </Row>
                                    <Row className="align-items-center mt-3">
                                      <Col lg={8} md={8}>
                                        <h5 className="mb-0">Total</h5>
                                      </Col>

                                      <Col lg={4} md={4} className="text-end">
                                        <div className={`${cx.coursePrice}`} >


                                          <p style={{ color: "#E7622E" }}>5,900.00</p>

                                        </div>
                                      </Col>
                                    </Row>
                                  </Col>

                                  <Col lg={3} md={3}>
                                    <Row>
                                      <Col lg={12} md={12}>
                                        <Form.Group
                                          className={`${st.formField} `}
                                        >
                                          <InputGroup>

                                            <img src={adddiscount} className={`${st.icon}`} />
                                            <Form.Select aria-label="Default select example" style={{ color: "#E7622E" }}>
                                              <option >Add Discount</option>
                                            </Form.Select>
                                          </InputGroup>
                                        </Form.Group>
                                      </Col>
                                      <Col lg={12} md={12}>
                                        <Form.Group
                                          className={`${st.formField}`}
                                        >
                                          <InputGroup>
                                            <img src={addtax} className={`${st.icon}`} />
                                            <Form.Select aria-label="Default select example" style={{ color: "#E7622E" }}>
                                              <option>Add Tax</option>
                                            </Form.Select>
                                          </InputGroup>
                                        </Form.Group>
                                      </Col>
                                      <Col lg={12} md={12}>
                                        <Form.Group
                                          className={`${st.formField}`}
                                        >
                                          <InputGroup>
                                            <img src={addcoupon} className={`${st.icon}`} />
                                            <Form.Select aria-label="Default select example" style={{ color: "#E7622E" }}>
                                              <option>Add Coupon</option>
                                            </Form.Select>
                                          </InputGroup>
                                        </Form.Group>
                                      </Col>
                                      <Col lg={12} md={12}>
                                        <Form.Group
                                          className={`${st.formField}`}
                                        >
                                          <InputGroup>
                                            <img src={otherfee} className={`${st.icon}`} />
                                            <Form.Select aria-label="Default select example" style={{ color: "#E7622E" }}>
                                              <option>Other Fees</option>
                                            </Form.Select>
                                          </InputGroup>
                                        </Form.Group>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </Tab.Pane>
                        </Tab.Content>
                      </div>
                    </Tab.Container>
                  </div>
                </Col>
                <Col lg={12} md={12}>
                  <Row>
                    <Col lg={6} md={6} className="mt-2 ">
                      <Button className={`${st.btnDisabled}`}>Cancel</Button>
                    </Col>
                    <Col lg={6} md={6} className="mt-2 text-end">
                      <Button className={`${st.btnDisabled}`}>Save</Button>
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

export default EnrollNewStudentM;
