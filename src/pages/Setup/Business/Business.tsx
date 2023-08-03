import React, { useCallback, useState } from "react";
import st from "../../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Business.module.scss";
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
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsFacebook, BsTelegram } from "react-icons/bs";
import { MdLocationPin, MdModeEditOutline } from "react-icons/md";

// --------- Images --------- //
import business from "../../../images/icon-business.svg";
import uploadFile from "../../../images/business.jpg";
import DemoInfo from "../../../components/DemoInfo/DemoInfo";
import SetupMenu from "../../../components/Sidebar/SetupMenu";

export default function Business() {
  return (
    <>
      <section className={`${st.pageWrapper} ${st.pageWrapperOpen}`}>
        <SetupMenu />
        <div className={`${st.pageTitle}`}>
          <Row>
            <Col md={6} lg={6}>
              <div className={`${st.titleInfo}`}>
                <img src={business} className={`${st.icon}`} />
                <div className={`${st.titleInfoBody}`}>
                  <h5>Business Details</h5>
                  <p>Main info about your business</p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={6}>
              <div className="d-flex justify-content-end">
                <ul className={`${st.actionTop}`}>
                  <li>
                    <NavLink className={`btn ${st.info}`} to="/business-setup">
                      <MdModeEditOutline />
                    </NavLink>
                  </li>
                </ul>
                <DemoInfo />
              </div>
            </Col>
          </Row>
        </div>

        {/* Data Note Found First
        <Col lg={12} className={`${st.dataNotFound}`}>
            <span><img src={business} /></span>
            <p>Add your first business</p>
            <NavLink to="#" className={`btn ${st.setupBtn}`}>Business Set Up</NavLink> 
        </Col> */}

        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body>
              <div className={`${cx.viewList}`}>
                <Row>
                  <Col md={4} lg={3} xl={2}>
                    <div className={`${st.uploadForm} me-3 mb-3`}>
                      <div className={`${st.fileUpload}`}>
                        <img src={uploadFile} className={`${st.icon}`} />
                      </div>
                    </div>
                  </Col>

                  <Col md={12} lg={9} xl={10}>
                    <div className={`${cx.uploadData}`}>
                      <h5>Green Forest</h5>
                      <ul>
                        <li>
                          <span>Contact Person Name</span>
                          <strong>Shynkarchyn Chrystyna</strong>
                        </li>
                        <li>
                          <span>Email</span>
                          <strong>
                            <NavLink to="#">test-email@gmail.com</NavLink>
                          </strong>
                        </li>
                        <li>
                          <span>Phone</span>
                          <strong>+380 96 10 00 999</strong>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className={`${st.tabbingList}`}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="tabId2">
                  <Nav variant="pills">
                    <Nav.Item>
                      <Nav.Link eventKey="tabId1">Address Details</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabId2">Links</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabId3">Settings</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <div className={`${st.contentBox}`}>
                    <Tab.Content>
                      <Tab.Pane eventKey="tabId1">
                        <Row>
                          <Col lg={12} className={`${st.tabTitle}`}>
                            <Row>
                              <Col md={9} lg={9}>
                                <h5>Address Details</h5>
                                <p>
                                  To help customers find your business on Google
                                  Maps and Search, enter your business address.{" "}
                                </p>
                              </Col>
                              <Col md={3} lg={3}>
                                <NavLink
                                  to="/business-setup"
                                  className={`btn ${st.editIcon}`}
                                >
                                  <MdModeEditOutline />
                                </NavLink>
                              </Col>
                            </Row>
                          </Col>

                          <Col md={12} lg={9} xl={10}>
                            <div className={`${cx.uploadData}`}>
                              <ul className={`${cx.addedSocial}`}>
                                <li>
                                  <span>Location </span>
                                  <strong className="pb-1">Ukraine , Kyiv region , Kyiv</strong>
                                </li>
                                <li>
                                  <NavLink to="#">
                                    <span></span>
                                    <div style={{marginBottom:"-8px"}}>
                                      <span className={`${cx.iconBox}`}>
                                        <MdLocationPin
                                          className={`${st.icon}`}
                                        />
                                      </span>

                                      <strong>
                                        20 Stepana Bandery Street, 70800
                                      </strong>
                                    </div>
                                  </NavLink>
                                </li>

                                <li>
                                  <NavLink to="#">
                                    <span></span>
                                    <div>
                                      <span className={`${cx.iconBox}`}>
                                        <MdLocationPin
                                          className={`${st.icon}`}
                                        />
                                      </span>
                                      <strong>
                                        {" "}
                                        7B Pid Dubom Street, 70800
                                      </strong>
                                    </div>
                                  </NavLink>
                                </li>
                              </ul>
                            </div>
                          </Col>

                          <Col md={12} lg={9} xl={10} className="mt-1">
                            <div className={`${cx.uploadData}`}>
                              <ul>
                                <li>
                                  <span>Landmark </span>
                                  <strong>Opposite the black gate</strong>
                                </li>
                              </ul>
                            </div>
                          </Col>

                          <Col lg={12}>
                            <Form.Group className={`${st.formField}`}>
                              <Form.Label></Form.Label>
                              <Form.Group>
                                <iframe
                                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14235.034115134027!2d75.74877740000001!3d26.879411949999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1674475075983!5m2!1sen!2sin"
                                  width="100%"
                                  height="250"
                                  style={{
                                    border: "0",
                                    borderRadius: "4px",
                                  }}
                                  loading="lazy"
                                ></iframe>
                              </Form.Group>
                            </Form.Group>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="tabId2">
                        <Row>
                          <Col lg={12} className={`${st.tabTitle}`}>
                            <Row>
                              <Col md={9} lg={9}>
                                <h5>Links</h5>
                                <p>Share more information about you</p>
                              </Col>
                              <Col md={3} lg={3}>
                                <NavLink
                                  to="/business-setup"
                                  className={`btn ${st.editIcon}`}
                                >
                                  <MdModeEditOutline />
                                </NavLink>
                              </Col>
                            </Row>
                          </Col>
                          <Col lg={12}>
                            <ul className={`${cx.addedSocial}`}>
                              <li>
                                <NavLink to="#">
                                  <span className={`${cx.iconBox}`}>
                                    <AiOutlineGlobal className={`${st.icon}`} />
                                  </span>
                                  <div className={`${cx.body}`}>
                                    {" "}
                                    https://green-forest.com
                                  </div>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#">
                                  <span className={`${cx.iconBox}`}>
                                    <AiFillInstagram className={`${st.icon}`} />
                                  </span>
                                  <div className={`${cx.body}`}>
                                    {" "}
                                    https://instagram.com
                                  </div>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#">
                                  <span className={`${cx.iconBox}`}>
                                    <BsFacebook className={`${st.icon}`} />
                                  </span>
                                  <div className={`${cx.body}`}>
                                    {" "}
                                    https://facebook.com
                                  </div>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#">
                                  <span className={`${cx.iconBox}`}>
                                    <AiFillTwitterCircle
                                      className={`${st.icon}`}
                                    />
                                  </span>
                                  <div className={`${cx.body}`}>
                                    {" "}
                                    https://twitter.com
                                  </div>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#">
                                  <span className={`${cx.iconBox}`}>
                                    <BsTelegram className={`${st.icon}`} />
                                  </span>
                                  <div className={`${cx.body}`}>
                                    {" "}
                                    https://telegram.com
                                  </div>
                                </NavLink>
                              </li>
                            </ul>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="tabId3">
                        <Row>
                          <Col lg={12} className={`${st.tabTitle}`}>
                            <Row>
                              <Col md={9} lg={9}>
                                <h5>Settings</h5>
                                <p>Settings your business</p>
                              </Col>
                              <Col md={3} lg={3}>
                                <NavLink
                                  to="/business-setup"
                                  className={`btn ${st.editIcon}`}
                                >
                                  <MdModeEditOutline />
                                </NavLink>
                              </Col>
                            </Row>
                          </Col>
                          <Col md={12} lg={9} xl={10} className="mt-1">
                            <div className={`${cx.uploadData}`}>
                              <ul>
                                <li>
                                  <span>Time Zone </span>
                                  <strong>IST </strong>
                                </li>
                              </ul>
                            </div>
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
