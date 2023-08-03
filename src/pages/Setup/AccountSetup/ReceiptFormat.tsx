import React, { useCallback, useState } from "react";
import st from "../../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./AccountSetup.module.scss";
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

import { MdLocationPin } from "react-icons/md";

import business from "../../../images/icon-business.svg";
import uploadFile from "../../../images/iconUpload.svg";
import DemoInfo from "../../../components/DemoInfo/DemoInfo";
import PhoneNumber from "../../../components/Phonenumber/Phonenumber";
import SetupMenu from "../../../components/Sidebar/SetupMenu";

import accounts from "../../../images/icon-accounts.svg";

import Checkbox from "../../../components/Forms/Checkbox";

export default function ReceiptFormat() {
  return (
    <>
      <section className={`${st.pageWrapper} ${st.pageWrapperOpen}`}>
        <SetupMenu />
        <div className={`${st.pageTitle}`}>
          <Row>
            <Col md={6} lg={6}>
              <div className={`${st.titleInfo}`}>
                <img src={accounts} className={`${st.icon}`} />
                <div className={`${st.titleInfoBody}`}>
                  <h5>Accounts Set Up</h5>
                  <p>Receipt Format</p>
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
                        Add Logo<span className="text-danger">*</span>
                      </Form.Label>
                    </div>
                  </Col>

                  <Col md={12} lg={9} xl={10}>
                    <Row>
                      <Col lg={6} md={6}>
                        <Form.Group className={`${st.formField}`}>
                          <Form.Label>Biz Name</Form.Label>
                          <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                      </Col>
                      <Col lg={6} md={6}>
                        <Form.Group className={`${st.formField}`}>
                          <Form.Label>Receipt No Prefix</Form.Label>
                          <Form.Select aria-label="Default select example">
                            <option>Prefix</option>
                          </Form.Select>
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

                          <PhoneNumber />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div className={`${st.contentBox}`}>
                <Row>
                  <Col lg={12} md={12}>
                    <Row>
                      <Col md={6} lg={3}>
                        <Form.Group className={`${st.formField}`}>
                          <Form.Label>Country <span className="text-danger">*</span></Form.Label>
                          <Form.Control type="text" placeholder="Country" />
                        </Form.Group>
                      </Col>
                      <Col md={6} lg={3}>
                        <Form.Group className={`${st.formField}`}>
                          <Form.Label>State <span className="text-danger">*</span></Form.Label>
                          <Form.Control type="text" placeholder="State" />
                        </Form.Group>
                      </Col>
                      <Col md={6} lg={3}>
                        <Form.Group className={`${st.formField}`}>
                          <Form.Label>City <span className="text-danger">*</span></Form.Label>
                          <Form.Control type="text" placeholder="City" />
                        </Form.Group>
                      </Col>
                      <Col md={6} lg={3}>
                        <Form.Group className={`${st.formField}`}>
                          <Form.Label>Postal Code <span className="text-danger">*</span></Form.Label>
                          <Form.Control type="text" placeholder="Postal Code" />
                        </Form.Group>
                      </Col>

                      <Col lg={12}>
                        <Form.Group className={`${st.formField}`}>
                          <Form.Label>Address 1 <span className="text-danger">*</span></Form.Label>
                          <InputGroup>
                            <MdLocationPin className={`${st.icon}`} />
                            <Form.Control type="text" placeholder="Address 1" />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div className={`${st.contentBox}`}>
                <Row>
                  <Col lg={12}>
                    <Form.Group className={`${st.formField}`}>
                      <Form.Label>Descripton</Form.Label>
                      <Form.Control
                        as={"textarea"}
                        type="text"
                        rows={10}
                        cols={40}
                        style={{ height: "100px" }}
                        placeholder="Text for footer notes "
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={3} className="mt-2">
                    <Form.Group className={`${st.formField}`}>
                      <div className={`${cx.formFieldcheckbox}`}>
                        <label className={`${st.checkbox}`}>
                          <Checkbox />
                          Print footer notes on Receipt
                        </label>
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
              </div>
              <div>
                <Row>
                <Col lg={12} className={`${st.formField} text-end`}>
                  <Form.Label className={`${st.labelHide}`}>.</Form.Label>
                  <Button className={`${st.btnDisabled}`}>Save</Button>
                </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>
    </>
  );
}
