import React, { useCallback, useState } from "react";
import st from "../../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import tb from "../../../datatable.module.scss";
import {
    Card, Row, Col, Form, Button, Tab, Nav, Modal,
} from "react-bootstrap";
import {  NavLink } from "react-router-dom";

import {AiFillDelete} from "react-icons/ai";
import {FiUpload,} from "react-icons/fi";

import branch from "../../../images/icon-branch.svg";

import m from "../../../modal.module.scss";


// --------- Images --------- //
import DemoInfo from "../../../components/DemoInfo/DemoInfo";

import KlassBookSetupMenu from "../../../components/Sidebar/KlassbookSetupMenu";

import ksetup from "../../../images/icon-k-setup.svg";
import FaqDataGrid from "./FaqDataGrid";
import { MdClose } from "react-icons/md";

export default function Faq() {
  const [showFaq, setShowFaq] = useState(false);
  const handleCloseFaq = () => setShowFaq(false);
  const handleShowFaq = () => setShowFaq(true);


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
                      <p>Faq</p>
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
                    <NavLink to="#" className={`btn ${tb.addBtn}`}  onClick={handleShowFaq}>
                      <img src={branch} className={`${tb.icon}`} />  
                      Add FAQ
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
                <FaqDataGrid/> 
              </div>
              
            </Card.Body>
          </Card>
        </div>
      </section>
      
    


      <Modal
        show={showFaq}showFaq
        className={`${m.modalCts} ${m.modalSizeLg} `}
        centered
        onHide={handleCloseFaq}
      >
         <Modal.Body>
          <button
            className={`${m.closeIcon}`}
            title="Close"
            onClick={handleCloseFaq}
          >
            <MdClose />
          </button>
          <Col lg={12} className={`${m.title}`}>
            <h5>Add Faq</h5>
          </Col>
          <Row>
            <Col md={12} lg={12}>
                  <Form.Group className={`${st.formField}`}>
                    <Form.Label>
                    Question
                    </Form.Label>
                   <Form.Control type="text" placeholder="Question"/>
                  </Form.Group>
                </Col>
                <Col md={12} lg={12}>
              <Form.Group className={`${st.formField}`}>
                <Form.Label>Answer</Form.Label>
                <Form.Control
                  as={"textarea"}
                  type="text"
                  rows={10}
                  cols={40}
                  style={{ height: "200px" }}
                  placeholder="answer "
                />
              </Form.Group>
            </Col>
            <Col lg={12} md={12} className={`${st.formField} text-end`}>
              <Form.Label className={`${st.labelHide}`}>.</Form.Label>
              <Button className={`${st.btnDisabled}`}>Save</Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

    
    </>
  );
}
