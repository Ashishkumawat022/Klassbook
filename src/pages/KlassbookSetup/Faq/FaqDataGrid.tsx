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
    const [showFaq, setShowFaq] = useState(false);
    const handleCloseFaq = () => setShowFaq(false);
    const handleShowFaq = () => setShowFaq(true);
  let { params } = props;
  return (
    <>
    <div>
      <ul className={`${tb.actionTable}`}>
        <li>
          <NavLink className={`btn ${tb.edit}`} title="Edit" to="#" onClick={handleShowFaq}>
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
         
         {/* Edit Model */}
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
};

const columns = [
  { field: "id", headerName: "Sr No",flex:1,minWidth:60,},
  { field: "question",headerName: "Question",flex:2, minWidth:260 , },
  { field: "answer",headerName: "Answer",flex:1,minWidth:220,},
  { field: "action",headerName: "Action",flex:1, minWidth:100,renderCell: (params:any) => <StatusButton params={params} />,},
];

const row = [
  {
    id:1,
   question:"Lorem ipsum dolor sit amet consectetur adipisicing elit  olor sit amet consectetur adipisicing elit olor sit amet consectetur adipisicing elit olor sit amet consectetur adipisicing elit ",
   answer:"Ad quasi vitae obcaecati in molestiae, reprehenderit",
   action:"test"
  },
  {
    id:2,
   question:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
   answer:"Ad quasi vitae obcaecati in molestiae, reprehenderit",
   action:"test"
  },
  {
    id:3,
   question:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
   answer:"Ad quasi vitae obcaecati in molestiae, reprehenderit",
   action:"test"
  },
  {
    id:4,
   question:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
   answer:"Ad quasi vitae obcaecati in molestiae, reprehenderit",
   action:"test"
  },
  {
    id:5,
   question:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
   answer:"Ad quasi vitae obcaecati in molestiae, reprehenderit",
   action:"test"
  },
  {
    id:6,
   question:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
   answer:"Ad quasi vitae obcaecati in molestiae, reprehenderit",
   action:"test"
  },
  {
    id:7,
   question:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
   answer:"Ad quasi vitae obcaecati in molestiae, reprehenderit",
   action:"test"
  },
  {
    id:8,
   question:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
   answer:"Ad quasi vitae obcaecati in molestiae, reprehenderit",
   action:"test"
  },


 
]

export default function FaqDataGrid() {
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

