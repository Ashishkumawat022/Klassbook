import * as React from "react";
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import tb from "../../../datatable.module.scss";
import { NavLink } from "react-router-dom";
import {MdClose, MdEdit} from "react-icons/md";
import {AiFillDelete} from "react-icons/ai";
import Checkbox from "../../../components/Forms/Checkbox";
import st from "../../../style.module.scss";
import {  Row,
  Col,
  Form,
  Modal,
  Button,} from "react-bootstrap";
import { useState } from "react";


const StatusButton = (props:any) => {

  const [showSubject, setSubjectShow] = useState(false);
  const handleSubjectClose = () => setSubjectShow(false);
  const handleSubjecteShow = () => setSubjectShow(true);
  let { params } = props;
  return (
    <>
    <div>
      <ul className={`${tb.actionTable}`}>
        <li>
          <NavLink className={`btn ${tb.edit}`} title="Edit" to="#" 
          // onClick={handleShow}
          >
            <MdEdit />
          </NavLink>
        </li>
       
      </ul>
    </div>  
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
  { field: "subjectname",headerName: "Subject Name",flex:1, minWidth:80,},
  { field: "desription",headerName: "Desription",flex:1,minWidth:160,},
  
  { field: " assignedbranch",headerName: " Assigned Branch",flex:1, minWidth:260,renderCell: (params:any) => <AssignedBranch params={params} />,},
  { field: "publishinklassbook",headerName: "Publish in Klassbook",flex:1, minWidth:120,renderCell: (params:any) =>  <label className={`${st.checkbox}`} style={{marginTop:"-22px"}}><Checkbox/></label>,},
  
];

const row = [
  {
    id:1,
    subjectname:"Computer architecture",
    desription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    assignedbranch:"11-B",
    publishinklassbook:"test",
   
  },
  {
    id:1,
    subjectname:"Computer architecture",
    desription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    assignedbranch:"11-B",
    publishinklassbook:"test",
   
  },
  {
    id:1,
    subjectname:"Computer architecture",
    desription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    assignedbranch:"11-B",
    publishinklassbook:"test",
   
  },
  {
    id:1,
    subjectname:"Computer architecture",
    desription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    assignedbranch:"11-B",
    publishinklassbook:"test",
   
  },
  {
    id:1,
    subjectname:"Computer architecture",
    desription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    assignedbranch:"11-B",
    publishinklassbook:"test",
   
  },
  {
    id:1,
    subjectname:"Computer architecture",
    desription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    assignedbranch:"11-B",
    publishinklassbook:"test",
   
  },
  {
    id:1,
    subjectname:"Computer architecture",
    desription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    assignedbranch:"11-B",
    publishinklassbook:"test",
   
  },
  {
    id:1,
    subjectname:"Computer architecture",
    desription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    assignedbranch:"11-B",
    publishinklassbook:"test",
   
  },
  
  
 
]

export default function SubjectDataGrid() {
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





