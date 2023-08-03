import React, { useCallback, useState } from "react";
import st from "../../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Invoice.module.scss";
import tb from "../../../datatable.module.scss";
import {
  Card,
  Row,
  Col,Form
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

import {AiOutlineInfoCircle,AiFillDelete} from "react-icons/ai";
import {FiUpload,FiDownload} from "react-icons/fi";

// --------- Images --------- //
import admission from "../../../images/icon-team.svg";
import invoice from "../../../images/icon-invoice.svg";
import collected from "../../../images/collected-icon.svg";
import dueIcon from "../../../images/due-icon.svg";
import newAdmission from "../../../images/newAdmission.svg";
import invoiceOne from "../../../images/invocie-box-icon-one.svg";
import grfline from "../../../images/grf-line.svg";

import DemoInfo from "../../../components/DemoInfo/DemoInfo";
import AdmissionMenu from "../../../components/Sidebar/AdmissionMenu";
import ActiveInvoice from "./ActiveInvoice";

export default function Invoice() {
  return (
    <>
      <section className={`${st.pageWrapper} ${st.pageWrapperOpen}`}>
        <AdmissionMenu />
        <div className={`${st.pageTitle}`}>
          <Row>
            <Col md={6} lg={6}>
                <div className={`${st.titleInfo}`}>
                    <img src={admission} className={`${st.icon}`} />    
                    <div className={`${st.titleInfoBody}`}>
                      <h5>Admission</h5>
                      <p>All Invoices</p>
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

        <div className={`${cx.invoiceBox}`}>
          <Row>
            <Col md={6} lg={4}>
              <div className={`${cx.boxCard}`}>
                  <div className={`${cx.cardBg}`}>
                    <img src={invoiceOne} className={`${cx.icon}`} /> 
                  </div>
                  <div className={`${cx.invoicedAmount}`}>
                    <span>Invoiced <b>5</b></span>
                    <h5>50,000.00 <span>from 7,500.00</span> </h5>
                  </div>
                  <div className={`${cx.grfBox}`}>
                    <div className={`${cx.grfPoint}`}>
                      <img src={grfline} />
                      <span>3,15%</span>
                    </div>
                  </div>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className={`${cx.boxCard}`}>
                  <div className={`${cx.cardBg}`}>
                    <img src={collected} className={`${cx.icon}`} /> 
                  </div>
                  <div className={`${cx.invoicedAmount}`}>
                    <span>Collected </span>
                    <h5>0.00 <span>from 7,500.00</span> </h5>
                  </div>
                  <div className={`${cx.grfBox}`}>
                    <div className={`${cx.grfPoint}`}>
                      <img src={grfline} />
                      <span>-100%</span>
                    </div>
                  </div>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className={`${cx.boxCard}`}>
                  <div className={`${cx.cardBg}`}>
                    <img src={dueIcon} className={`${cx.icon}`} /> 
                  </div>
                  <div className={`${cx.invoicedAmount}`}>
                    <span>Due <b>5</b></span>
                    <h5>50,000.00 <span>from 0.00</span> </h5>
                  </div>
                  <div className={`${cx.grfBox}`}>
                    <div className={`${cx.grfPoint}`}>
                      <img src={grfline} />
                      <span>3,15%</span>
                    </div>
                  </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body>
              <Row className={`${tb.tableAction}`}>
                <Col lg={12}>
                  <div className="d-flex">
                    <NavLink to="#" className={`btn ${tb.addBtn}`}>
                      <img src={newAdmission} className={`${tb.icon}`} />  
                      Add Invoice
                    </NavLink>
                    <button className={`btn ${tb.upload}`}>
                      <FiUpload className={`${tb.icon}`} />  
                      Upload CSV
                      <input type="file" />
                    </button>
                    <button className={`btn ${tb.upload}`}>
                      <AiFillDelete className={`${tb.icon} m-0`} />
                    </button>
                  </div>
                </Col>
              </Row>
              <div className={`${tb.dataTable}`}>
                <ActiveInvoice />
              </div>
              
            </Card.Body>
          </Card>
        </div>
      </section>
    </>
  );
}
