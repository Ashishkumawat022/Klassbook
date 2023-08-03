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
  { field: "id", headerName: "Sr No ",flex:1,minWidth:80,},
  { field: "course",headerName: "Course",flex:1, minWidth:300,},
  { field: "curriculam",headerName: "Curriculam",flex:1,minWidth:100,},
  { field: "subject", headerName: "Subject",flex:1,minWidth:100,},
  { field: "mode", headerName: "Mode" ,flex:1,minWidth:200,},
  { field: "action",headerName: "Action",flex:1, minWidth:100,renderCell: (params:any) => <StatusButton params={params} />,},
];

const row = [
  {
    id:1,
    course:"Primary For Adult",
    curriculam:"Primary ",
    subject:"Mathematics",
    mode:"Online",
    action:"test"
  },
  {
    id:2,
    course:"Basic Eng For Child",
    curriculam:"Basic ",
    subject:"English",
    mode:"Online",
    action:"test"
  },
  {
    id:3,
    course:"Primary Math For Child",
    curriculam:"primary",
    subject:"Math",
    mode:"Online",
    action:"test"
  },
  {
    id:4,
    course:"Advanced Chemistry For Child",
    curriculam:"Advanced",
    subject:"Chemistry",
    mode:"Online",
    action:"test"
  },
  {
    id:5,
    course:"Advanced Chemistry For Child",
    curriculam:"Advanced",
    subject:"Chemistry",
    mode:"Online",
    action:"test"
  },
  {
    id:6,
    course:"Advanced Chemistry For Child",
    curriculam:"Advanced",
    subject:"Chemistry",
    mode:"Online",
    action:"test"
  },
  {
    id:7,
    course:"Advanced Chemistry For Child",
    curriculam:"Advanced",
    subject:"Chemistry",
    mode:"Online",
    action:"test"
  },
  {
    id:8,
    course:"Advanced Chemistry For Child",
    curriculam:"Advanced",
    subject:"Chemistry",
    mode:"Online",
    action:"test"
  },
  {
    id:9,
    course:"Advanced Chemistry For Child",
    curriculam:"Advanced",
    subject:"Chemistry",
    mode:"Online",
    action:"test"
  },
  {
    id:10,
    course:"Advanced Chemistry For Child",
    curriculam:"Advanced",
    subject:"Chemistry",
    mode:"Online",
    action:"test"
  },
  {
    id:11,
    course:"Advanced Chemistry For Child",
    curriculam:"Advanced",
    subject:"Chemistry",
    mode:"Online",
    action:"test"
  },

]

export default function CoursesDataGrid() {
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

