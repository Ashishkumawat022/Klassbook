import * as React from "react";
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import tb from "../../../datatable.module.scss";
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
  { field: "id", headerName: "Sr No",flex:1,minWidth:60,},
  { field: "stid",headerName: "St. Id",flex:1, minWidth:60,},
  { field: "firstname",headerName: "Fist Name",flex:1,minWidth:120,},
  { field: "lastname", headerName: "Last Name",flex:1,minWidth:130,},
  { field: "phone", headerName: "Phone" ,flex:1,minWidth:200,},
  { field: "email", headerName: "Email" ,flex:1, minWidth:180,},
  { field: "batch", headerName: "Batch" ,flex:1, minWidth:120, },
  { field: "action",headerName: "Action",flex:1, minWidth:100,renderCell: (params:any) => <StatusButton params={params} />,},
];

const row = [
  {
    id:1,
    stid:"1",
    firstname:"Chrystyna ",
    lastname:"Galabuda",
    phone:"+380 96 00 10 000",
    email:"test-email.@gmail.com",
    batch:"New Batch",
    action:"test"
  },
  {
    id:2,
    stid:"2",
    firstname:"Chrystyna ",
    lastname:"Galabuda",
    phone:"+380 96 00 10 000",
    email:"test-email.@gmail.com",
    batch:"New Batch",
    action:"test"
  },
  {
    id:3,
    stid:"3",
    firstname:"Chrystyna ",
    lastname:"Galabuda",
    phone:"+380 96 00 10 000",
    email:"test-email.@gmail.com",
    batch:"New Batch",
    action:"test"
  },
  {
    id:4,
    stid:"4",
    firstname:"Chrystyna ",
    lastname:"Galabuda",
    phone:"+380 96 00 10 000",
    email:"test-email.@gmail.com",
    batch:"New Batch",
    action:"test"
  },
  {
    id:5,
    stid:"5",
    firstname:"Chrystyna ",
    lastname:"Galabuda",
    phone:"+380 96 00 10 000",
    email:"test-email.@gmail.com",
    batch:"New Batch",
    action:"test"
  },
  {
    id:6,
    stid:"6",
    firstname:"Chrystyna ",
    lastname:"Galabuda",
    phone:"+380 96 00 10 000",
    email:"test-email.@gmail.com",
    batch:"New Batch",
    action:"test"
  },
  {
    id:7,
    stid:"7",
    firstname:"Chrystyna ",
    lastname:"Galabuda",
    phone:"+380 96 00 10 000",
    email:"test-email.@gmail.com",
    batch:"New Batch",
    action:"test"
  },
  {
    id:8,
    stid:"8",
    firstname:"Chrystyna ",
    lastname:"Galabuda",
    phone:"+380 96 00 10 000",
    email:"test-email.@gmail.com",
    batch:"New Batch",
    action:"test"
  },
  {
    id:9,
    stid:"9",
    firstname:"Chrystyna ",
    lastname:"Galabuda",
    phone:"+380 96 00 10 000",
    email:"test-email.@gmail.com",
    batch:"New Batch",
    action:"test"
  },
  {
    id:10,
    stid:"10",
    firstname:"Chrystyna ",
    lastname:"Galabuda",
    phone:"+380 96 00 10 000",
    email:"test-email.@gmail.com",
    batch:"New Batch",
    action:"test"
  },
  
 
]

export default function StudentDataGrid() {
  const navigate = useNavigate();
  const handleRowClick = (params:any) => {
    navigate(`/student/student-details`);
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

