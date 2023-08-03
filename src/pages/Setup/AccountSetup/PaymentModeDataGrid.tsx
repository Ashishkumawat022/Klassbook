import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import tb from "../../../datatable.module.scss";
import { NavLink } from "react-router-dom";
import { MdClose, MdEdit } from "react-icons/md";
import { AiFillCreditCard, AiFillDelete } from "react-icons/ai";
import st from "../../../style.module.scss";
import { Card, Row, Col, Form, Button, Tab, Nav, Modal } from "react-bootstrap";
import { useState } from "react";


import m from "../../../modal.module.scss";
const StatusButton = (props: any) => {
  
 
  const [showPayment, setShowPayment] = useState(false);
  const handleClosePayment = () => setShowPayment(false);
  const handleShowPayment = () => setShowPayment(true);
  let { params } = props;
  return (
    <>
      <div>
        <ul className={`${tb.actionTable}`}>
          <li>
            <NavLink className={`btn ${tb.edit}`} title="Edit" to="#" onClick={handleShowPayment}>
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

      
      {/* Add Payment Mode */}
      <Modal
        show={showPayment}
        className={`${m.modalCts}  `}
        centered
        onHide={handleClosePayment}
      >
        <Modal.Body>
          <button
            className={`${m.closeIcon}`}
            title="Close"
            onClick={handleClosePayment}
          >
            <MdClose />
          </button>
          <Col lg={12} className={`${m.title}`}>
            <h5>Payment Mode</h5>
          </Col>
          <Row>
            <Col md={12} lg={12}>
              <Form.Group className={`${st.formField}`}>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
            </Col>
            <Col md={12} lg={12}>
              <Form.Group className={`${st.formField}`}>
                <Form.Label>Payment</Form.Label>
                <Form.Select>
                  <option> Select Type </option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col lg={12} md={12} className={`${st.formField} text-end`}>
              <Form.Label className={`${st.labelHide}`}>.</Form.Label>
              <Button className={`${st.btnDisabled}`}>Add Payment Mode</Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

const Mode = (props: any) => {
  let { params } = props;
  return (
    <div>
      <ul className={`${tb.actionTable}`}>
        <li>
          <AiFillCreditCard className="mx-2" />
          <label>Credit/Debit Card</label>
        </li>
      </ul>
    </div>
  );
};

const columns = [
  { field: "id", headerName: " No", flex: 1, minWidth: 60 },
  {
    field: "mode",
    headerName: "Mode",
    flex: 2,
    minWidth: 150,
    renderCell: (params: any) => <Mode params={params} />,
  },
  { field: "nameofusers", headerName: "Name of Users", flex: 1, minWidth: 180 },
  { field: "number", headerName: "Number", flex: 1, minWidth: 180 },
  { field: "expiredate", headerName: "Expire Date", flex: 1, minWidth: 150 },
  { field: "cvc", headerName: "CVC", flex: 1, minWidth: 120 },
  { field: "email", headerName: "Email", flex: 1, minWidth: 180 },
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
    mode: "..",
    nameofusers: "Anna Petrova",
    number: "4550 XXXX XXXX 9990",
    expiredate: "22.03.2025",
    cvc: "...",
    email: "test-email@gmail.com",
    action: "test",
  },
  {
    id: 1,
    mode: "..",
    nameofusers: "Anna Petrova",
    number: "4550 XXXX XXXX 9990",
    expiredate: "22.03.2025",
    cvc: "...",
    email: "test-email@gmail.com",
    action: "test",
  },
  {
    id: 1,
    mode: "..",
    nameofusers: "Anna Petrova",
    number: "4550 XXXX XXXX 9990",
    expiredate: "22.03.2025",
    cvc: "...",
    email: "test-email@gmail.com",
    action: "test",
  },
  {
    id: 1,
    mode: "..",
    nameofusers: "Anna Petrova",
    number: "4550 XXXX XXXX 9990",
    expiredate: "22.03.2025",
    cvc: "...",
    email: "test-email@gmail.com",
    action: "test",
  },
  {
    id: 1,
    mode: "..",
    nameofusers: "Anna Petrova",
    number: "4550 XXXX XXXX 9990",
    expiredate: "22.03.2025",
    cvc: "...",
    email: "test-email@gmail.com",
    action: "test",
  },
  {
    id: 1,
    mode: "..",
    nameofusers: "Anna Petrova",
    number: "4550 XXXX XXXX 9990",
    expiredate: "22.03.2025",
    cvc: "...",
    email: "test-email@gmail.com",
    action: "test",
  },
  {
    id: 1,
    mode: "..",
    nameofusers: "Anna Petrova",
    number: "4550 XXXX XXXX 9990",
    expiredate: "22.03.2025",
    cvc: "...",
    email: "test-email@gmail.com",
    action: "test",
  },
  {
    id: 1,
    mode: "..",
    nameofusers: "Anna Petrova",
    number: "4550 XXXX XXXX 9990",
    expiredate: "22.03.2025",
    cvc: "...",
    email: "test-email@gmail.com",
    action: "test",
  },
];

export default function PaymentModeDataGrid() {
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
