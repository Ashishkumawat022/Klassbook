import React, { useCallback, useState } from "react";
import st from "../../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./BranchAndLocation.module.scss";
import tb from "../../../datatable.module.scss";
import { Card, Row, Col, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { AiOutlineWhatsApp } from "react-icons/ai";

import branch from "../../../images/icon-branch.svg";

// --------- Images --------- //

import KlassBookSetupMenu from "../../../components/Sidebar/KlassbookSetupMenu";

import ksetup from "../../../images/icon-k-setup.svg";
import { TbMessageCircle2 } from "react-icons/tb";
import {
  MdDelete,
  MdLocalPhone,
  MdLocationPin,
  MdModeEditOutline,
  MdVideocam,
} from "react-icons/md";
import Checkbox from "../../../components/Forms/Checkbox";

export default function BranchAndLocationDetails() {
  return (
    <>
      <section className={`${st.pageWrapper} ${st.pageWrapperOpen}`}>
        <KlassBookSetupMenu />
        <div className={`${st.pageTitle}`}>
          <Row>
            <Col md={4} lg={8}>
              <div className={`${st.titleInfo}`}>
                <img src={ksetup} className={`${st.icon}`} />
                <div className={`${st.titleInfoBody}`}>
                  <h5>Klassbook Set Up</h5>
                  <p>Branch & Location</p>
                </div>
              </div>
            </Col>
            <Col md={8} lg={4} className="d-flex justify-content-end p-0">
              <Row className={`${tb.tableAction} `}>
                <Col lg={12} className="text-end">
                  <div className="d-flex">
                    <NavLink to="#" className={`btn ${tb.addBtn}`}>
                      <img src={branch} className={`${tb.icon}`} />
                      Add Branch/Location
                    </NavLink>
                    <NavLink to="#" className={`btn ${tb.addBtn}`}>
                      <MdVideocam className={`${tb.icon}`} />
                      Preview
                    </NavLink>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body>
              <div className={`${st.contentBox}`}>
                <Row>
                  <Col lg={8} className={`${st.tabTitle}`}>
                    <Row>
                      <Col md={12} lg={12}>
                        <h5>Address Branch Name: e.g. Green Forest</h5>
                        <p>Sr No #001122</p>
                      </Col>
                      <Col md={12} lg={12}>
                        <div className={`${cx.uploadData}`}>
                          <ul>
                            <li>
                              <span>Location Type </span>
                              <strong>online</strong>
                            </li>
                          </ul>
                        </div>
                      </Col>

                      <Col md={12} lg={12}>
                        <div className={`${cx.uploadData}`}>
                          <ul className={`${cx.addedSocial}`}>
                            <li>
                              <span>Location </span>
                              <strong className="pb-1">
                                Ukraine , Kyiv region , Kyiv
                              </strong>
                            </li>
                            <li>
                              <NavLink to="#">
                                <span></span>
                                <div style={{ marginBottom: "-8px" }}>
                                  <span className={`${cx.iconBox}`}>
                                    <MdLocationPin className={`${st.icon}`} />
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
                                    <MdLocationPin className={`${st.icon}`} />
                                  </span>
                                  <strong> 7B Pid Dubom Street, 70800</strong>
                                </div>
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </Col>

                      <Col md={12} lg={12}>
                        <div className={`${cx.uploadData}`}>
                          <ul>
                            <li>
                              <span>Landmark </span>
                              <strong>Opposite the black gate</strong>
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </Col>

                  <Col lg={4} className={`${st.tabTitle}`}>
                    <Row>
                      <Col md={9} lg={8}>
                        <h5>Shynkarchyn Chrystyna</h5>
                      </Col>
                      <Col md={2} lg={2}>
                        <NavLink to="#" className={`btn ${st.editIcon}`}>
                          <MdModeEditOutline />
                        </NavLink>
                      </Col>
                      <Col md={1} lg={2}>
                        <NavLink to="#" className={`btn ${st.editIcon}`}>
                          <MdDelete />
                        </NavLink>
                      </Col>

                      <Col md={12} lg={12} xl={12}>
                        <div className={`${cx.uploadData}`}>
                          <ul className={`${cx.addedSocial}`}>
                            <li>
                              <NavLink to="#">
                                <div>
                                  <span className={`${cx.iconBox}`}>
                                    <TbMessageCircle2
                                      className={`${st.icon}`}
                                    />
                                  </span>

                                  <strong>test-email@gmail.com</strong>
                                </div>
                              </NavLink>
                            </li>

                            <li>
                              <NavLink to="#">
                                <div>
                                  <span className={`${cx.iconBox}`}>
                                    <MdLocalPhone className={`${st.icon}`} />
                                  </span>
                                  <strong>+380 96 10 00 999</strong>
                                </div>
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="#">
                                <div>
                                  <span className={`${cx.iconBox}`}>
                                    <AiOutlineWhatsApp
                                      className={`${st.icon}`}
                                    />
                                  </span>
                                  <strong>+380 96 75 10 200</strong>
                                </div>
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </Col>

                  <Col md={12} lg={12} className="mt-2">
                    <Form.Group className={`${st.formField}`}>
                      <div className={`${cx.formFieldcheckbox}`}>
                        <label className={`${st.checkbox}`}>
                          <Checkbox />
                          Publish in Klassbook
                        </label>
                      </div>
                    </Form.Group>
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
