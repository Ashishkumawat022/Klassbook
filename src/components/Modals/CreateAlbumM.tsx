import React from "react";
import m from "../../modal.module.scss";
import st from "../../style.module.scss";


import uploadFile from "../../images/iconUpload.svg";
import {
  Card,
  Row,
  Col,
  Form,
  Modal,
  Button,
  Tab,
  Nav,
  InputGroup,
} from "react-bootstrap";
import { MdClose } from "react-icons/md";

import demoimg from "../../images/demo-img.jpg"

const CreateAlbumM = (props: any) => {
  let { show, handleClose } = props;
  return (
    <>
      <Modal
        centered
        show={show}
        onHide={handleClose}
        className={`${m.modalCts} ${m.modalSizeLg} `}
      >
        <Modal.Body>
          <button
            className={`${m.closeIcon}`}
            title="Close"
            onClick={handleClose}
          >
            <MdClose />
          </button>
          <Col lg={12} className={`${m.title}`}>
            <h5>Album</h5>
          </Col>
          <Row>
            <Col md={12} lg={12}>
              <Row>
                <Col lg={12} md={12}>
                  <Form.Group className={`${st.formField}`}>
                    <Form.Label>
                    Album Name
                    </Form.Label>
                   <Form.Control type="text" placeholder="Album Name "/>
                  </Form.Group>
                </Col>
                <Col lg={12} md={12}>
                  <Form.Group className={`${st.formField}`}>
                    <Form.Label>
                    Assign Branches
                    </Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Select Branch</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col lg={12} md={12}>
                    <Row>
                    <Col md={4} lg={3}>
                    <div className={`${st.uploadForm} mb-3`}>
                      <div className={`${st.fileUpload}`}>
                        <input type="file" />
                        <img src={uploadFile} className={`${st.icon}`} />
                      </div>
                      <Form.Label>
                        Upload Photo<span className="text-danger">*</span>
                      </Form.Label>
                    </div>
                  </Col>
                  <Col md={4} lg={3}>
                    <div className={`${st.uploadForm} mb-3`}>
                      <div className={`${st.fileUpload}`}>
                       
                        <img src={demoimg} className={`${st.icon}`} />
                      </div>
                      <Form.Label>
                      {/* One of the events */}
                      </Form.Label>
                    </div>
                  </Col>
                    </Row>
                </Col>

                

             
                <Col lg={12} md={12} className="text-center">
                 
                      <Button className={`${st.btnDisabled}`}>
                      Add to Gallery
                      </Button>
                    </Col>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateAlbumM;
