import React, { useCallback, useState } from "react";
import st from "../../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Branch.module.scss";
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
import branch from "../../../images/icon-branch.svg";
import BranchDataGrid from "./BranchDataGrid";
import DemoInfo from "../../../components/DemoInfo/DemoInfo";
import SetupMenu from "../../../components/Sidebar/SetupMenu";

export default function Branch() {
  return (
    <>
      <section className={`${st.pageWrapper} ${st.pageWrapperOpen}`}>
        <SetupMenu />
        <div className={`${st.pageTitle}`}>
          <Row>
            <Col md={6} lg={6}>
                <div className={`${st.titleInfo}`}>
                    <img src={branch} className={`${st.icon}`} />    
                    <div className={`${st.titleInfoBody}`}>
                      <h5>Branch</h5>
                      <p>Add main info about your business</p>
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

        {/* Data Note Found First
          <Col lg={12} className={`${st.dataNotFound}`}>
              <span><img src={branch} /></span>
              <p>You haven’t branch yet <br />Create your first branch</p>
              <NavLink to="/add-branch" className={`btn ${st.setupBtn}`}>Add New Branch</NavLink> 
          </Col> */ }

        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body>
              <Row className={`${tb.tableAction}`}>
                <Col lg={12}>
                  <div className="d-flex">
                    <NavLink to="/add-branch" className={`btn ${tb.addBtn}`}>
                      <img src={branch} className={`${tb.icon}`} />  
                      Add New Branch
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
                <BranchDataGrid />
              </div>
              
            </Card.Body>
          </Card>
        </div>
      </section>
    </>
  );
}
