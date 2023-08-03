import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import tb from "../../../datatable.module.scss";
import { NavLink } from "react-router-dom";
import { MdClose, MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import st from "../../../style.module.scss";
import { Card, Row, Col, Form, Button, Tab, Nav, Modal } from "react-bootstrap";
import OnOff from "../../../components/Forms/OnOff";
import { useState } from "react";

import m from "../../../modal.module.scss";

const StatusButton = (props: any) => {
  
  const [showTax, setShowTax] = useState(false);
  const handleCloseTax = () => setShowTax(false);
  const handleShowTax = () => setShowTax(true);
  let { params } = props;
  return (
    <>
      <div>
        <ul className={`${tb.actionTable}`}>
          <li>
            <NavLink className={`btn ${tb.edit}`} title="Edit" to="#" onClick={handleShowTax}>
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

        {/* Add Tax */}
        <Modal
        show={showTax}
        className={`${m.modalCts}  `}
        centered
        onHide={handleCloseTax}
      >
        <Modal.Body>
          <button
            className={`${m.closeIcon}`}
            title="Close"
            onClick={handleCloseTax}
          >
            <MdClose />
          </button>
          <Col lg={12} className={`${m.title}`}>
            <h5>Tax </h5>
          </Col>
          <Row>
            <Col md={6} lg={6}>
              <Form.Group className={`${st.formField}`}>
                <Form.Label>Full Tax Name</Form.Label>
                <Form.Control type="text" placeholder="Tax Name" />
              </Form.Group>
            </Col>
            <Col md={6} lg={6}>
              <Form.Group className={`${st.formField}`}>
                <Form.Label>Short Tax Name</Form.Label>
                <Form.Control type="text" placeholder="Tax Name" />
              </Form.Group>
            </Col>
            <Col md={12} lg={12}>
              <Form.Group className={`${st.formField}`}>
                <Form.Label>Rate</Form.Label>
                <Form.Control type="number" placeholder="rate  %" />
              </Form.Group>
            </Col>
            <Col md={12} lg={12}>
              <div className="d-flex align-items-center">
                <div>
                  <h5>Make default</h5>
                  <p className="m-0">
                    This tax will be added to all invoices by default
                  </p>
                </div>
                <div className="mx-4">
                  <label className={`${st.onoff}`}>
                    <OnOff />
                  </label>
                </div>
              </div>
            </Col>
            <Col lg={12} md={12} className={`${st.formField} text-end`}>
              <Form.Label className={`${st.labelHide}`}>.</Form.Label>
              <Button className={`${st.btnDisabled}`}>Add Tax</Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

const Makedefault = (props: any) => {
  let { params } = props;
  return (
    <>
      <div>
        <ul className={`${tb.actionTable}`}>
          <li>
            <label className={`${st.onoff}`}>
              <OnOff />
            </label>
          </li>
        </ul>
      </div>
    </>
  );
};

const columns = [
  { field: "id", headerName: "No", flex: 1, minWidth: 60 },
  { field: "taxname", headerName: "Full Tax Name", flex: 2, minWidth: 260 },
  { field: "shortname", headerName: "Short Name", flex: 1, minWidth: 220 },
  { field: "rate", headerName: "Rate", flex: 1, minWidth: 220 },
  {
    field: "makedefault",
    headerName: "Make Default",
    flex: 1,
    minWidth: 100,
    renderCell: (params: any) => <Makedefault params={params} />,
  },
  {
    field: "action",
    headerName: "",
    flex: 1,
    minWidth: 100,
    renderCell: (params: any) => <StatusButton params={params} />,
  },
];

const row = [
  {
    id: 1,
    taxname: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    shortname: "Anna Petrova",
    rate: "5%",
    makedefault: "...",
    action: "test",
  },
  {
    id: 1,
    taxname: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    shortname: "Anna Petrova",
    rate: "5%",
    makedefault: "...",
    action: "test",
  },
  {
    id: 1,
    taxname: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    shortname: "Anna Petrova",
    rate: "5%",
    makedefault: "...",
    action: "test",
  },
  {
    id: 1,
    taxname: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    shortname: "Anna Petrova",
    rate: "5%",
    makedefault: "...",
    action: "test",
  },
  {
    id: 1,
    taxname: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    shortname: "Anna Petrova",
    rate: "5%",
    makedefault: "...",
    action: "test",
  },
  {
    id: 1,
    taxname: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    shortname: "Anna Petrova",
    rate: "5%",
    makedefault: "...",
    action: "test",
  },
  {
    id: 1,
    taxname: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    shortname: "Anna Petrova",
    rate: "5%",
    makedefault: "...",
    action: "test",
  },
];

export default function TaxDataGrid() {
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
