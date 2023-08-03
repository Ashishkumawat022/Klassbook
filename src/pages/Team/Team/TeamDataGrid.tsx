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

  { field: "name",headerName: "Name",flex:1,minWidth:120,},
  { field: "role", headerName: "Role",flex:1,minWidth:130,},
  { field: "phone", headerName: "Phone" ,flex:1,minWidth:200,},
  { field: "email", headerName: "Email" ,flex:1, minWidth:180,},
 
  { field: "action",headerName: "Action",flex:1, minWidth:100,renderCell: (params:any) => <StatusButton params={params} />,},
];

const row = [
  {
    id:1,
    name:"Chrystyna Galabuda  ",
    role:"Manager",
    phone:"+380 96 00 10 000",
    email:"test-email.@gmail.com",
    action:"test"
  },
  {
    id:2,
    name:"Chrystyna Galabuda  ",
    role:"Manager",
    phone:"+380 96 00 10 000",
    email:"test-email.@gmail.com",
    action:"test"
  },
  {
    id:3,
    name:"Chrystyna Galabuda  ",
    role:"Manager",
    phone:"+380 96 00 10 000",
    email:"test-email.@gmail.com",
    action:"test"
  },
  {
    id:4,
    name:"Chrystyna Galabuda  ",
    role:"Manager",
    phone:"+380 96 00 10 000",
    email:"test-email.@gmail.com",
    action:"test"
  },
  {
    id:5,
    name:"Chrystyna Galabuda  ",
    role:"Manager",
    phone:"+380 96 00 10 000",
    email:"test-email.@gmail.com",
    action:"test"
  },
  {
    id:6,
    name:"Chrystyna Galabuda  ",
    role:"Manager",
    phone:"+380 96 00 10 000",
    email:"test-email.@gmail.com",
    action:"test"
  },
  {
    id:7,
    name:"Chrystyna Galabuda  ",
    role:"Manager",
    phone:"+380 96 00 10 000",
    email:"test-email.@gmail.com",
    action:"test"
  },
  {
    id:8,
    name:"Chrystyna Galabuda  ",
    role:"Manager",
    phone:"+380 96 00 10 000",
    email:"test-email.@gmail.com",
    action:"test"
  },
  {
    id:9,
    name:"Chrystyna Galabuda  ",
    role:"Manager",
    phone:"+380 96 00 10 000",
    email:"test-email.@gmail.com",
    action:"test"
  },
  {
    id:10,
    name:"Chrystyna Galabuda  ",
    role:"Manager",
    phone:"+380 96 00 10 000",
    email:"test-email.@gmail.com",
    action:"test"
  },
  
 
]

export default function TeamDataGrid() {
  const navigate = useNavigate();
  const handleRowClick = (params:any) => {
    navigate(`/team/team-details`);
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

