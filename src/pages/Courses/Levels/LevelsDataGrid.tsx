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
  { field: "id", headerName: "Sr. No.",flex:1,minWidth:80,},
  { field: "level",headerName: "Level",flex:1, minWidth:150,},
  { field: "description",headerName: "Description",flex:1,minWidth:300,},
  { field: "action",headerName: "Action",flex:1, minWidth:100,renderCell: (params:any) => <StatusButton params={params} />,},
];

const row = [
  {
    id:1,
    level:"Upper secondary education",
    description:"Add description",
    action:"test"
  },
  {
    id:2,
    level:"Post-secondary non-tertiary education",
    description:"Add description",
    action:"test"
  },
  {
    id:3,
    level:"Early childhood education",
    description:"Pre-primary education",
    action:"test"
  },
  {
    id:4,
    level:"Primary education",
    description:"Primary education or first stage of basic education",
    action:"test"
  },
  {
    id:5,
    level:"Primary education",
    description:"Primary education or first stage of basic education",
    action:"test"
  },
  {
    id:6,
    level:"Primary education",
    description:"Primary education or first stage of basic education",
    action:"test"
  },
  {
    id:7,
    level:"Primary education",
    description:"Primary education or first stage of basic education",
    action:"test"
  },
  {
    id:8,
    level:"Primary education",
    description:"Primary education or first stage of basic education",
    action:"test"
  },
  {
    id:9,
    level:"Primary education",
    description:"Primary education or first stage of basic education",
    action:"test"
  },
  {
    id:10,
    level:"Primary education",
    description:"Primary education or first stage of basic education",
    action:"test"
  },
  {
    id:11,
    level:"Primary education",
    description:"Primary education or first stage of basic education",
    action:"test"
  },








  
]

export default function LevelsDataGrid() {
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
