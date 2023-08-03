import React, { useCallback, useState } from "react";
import st from "../../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import tb from "../../../datatable.module.scss";
import { Card, Row, Col, Form, Button, Tab, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { AiFillCamera } from "react-icons/ai";

// --------- Images --------- //

import KlassBookSetupMenu from "../../../components/Sidebar/KlassbookSetupMenu";

import ksetup from "../../../images/icon-k-setup.svg";

import uploadFile from "../../../images/iconUpload.svg";
import demoimg from "../../../images/demo-img.jpg";
import CreateAlbumM from "../../../components/Modals/CreateAlbumM";

export default function Gallery() {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section className={`${st.pageWrapper} ${st.pageWrapperOpen}`}>
        <KlassBookSetupMenu />
        <div className={`${st.pageTitle}`}>
          <Row>
            <Col md={8} lg={8}>
              <div className={`${st.titleInfo}`}>
                <img src={ksetup} className={`${st.icon}`} />
                <div className={`${st.titleInfoBody}`}>
                  <h5>Klassbook Set Up</h5>
                  <p>Gallery</p>
                </div>
              </div>
            </Col>
            <Col md={4} lg={4} className="d-flex justify-content-end p-0">
              <Row className={`${tb.tableAction} `}>
                <Col lg={12} className="text-end">
                  <div className="d-flex">
                    <NavLink
                      to="#"
                      className={`btn ${tb.addBtn}`}
                      onClick={handleShow}
                    >
                      <AiFillCamera className={`${tb.icon}`} />
                      Create album
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
              <Row>
                <Col
                  lg={12}
                  md={12}
                  className={`${st.tabTitle} align-items-center mb-4`}
                >
                  <ul
                    className={`${st.tabbingMenu} d-flex justify-content-center`}
                  >
                    <li>
                      <button className={`${st.active}`}>All</button>
                    </li>
                    <li>
                      <button>Marketplace</button>
                    </li>
                    <li>
                      <button>Teacher</button>
                    </li>
                    <li>
                      <button>Events/Camps</button>
                    </li>
                  </ul>
                </Col>

                <Col md={4} lg={2}>
                  <div className={`${st.uploadForm}  mb-3`}>
                    <div className={`${st.fileUpload} `} >
                      <input type="file" />
                      <img src={uploadFile} className={`${st.icon}`} />
                    </div>
                    <Form.Label>
                      Upload Photo<span className="text-danger">*</span>
                    </Form.Label>
                  </div>
                </Col>
                <Col md={4} lg={2}>
                  <div className={`${st.uploadForm}  mb-3`}>
                    <div className={`${st.fileUpload}`} >
                      <img src={demoimg} className={`${st.icon}`} />
                    </div>
                    <Form.Label>One of the events</Form.Label>
                  </div>
                </Col>
                <Col md={4} lg={2}>
                  <div className={`${st.uploadForm}  mb-3`}>
                    <div className={`${st.fileUpload}`} >
                      <img src={demoimg} className={`${st.icon}`} />
                    </div>
                    <Form.Label>One of the events</Form.Label>
                  </div>
                </Col>
                <Col md={4} lg={2}>
                  <div className={`${st.uploadForm}  mb-3`}>
                    <div className={`${st.fileUpload}`} >
                      <img src={demoimg} className={`${st.icon}`} />
                    </div>
                    <Form.Label>One of the events</Form.Label>
                  </div>
                </Col>
                <Col md={4} lg={2}>
                  <div className={`${st.uploadForm}  mb-3`}>
                    <div className={`${st.fileUpload}`} >
                      <img src={demoimg} className={`${st.icon}`} />
                    </div>
                    <Form.Label>One of the events</Form.Label>
                  </div>
                </Col>
                <Col md={4} lg={2}>
                  <div className={`${st.uploadForm}  mb-3`}>
                    <div className={`${st.fileUpload}`} >
                      <img src={demoimg} className={`${st.icon}`} />
                    </div>
                    <Form.Label>One of the events</Form.Label>
                  </div>
                </Col>
               
               
              </Row>
            </Card.Body>
          </Card>
        </div>
      </section>
      <CreateAlbumM show={show} handleClose={handleClose} />
    </>
  );
}
