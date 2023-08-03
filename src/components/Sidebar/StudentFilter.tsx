import React from "react";
import cx from './Sidebar.module.scss';
import { NavLink} from "react-router-dom";
import {
  Row,
  Col,Dropdown 
} from "react-bootstrap";

// --------- Images --------- //
import studentIcon from "../../images/icon-student.svg";
import { MdFilterList } from "react-icons/md";
// import MultipleSelect from "../MultipleSelect/MultipleSelect";



const StudentFilter = () => {
  return (
    <>
    <div className={`${cx.moreMenuList} ${cx.studentList}`}>
        <h5 className={`${cx.moreMenuTitle}`}>
          <div className={`${cx.menuIcon}`}>
            <img src={studentIcon} />
          </div>
          <div className={`${cx.menuName}`}>Students</div>
        </h5>
        <Row className={`${cx.filterList}`}>
          <Col className={`${cx.titleList} pe-0`} md={4}>Roll No</Col>
          <Col className={`${cx.titleList} ps-0`} md={6}>Student</Col>
          <Col className={`${cx.titleList} text-end ps-0`} md={2}>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <MdFilterList />
              </Dropdown.Toggle>

              <Dropdown.Menu>
              </Dropdown.Menu>
            </Dropdown>
           </Col>
        </Row>
        <ul>
          <li>
            <Row className="align-items-center">
              <Col md={4} className={`${cx.rollNumber}`}>B_001</Col>
              <Col md={8} className="ps-0">
                <button className={`${cx.studentName}`}>Chrystyna Galabuda</button>
              </Col>
            </Row>
          </li>
          <li>
            <Row className="align-items-center">
              <Col md={4} className={`${cx.rollNumber}`}>B_001</Col>
              <Col md={8} className="ps-0">
                <button className={`${cx.studentName}`}>Chrystyna Galabuda</button>
              </Col>
            </Row>
          </li>
          <li>
            <Row className="align-items-center">
              <Col md={4} className={`${cx.rollNumber}`}>B_001</Col>
              <Col md={8} className="ps-0">
                <button className={`${cx.studentName}`}>Chrystyna Galabuda</button>
              </Col>
            </Row>
          </li>
          <li>
            <Row className="align-items-center">
              <Col md={4} className={`${cx.rollNumber}`}>B_001</Col>
              <Col md={8} className="ps-0">
                <button className={`${cx.studentName}`}>Chrystyna Galabuda</button>
              </Col>
            </Row>
          </li>
          <li>
            <Row className="align-items-center">
              <Col md={4} className={`${cx.rollNumber}`}>B_001</Col>
              <Col md={8} className="ps-0">
                <button className={`${cx.studentName}`}>Chrystyna Galabuda</button>
              </Col>
            </Row>
          </li>
          <li>
            <Row className="align-items-center">
              <Col md={4} className={`${cx.rollNumber}`}>B_001</Col>
              <Col md={8} className="ps-0">
                <button className={`${cx.studentName}`}>Chrystyna Galabuda</button>
              </Col>
            </Row>
          </li>
          <li>
            <Row className="align-items-center">
              <Col md={4} className={`${cx.rollNumber}`}>B_001</Col>
              <Col md={8} className="ps-0">
                <button className={`${cx.studentName}`}>Chrystyna Galabuda</button>
              </Col>
            </Row>
          </li>
          <li>
            <Row className="align-items-center">
              <Col md={4} className={`${cx.rollNumber}`}>B_001</Col>
              <Col md={8} className="ps-0">
                <button className={`${cx.studentName}`}>Chrystyna Galabuda</button>
              </Col>
            </Row>
          </li>
          <li>
            <Row className="align-items-center">
              <Col md={4} className={`${cx.rollNumber}`}>B_001</Col>
              <Col md={8} className="ps-0">
                <button className={`${cx.studentName}`}>Chrystyna Galabuda</button>
              </Col>
            </Row>
          </li>
        </ul>
      </div>
    </>
  );
};

export default StudentFilter;
