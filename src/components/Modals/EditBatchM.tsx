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
import {
  MdClose,
  MdContentCopy,
  MdEdit,
  MdLocationPin,
  MdOutlineCheck,
  MdOutlineFileUpload,
} from "react-icons/md";
import { FiUpload } from "react-icons/fi";
import StudentDataGrid from "./StudentDataGrid";
import Checkbox from "../Forms/Checkbox";
import Radio from "../Forms/Radio";
import OnOff from "../Forms/OnOff";

const EditBatchM = (props: any) => {
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
            <h5>Edit</h5>
          </Col>
          <Row>
            <Col md={12} lg={12}>
              <Row>
                <Col lg={6} md={6}>
                  <Form.Group className={`${st.formField}`}>
                    <Form.Label>
                      Batch Name<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>New</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={6} md={6}>
                  <Form.Group className={`${st.formField}`}>
                    <Form.Label>
                      Branch Name<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Singapore </option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={4} md={4}>
                  <Form.Group className={`${st.formField}`}>
                    <Form.Label>Start Day</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                </Col>
                <Col lg={4} md={4}>
                  <Form.Group className={`${st.formField}`}>
                    <Form.Label>End Day</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                </Col>
                <Col lg={4} md={4}>
                  <Form.Group className={`${st.formField}`}>
                    <Form.Label>Capacity</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>1</option>
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
                          <Nav.Link eventKey="tabId1">
                            Name of Students
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <div className={`${st.contentBox} ${m.contentTaps}`}>
                        <Tab.Content>
                          <Tab.Pane eventKey="tabId1">
                            <Row>
                              <Col lg={12} className={`${st.tabTitle}`}>
                                <Row className="align-items-center mb-2">
                                  <Col md={4} lg={6}>
                                    <p className="mb-0">You have 3 students</p>
                                  </Col>
                                  <Col lg={6} md={8}>
                                    <Row>
                                      <Col lg={2}></Col>
                                      <Col md={8} lg={5}>
                                        <NavLink
                                          to="#"
                                          className={`${cx.addRow}`}
                                        >
                                          + Add Student
                                        </NavLink>
                                      </Col>
                                      <Col md={4} lg={5}>
                                        <NavLink
                                          to="#"
                                          className={`${cx.addRow}`}
                                        >
                                          <MdOutlineFileUpload
                                            className=" mx-2"
                                            style={{ fontSize: "21px" }}
                                          />
                                          Upload CSV
                                        </NavLink>
                                      </Col>
                                    </Row>
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
                                      <td>Kovalyshyn Marina Andriivna </td>
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
                                      <td>Kovalyshyn Marina Andriivna </td>
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

                {/* <Col lg={12} md={12} className="mt-2 text-end">
                  <Button className={`${st.btnDisabled}`}>Save</Button>
                </Col> */}
              </Row>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditBatchM;
