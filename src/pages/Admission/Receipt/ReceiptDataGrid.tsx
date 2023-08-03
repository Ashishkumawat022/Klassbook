import * as React from "react";
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import tb from "../../../datatable.module.scss";
import { NavLink } from "react-router-dom";

import students from "../../../images/students.png";

import { Form} from "react-bootstrap";

const StatusButton = (props:any) => {
  let { params } = props;
  return (
    <div>
      <ul className={`${tb.actionTable}`}>
        <li>
          <NavLink className={`btn ${tb.unpaid}`} to="#">
            Paid
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

const StudentButton = (props:any) => {
  let { params } = props;
  return (
    <div className={`${tb.tableStudent}`}>
        <div className={`${tb.studentImg}`}>
          <img src={students} /> 
        </div>
        <div className={`${tb.studentName}`}>
          <span>Kolyshkina MAriana</span>
          <NavLink className={`${tb.offline}`} to="#">
            Offline
          </NavLink>
        </div>
    </div>
  );
};


const columns = [
  { field: "id", headerName: "Sr No.",flex:1,minWidth:60,},
  { field: "receiptno",headerName: "Receipt No",flex:1, minWidth:100,},
  { field: "recieptdate",headerName: "Reciept Date",flex:1, minWidth:100,},
  { field: "student", headerName: "Student",flex:1,minWidth:240,renderCell: (params:any) => <StudentButton params={params} />},
  { field: "status",headerName: "Receipt Status",flex:1, minWidth:200,renderCell: (params:any) => <StatusButton params={params} />},
  { field: "totalamount",headerName: "Total Amount",flex:1, minWidth:100,},
  { field: "balance",headerName: "Balance",flex:1, minWidth:100,},
  { field: "duedate",headerName: "Due Date",flex:1, minWidth:100,},
];

const row = [
  {
    id:1,
    receiptno:"INV010",
    recieptdate:"25.05.2023",
    student:"text",
    status:"test",
    totalamount:"25",
    balance:"25",
    duedate:"25.05.2023",
  },
  {
    id:2,
    receiptno:"INV010",
    recieptdate:"25.05.2023",
    student:"text",
    status:"test",
    totalamount:"25",
    balance:"25",
    duedate:"25.05.2023",
  },
  {
    id:3,
    receiptno:"INV010",
    recieptdate:"25.05.2023",
    student:"text",
    status:"test",
    totalamount:"25",
    balance:"25",
    duedate:"25.05.2023",
  },
  {
    id:4,
    receiptno:"INV010",
    recieptdate:"25.05.2023",
    student:"text",
    status:"test",
    totalamount:"25",
    balance:"25",
    duedate:"25.05.2023",
  },
  {
    id:5,
    receiptno:"INV010",
    recieptdate:"25.05.2023",
    student:"text",
    status:"test",
    totalamount:"25",
    balance:"25",
    duedate:"25.05.2023",
  },
  {
    id:6,
    receiptno:"INV010",
    recieptdate:"25.05.2023",
    student:"text",
    status:"test",
    totalamount:"25",
    balance:"25",
    duedate:"25.05.2023",
  },
  {
    id:7,
    receiptno:"INV010",
    recieptdate:"25.05.2023",
    student:"text",
    status:"test",
    totalamount:"25",
    balance:"25",
    duedate:"25.05.2023",
  },
  {
    id:8,
    receiptno:"INV010",
    recieptdate:"25.05.2023",
    student:"text",
    status:"test",
    totalamount:"25",
    balance:"25",
    duedate:"25.05.2023",
  },
  {
    id:9,
    receiptno:"INV010",
    recieptdate:"25.05.2023",
    student:"text",
    status:"test",
    totalamount:"25",
    balance:"25",
    duedate:"25.05.2023",
  },
 
]

export default function ReceiptDataGrid() {
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
        rowHeight={80}
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
