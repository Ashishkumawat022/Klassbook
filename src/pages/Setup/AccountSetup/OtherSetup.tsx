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
  Modal,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

import {
  MdClose,
  MdEdit,
  MdLocationPin,
  MdModeEditOutline,
  MdOutlineCheck,
  MdPayment,
} from "react-icons/md";

import m from "../../../modal.module.scss";

import tb from "../../../datatable.module.scss";
import {  HiReceiptTax } from "react-icons/hi";

import branch from "../../../images/icon-branch.svg";
import SetupMenu from "../../../components/Sidebar/SetupMenu";

import accounts from "../../../images/icon-accounts.svg";

import {
  AiFillDollarCircle,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import PaymentModeDataGrid from "./PaymentModeDataGrid";
import CurrencyDataGrid from "./CurrencyDataTable";
import TaxDataGrid from "./TaxDataGrid";
import FeeTypeDataGrid from "./FeeTypeDataGrid";
import OnOff from "../../../components/Forms/OnOff";

export default function OtherSetup() {
  const [showBranch, setShowBranch] = useState(false);
  const handleCloseBranch = () => setShowBranch(false);
  const handleShowBranch = () => setShowBranch(true);

  const [showPayment, setShowPayment] = useState(false);
  const handleClosePayment = () => setShowPayment(false);
  const handleShowPayment = () => setShowPayment(true);

  const [showTax, setShowTax] = useState(false);
  const handleCloseTax = () => setShowTax(false);
  const handleShowTax = () => setShowTax(true);

  const [showFee, setShowFee] = useState(false);
  const handleCloseFee = () => setShowFee(false);
  const handleShowFee = () => setShowFee(true);
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
                <ul className={`${st.actionTop}`}>
                  <li>
                    <NavLink className={`btn ${st.info}`} to="#">
                      <MdModeEditOutline />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={`btn ${st.info}`} to="#">
                      <AiOutlineInfoCircle />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={`btn`} to="#">
                      Demo
                    </NavLink>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>

        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body>
              <div>
                <Row>
                  <Col lg={12} md={12}>
                    <div className={`${st.tabbingList}`}>
                      <Tab.Container
                        id="left-tabs-example"
                        defaultActiveKey="tabId1"
                      >
                        <Row className="align-items-center">
                          <Col lg={12} md={12} className="text-center">
                            <Nav
                              variant="pills"
                              className={`${cx.studentTabbar}`}
                            >
                              <Nav.Item className={`${cx.tabbaritem}`}>
                                <Nav.Link
                                  eventKey="tabId1"
                                  className={`${cx.tabbarlink}`}
                                >
                                  Payment Mode
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item className={`${cx.tabbaritem}`}>
                                <Nav.Link
                                  eventKey="tabId2"
                                  className={`${cx.tabbarlink}`}
                                >
                                  Tax
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item className={`${cx.tabbaritem}`}>
                                <Nav.Link
                                  eventKey="tabId3"
                                  className={`${cx.tabbarlink}`}
                                >
                                  Currency
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item className={`${cx.tabbaritem}`}>
                                <Nav.Link
                                  eventKey="tabId4"
                                  className={`${cx.tabbarlink}`}
                                >
                                  Fees Type
                                </Nav.Link>
                              </Nav.Item>
                            </Nav>
                          </Col>
                        </Row>

                        <div className={`border-0 mt-2`}>
                          <Tab.Content>
                            <Tab.Pane eventKey="tabId1">
                              <Row>
                                <div className={`${tb.dataTable}`}>
                                  <div
                                    className={`${tb.tableAction} ${cx.tabpositionbtn} text-end`}
                                  >
                                    <NavLink
                                      to="#"
                                      className={`btn ${tb.addBtn}`}
                                      onClick={handleShowPayment}
                                    >
                                      <MdPayment className={`${tb.icon}`} />
                                      Add Payment Mode
                                    </NavLink>
                                  </div>
                                  <PaymentModeDataGrid />
                                </div>
                              </Row>
                            </Tab.Pane>

                            <Tab.Pane eventKey="tabId2">
                              <Row>
                                <div className={`${tb.dataTable}`}>
                                  <div
                                    className={`${tb.tableAction} ${cx.tabpositionbtn} text-end`}
                                  >
                                    <NavLink
                                      to="#"
                                      className={`btn ${tb.addBtn}`}
                                      onClick={handleShowTax}
                                    >
                                      <HiReceiptTax className={`${tb.icon}`} />
                                      Add Tax
                                    </NavLink>
                                  </div>
                                  <TaxDataGrid />
                                </div>
                              </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="tabId3">
                              <Row>
                                <div className={`${tb.dataTable}`}>
                                  <div
                                    className={`${tb.tableAction} ${cx.tabpositionbtn} text-end`}
                                  >
                                    <NavLink
                                      to="#"
                                      className={`btn ${tb.addBtn}`}
                                      onClick={handleShowBranch}
                                    >
                                      <img
                                        src={branch}
                                        className={`${tb.icon}`}
                                      />
                                      Add Branch
                                    </NavLink>
                                  </div>

                                  <CurrencyDataGrid />
                                </div>
                              </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="tabId4">
                              <Row>
                                <div className={`${tb.dataTable}`}>
                                  <div
                                    className={`${tb.tableAction} ${cx.tabpositionbtn} text-end`}
                                  >
                                    <NavLink
                                      to="#"
                                      className={`btn ${tb.addBtn}`}
                                      onClick={handleShowFee}
                                    >
                                      <AiFillDollarCircle
                                        className={`${tb.icon}`}
                                      />
                                      Fee Type
                                    </NavLink>
                                  </div>

                                  <FeeTypeDataGrid />
                                </div>
                              </Row>
                            </Tab.Pane>
                          </Tab.Content>
                        </div>
                      </Tab.Container>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>

      {/* Add Branch */}
      <Modal
        show={showBranch}
        className={`${m.modalCts}  `}
        centered
        onHide={handleCloseBranch}
      >
        <Modal.Body>
          <button
            className={`${m.closeIcon}`}
            title="Close"
            onClick={handleCloseBranch}
          >
            <MdClose />
          </button>
          <Col lg={12} className={`${m.title}`}>
            <h5>Add Branch</h5>
          </Col>
          <Row>
            <Col md={12} lg={12}>
              <Form.Group className={`${st.formField}`}>
                <Form.Label>Branch</Form.Label>
                <Form.Select>
                  <option> Select Branch</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={12} lg={12}>
              <Form.Group className={`${st.formField}`}>
                <Form.Label>Currency</Form.Label>
                <Form.Select>
                  <option> Select Currency</option>
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

      {/* Add Payment Mode */}
      <Modal
        show={showPayment}
        className={`${m.modalCts}  `}
        centered
        onHide={handleClosePayment}
      >
        <Modal.Body>
          <button
            className={`${m.closeIcon}`}
            title="Close"
            onClick={handleClosePayment}
          >
            <MdClose />
          </button>
          <Col lg={12} className={`${m.title}`}>
            <h5>Payment Mode</h5>
          </Col>
          <Row>
            <Col md={12} lg={12}>
              <Form.Group className={`${st.formField}`}>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
            </Col>
            <Col md={12} lg={12}>
              <Form.Group className={`${st.formField}`}>
                <Form.Label>Payment</Form.Label>
                <Form.Select>
                  <option> Select Type </option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col lg={12} md={12} className={`${st.formField} text-end`}>
              <Form.Label className={`${st.labelHide}`}>.</Form.Label>
              <Button className={`${st.btnDisabled}`}>Add Payment Mode</Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      {/* Add Tax */}
      <Modal
        show={showTax}
        className={`${m.modalCts}  `}
        centered
        onHide={handleCloseTax}
      >
        <Modal.Body>
          <button
            className={`${m.closeIcon}`}
            title="Close"
            onClick={handleCloseTax}
          >
            <MdClose />
          </button>
          <Col lg={12} className={`${m.title}`}>
            <h5>Tax </h5>
          </Col>
          <Row>
            <Col md={6} lg={6}>
              <Form.Group className={`${st.formField}`}>
                <Form.Label>Full Tax Name</Form.Label>
                <Form.Control type="text" placeholder="Tax Name" />
              </Form.Group>
            </Col>
            <Col md={6} lg={6}>
              <Form.Group className={`${st.formField}`}>
                <Form.Label>Short Tax Name</Form.Label>
                <Form.Control type="text" placeholder="Tax Name" />
              </Form.Group>
            </Col>
            <Col md={12} lg={12}>
              <Form.Group className={`${st.formField}`}>
                <Form.Label>Rate</Form.Label>
                <Form.Control type="number" placeholder="rate  %" />
              </Form.Group>
            </Col>
            <Col md={12} lg={12}>
              <div className="d-flex align-items-center">
                <div>
                  <h5>Make default</h5>
                  <p className="m-0">
                    This tax will be added to all invoices by default
                  </p>
                </div>
                <div className="mx-4">
                  <label className={`${st.onoff}`}>
                    <OnOff />
                  </label>
                </div>
              </div>
            </Col>
            <Col lg={12} md={12} className={`${st.formField} text-end`}>
              <Form.Label className={`${st.labelHide}`}>.</Form.Label>
              <Button className={`${st.btnDisabled}`}>Add Tax</Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      {/* Fee Type */}
      <Modal
        show={showFee}
        className={`${m.modalCts}  `}
        centered
        onHide={handleCloseFee}
      >
        <Modal.Body>
          <button
            className={`${m.closeIcon}`}
            title="Close"
            onClick={handleCloseFee}
          >
            <MdClose />
          </button>
          <Col lg={12} className={`${m.title}`}>
            <h5>Fees Recd Against </h5>
          </Col>
          <Row>
            <Col md={9} lg={9}>
              <Form.Group className={`${st.formField}`}>
                <Form.Label>Fees Recd Against</Form.Label>
                <Form.Control type="text" placeholder="Fees Recd Against" />
              </Form.Group>
            </Col>

            <Col lg={3} md={3} className={`${st.formField} text-end`}>
              <Form.Label className={`${st.labelHide}`}>.</Form.Label>
              <Button className={`${st.btnDisabled}`}>Add</Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
