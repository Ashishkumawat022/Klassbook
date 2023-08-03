import React, { useCallback, useState } from "react";
import st from "../../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./BranchAndLocation.module.scss";
import tb from "../../../datatable.module.scss";
import {
  Card,
  Row,
  Col,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

import {AiFillDelete} from "react-icons/ai";
import {FiUpload,} from "react-icons/fi";

import branch from "../../../images/icon-branch.svg";


// --------- Images --------- //
import DemoInfo from "../../../components/DemoInfo/DemoInfo";

import KlassBookSetupMenu from "../../../components/Sidebar/KlassbookSetupMenu";

import ksetup from "../../../images/icon-k-setup.svg";
import BranchLocationDataGrid from "./BranchLocationDataGrid";
import AddBranchM from "../../../components/Modals/AddBranchM";

export default function BranchAndLocation() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <section className={`${st.pageWrapper} ${st.pageWrapperOpen}`}>
        <KlassBookSetupMenu/>
        <div className={`${st.pageTitle}`}>
          <Row>
            <Col md={6} lg={6}>
                <div className={`${st.titleInfo}`}>
                    <img src={ksetup} className={`${st.icon}`} />    
                    <div className={`${st.titleInfoBody}`}>
                           <h5>Klassbook Set Up</h5>
                      <p>Branch & Location</p>
                    </div>
                </div>  
            </Col>
            <Col md={6} lg={6}>
              <DemoInfo />
            </Col>
          </Row>
        </div>


        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body>
              <Row className={`${tb.tableAction}`}>
                <Col lg={12}>
                  <div className="d-flex">
                    <NavLink to="#" className={`btn ${tb.addBtn}`}  onClick={handleShow}>
                      <img src={branch} className={`${tb.icon}`} />  
                      Add Branch/Location
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
                <BranchLocationDataGrid/>
              </div>
              
            </Card.Body>
          </Card>
        </div>
      </section>
      
      <AddBranchM show={show} handleClose={handleClose}/>
      
    </>
  );
}
