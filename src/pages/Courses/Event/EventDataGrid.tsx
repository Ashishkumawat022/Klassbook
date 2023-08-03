import * as React from "react";
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";
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
  { field: "id", headerName: "Sr. No.",flex:1,minWidth:80,},
  { field: "eventName",headerName: "Event Name",flex:1, minWidth:150,},
  { field: "capacity",headerName: "Capacity",flex:1,minWidth:100,},
  { field: "address",headerName: "Address",flex:1,minWidth:400,},
  { field: "team",headerName: "Team",flex:1,minWidth:180,},
  { field: "action",headerName: "Action",flex:1, minWidth:100,renderCell: (params:any) => <StatusButton params={params} />,},
];

const row = [
  {
    id:1,
    eventName:"English Holiday",
    capacity:"1",
    address:"Uk, Lviv, Brodiska st., 56, 70800",
    team:"Name Of Team",
    action:"test"
  },
  {
    id:2,
    eventName:"English Holiday",
    capacity:"1",
    address:"Uk, Lviv, Brodiska st., 56, 70800",
    team:"Name Of Team",
    action:"test"
  },
  {
    id:3,
    eventName:"English Holiday",
    capacity:"1",
    address:"Uk, Lviv, Brodiska st., 56, 70800",
    team:"Name Of Team",
    action:"test"
  },
  {
    id:4,
    eventName:"English Holiday",
    capacity:"1",
    address:"Uk, Lviv, Brodiska st., 56, 70800",
    team:"Name Of Team",
    action:"test"
  },
  {
    id:5,
    eventName:"English Holiday",
    capacity:"1",
    address:"Uk, Lviv, Brodiska st., 56, 70800",
    team:"Name Of Team",
    action:"test"
  },
  {
    id:6,
    eventName:"English Holiday",
    capacity:"1",
    address:"Uk, Lviv, Brodiska st., 56, 70800",
    team:"Name Of Team",
    action:"test"
  },
  {
    id:7,
    eventName:"English Holiday",
    capacity:"1",
    address:"Uk, Lviv, Brodiska st., 56, 70800",
    team:"Name Of Team",
    action:"test"
  },
  {
    id:8,
    eventName:"English Holiday",
    capacity:"1",
    address:"Uk, Lviv, Brodiska st., 56, 70800",
    team:"Name Of Team",
    action:"test"
  },
  {
    id:9,
    eventName:"English Holiday",
    capacity:"1",
    address:"Uk, Lviv, Brodiska st., 56, 70800",
    team:"Name Of Team",
    action:"test"
  },
  {
    id:10,
    eventName:"English Holiday",
    capacity:"1",
    address:"Uk, Lviv, Brodiska st., 56, 70800",
    team:"Name Of Team",
    action:"test"
  },
 
  
]


export default function EventDataGrid() {
  const navigate = useNavigate();
  const handleRowClick = (params:any) => {
    navigate(`/courses/event/event-details`);
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

