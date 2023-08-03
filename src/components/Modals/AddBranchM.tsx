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
import { MdClose, MdContentCopy, MdEdit, MdLocationPin, MdOutlineCheck, MdOutlineFileUpload } from "react-icons/md";
import PhoneNumber from "../Phonenumber/Phonenumber";

const AddBranch = (props: any) => {
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
            <h5>Add Branch</h5>
          </Col>
          <Row>
            <Col md={12} lg={12}>
              <Row>
                <Col lg={6} md={6}>
                  <Form.Group className={`${st.formField}`}>
                    <Form.Label>
                    Branch Name<span className="text-danger">*</span>
                    </Form.Label>
                   <Form.Control type="text" placeholder="Branch name"/>
                  </Form.Group>
                </Col>
                <Col lg={6} md={6}>
                  <Form.Group className={`${st.formField}`}>
                    <Form.Label>
                    Contact Person<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control type="text" placeholder="Name "/>
                  </Form.Group>
                </Col>
                <Col lg={4} md={4}>
                  <Form.Group className={`${st.formField}`}>
                    <Form.Label>Phone No <span className="text-danger">*</span></Form.Label>
                    <div className={`${cx.phoneNumber}`}><PhoneNumber /></div>
                  </Form.Group>
                </Col>
                <Col lg={4} md={4}>
                  <Form.Group className={`${st.formField}`}>
                    <Form.Label>WhatsApp <span className="text-danger">*</span></Form.Label>
                    <div className={`${cx.phoneNumber}`}><PhoneNumber /></div>
                  </Form.Group>
                </Col>
                <Col lg={4} md={4}>
                  <Form.Group className={`${st.formField}`}>
                    <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                   <Form.Control type="email" placeholder="E-mail"/>
                  </Form.Group>
                </Col>
                <Col lg={12} md={12}>
                              <Form.Group className={`${st.formField}`}>
                                <Form.Label>Website<span className="text-danger">*</span></Form.Label>
                                <InputGroup>
                                  <AiOutlineGlobal className={`${st.icon}`} />
                                  <Form.Control type="text" placeholder="https://" />
                                </InputGroup>
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
                          <Nav.Link eventKey="tabId1">Address</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="tabId2">Room/Facilities</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="tabId3">Assign Team</Nav.Link>
                        </Nav.Item>
                      
                      </Nav>
                      <div className={`${st.contentBox} ${m.contentTaps}`}>
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
                              <Form.Label>City</Form.Label>
                              <Form.Select aria-label="City">
                                <option>City</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6} lg={3}>
                            <Form.Group className={`${st.formField}`}>
                              <Form.Label>Postal Code</Form.Label>
                              <Form.Select aria-label="City">
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
                          <Col lg={12} md={12}>
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
                          <Tab.Pane eventKey="tabId2">
                           
                          </Tab.Pane>
                          <Tab.Pane eventKey="tabId3">
                          <Row>
                              <Col lg={12} className={`${st.tabTitle}`}>
                                <Row className="align-items-center mb-2">
                                  <Col md={4} lg={6}>
                                    <p className="mb-0">You have 2 members in the team</p>
                                  </Col>
                                  <Col lg={6} md={8}>
                                        <NavLink
                                          to="#"
                                          className={`${cx.addRow}`}
                                        >
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
                                      <th>Emp. ID</th>
                                      <th>Name</th>
                                      <th>Role</th>
                                      <th>Phone No</th>
                                      <th>Email</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>1</td>
                                      <td>1</td>
                                      <td>Martynyshyn Marina...</td>
                                      <td>Manager</td>
                                      <td>+380 96 66 10 978</td>
                                      <td>test-email@gmail.com</td>
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
                                      <td>2</td>
                                      <td>2</td>
                                      <td>Martynyshyn Marina...</td>
                                      <td>Manager</td>
                                      <td>+380 96 66 10 978</td>
                                      <td>test-email@gmail.com</td>
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
                                      <td>3</td>
                                      <td>3</td>
                                      <td>Martynyshyn Marina...</td>
                                      <td>Manager</td>
                                      <td>+380 96 66 10 978</td>
                                      <td>test-email@gmail.com</td>
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
                                      <td>4</td>
                                      <td>4</td>
                                      <td>
                                        <Form.Group
                                          className={`${st.formField} mb-0`}
                                        >
                                          <Form.Select aria-label="Country">
                                            <option>Select</option>
                                          </Form.Select>
                                        </Form.Group>
                                      </td>
                                      <td>
                                        <Form.Group
                                          className={`${st.formField} mb-0`}
                                        >
                                          <Form.Select aria-label="Country">
                                            <option>Role</option>
                                          </Form.Select>
                                        </Form.Group>
                                      </td>
                                      <td>
                                        <Form.Group
                                          className={`${st.formField} mb-0`}
                                        >
                                          <Form.Control
                                            type="number"
                                            placeholder="+380 00 00 00 000"
                                          />
                                        </Form.Group>
                                      </td>
                                      <td>
                                        <Form.Group
                                          className={`${st.formField} mb-0`}
                                        >
                                          <Form.Control
                                            type="email"
                                            placeholder="Email"
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
                        </Tab.Content>
                      </div>
                    </Tab.Container>
                  </div>
                </Col>
                  </Row>
                </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddBranch;
