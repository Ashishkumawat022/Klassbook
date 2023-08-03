import React from "react";
import m from "../../modal.module.scss";
import st from "../../style.module.scss";

import cx from "./Model.module.scss";
import { NavLink } from "react-router-dom";
import {
  AiFillDelete,
  AiOutlineGlobal,
  AiOutlineInfoCircle,
} from "react-icons/ai";
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
import { MdClose, MdContentCopy, MdLocationPin } from "react-icons/md";
import Checkbox from "../Forms/Checkbox";

const EditClassM = (props: any) => {
  let { show, handleClose } = props;
  return (
    <>
      <Modal
        centered
        show={show}
        onHide={handleClose}
        className={`${m.modalCts} `}
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
            <h5>Chrystyna Galabuda </h5>
          </Col>
          <Row>
            <Col lg={12} md={12}>
              <div className="d-flex justify-content-between">
                <div>
                  <p>22.01.22, 1:55 pm</p>
                  <p>Власник авторських прав</p>
                </div>
                <div>
                  <p> Lviv, Brodiska st., 56, 70800</p>
                </div>
              </div>
            </Col>
            <Col md={12} lg={12}>
              <Form.Group className={`${st.formField}`}>
                <Form.Label>Assign New Class</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>11-B</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col lg={12}>
                <Row>
                <Form.Label>Today she/he:</Form.Label>
                <Col lg={2} md={4}>
              <Form.Group className={`${st.formField}`}>
               
                <div className={`${cx.formFieldcheckbox}`}>
                  <label className={`${st.checkbox}`}>
                    <Checkbox />
                    Present
                  </label>
                </div>
              </Form.Group>
            </Col>
            <Col lg={4} md={4}>
              <Form.Group className={`${st.formField}`}>
                <div className={`${cx.formFieldcheckbox}`}>
                  <label className={`${st.checkbox}`}>
                    <Checkbox />
                    Absent
                  </label>
                </div>
              </Form.Group>
            </Col>
                </Row>
            </Col>
         

            <Col lg={12} md={12} className="mt-2 text-end">
              <Button className={`${st.btnDisabled}`}>Ok</Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditClassM;
