import React, { useCallback, useState } from "react";
import st from "../../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Team.module.scss";

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
  MdContentCopy,
  MdEdit,
  MdLocationPin,
  MdModeEditOutline,
  MdOutlineCheck,
  MdOutlineNavigateNext,
} from "react-icons/md";

// --------- Images --------- //
import uploadFile from "../../../images/iconUpload.svg";
import PhoneNumber from "../../../components/Phonenumber/Phonenumber";
import DemoInfo from "../../../components/DemoInfo/DemoInfo";
import admission from "../../../images/icon-team.svg";
import { AiFillPlusCircle, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function AddTeammember() {
  return (
    <>
      <section className={`${st.pageWrapper} `}>
        <div className={`${st.pageTitle}`}>
          <Row>
            <Col md={4} lg={4}>
              <div className={`${st.titleInfo}`}>
                <img src={admission} className={`${st.icon}`} />
                <div className={`${st.titleInfoBody}`}>
                  <h5>Add Team Member</h5>
                  <p>Create a new member</p>
                </div>
              </div>
            </Col>
            <Col md={4} lg={4}>
              <ul className={`${st.bridSection}`}>
                <li>
                  <NavLink to="/team"> Team </NavLink>
                </li>
                <li>
                  <MdOutlineNavigateNext className={`${cx.icon}`} />
                </li>
                <li>
                  <span>Add</span>
                </li>
              </ul>
            </Col>
            <Col md={4} lg={4}>
              <div className="d-flex justify-content-end">
                <DemoInfo />
              </div>
            </Col>
          </Row>
        </div>

        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body>
              <div className={`${st.contentBox}`}>
                <Row>
                  <Col md={4} lg={3} xl={2}>
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

                  <Col md={12} lg={9} xl={10}>
                    <Row>
                      <Col lg={4} md={4}>
                        <Form.Group className={`${st.formField}`}>
                          <Form.Label>
                            First Name<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control type="text" placeholder=" First Name" />
                        </Form.Group>
                      </Col>
                      <Col lg={4} md={4}>
                        <Form.Group className={`${st.formField}`}>
                          <Form.Label>
                            Last Name<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                      </Col>
                      <Col lg={4} md={4}>
                        <Form.Group className={`${st.formField}`}>
                          <Form.Label>
                            Role<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Select>
                            <option>Select</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>

                      <Col lg={4} md={6}>
                        <Form.Group className={`${st.formField}`}>
                          <Form.Label>
                            Phone No<span className="text-danger">*</span>
                          </Form.Label>

                          <PhoneNumber />
                        </Form.Group>
                      </Col>
                      <Col lg={4} md={6}>
                        <Form.Group className={`${st.formField}`}>
                          <Form.Label>
                            Email<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                      </Col>
                      <Col lg={4} md={6}>
                        <Form.Group className={`${st.formField}`}>
                          <Form.Label>
                            Gender<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Select>
                            <option>Select</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col lg={4} md={6}>
                        <Form.Group className={`${st.formField}`}>
                          <Form.Label>
                            DOB<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control type="date" placeholder="date" />
                        </Form.Group>
                      </Col>
                      <Col lg={4} md={6}>
                        <Form.Group className={`${st.formField}`}>
                          <Form.Label>
                            Qualification<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Add Qualification"
                          />
                        </Form.Group>
                      </Col>

                      <Col lg={4} md={6} className={`${st.formField} text-end`}>
                        <Form.Label className={`${st.labelHide}`}>.</Form.Label>
                        <Button className={`${st.btnDisabled}`}>Save</Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>

              <div className={`${st.tabbingList}`}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="tabId1">
                  <Nav variant="pills">
                    <Nav.Item>
                      <Nav.Link eventKey="tabId1">Address</Nav.Link>
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

                  <div className={`${st.contentBox}`}>
                    <Tab.Content>
                      <Tab.Pane eventKey="tabId1">
                        <Row>
                          <Col md={6} lg={3}>
                            <Form.Group className={`${st.formField}`}>
                              <Form.Label>Country</Form.Label>
                              <Form.Select aria-label="Country">
                                <option>Country</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6} lg={3}>
                            <Form.Group className={`${st.formField}`}>
                              <Form.Label>State</Form.Label>
                              <Form.Select aria-label="State">
                                <option>State</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6} lg={3}>
                            <Form.Group className={`${st.formField}`}>
                              <Form.Label>
                                City <span className="text-danger">*</span>
                              </Form.Label>
                              <Form.Select aria-label="City">
                                <option>City</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6} lg={3}>
                            <Form.Group className={`${st.formField}`}>
                              <Form.Label>Postal Code</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Postal Code"
                              />
                            </Form.Group>
                          </Col>

                          <Col lg={4} md={6}>
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
                          <Col lg={4} md={6}>
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
                          <Col lg={4} md={6}>
                            <Form.Group className={`${st.formField}`}>
                              <Form.Label>Landmark</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Landmark"
                              />
                            </Form.Group>
                          </Col>

                          <Col
                            lg={12}
                            md={6}
                            className={`${st.formField} text-end`}
                          >
                            <Form.Label className={`${st.labelHide}`}>
                              .
                            </Form.Label>
                            <Button className={`${st.btnDisabled}`}>
                              Save
                            </Button>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="tabId2">
                        <div className={`${cx.formcard}`}>
                          <div className={`${cx.formcardWrapper}`}>
                            <Row>
                              <Col lg={12}>
                                <Row className="align-items-center">
                                  <Col md={5} lg={6}>
                                    <Form.Group className={`${st.formField}`}>
                                      <Form.Label>
                                        School/Institute/University
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="School/Institute/University"
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col md={5} lg={5}>
                                    <Form.Group className={`${st.formField}`}>
                                      <Form.Label>Degree</Form.Label>
                                      <Form.Select aria-label="State">
                                        <option>Select Degree</option>
                                      </Form.Select>
                                    </Form.Group>
                                  </Col>
                                  <Col md={2} lg={1}>
                                    <Form.Label className={`${st.labelHide}`}></Form.Label>
                                    <Form.Group className={`${st.formField}`}>
                                      <NavLink
                                        to="#"
                                        className={`btn ${st.editIcon}`}
                                      >
                                        <AiOutlinePlus />
                                      </NavLink>
                                    </Form.Group>
                                  </Col>
                                </Row>
                              </Col>

                              <Col md={4} lg={4}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Area of Study</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Ex: Computer Science"
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={4} lg={4}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Dates Attended</Form.Label>
                                  <Form.Control
                                    type="date"
                                    placeholder="from"
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={4} lg={4}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label></Form.Label>
                                  <Form.Control
                                    type="date"
                                    placeholder="from"
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                          </div> 
                          

                          <Col
                                lg={12}
                                md={12}
                                className={`${st.formField} text-end`}
                              >
                                <Button className={`${st.btnDisabled}`}>
                                  Save
                                </Button>
                              </Col>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="tabId3">
                      <div className={`${cx.formcard}`}>
                          <div className={`${cx.formcardWrapper}`}>
                            <Row>
                              <Col lg={12}>
                                <Row className="align-items-center">
                                  <Col md={5} lg={6}>
                                    <Form.Group className={`${st.formField}`}>
                                      <Form.Label>
                                      Company Name
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="Company Name"
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col md={5} lg={5}>
                                    <Form.Group className={`${st.formField}`}>
                                      <Form.Label>Location</Form.Label>
                                      <Form.Select aria-label="State">
                                        <option>Location</option>
                                      </Form.Select>
                                    </Form.Group>
                                  </Col>
                                  <Col md={2} lg={1}>
                                    <Form.Label className={`${st.labelHide}`}></Form.Label>
                                    <Form.Group className={`${st.formField}`}>
                                      <NavLink
                                        to="#"
                                        className={`btn ${st.editIcon}`}
                                      >
                                        <AiOutlinePlus />
                                      </NavLink>
                                    </Form.Group>
                                  </Col>
                                </Row>
                              </Col>

                              <Col md={4} lg={4}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Position</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Description"
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={4} lg={4}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Dates Attended</Form.Label>
                                  <Form.Control
                                    type="date"
                                    placeholder="from"
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={4} lg={4}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label></Form.Label>
                                  <Form.Control
                                    type="date"
                                    placeholder="from"
                                  />
                                </Form.Group>
                              </Col>

                            </Row>
                          </div> 
                          
                          <Col
                                lg={12}
                                md={12}
                                className={`${st.formField} text-end`}
                              >
                                <Button className={`${st.btnDisabled}`}>
                                  Save
                                </Button>
                              </Col>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="tabId4">
                        <Row>
                          <Col md={4} lg={4}>
                            <Form.Group className={`${st.formField}`}>
                              <Form.Label>Subject</Form.Label>
                              <Form.Select aria-label="Country">
                                <option>Select Subject</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={4} lg={4}>
                            <Form.Group className={`${st.formField}`}>
                              <Form.Label>Class</Form.Label>
                              <Form.Select aria-label="State">
                                <option>Select Class</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>

                          <Col md={4} lg={4}>
                            <Form.Group className={`${st.formField}`}>
                              <Form.Label>Rate</Form.Label>
                              <Form.Control type="number" placeholder="Rate" />
                            </Form.Group>
                          </Col>

                          <Col
                            lg={12}
                            md={12}
                            className={`${st.formField} text-end`}
                          >
                            <Form.Label className={`${st.labelHide}`}>
                              .
                            </Form.Label>
                            <Button className={`${st.btnDisabled}`}>
                              Save
                            </Button>
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
