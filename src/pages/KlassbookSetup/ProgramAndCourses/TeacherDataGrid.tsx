import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import tb from "../../../datatable.module.scss";
import { NavLink } from "react-router-dom";
import { MdClose, MdEdit } from "react-icons/md";
import { AiFillCamera, AiFillDelete, AiOutlineCamera } from "react-icons/ai";
import Checkbox from "../../../components/Forms/Checkbox";
import st from "../../../style.module.scss";

import m from "../../../modal.module.scss";
import {  Row,
  Col,
  Form,
  Modal,
  Button,} from "react-bootstrap";

import uploadFile from "../../../images/iconUpload.svg";
import { useState } from "react";

const StatusButton = (props: any) => {
 
  const [showTeacher, setTeacherShow] = useState(false);
  const handleTeacherClose = () => setTeacherShow(false);
  const handleTeacherShow = () => setTeacherShow(true);
  let { params } = props;
  return (
    <>
    <div>
      <ul className={`${tb.actionTable}`}>
        <li>
          <NavLink className={`btn ${tb.edit}`} title="Edit" to="#" onClick={handleTeacherShow}>
            <MdEdit />
          </NavLink>
        </li>
       
      </ul>
    </div>

    
    <Modal
        show={showTeacher}
        className={`${m.modalCts} ${m.modalSizeLg} `}
        centered
        onHide={handleTeacherClose}
      >
        <Modal.Body>
          <button
            className={`${m.closeIcon}`}
            title="Close"
            onClick={handleTeacherClose}
          >
            <MdClose />
          </button>
          <Col lg={12} className={`${m.title}`}>
            <h5>Add Teacher</h5>
          </Col>
          <Row>
            <Col md={4} lg={3}>
              <div className={`${st.uploadForm} me-3 mb-3`}>
                <div className={`${st.fileUpload}`}>
                  <input type="file" />
                  <img src={uploadFile} className={`${st.icon}`} />
                </div>
                <Form.Label>
                  Upload Photo<span className="text-danger">*</span>
                </Form.Label>
              </div>
            </Col>

            <Col md={12} lg={9}>
              <Row>
                <Col md={12} lg={12}>
                  <Form.Group className={`${st.formField}`}>
                    <Form.Label>Teacher Name</Form.Label>
                    <Form.Control type="text" placeholder="Teacher" />
                  </Form.Group>
                </Col>
                <Col md={12} lg={12}>
                  <Form.Group className={`${st.formField}`}>
                    <Form.Label>About Teacher</Form.Label>
                    <Form.Control type="text" placeholder="Description" />
                  </Form.Group>
                </Col>
              </Row>
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
};

const AssignedBranch = (props: any) => {
  let { params } = props;
  return (
    <div>
      <ul className={`${tb.actionTable} `}>
        <li>
          <Form.Group className={`${st.formField} m-0`} style={{width:"160px"}}>
            <Form.Select>
              <option>Assigned branch</option>
            </Form.Select>
          </Form.Group>
        </li>
      </ul>
    </div>
  );
};
const AddImage = (props: any) => {
  let { params } = props;
  return (
    <div>
      <ul className={`${tb.actionTable}`}>
        <li className="position-relative">
          <div>
            <input
              type="file"
              style={{
                position: "absolute",
                left: "0px",
                width: "100%",
                height: "100%",
                opacity: "0",
              }}
            />
            <AiOutlineCamera className="mx-2"/>
            <label>Add Image</label>
          </div>
        </li>
      </ul>
    </div>
  );
};

const columns = [
  { field: "id", headerName: "Sr No", flex: 1, minWidth: 60 },
  {
    field: "addimage",
    headerName: " Add Image ",
    flex: 1,
    minWidth: 160,
    renderCell: (params: any) => <AddImage params={params} />,
  },
  { field: "teachername", headerName: "Teacher Name", flex: 1, minWidth: 60 },
  {
    field: "aboutteacher",
    headerName: "About Teacher",
    flex: 1,
    minWidth: 120,
  },
  {
    field: " assignedbranch",
    headerName: " Assigned Branch",
    flex: 1,
    minWidth: 260,
    renderCell: (params: any) => <AssignedBranch params={params} />,
  },
  {
    field: "publishinklassbook",
    headerName: "Publish in Klassbook",
    flex: 1,
    minWidth: 120,
    renderCell: (params: any) => (
      <label className={`${st.checkbox}`} style={{ marginTop: "-22px" }}>
        <Checkbox />
      </label>
    ),
  },
  {
    field: "edit",
    headerName: "Edit",
    flex: 1,
    minWidth: 100,
    renderCell: (params: any) => <StatusButton params={params} />,
  },
];

const row = [
  {
    id: 1,
    addimage: "img",
    teachername: "Computer architecture",
    aboutteacher:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    assignedbranch: "11-B",
    publishinklassbook: "test",
    edit: "anys",
  },
  {
    id: 1,
    addimage: "img",
    teachername: "Computer architecture",
    aboutteacher:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    assignedbranch: "11-B",
    publishinklassbook: "test",
    edit: "anys",
  },
  {
    id: 1,
    addimage: "img",
    teachername: "Computer architecture",
    aboutteacher:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    assignedbranch: "11-B",
    publishinklassbook: "test",
    edit: "anys",
  },
  {
    id: 1,
    addimage: "img",
    teachername: "Computer architecture",
    aboutteacher:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    assignedbranch: "11-B",
    publishinklassbook: "test",
    edit: "anys",
  },
  {
    id: 1,
    addimage: "img",
    teachername: "Computer architecture",
    aboutteacher:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    assignedbranch: "11-B",
    publishinklassbook: "test",
    edit: "anys",
  },
  {
    id: 1,
    addimage: "img",
    teachername: "Computer architecture",
    aboutteacher:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    assignedbranch: "11-B",
    publishinklassbook: "test",
    edit: "anys",
  },
  {
    id: 1,
    addimage: "img",
    teachername: "Computer architecture",
    aboutteacher:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    assignedbranch: "11-B",
    publishinklassbook: "test",
    edit: "anys",
  },
  {
    id: 1,
    addimage: "img",
    teachername: "Computer architecture",
    aboutteacher:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    assignedbranch: "11-B",
    publishinklassbook: "test",
    edit: "anys",
  },
];

export default function TeacherDataGrid() {
  const navigate = useNavigate();
  const handleRowClick = (params: any) => {
    navigate(`#`);
  };

  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        columns={columns}
        rows={row}
        onRowClick={handleRowClick}
        autoHeight
        hideFooterPagination={true}
        rowHeight={48}
        headerHeight={48}
        checkboxSelection
        disableSelectionOnClick
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
    </div>
  );
}



