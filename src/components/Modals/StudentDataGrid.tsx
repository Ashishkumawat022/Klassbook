import * as React from "react";
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";
import tb from "../../datatable.module.scss";
import { NavLink } from "react-router-dom";
import {MdEdit} from "react-icons/md";
import {AiFillDelete} from "react-icons/ai";

const StatusButton = (props:any) => {
  let { params } = props;
  return (
    <div>
      <ul className={`${tb.actionTable}`}>
        <li>
          <NavLink className={`btn ${tb.edit}`} title="Edit" to="#">
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
  );
};

const columns = [
  { field: "id", headerName: "Sr. No.",flex:1,minWidth:80,},
  { field: "studentID",headerName: "Student ID",flex:1, minWidth:80,},
  { field: "studentName",headerName: "Student Name",flex:1,minWidth:220,},
  { field: "studentBatch",headerName: "Student Batch",flex:1,minWidth:200,},
  { field: "phoneNo",headerName: "Phone No",flex:1,minWidth:150,},
  { field: "email",headerName: "Email",flex:1,minWidth:180,},
 ];

const row = [
  {
    id:1,
    studentID:"1",
    studentName:"Kovalyshyn Marina Andriivna ",
    studentBatch:"Student Batch First",
    phoneNo:"+380 96 66 10 978",
    email:"test-email@gmail.com",
  },
  {
    id:2,
    studentID:"2",
    studentName:"Kovalyshyn Marina Andriivna ",
    studentBatch:"Student Batch First",
    phoneNo:"+380 96 66 10 978",
    email:"test-email@gmail.com",
  },
  {
    id:3,
    studentID:"3",
    studentName:"Kovalyshyn Marina Andriivna ",
    studentBatch:"Student Batch First",
    phoneNo:"+380 96 66 10 978",
    email:"test-email@gmail.com",
  },
  {
    id:4,
    studentID:"4",
    studentName:"Kovalyshyn Marina Andriivna ",
    studentBatch:"Student Batch First",
    phoneNo:"+380 96 66 10 978",
    email:"test-email@gmail.com",
  },
  {
    id:5,
    studentID:"5",
    studentName:"Kovalyshyn Marina Andriivna ",
    studentBatch:"Student Batch First",
    phoneNo:"+380 96 66 10 978",
    email:"test-email@gmail.com",
  },
  {
    id:6,
    studentID:"6",
    studentName:"Kovalyshyn Marina Andriivna ",
    studentBatch:"Student Batch First",
    phoneNo:"+380 96 66 10 978",
    email:"test-email@gmail.com",
  },
  {
    id:7,
    studentID:"7",
    studentName:"Kovalyshyn Marina Andriivna ",
    studentBatch:"Student Batch First",
    phoneNo:"+380 96 66 10 978",
    email:"test-email@gmail.com",
  },
  {
    id:8,
    studentID:"8",
    studentName:"Kovalyshyn Marina Andriivna ",
    studentBatch:"Student Batch First",
    phoneNo:"+380 96 66 10 978",
    email:"test-email@gmail.com",
  },
 
  
]


export default function StudentDataGrid() {
  const navigate = useNavigate();
  const handleRowClick = (params:any) => {
    //navigate(`/admin/clientsdetails/${params.row._id}`);
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

