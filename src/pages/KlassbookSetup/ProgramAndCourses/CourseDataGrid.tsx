import * as React  from "react";
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";
import tb from "../../../datatable.module.scss";
import { NavLink } from "react-router-dom";
import {MdClose, MdEdit} from "react-icons/md";
import {AiFillDelete} from "react-icons/ai";
import Checkbox from "../../../components/Forms/Checkbox";
import st from "../../../style.module.scss";
import m from "../../../modal.module.scss";
import {  Card,
    Row,
    Col,
    Form,
    Modal,
    Button,
    Tab,
    Nav,
    InputGroup,} from "react-bootstrap";
import { useState } from "react";

const StatusButton = (props:any) => {
  const [showCourse, setCourseShow] = useState(false);
  const handleCourseClose = () => setCourseShow(false);
  const handleCourseShow = () => setCourseShow(true);

  let { params } = props;
  return (
    <>
    <div>
      <ul className={`${tb.actionTable}`}>
        <li>
          <NavLink className={`btn ${tb.edit}`} title="Edit" to="#" onClick={handleCourseShow}>
            <MdEdit />
          </NavLink>
        </li>
      
      </ul>
    </div>
   
{/*  add Course M */}
<Modal   
show={showCourse}
className={`${m.modalCts} ${m.modalSizeLg}`}

centered  onHide={handleCourseClose}>

<Modal.Body>
      <button
        className={`${m.closeIcon}`}
        title="Close"
        onClick={handleCourseClose}
      >
        <MdClose />
      </button>
      <Col lg={12} className={`${m.title}`}>
        <h5>Computer architecture</h5>
      </Col>
      <Row>
        <Col md={12} lg={12}>
              <Form.Group className={`${st.formField}`}>
                <Form.Label>
                About Course
                </Form.Label>
                <Form.Control as={"textarea"} type="text" rows={10} cols={40} style={{height:"200px"}} placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est necessitatibus iusto voluptatem accusamus, nemo esse! A, enim atque! Voluptates cumque corporis, neque optio nam cum tempora alias quia animi mollitia. Ipsum doloremque modi at consectetur voluptate. Deleniti, quisquam enim. " />
              </Form.Group>
        </Col>
        <Col
                  lg={12}
                  md={12}
                  className={`${st.formField} text-center`}
                >
                  <Form.Label className={`${st.labelHide}`}>.</Form.Label>
                  <Button className={`${st.btnDisabled}`}>Save</Button>
                </Col>
      </Row>
    </Modal.Body>
</Modal>
     </>
  );
};






const AssignedBranch= (props:any) => {
  let { params } = props;
  return (
    <div>
      <ul className={`${tb.actionTable}`}>
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



const columns = [
  { field: "id", headerName: "Sr No",flex:1,minWidth:60,},
  { field: "coursename",headerName: "Course Name",flex:1, minWidth:60,},
  { field: "aboutcourse",headerName: "About Course",flex:1,minWidth:120,},
  
  { field: " assignedbranch",headerName: " Assigned Branch",flex:1, minWidth:260,renderCell: (params:any) => <AssignedBranch params={params} />,},
  { field: "publishinklassbook",headerName: "Publish in Klassbook",flex:1, minWidth:120,renderCell: (params:any) =>  <label className={`${st.checkbox}`} style={{marginTop:"-22px"}}><Checkbox/></label>,},
  { field: "edit",headerName: "Edit",flex:1, minWidth:100,renderCell: (params:any) => <StatusButton params={params} />,},
];

const row = [
  {
    id:1,
    coursename:"Computer architecture",
    aboutcourse:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    assignedbranch:"11-B",
    publishinklassbook:"test",
    edit:"anys"
  },
  {
    id:1,
    coursename:"Computer architecture",
    aboutcourse:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    assignedbranch:"11-B",
    publishinklassbook:"test",
    edit:"anys"
  },
  {
    id:1,
    coursename:"Computer architecture",
    aboutcourse:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    assignedbranch:"11-B",
    publishinklassbook:"test",
    edit:"anys"
  },
  {
    id:1,
    coursename:"Computer architecture",
    aboutcourse:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    assignedbranch:"11-B",
    publishinklassbook:"test",
    edit:"anys"
  },
  {
    id:1,
    coursename:"Computer architecture",
    aboutcourse:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    assignedbranch:"11-B",
    publishinklassbook:"test",
    edit:"anys"
  },
  {
    id:1,
    coursename:"Computer architecture",
    aboutcourse:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    assignedbranch:"11-B",
    publishinklassbook:"test",
    edit:"anys"
  },
  
  
 
]

export default function CourseDataGrid() {
  const navigate = useNavigate();
  const handleRowClick = (params:any) => {
    navigate(`#`);
  };

  return (
    <div style={{ width: '100%' }}>
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



    
 