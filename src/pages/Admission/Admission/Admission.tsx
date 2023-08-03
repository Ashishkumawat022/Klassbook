import React, { useCallback, useState } from "react";
import st from "../../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Admission.module.scss";
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
import newAdmission from "../../../images/newAdmission.svg";

import DemoInfo from "../../../components/DemoInfo/DemoInfo";
import AdmissionMenu from "../../../components/Sidebar/AdmissionMenu";
import ActiveAdmission from "./ActiveAdmission";
import EnrollNewStudentM from "../../../components/Modals/EnrollNewStudentM";

export default function Admission() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                      <p>Admission</p>
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
              <Row className={`${tb.tableAction}`}>
                <Col lg={12}>
                  <div className="d-flex">
                    <NavLink to="#" className={`btn ${tb.addBtn}`} onClick={handleShow}>
                      <img src={newAdmission} className={`${tb.icon}`} />  
                      New Admission
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
                <ActiveAdmission />
              </div>
              
            </Card.Body>
          </Card>
        </div>
      </section>

      
      <EnrollNewStudentM show={show} handleClose={handleClose} /> 
    </>
  );
}
