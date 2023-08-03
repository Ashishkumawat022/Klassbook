import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import tb from "../../../datatable.module.scss";
import { NavLink } from "react-router-dom";
import { MdClose, MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import st from "../../../style.module.scss";
import { Card, Row, Col, Form, Button, Tab, Nav, Modal } from "react-bootstrap";
import { useState } from "react";
import m from "../../../modal.module.scss";
const StatusButton = (props: any) => {
  const [showBranch, setShowBranch] = useState(false);
  const handleCloseBranch = () => setShowBranch(false);
  const handleShowBranch = () => setShowBranch(true);

  let { params } = props;
  return (
    <>
      <div>
        <ul className={`${tb.actionTable}`}>
          <li>
            <NavLink className={`btn ${tb.edit}`} title="Edit" to="#" onClick={handleShowBranch}>
              <MdEdit />
            </NavLink>
          </li>
          <li>
            <NavLink className={`btn ${tb.delete}`} title="Delete" to="#">
              <AiFillDelete />
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Add Branch */}
      <Modal
        show={showBranch}
        className={`${m.modalCts}  `}
        centered
        onHide={handleCloseBranch}
      >
        <Modal.Body>
          <button
            className={`${m.closeIcon}`}
            title="Close"
            onClick={handleCloseBranch}
          >
            <MdClose />
          </button>
          <Col lg={12} className={`${m.title}`}>
            <h5>Add Branch</h5>
          </Col>
          <Row>
            <Col md={12} lg={12}>
              <Form.Group className={`${st.formField}`}>
                <Form.Label>Branch</Form.Label>
                <Form.Select>
                  <option> Select Branch</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={12} lg={12}>
              <Form.Group className={`${st.formField}`}>
                <Form.Label>Currency</Form.Label>
                <Form.Select>
                  <option> Select Currency</option>
                </Form.Select>
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
};

const columns = [
  { field: "id", headerName: " Sr No", flex: 1, minWidth: 80 },
  { field: "branch", headerName: "Branch ", flex: 1, minWidth: 260 },
  { field: "currency", headerName: "Currency", flex: 1, minWidth: 260 },
  {
    field: "action",
    headerName: "",
    flex: 1,
    minWidth: 300,
    renderCell: (params: any) => <StatusButton params={params} />,
  },
];

const row = [
  {
    id: 1,
    branch: "  sit amet, consectetur adipiscing",
    currency: "Dollar",
    action: "test",
  },
  {
    id: 1,
    branch: "  sit amet, consectetur adipiscing",
    currency: "Dollar",
    action: "test",
  },
  {
    id: 1,
    branch: "  sit amet, consectetur adipiscing",
    currency: "Dollar",
    action: "test",
  },
  {
    id: 1,
    branch: "  sit amet, consectetur adipiscing",
    currency: "Dollar",
    action: "test",
  },
  {
    id: 1,
    branch: "  sit amet, consectetur adipiscing",
    currency: "Dollar",
    action: "test",
  },
  {
    id: 1,
    branch: "  sit amet, consectetur adipiscing",
    currency: "Dollar",
    action: "test",
  },
  {
    id: 1,
    branch: "  sit amet, consectetur adipiscing",
    currency: "Dollar",
    action: "test",
  },
  {
    id: 1,
    branch: "  sit amet, consectetur adipiscing",
    currency: "Dollar",
    action: "test",
  },
];

export default function CurrencyDataGrid() {
  const navigate = useNavigate();
  const handleRowClick = (params: any) => {
    // navigate(`#`);
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <DataGrid
          columns={columns}
          rows={row}
          onRowClick={handleRowClick}
          autoHeight
          hideFooterPagination={true}
          rowHeight={58}
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
    </>
  );
}
