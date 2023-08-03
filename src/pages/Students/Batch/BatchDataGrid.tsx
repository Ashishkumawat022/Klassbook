import * as React from "react";
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";
import tb from "../../../datatable.module.scss";
import { NavLink } from "react-router-dom";
import {MdEdit} from "react-icons/md";
import {AiFillDelete} from "react-icons/ai";
import EditBatchM from "../../../components/Modals/EditBatchM";
import { useState } from "react";

const StatusButton = (props:any) => {

  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  let { params } = props;
  return (
    <>
    <div>
      <ul className={`${tb.actionTable}`}>
        <li>
          <NavLink className={`btn ${tb.edit}`} title="Edit" to="#" onClick={handleShow}>
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
      <EditBatchM show={show} handleClose={handleClose}/>
      </>
  );
};

const columns = [
  { field: "id", headerName: "Id",flex:1,minWidth:60,},
  { field: "branch",headerName: "Branch",flex:1, minWidth:220,},
  { field: "batchname",headerName: "Batch Name",flex:1,minWidth:120,},
  { field: "noofst", headerName: "No of St",flex:1,minWidth:90,},
  { field: "startdate", headerName: "Start Date" ,flex:1,minWidth:160,},
  { field: "enddate", headerName: "End Date" ,flex:1, minWidth:160,},
  { field: "capacity", headerName: "Capacity" ,flex:1, minWidth:120, },
  { field: "action",headerName: "Action",flex:1, minWidth:100,renderCell: (params:any) => <StatusButton params={params} />,},
];

const row = [
  {
    id:1,
    branch:"Green Forest Branch",
    batchname:"First Batch",
    noofst:"1",
    startdate:"02.01.2022",
    enddate:"15.06.2022",
    capacity:"1",
    action:"test"
  },
  {
    id:2,
    branch:"Green Forest Branch",
    batchname:"First Batch",
    noofst:"1",
    startdate:"02.01.2022",
    enddate:"15.06.2022",
    capacity:"1",
    action:"test"
  },
  {
    id:3,
    branch:"Green Forest Branch",
    batchname:"First Batch",
    noofst:"1",
    startdate:"02.01.2022",
    enddate:"15.06.2022",
    capacity:"1",
    action:"test"
  },
  {
    id:4,
    branch:"Green Forest Branch",
    batchname:"First Batch",
    noofst:"1",
    startdate:"02.01.2022",
    enddate:"15.06.2022",
    capacity:"1",
    action:"test"
  },
  {
    id:5,
    branch:"Green Forest Branch",
    batchname:"First Batch",
    noofst:"1",
    startdate:"02.01.2022",
    enddate:"15.06.2022",
    capacity:"1",
    action:"test"
  },
  {
    id:6,
    branch:"Green Forest Branch",
    batchname:"First Batch",
    noofst:"1",
    startdate:"02.01.2022",
    enddate:"15.06.2022",
    capacity:"1",
    action:"test"
  },
  {
    id:7,
    branch:"Green Forest Branch",
    batchname:"First Batch",
    noofst:"1",
    startdate:"02.01.2022",
    enddate:"15.06.2022",
    capacity:"1",
    action:"test"
  },
  {
    id:8,
    branch:"Green Forest Branch",
    batchname:"First Batch",
    noofst:"1",
    startdate:"02.01.2022",
    enddate:"15.06.2022",
    capacity:"1",
    action:"test"
  },
  {
    id:9,
    branch:"Green Forest Branch",
    batchname:"First Batch",
    noofst:"1",
    startdate:"02.01.2022",
    enddate:"15.06.2022",
    capacity:"1",
    action:"test"
  },
  
  
 
]

export default function BatchDataGrid() {


  const navigate = useNavigate();
  const handleRowClick = (params:any) => {
    //navigate(`/student/student-details`);
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

