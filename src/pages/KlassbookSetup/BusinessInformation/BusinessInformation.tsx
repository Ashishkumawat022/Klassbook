import React, { useCallback, useState } from "react";
import st from "../../../style.module.scss";
import tb from "../../../datatable.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./BusinessInformation.module.scss";
import {
  Card,
  Row,
  Col,
  Form,
  Button,
  Tab,
  Nav,
  Modal,
  Alert,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

import demoimg from "../../../images/demo-img.jpg";

import uploadFile from "../../../images/iconUpload.svg";

// --------- Images --------- //
import DemoInfo from "../../../components/DemoInfo/DemoInfo";

import KlassBookSetupMenu from "../../../components/Sidebar/KlassbookSetupMenu";

import ksetup from "../../../images/icon-k-setup.svg";
import erroricon from "../../../images/error-icon.svg";

import m from "../../../modal.module.scss";

import { MdClose, MdEdit, MdModeEditOutline, MdVideocam } from "react-icons/md";
import { AiOutlineGlobal, AiOutlineInfoCircle } from "react-icons/ai";

export default function BusinessInformation() {
  const [showClassType, setshowClassType] = useState(false);
  const handleClassTypeClose = () => setshowClassType(false);
  const handleshowClassType = () => setshowClassType(true);

  const [tagShow, setTagShow] = useState(false);
  const handleTagClose = () => setTagShow(false);
  const handleTagShow = () => setTagShow(true);

  const [showbtn, setShowBtn] = useState(true);

  return (
    <>
      <section className={`${st.pageWrapper} ${st.pageWrapperOpen}`}>
        <KlassBookSetupMenu />
        <div className={`${st.pageTitle}`}>
          <Row>
            <Col md={6} lg={6}>
              <div className={`${st.titleInfo}`}>
                <img src={ksetup} className={`${st.icon}`} />
                <div className={`${st.titleInfoBody}`}>
                  <h5>Klassbook Set Up</h5>
                  <p>Business Information</p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={6}>
              <ul className={`${st.actionTop}`}>
                <li>
                  <NavLink className={`btn ${st.info}`} to="#">
                    <MdVideocam />
                  </NavLink>
                </li>
                <li>
                  <NavLink className={`btn`} to="#">
                    Demo
                  </NavLink>
                </li>
              </ul>
            </Col>

            <Col lg={12} className="mt-2">
              <div className={`alert ${cx.alerttab}`} role="alert">
                <div>
                  <img src={erroricon} className={`${tb.icon}`} />
                </div>

                <div className="mx-2">
                  <h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempo
                  </h5>
                  <p>
                    Laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div>
                  <button>Got It</button>
                </div>
              </div>
            </Col> 
          </Row>
        </div>

        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={4} lg={2}>
                  <div className={`${st.uploadForm}  mb-3`}>
                    <div className={`${st.fileUpload} `}>
                      <input type="file" />
                      <img src={uploadFile} className={`${st.icon}`} />
                    </div>
                    <Form.Label>
                      Upload Photo<span className="text-danger">*</span>
                    </Form.Label>
                  </div>
                </Col>
                <Col md={4} lg={2}>
                  <div className={`${st.uploadForm}  mb-3`}>
                    <div className={`${st.fileUpload}`}>
                      <img src={demoimg} className={`${st.icon}`} />
                    </div>
                    <Form.Label>One of the events</Form.Label>
                  </div>
                </Col>

                <Col lg={12} className={`${st.tabTitle}`}>
                  <Row className="align-items-center">
                    <Col lg={9} md={12} className={`${st.tabTitle}`}>
                      <h5>National University Lvivska Politechnika</h5>
                      <p>Name of category grey </p>
                    </Col>
                    <Col md={12} lg={3}>
                      <NavLink
                        to="#"
                        className={`${cx.addRow} align-items-center`}
                      >
                        https://green-forest.com...
                        {/* <AiOutlineGlobal className={`${st.icon}`}/> */}
                      </NavLink>
                    </Col>
                  </Row>
                </Col>

                <Col md={12} lg={9} xl={10} className="mb-4">
                  <div className={`${cx.uploadData}`}>
                    <ul>
                      <li className="align-items-center">
                        <span>Class Type</span>
                        <strong>
                          <NavLink to="#" onClick={handleshowClassType}>
                            Select Online/Offline
                          </NavLink>
                        </strong>
                        <NavLink
                          to="#"
                          className={`btn ${st.editIcon}  text-end`}
                        >
                          <MdModeEditOutline />
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>

              <div className={`${st.tabbingList}`}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="tabId1">
                  <Nav variant="pills">
                    <Nav.Item>
                      <Nav.Link eventKey="tabId1">Tags</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabId2">About</Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <div className={`${st.contentBox}`}>
                    <Tab.Content>
                      <Tab.Pane eventKey="tabId1">
                        <Row>
                          <Col lg={12} className="mt-2">
                             {showbtn && <Alert
                              variant="success"
                              onClose={() => setShowBtn(false)}
                              dismissible
                              className={`${cx.alertclosetab}`}
                            >
                              <Alert.Heading>
                                Tag
                              </Alert.Heading>
                              <p>
                              Tag nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                              </p>
                            </Alert> } 

                          </Col>
                          <Col md={7} lg={8}>
                            <Form.Group className={`${st.formField}`}>
                              <Form.Label>Tags</Form.Label>
                              <Form.Select aria-label="Default select example">
                                <option>Select Tags</option>
                                <option>Language</option>
                                <option>Mathematics</option>
                                <option>Chemistry</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col
                            lg={4}
                            md={5}
                            className={`${st.formField} text-end`}
                          >
                            <Form.Label className={`${st.labelHide}`}>
                              .
                            </Form.Label>
                            <Button
                              className={`${st.btnDisabled}`}
                              onClick={handleTagShow}
                            >
                              + Add Own Tags
                            </Button>
                          </Col>
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="tabId2">
                        <Row>
                          <Col md={12} lg={12}>
                            <Form.Group className={`${st.formField}`}>
                              <Form.Label>About Institute</Form.Label>
                              <Form.Control
                                as={"textarea"}
                                type="text"
                                rows={10}
                                cols={40}
                                style={{ height: "200px" }}
                                placeholder="Description"
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
                    </Tab.Content>
                  </div>
                </Tab.Container>
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>

      {/* Class Type Model  */}

      <Modal
        show={showClassType}
        className={`${m.modalCts}`}
        centered
        onHide={handleClassTypeClose}
      >
        <Modal.Body>
          <button
            className={`${m.closeIcon}`}
            title="Close"
            onClick={handleClassTypeClose}
          >
            <MdClose />
          </button>
          <Col lg={12} className={`${m.title}`}>
            <h5>Class Type</h5>
          </Col>
          <Row>
            <Col md={12} lg={12}>
              <Form.Group className={`${st.formField}`}>
                <Form.Label>Class Type</Form.Label>
                <Form.Select>
                  <option>Online/Offline</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col lg={12} md={12} className={`${st.formField} text-end`}>
              <Form.Label className={`${st.labelHide}`}>.</Form.Label>
              <Button className={`${st.btnDisabled}`}>Save</Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      {/* Add Own Model   */}

      <Modal
        show={tagShow}
        className={`${m.modalCts}  `}
        centered
        onHide={handleTagClose}
      >
        <Modal.Body>
          <button
            className={`${m.closeIcon}`}
            title="Close"
            onClick={handleTagClose}
          >
            <MdClose />
          </button>
          <Col lg={12} className={`${m.title}`}>
            <h5>Add Own Tag</h5>
          </Col>
          <Row>
            <Col md={12} lg={12}>
              <Form.Group className={`${st.formField}`}>
                <Form.Label>Tag</Form.Label>
                <Form.Control type="text" placeholder="Add new tag" />
              </Form.Group>
            </Col>

            <Col lg={12} md={12} className={`${st.formField} text-end`}>
              <Form.Label className={`${st.labelHide}`}>.</Form.Label>
              <Button className={`${st.btnDisabled}`}>Add</Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
