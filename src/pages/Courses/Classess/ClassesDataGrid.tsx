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
  { field: "class",headerName: "Class",flex:1, minWidth:60,},
  { field: "subject",headerName: "Subject",flex:1,minWidth:120,},
  { field: "course", headerName: "Course",flex:1,minWidth:150,},
  { field: "level", headerName: "Level" ,flex:1,minWidth:250,},
  { field: "capacity", headerName: "Capacity" ,flex:1, minWidth:80,},
  { field: "team", headerName: "Team" ,flex:1, minWidth:120, },
  { field: "address", headerName: "Address" ,flex:1, minWidth:300, },
  { field: "action",headerName: "Action",flex:1, minWidth:100,renderCell: (params:any) => <StatusButton params={params} />,},
];

const row = [
  {
    id:1,
    class:"001",
    subject:"Mathematics",
    course:"Primary For Adult",
    level:"Upper secondary education",
    capacity:"1",
    team:"Name of Team",
    address:"Uk, Lviv, Brodiska st. , 56, 70800",
    action:"test"
  },
  {
    id:2,
    class:"002",
    subject:"English",
    course:"Advanced For Adult",
    level:"Upper secondary education",
    capacity:"1",
    team:"Name of Team",
    address:"USA, Chernivtsi, Brodiska st., 56, 70800 ",
    action:"test"
  },
  {
    id:3,
    class:"003",
    subject:"Physics",
    course:"Basic For Child",
    level:"Upper secondary education",
    capacity:"1",
    team:"Name of Team",
    address:"Uk, Lviv, Brodiska st. , 56, 70800",
    action:"test"
  },
  {
    id:4,
    class:"004",
    subject:"Chemistry",
    course:"Basic For Child",
    level:"Upper secondary education",
    capacity:"1",
    team:"Name of Team",
    address:"Uk, Lviv, Brodiska st. , 56, 70800",
    action:"test"
  },
  {
    id:5,
    class:"004",
    subject:"Chemistry",
    course:"Basic For Child",
    level:"Upper secondary education",
    capacity:"1",
    team:"Name of Team",
    address:"Uk, Lviv, Brodiska st. , 56, 70800",
    action:"test"
  },
  {
    id:6,
    class:"004",
    subject:"Chemistry",
    course:"Basic For Child",
    level:"Upper secondary education",
    capacity:"1",
    team:"Name of Team",
    address:"Uk, Lviv, Brodiska st. , 56, 70800",
    action:"test"
  },
  {
    id:7,
    class:"004",
    subject:"Chemistry",
    course:"Basic For Child",
    level:"Upper secondary education",
    capacity:"1",
    team:"Name of Team",
    address:"Uk, Lviv, Brodiska st. , 56, 70800",
    action:"test"
  },
  {
    id:8,
    class:"004",
    subject:"Chemistry",
    course:"Basic For Child",
    level:"Upper secondary education",
    capacity:"1",
    team:"Name of Team",
    address:"Uk, Lviv, Brodiska st. , 56, 70800",
    action:"test"
  },
  {
    id:9,
    class:"004",
    subject:"Chemistry",
    course:"Basic For Child",
    level:"Upper secondary education",
    capacity:"1",
    team:"Name of Team",
    address:"Uk, Lviv, Brodiska st. , 56, 70800",
    action:"test"
  },
  {
    id:10,
    class:"004",
    subject:"Chemistry",
    course:"Basic For Child",
    level:"Upper secondary education",
    capacity:"1",
    team:"Name of Team",
    address:"Uk, Lviv, Brodiska st. , 56, 70800",
    action:"test"
  },
  {
    id:11,
    class:"004",
    subject:"Chemistry",
    course:"Basic For Child",
    level:"Upper secondary education",
    capacity:"1",
    team:"Name of Team",
    address:"Uk, Lviv, Brodiska st. , 56, 70800",
    action:"test"
  },
 
]

export default function ClassesDataGrid() {
  const navigate = useNavigate();
  const handleRowClick = (params:any) => {
    navigate(`/courses/class/class-details`);
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

