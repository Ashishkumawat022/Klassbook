import React, { useCallback, useState } from "react";
import st from "../../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Receipt.module.scss";
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
import collected from "../../../images/collected-icon.svg";
import invoiceOne from "../../../images/invocie-box-icon-one.svg";
import grfline from "../../../images/grf-line.svg";

import DemoInfo from "../../../components/DemoInfo/DemoInfo";
import AdmissionMenu from "../../../components/Sidebar/AdmissionMenu";
import receipt from "../../../images/icon-receipt.svg";
import ReceiptDataGrid from "./ReceiptDataGrid";

export default function Receipt() {
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
                      <p>All Receipt</p>
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
                  MTD
                  </div>
                  <div className={`${cx.invoicedAmount}`}>
                    <span>Total collection </span>
                    <h5>5,000$<span>December</span> </h5>
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
                  YTD
                  </div>
                  <div className={`${cx.invoicedAmount}`}>
                    <span>Total collection</span>
                    <h5>5,000$<span>last year </span> </h5>
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
                      <img src={receipt} className={`${tb.icon}`} />  
                      Add Receipt
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
                <ReceiptDataGrid/>
              </div>
              
            </Card.Body>
          </Card>
        </div>
      </section>
    </>
  );
}
