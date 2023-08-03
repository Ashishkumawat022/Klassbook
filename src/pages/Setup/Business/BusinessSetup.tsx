import React, { useCallback, useState } from "react";
import st from "../../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Business.module.scss";
import { Card, Row, Col, Form,Button,Tab,Nav,InputGroup  } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { AiOutlineInfoCircle,AiOutlineGlobal,AiFillInstagram,AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook,BsTelegram } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';

// --------- Images --------- //
import business from "../../../images/icon-business.svg";
import uploadFile from "../../../images/iconUpload.svg";
import DemoInfo from "../../../components/DemoInfo/DemoInfo";
import PhoneNumber from "../../../components/Phonenumber/Phonenumber";
import SetupMenu from "../../../components/Sidebar/SetupMenu";


export default function BusinessSetup() {


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
                <DemoInfo />
              </div>
            </Col>
          </Row>
        </div>


        <div className={`${st.pageWrapperInside}`}>
          
          {/* Data Note Found First 
          <Col lg={12} className={`${st.dataNotFound}`}>
              <span><img src={business} /></span>
              <p>Add your first business</p>
              <NavLink to="#" className={`btn ${st.setupBtn}`}>Business Set Up</NavLink> 
          </Col>*/}

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
                      <Form.Label>Add Logo<span className="text-danger">*</span></Form.Label>
                   </div>
                </Col>

                <Col md={12} lg={9} xl={10}>
                  <Row>
                  <Col lg={6}>
                    <Form.Group className={`${st.formField}`}>
                      <Form.Label>Name<span className="text-danger">*</span></Form.Label>
                      <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group className={`${st.formField}`}>
                      <Form.Label>Contact Person Name<span className="text-danger">*</span></Form.Label>
                      <Form.Control type="text" placeholder="Contact Person Name" />
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <Form.Group className={`${st.formField}`}>
                      <Form.Label>Business Category<span className="text-danger">*</span></Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Select Category</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <Form.Group className={`${st.formField}`}>
                      <Form.Label>Email<span className="text-danger">*</span></Form.Label>
                      <Form.Control type="email" placeholder="Contact Person Name" />
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <Form.Group className={`${st.formField}`}>
                      <Form.Label>Phone No<span className="text-danger">*</span></Form.Label>
                      {/* <Form.Control type="number" placeholder="+380 00 00 00 000" /> */}
                      <PhoneNumber />
                    </Form.Group>
                  </Col>

                  <Col lg={12} className="text-end mt-2">
                    <Button className={`${st.btnDisabled}`}>Save</Button>
                  </Col>
                  </Row>
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
                               <h5>Address Details</h5>
                               <p>To help customers find your business on Google Maps and Search, enter your business address. </p>
                            </Col>
                            <Col md={6} lg={3}>
                              <Form.Group className={`${st.formField}`}>
                                <Form.Label>Country<span className="text-danger">*</span></Form.Label>
                                <Form.Control type="text" placeholder="Country" />
                              </Form.Group>
                            </Col>
                            <Col md={6} lg={3}>
                              <Form.Group className={`${st.formField}`}>
                                <Form.Label>State<span className="text-danger">*</span></Form.Label>
                                <Form.Control type="text" placeholder="State" />
                              </Form.Group>
                            </Col>
                            <Col md={6} lg={3}>
                              <Form.Group className={`${st.formField}`}>
                                <Form.Label>City<span className="text-danger">*</span></Form.Label>
                                <Form.Control type="text" placeholder="City" />
                              </Form.Group>
                            </Col>
                            <Col md={6} lg={3}>
                              <Form.Group className={`${st.formField}`}>
                                <Form.Label>Postal Code<span className="text-danger">*</span></Form.Label>
                                <Form.Control type="text" placeholder="Postal Code" />
                              </Form.Group>
                            </Col>


                            <Col lg={6}>
                              <Form.Group className={`${st.formField}`}>
                                <Form.Label>Address 1<span className="text-danger">*</span></Form.Label>
                                <InputGroup>
                                  <MdLocationPin className={`${st.icon}`} />
                                  <Form.Control type="text" placeholder="Address 1" />
                                </InputGroup>
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group className={`${st.formField}`}>
                                <Form.Label>Address 2<span className="text-danger">*</span></Form.Label>
                                <InputGroup>
                                  <MdLocationPin className={`${st.icon}`} />
                                  <Form.Control type="text" placeholder="Address 2" />
                                </InputGroup>
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group className={`${st.formField}`}>
                                <Form.Label>Landmark</Form.Label>
                                <Form.Control type="text" placeholder="Landmark" />
                              </Form.Group>
                            </Col>
                            
                            <Col lg={6} className={`${st.formField} text-end`}> 
                               <Form.Label className={`${st.labelHide}`}>.</Form.Label>
                               <Button className={`${st.btnDisabled}`}>Save</Button>
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="tabId2">
                          <Row>
                            <Col lg={12} className={`${st.tabTitle}`}>
                               <h5>Links</h5>
                               <p>Share more information about you</p>
                            </Col>
                            <Col lg={6}>
                              <Form.Group className={`${st.formField}`}>
                                <Form.Label>Website<span className="text-danger">*</span></Form.Label>
                                <InputGroup>
                                  <AiOutlineGlobal className={`${st.icon}`} />
                                  <Form.Control type="text" placeholder="Website" />
                                </InputGroup>
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group className={`${st.formField}`}>
                                <Form.Label>Instagram<span className="text-danger">*</span></Form.Label>
                                <InputGroup>
                                  <AiFillInstagram className={`${st.icon}`} />
                                  <Form.Control type="text" placeholder="Instagram" />
                                </InputGroup>
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group className={`${st.formField}`}>
                                <Form.Label>Facebook<span className="text-danger">*</span></Form.Label>
                                <InputGroup>
                                  <BsFacebook className={`${st.icon}`} />
                                  <Form.Control type="text" placeholder="Facebook" />
                                </InputGroup>
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group className={`${st.formField}`}>
                                <Form.Label>Twitter<span className="text-danger">*</span></Form.Label>
                                <InputGroup>
                                  <AiFillTwitterCircle className={`${st.icon}`} />
                                  <Form.Control type="text" placeholder="Twitter" />
                                </InputGroup>
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group className={`${st.formField}`}>
                                <Form.Label>Telegram<span className="text-danger">*</span></Form.Label>
                                <InputGroup>
                                  <BsTelegram className={`${st.icon}`} />
                                  <Form.Control type="text" placeholder="Twitter" />
                                </InputGroup>
                              </Form.Group>
                            </Col>
                            <Col lg={6} className={`${st.formField} text-end`}> 
                               <Form.Label className={`${st.labelHide}`}>.</Form.Label>
                               <Button className={`${st.btnDisabled}`}>Save</Button>
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="tabId3">
                          <Row>
                            <Col lg={12} className={`${st.tabTitle}`}>
                               <h5>Settings</h5>
                               <p>Settings your business</p>
                            </Col>
                            <Col lg={6}>
                              <Form.Group className={`${st.formField}`}>
                                <Form.Label>Website<span className="text-danger">*</span></Form.Label>
                                <InputGroup>
                                  <AiOutlineGlobal className={`${st.icon}`} />
                                  <Form.Select aria-label="Default select example">
                                    <option>Time Zone</option>
                                  </Form.Select>
                                </InputGroup>
                              </Form.Group>
                            </Col>
                            <Col lg={6} className={`${st.formField} text-end`}> 
                               <Form.Label className={`${st.labelHide}`}>.</Form.Label>
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
