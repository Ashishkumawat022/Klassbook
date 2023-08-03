import React, { useCallback, useState } from "react";
import st from "../../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Branch.module.scss";
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
  AiOutlineInfoCircle,
  AiOutlineGlobal,
  AiFillDelete,
  AiFillInstagram,
  AiFillTwitterCircle,
  
} from "react-icons/ai";
import {MdEdit} from "react-icons/md";

import { BsFacebook, BsTelegram } from "react-icons/bs";
import {
  MdLocationPin,
  MdArrowBackIosNew,
  MdOutlineNavigateNext,
  MdModeEditOutline,
  MdOutlineCheck,
} from "react-icons/md";

// --------- Images --------- //
import business from "../../../images/icon-business.svg";
import uploadFile from "../../../images/iconUpload.svg";
import DemoInfo from "../../../components/DemoInfo/DemoInfo";
import SetupMenu from "../../../components/Sidebar/SetupMenu";
import PhoneNumber from "../../../components/Phonenumber/Phonenumber";

export default function AddBranch() {
  return (
    <>
      <section className={`${st.pageWrapper} ${st.pageWrapperOpen}`}>
        <SetupMenu />
        <div className={`${st.pageTitle}`}>
          <Row className={`align-items-center`}>
            <Col md={4} lg={4}>
              <div className={`${st.titleInfo}`}>
                <NavLink className={`btn ${st.back}`} to="/branch">
                  <MdArrowBackIosNew />
                </NavLink>
                <div className={`${st.titleInfoBody}`}>
                  <h5>Add</h5>
                  <p>Create Branch</p>
                </div>
              </div>
            </Col>
            <Col md={4} lg={4}>
              <ul className={`${st.bridSection}`}>
                <li>
                  <NavLink to="#"> Branch</NavLink>
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
                  <Col md={12} lg={12} xl={12}>
                    <Row>
                      <Col lg={3}>
                        <Form.Group className={`${st.formField}`}>
                          <Form.Label>
                            Name<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                      </Col>
                      <Col lg={3}>
                        <Form.Group className={`${st.formField}`}>
                          <Form.Label>
                            Contact Person
                            <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Contact Person"
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={3}>
                        <Form.Group className={`${st.formField}`}>
                          <Form.Label>
                            Phone Number<span className="text-danger">*</span>
                          </Form.Label>
                          <PhoneNumber />
                        </Form.Group>
                      </Col>
                      <Col lg={3}>
                        <Form.Group className={`${st.formField}`}>
                          <Form.Label>
                            WhatsApp<span className="text-danger">*</span>
                          </Form.Label>
                          <PhoneNumber />
                        </Form.Group>
                      </Col>
                      <Col lg={5}>
                        <Form.Group className={`${st.formField}`}>
                          <Form.Label>
                            Website<span className="text-danger">*</span>
                          </Form.Label>
                          <InputGroup>
                            <AiOutlineGlobal className={`${st.icon}`} />
                            <Form.Control type="text" placeholder="https://" />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                      <Col lg={4}>
                        <Form.Group className={`${st.formField}`}>
                          <Form.Label>
                            Email<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder=" Person Email"
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={3} className="text-end mt-2">
                        <Form.Group className={`${st.formField}`}>
                          <Form.Label className={`${st.labelHide} mb-0`}>
                            .
                          </Form.Label>
                          <Button className={`${st.btnDisabled}`}>Save</Button>
                        </Form.Group>
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
                      <Nav.Link eventKey="tabId2">Room/Facilities</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabId3">Assign Team</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <div className={`${st.contentBox}`}>
                    <Tab.Content>
                      <Tab.Pane eventKey="tabId1">
                        <Row>
                          <Col md={6} lg={3}>
                            <Form.Group className={`${st.formField}`}>
                              <Form.Label>
                                Country<span className="text-danger">*</span>
                              </Form.Label>
                              <Form.Select aria-label="Country">
                                <option>Country</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6} lg={3}>
                            <Form.Group className={`${st.formField}`}>
                              <Form.Label>
                                State<span className="text-danger">*</span>
                              </Form.Label>
                              <Form.Select aria-label="State">
                                <option>State</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6} lg={3}>
                            <Form.Group className={`${st.formField}`}>
                              <Form.Label>
                                City<span className="text-danger">*</span>
                              </Form.Label>
                              <Form.Select aria-label="City">
                                <option>City</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6} lg={3}>
                            <Form.Group className={`${st.formField}`}>
                              <Form.Label>
                                Pin Code<span className="text-danger">*</span>
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Pin Code"
                              />
                            </Form.Group>
                          </Col>

                          <Col lg={6}>
                            <Form.Group className={`${st.formField}`}>
                              <Form.Label>
                                Address 1<span className="text-danger">*</span>
                              </Form.Label>
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
                              <Form.Label>
                                Address 2<span className="text-danger">*</span>
                              </Form.Label>
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
                         

                          <Col
                            lg={12}
                            className={`${st.formField} text-center`}
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
                          <Col lg={12} className={`${st.tabTitle}`}>
                            <Row className="align-items-center mb-2">
                              <Col md={9} lg={9}>
                                <p className="mb-0">1 Room, 2 Facilities</p>
                              </Col>
                              <Col md={3} lg={3}>
                                <NavLink to="#" className={`${cx.addRow}`}>
                                  + Add Room / Facilities
                                </NavLink>
                              </Col>
                            </Row>
                          </Col>
                          <Col lg={12} md={12}>
                          <table className={`table ${tb.ctTable}`}>
                            <thead>
                              <tr>
                                <th>Sr. No.</th>
                                <th>Name</th>
                                <th style={{ width:'130px' }}>Type</th>
                                <th>Details</th>
                                <th>Capacity</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>English Room</td>
                                <td>Manager</td>
                                <td>
                                  None
                                </td>
                                <td>001</td>
                                <td>
                                  <ul className={`${tb.actionTable}`}>
                                    <li>
                                      <NavLink className={`btn ${tb.edit}`} title="Edit" to="#">
                                        <MdEdit />
                                      </NavLink>
                                    </li>
                                    <li>
                                      <NavLink className={`btn ${tb.delete}`} title="Delete" to="#">
                                        <AiFillDelete />
                                      </NavLink>
                                    </li>
                                  </ul>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Math Room</td>
                                <td>Manager</td>
                                <td>
                                  Lorem ipsum dolor sit amet, consectetur...
                                </td>
                                <td>002</td>
                                <td>
                                  <ul className={`${tb.actionTable}`}>
                                    <li>
                                      <NavLink className={`btn ${tb.edit}`} title="Edit" to="#">
                                        <MdEdit />
                                      </NavLink>
                                    </li>
                                    <li>
                                      <NavLink className={`btn ${tb.delete}`} title="Delete" to="#">
                                        <AiFillDelete />
                                      </NavLink>
                                    </li>
                                  </ul>
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>LANG Room</td>
                                <td>Manager</td>
                                <td>
                                None
                                </td>
                                <td>003</td>
                                <td>
                                  <ul className={`${tb.actionTable}`}>
                                    <li>
                                      <NavLink className={`btn ${tb.edit}`} title="Edit" to="#">
                                        <MdEdit />
                                      </NavLink>
                                    </li>
                                    <li>
                                      <NavLink className={`btn ${tb.delete}`} title="Delete" to="#">
                                        <AiFillDelete />
                                      </NavLink>
                                    </li>
                                  </ul>
                                </td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>
                                  <Form.Group className={`${st.formField} mb-0`}>
                                    <Form.Select aria-label="Country">
                                      <option>Select</option>
                                    </Form.Select>
                                  </Form.Group>
                                </td>
                                <td>
                                  <Form.Group className={`${st.formField} mb-0`}>
                                    <Form.Select aria-label="Country">
                                      <option>Type</option>
                                    </Form.Select>
                                  </Form.Group>
                                </td>
                                <td>
                                  <Form.Group className={`${st.formField} mb-0`}>
                                  <Form.Control type="text" placeholder="Details" />
                                  </Form.Group>
                                </td>
                                <td>
                                  <Form.Group className={`${st.formField} mb-0`}>
                                    <Form.Control type="number" placeholder="Capacity" />
                                  </Form.Group>
                                </td>
                                <td>
                                <ul className={`${tb.actionTable}`}>
                                  <li>
                                    <NavLink className={`btn ${tb.edit}`} title="Done" to="#">
                                      <MdOutlineCheck />
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink className={`btn ${tb.delete}`} title="Delete" to="#">
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
                      <Tab.Pane eventKey="tabId3">
                      
                      <Row>
                          <Col lg={12} className={`${st.tabTitle}`}>
                            <Row className="align-items-center mb-2">
                              <Col md={9} lg={9}>
                                <p className="mb-0">You have 8 members in the team</p>
                              </Col>
                              <Col md={3} lg={3}>
                                <NavLink to="#" className={`${cx.addRow}`}>
                                + Assign Team
                                </NavLink>
                              </Col>
                            </Row>
                          </Col>
                          <Col lg={12} md={12}>
                          <table className={`table ${tb.ctTable}`}>
                            <thead>
                              <tr>
                                <th>Sr. No.</th>
                                <th>Emp ID</th>
                                <th>Name</th>
                                <th style={{ width:'130px' }}>Role</th>
                                <th>Phone No</th>
                                <th>Email</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>Marina Kovalyshyn</td>
                                <td>Manager</td>
                                <td>+380 96 66 10 978</td>
                                <td>None</td>
                                <td>
                                  <ul className={`${tb.actionTable}`}>
                                    <li>
                                      <NavLink className={`btn ${tb.edit}`} title="Edit" to="#">
                                        <MdEdit />
                                      </NavLink>
                                    </li>
                                    <li>
                                      <NavLink className={`btn ${tb.delete}`} title="Delete" to="#">
                                        <AiFillDelete />
                                      </NavLink>
                                    </li>
                                  </ul>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>2</td>
                                <td>Marina Kovalyshyn</td>
                                <td>Manager</td>
                                <td>+380 96 66 10 978</td>
                                <td>None</td>
                                <td>
                                  <ul className={`${tb.actionTable}`}>
                                    <li>
                                      <NavLink className={`btn ${tb.edit}`} title="Edit" to="#">
                                        <MdEdit />
                                      </NavLink>
                                    </li>
                                    <li>
                                      <NavLink className={`btn ${tb.delete}`} title="Delete" to="#">
                                        <AiFillDelete />
                                      </NavLink>
                                    </li>
                                  </ul>
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>3</td>
                                <td>Marina Kovalyshyn</td>
                                <td>Manager</td>
                                <td>+380 96 66 10 978</td>
                                <td>None</td>
                                <td>
                                  <ul className={`${tb.actionTable}`}>
                                    <li>
                                      <NavLink className={`btn ${tb.edit}`} title="Edit" to="#">
                                        <MdEdit />
                                      </NavLink>
                                    </li>
                                    <li>
                                      <NavLink className={`btn ${tb.delete}`} title="Delete" to="#">
                                        <AiFillDelete />
                                      </NavLink>
                                    </li>
                                  </ul>
                                </td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>4</td>
                                <td>
                                  <Form.Group className={`${st.formField} mb-0`}>
                                    <Form.Select aria-label="Name">
                                      <option>Name</option>
                                    </Form.Select>
                                  </Form.Group>
                                </td>
                                <td>
                                  <Form.Group className={`${st.formField} mb-0`}>
                                    <Form.Select aria-label="Role">
                                      <option>Role</option>
                                    </Form.Select>
                                  </Form.Group>
                                </td>
                                <td>
                                  <Form.Group className={`${st.formField} mb-0`}>
                                  <Form.Control type="text" placeholder="+380 00 00 00 000" />
                                  </Form.Group>
                                </td>
                                <td>
                                  <Form.Group className={`${st.formField} mb-0`}>
                                    <Form.Control type="email" placeholder="Email" />
                                  </Form.Group>
                                </td>
                                <td>
                                <ul className={`${tb.actionTable}`}>
                                  <li>
                                    <NavLink className={`btn ${tb.edit}`} title="Done" to="#">
                                      <MdOutlineCheck />
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink className={`btn ${tb.delete}`} title="Delete" to="#">
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
            </Card.Body>
          </Card>
        </div>
      </section>
    </>
  );
}
