import * as React from "react";
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";
import tb from "../../../datatable.module.scss";
import { NavLink } from "react-router-dom";
import {MdClose, MdEdit} from "react-icons/md";
import {AiFillDelete} from "react-icons/ai";
import st from "../../../style.module.scss";
import {
    Card, Row, Col, Form, Button, Tab, Nav, Modal,
} from "react-bootstrap";
import { useState } from "react";
import m from "../../../modal.module.scss";
const StatusButton = (props:any) => {
   
  const [showFee, setShowFee] = useState(false);
  const handleCloseFee = () => setShowFee(false);
  const handleShowFee = () => setShowFee(true);
  let { params } = props;
  return (
    <>
    <div>
      <ul className={`${tb.actionTable}`}>
        <li>
          <NavLink className={`btn ${tb.edit}`} title="Edit" to="#" onClick={handleShowFee} >
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

    
      {/* Fee Type */}
      <Modal
        show={showFee}
        className={`${m.modalCts}  `}
        centered
        onHide={handleCloseFee}
      >
        <Modal.Body>
          <button
            className={`${m.closeIcon}`}
            title="Close"
            onClick={handleCloseFee}
          >
            <MdClose />
          </button>
          <Col lg={12} className={`${m.title}`}>
            <h5>Fees Recd Against </h5>
          </Col>
          <Row>
            <Col md={9} lg={9}>
              <Form.Group className={`${st.formField}`}>
                <Form.Label>Fees Recd Against</Form.Label>
                <Form.Control type="text" placeholder="Fees Recd Against" />
              </Form.Group>
            </Col>

            <Col lg={3} md={3} className={`${st.formField} text-end`}>
              <Form.Label className={`${st.labelHide}`}>.</Form.Label>
              <Button className={`${st.btnDisabled}`}>Add</Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
         
        
</>
  );
};

const columns = [
  { field: "id", headerName: " No",flex:1,minWidth:80,},
  { field: "feetype",headerName: "Fee Type",flex:1, minWidth:560 , },
  { field: "action",headerName: "",flex:1, minWidth:300,renderCell: (params:any) => <StatusButton params={params} />,},
];

const row = [
  {
    id:1,
   feetype:" Lorem ipsum dolor sit amet, consectetur adipiscing",
   action:"test"
  },
  {
    id:1,
   feetype:" Lorem ipsum dolor sit amet, consectetur adipiscing",
   action:"test"
  },
  {
    id:1,
   feetype:" Lorem ipsum dolor sit amet, consectetur adipiscing",
   action:"test"
  },
  {
    id:1,
   feetype:" Lorem ipsum dolor sit amet, consectetur adipiscing",
   action:"test"
  },
  {
    id:1,
   feetype:" Lorem ipsum dolor sit amet, consectetur adipiscing",
   action:"test"
  },
  {
    id:1,
   feetype:" Lorem ipsum dolor sit amet, consectetur adipiscing",
   action:"test"
  },
  {
    id:1,
   feetype:" Lorem ipsum dolor sit amet, consectetur adipiscing",
   action:"test"
  },



 
]

export default function FeeTypeDataGrid() {
  const navigate = useNavigate();
  const handleRowClick = (params:any) => {
    // navigate(`#`);
  };

  return (
    <>
    <div style={{ width: '100%' }}>
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

