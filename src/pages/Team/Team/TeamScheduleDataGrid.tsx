import * as React from "react";
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import tb from "../../../datatable.module.scss";
import { NavLink } from "react-router-dom";
import {MdEdit} from "react-icons/md";
import {AiFillDelete} from "react-icons/ai";
import Checkbox from "../../../components/Forms/Checkbox";
import st from "../../../style.module.scss";

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
  { field: "date",headerName: "Date",flex:1, minWidth:60,},
  { field: "time",headerName: "Time",flex:1,minWidth:120,},
  { field: "class", headerName: "Class",flex:1,minWidth:130,},
  { field: "program", headerName: "Program" ,flex:1,minWidth:180,},
  { field: "location", headerName: "Location" ,flex:1, minWidth:200,},
  { field: "attended",headerName: "Attended",flex:1, minWidth:120,renderCell: (params:any) =>  <label className={`${st.checkbox}`} style={{marginTop:"-22px"}}><Checkbox/></label>,},
];

const row = [
  {
    id:1,
    date:"22.01.22",
    time:"1:00 pm",
    class:"11-B",
    program:"Власник авторських прав",
    location:"Lviv, Brodiska st., 56, 70800",
    attended:"test"
  },
  
  {
    id:2,
    date:"22.01.22",
    time:"1:00 pm",
    class:"11-B",
    program:"Власник авторських прав",
    location:"Lviv, Brodiska st., 56, 70800",
    attended:"test"
  },
  
  {
    id:3,
    date:"22.01.22",
    time:"1:00 pm",
    class:"11-B",
    program:"Власник авторських прав",
    location:"Lviv, Brodiska st., 56, 70800",
    attended:"test"
  },
  
  {
    id:4,
    date:"22.01.22",
    time:"1:00 pm",
    class:"11-B",
    program:"Власник авторських прав",
    location:"Lviv, Brodiska st., 56, 70800",
    attended:"test"
  },
  

 
]

export default function TeamScheduleDataGrid() {
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

