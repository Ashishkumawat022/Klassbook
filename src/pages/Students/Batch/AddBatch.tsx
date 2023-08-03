import React, { useCallback, useState } from "react";
import st from "../../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Batch.module.scss";

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
  MdContentCopy,
  MdEdit,
  MdLocationPin,
  MdOutlineCheck,
  MdOutlineFileUpload,
  MdOutlineNavigateNext,
} from "react-icons/md";

// --------- Images --------- //
import { AiFillDelete, AiFillHome, AiOutlineHome } from "react-icons/ai";
import DemoInfo from "../../../components/DemoInfo/DemoInfo";

export default function AddBatch() {
  return (
    <>
      <section className={`${st.pageWrapper} `}>
        <div className={`${st.pageTitle}`}>
          <Row>
            <Col md={4} lg={4}>
              <div className={`${st.titleInfo}`}>
              <NavLink className={`btn ${st.back}`} to="/batch">
                  <MdArrowBackIosNew />
                </NavLink>
                <div className={`${st.titleInfoBody}`}>
                  <h5>Batch</h5>
                  <p>Create Batch</p>
                </div>
              </div>
            </Col>
            <Col md={4} lg={4}>
              <ul className={`${st.bridSection}`}>
                <li>
                  <NavLink to="/batch"> Batch</NavLink>
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
                      <Col lg={6} md={6}>
                        <Form.Group className={`${st.formField}`}>
                          <Form.Label>
                            
                            Branch Name<span className="text-danger">*</span>
                          </Form.Label>
                        <Form.Select>
                          <option >Select Branch</option>
                        </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col lg={6} md={6}>
                        <Form.Group className={`${st.formField}`}>
                          <Form.Label>
                          Batch Name<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control type="text" placeholder="Batch Name" />
                        </Form.Group>
                      </Col>

                      <Col lg={3} md={6}>
                        <Form.Group className={`${st.formField}`}>
                          <Form.Label>
                          Start Date<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control type="date" placeholder="date" />
                        </Form.Group>
                      </Col>
                      <Col lg={3} md={6}>
                        <Form.Group className={`${st.formField}`}>
                          <Form.Label>
                          End Date<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control type="date" placeholder="date" />
                        </Form.Group>
                      </Col>
                      <Col lg={3} md={6}>
                        <Form.Group className={`${st.formField}`}>
                          <Form.Label>
                          Capacity<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control type="number" placeholder="" />
                        </Form.Group>
                      </Col>
                      

                      <Col
                        lg={3}
                        md={6}
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
                      <Nav.Link eventKey="tabId1">Name of Students</Nav.Link>
                    </Nav.Item>
                  </Nav>
                 
                  <div className={`${st.contentBox}`}>
                    <Tab.Content>
                      <Tab.Pane eventKey="tabId1">
                     <Row>
                     <Col lg={12} className={`${st.tabTitle}`}>
                            <Row className="align-items-center mb-2">
                              <Col md={9} lg={9}>
                                <p className="mb-0">You have 3 students</p>
                              </Col>
                              <Col md={3} lg={3}>
                                <NavLink to="#" className={`${cx.addRow}`}>
                                  <MdOutlineFileUpload className=" mx-2" style={{fontSize:"21px"}}/>
                                   Upload CSV 
                                </NavLink>
                              </Col>
                            </Row>
                          </Col>

                          <Col lg={12} md={12}>
                          <table className={`table ${tb.ctTable}`}>
                            <thead>
                              <tr>
                                <th>Sr. No.</th>
                                <th>Student ID</th>
                                <th>Student Name</th>
                                <th>Phone No</th>
                                <th>Email</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>Kovalyshyn Marina Andriivna </td>
                                <td>+380 96 66 10 978</td>
                                <td>
                                test-email@gmail.com
                                </td>
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
                                <td>Kovalyshyn Marina Andriivna </td>
                                <td>+380 96 66 10 978</td>
                                <td>
                                test-email@gmail.com
                                </td>
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
                                <td>Kovalyshyn Marina Andriivna </td>
                                <td>+380 96 66 10 978</td>
                                <td>
                                test-email@gmail.com
                                </td>
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
                                    <Form.Select aria-label="Country">
                                      <option>Select</option>
                                    </Form.Select>
                                  </Form.Group>
                                </td>
                                <td>
                                  <Form.Group className={`${st.formField} mb-0`}>
                                  <Form.Control type="number" placeholder="+380 00 00 00 000" />
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
