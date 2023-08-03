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

import {
  MdContentCopy,
  MdEdit,
  MdLocationPin,
  MdOutlineCheck,
  MdOutlineNavigateNext,
} from "react-icons/md";

// --------- Images --------- //
import studentIcon from "../../../images/icon-student.svg";
import uploadFile from "../../../images/iconUpload.svg";
import PhoneNumber from "../../../components/Phonenumber/Phonenumber";
import Checkbox from "../../../components/Forms/Checkbox";
import { AiFillDelete, AiFillHome, AiOutlineHome } from "react-icons/ai";
import DemoInfo from "../../../components/DemoInfo/DemoInfo";

export default function AddStudent() {
  return (
    <>
      <section className={`${st.pageWrapper} `}>
        <div className={`${st.pageTitle}`}>
          <Row>
            <Col md={4} lg={4}>
              <div className={`${st.titleInfo}`}>
                <img src={studentIcon} className={`${st.icon}`} />
                <div className={`${st.titleInfoBody}`}>
                  <h5>Add Student</h5>
                  <p>Create a new student</p>
                </div>
              </div>
            </Col>
            <Col md={4} lg={4}>
              <ul className={`${st.bridSection}`}>
                <li>
                  <NavLink to="/student"> Student</NavLink>
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
                      <Col lg={6} md={6}>
                        <Form.Group className={`${st.formField}`}>
                          <Form.Label>
                            {" "}
                            First Name<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control type="text" placeholder=" First Name" />
                        </Form.Group>
                      </Col>
                      <Col lg={6} md={6}>
                        <Form.Group className={`${st.formField}`}>
                          <Form.Label>
                            Last Name<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control type="text" placeholder="Last Name" />
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
                            Phone No<span className="text-danger">*</span>
                          </Form.Label>

                          <PhoneNumber />
                        </Form.Group>
                      </Col>

                      <Col
                        lg={4}
                        md={12}
                        className={`${st.formField} text-end`}
                      >
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
                      <Nav.Link eventKey="tabId1">General</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabId2">Address</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabId3">Parents Info</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabId4">School Details</Nav.Link>
                    </Nav.Item>
                   
                    <Nav.Item>
                      <Nav.Link eventKey="tabId5">Other</Nav.Link>
                    </Nav.Item>
                  </Nav>
                 
                  <div className={`${st.contentBox}`}>
                    <Tab.Content>
                      <Tab.Pane eventKey="tabId1">
                        <Row>
                          <Col md={6} lg={3}>
                            <Form.Group className={`${st.formField}`}>
                              <Form.Label>Student ID/Roll No</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Student ID/Roll No"
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6} lg={2}>
                            <Form.Group className={`${st.formField}`}>
                              <Form.Label>National ID</Form.Label>
                              <Form.Control
                                type="number"
                                placeholder="Last 4 digit"
                              />
                            </Form.Group>
                          </Col>
                          <Col md={4} lg={2}>
                            <Form.Group className={`${st.formField}`}>
                              <Form.Label>Gender</Form.Label>
                              <Form.Select>
                                <option > Gender</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={4} lg={2}>
                            <Form.Group className={`${st.formField}`}>
                              <Form.Label>D.O.B</Form.Label>
                              <Form.Control type="date" placeholder="gender" />
                            </Form.Group>
                          </Col>

                          <Col
                            lg={3}
                            md={4}
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
                              <Form.Label>City</Form.Label>
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
                      <Tab.Pane eventKey="tabId3">
                        <Row>
                          <Col md={12} lg={12} xl={12}>
                            <Row>
                              <Col lg={3} md={6}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>First Name</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder=" First Name"
                                  />
                                </Form.Group>
                              </Col>
                              <Col lg={3} md={6}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Last Name</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Last Name"
                                  />
                                </Form.Group>
                              </Col>
                              <Col lg={3} md={6}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Phone No</Form.Label>

                                  <PhoneNumber />
                                </Form.Group>
                              </Col>

                              <Col lg={3} md={6}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Email</Form.Label>
                                  <Form.Control
                                    type="email"
                                    placeholder="Email"
                                  />
                                </Form.Group>
                              </Col>
                              <Col lg={12} md={12}>
                                <Form.Group className={`${st.formField}`}>
                                  <Form.Label>Relation</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Relation"
                                  />
                                </Form.Group>
                              </Col>

                              <Col
                                lg={12}
                                className={`${st.tabTitle} mt-3 border-bottom border-white`}
                              >
                                <Row className="align-items-center mb-2">
                                  <Col md={3} lg={9}>
                                    <p className="mb-0">Location</p>
                                  </Col>
                                  <Col md={9} lg={3}>
                                    <NavLink to="#" className={`${cx.addRow}`}>
                                      <MdContentCopy className="mx-2 mt-1" />
                                      Copy Address from Branch
                                    </NavLink>
                                  </Col>
                                </Row>
                              </Col>

                              <Col lg={12} className="mt-3">
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
                                      <Form.Label>City</Form.Label>
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
                                        <MdLocationPin
                                          className={`${st.icon}`}
                                        />
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
                                        <MdLocationPin
                                          className={`${st.icon}`}
                                        />
                                        <Form.Control
                                          type="text"
                                          placeholder="Address 2"
                                        />
                                      </InputGroup>
                                    </Form.Group>
                                  </Col>
                                  <Col lg={4} md={12}>
                                    <Form.Group className={`${st.formField}`}>
                                      <Form.Label>Landmark</Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="Landmark"
                                      />
                                    </Form.Group>
                                  </Col>
                                </Row>
                              </Col>
                              <Col md={12} lg={12} className="mt-2">
                                <Form.Group className={`${st.formField}`}>
                                  <div>
                                    <label className={`${st.checkbox}`}>
                                      <Checkbox />
                                      Same as student
                                    </label>
                                  </div>
                                </Form.Group>
                              </Col>

                              <Col
                                lg={12}
                                className={`${st.tabTitle} mt-3 border-top border-white`}
                              >
                                <Row className="align-items-center   mb-2">
                                  <Col md={6} lg={3}>
                                    <NavLink
                                      to="#"
                                      className={`${cx.addRow} `}
                                      style={{ justifyContent: "left" }}
                                    >
                                      + Add Parent/Guardian
                                    </NavLink>
                                  </Col>

                                  <Col
                                    lg={9}
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
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="tabId4">
                        <Row>
                          <Col lg={12} className={`${st.tabTitle} mb-3 `}>
                            <Row className="align-items-center">
                              <Col md={6} lg={4}>
                                <span>School Details</span>
                              </Col>
                              <Col md={6} lg={8}>
                                <NavLink
                                  to="#"
                                  className={`btn ${cx.studenteditIcon} text-end`}
                                >
                                  <AiFillHome style={{ marginRight: "8px" }} />
                                  Add School
                                </NavLink>
                              </Col>
                            </Row>
                          </Col>


                          {/* <Col md={6} lg={3}>
                            <Form.Group className={`${st.formField}`}>
                              <Form.Label>School</Form.Label>
                              <Form.Control type="text" placeholder="School" />
                            </Form.Group>
                          </Col>
                          <Col md={6} lg={3}>
                            <Form.Group className={`${st.formField}`}>
                              <Form.Label>Board/Curriculum</Form.Label>
                              <Form.Select aria-label="Board/Curriculum">
                                <option>Board/Curriculum</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6} lg={2}>
                            <Form.Group className={`${st.formField}`}>
                              <Form.Label>year</Form.Label>
                              <Form.Control type="date" placeholder="year" />
                            </Form.Group>
                          </Col>
                          <Col md={6} lg={2}>
                            <Form.Group className={`${st.formField}`}>
                              <Form.Label>Level</Form.Label>
                              <Form.Select aria-label="level">
                                <option>Select</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6} lg={2}>
                            <Form.Group className={`${st.formField}`}>
                              <Form.Label>Grade</Form.Label>
                              <Form.Select aria-label="grade">
                                <option>Select</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col
                            lg={12}
                            md={4}
                            className={`${st.formField} text-end`}
                          >
                            <Form.Label className={`${st.labelHide}`}>
                              .
                            </Form.Label>
                            <Button className={`${st.btnDisabled}`}>Add</Button>
                          </Col> */}

                          <Col lg={12} md={12} className="mt-3">
                            <table className={`table ${tb.ctTable}`}>
                              <thead>
                                <tr>
                                  <th>School</th>
                                  <th>Board/Curriculum</th>
                                  <th>Year</th>
                                  <th>Level</th>
                                  <th>Grade</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    Zolochivska secondary school I-III stages №1
                                  </td>
                                  <td> Board/Curriculum</td>
                                  <td>01.09.2018-30.06.2022</td>
                                  <td>Basic</td>
                                  <td>5</td>
                                  <td>
                                    <ul className={`${tb.actionTable}`}>
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
                                      <Form.Select aria-label="Name">
                                        <option>School</option>
                                      </Form.Select>
                                    </Form.Group>
                                  </td>
                                  <td>
                                    <Form.Group
                                      className={`${st.formField} mb-0`}
                                    >
                                      <Form.Select aria-label="Role">
                                        <option>Board/Curriculum</option>
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
                      <Tab.Pane eventKey="tabId5">

                        <Row>

                        <Col lg={12} className={`${st.tabTitle}  `}>
                            <Row className="align-items-center">
                              <Col md={6} lg={4}>
                                <span></span>
                              </Col>
                              <Col md={6} lg={8}>
                                <NavLink
                                  to="#"
                                  className={`btn ${cx.studenteditIcon} text-end`}
                                >
                                  <MdEdit style={{ marginRight: "8px" }} />
                                  Add Remark
                                </NavLink>
                              </Col>
                            </Row>
                          </Col>
                          <Col lg={12} md={12}>
                          <Form.Group className={`${st.formField}`}>
                              <Form.Label>Remark 1</Form.Label>
                              <Form.Control type="text" placeholder="Remark 1"/>
                            </Form.Group>
                          </Col>
                          <Col lg={12} md={12}>
                          <Form.Group className={`${st.formField}`}>
                              <Form.Label>Remark 2</Form.Label>
                              <Form.Control type="text" placeholder="Remark 2"/>
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
                            <Button className={`${st.btnDisabled}`}>Save</Button>
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
