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
            Unpaid
          </NavLink>
        </li>
        <li>
          <div className={`btn ${tb.moreDrop}`}>
            <Form.Select>
              <option>More</option>
            </Form.Select>
          </div>
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

const DurationButton = (props:any) => {
  let { params } = props;
  return (
    <div className={`${tb.tableDuration}`}>
        <div className={`${tb.tableDate}`}>
          <span>20 Apr 2023 - 20 Jun 2023</span>
        </div>
        <div className={`${tb.tableProgress}`}>
          <span>Status </span>
          <NavLink className={`${tb.inProgress}`} to="#">
            In Progress
          </NavLink>
        </div>
    </div>
  );
};


const columns = [
  { field: "id", headerName: "Sr No.",flex:1,minWidth:60,},
  { field: "admission",headerName: "Admission",flex:1, minWidth:100,},
  { field: "branch",headerName: "Branch",flex:1,minWidth:200,},
  { field: "student", headerName: "Student",flex:1,minWidth:240,renderCell: (params:any) => <StudentButton params={params} />},
  { field: "course", headerName: "Course" ,flex:1,minWidth:140,},
  { field: "duration", headerName: "Duration" ,flex:1, minWidth:220, renderCell: (params:any) => <DurationButton params={params} />},
  { field: "status",headerName: "Pay Status",flex:1, minWidth:200,renderCell: (params:any) => <StatusButton params={params} />},
];

const row = [
  {
    id:1,
    admission:"A-001",
    branch:"Singapore, Pem, 68 Orchard Rd, 238839",
    student:"test",
    course:"Math Regular",
    duration:"test",
    status:"test"
  },
  {
    id:2,
    admission:"A-001",
    branch:"Singapore, Pem, 68 Orchard Rd, 238839",
    student:"test",
    course:"Math Regular",
    duration:"test",
    status:"test"
  },
  {
    id:3,
    admission:"A-001",
    branch:"Singapore, Pem, 68 Orchard Rd, 238839",
    student:"test",
    course:"Math Regular",
    duration:"test",
    status:"test"
  },
  {
    id:4,
    admission:"A-001",
    branch:"Singapore, Pem, 68 Orchard Rd, 238839",
    student:"test",
    course:"Math Regular",
    duration:"test",
    status:"test"
  },
  {
    id:5,
    admission:"A-001",
    branch:"Singapore, Pem, 68 Orchard Rd, 238839",
    student:"test",
    course:"Math Regular",
    duration:"test",
    status:"test"
  },
  {
    id:6,
    admission:"A-001",
    branch:"Singapore, Pem, 68 Orchard Rd, 238839",
    student:"test",
    course:"Math Regular",
    duration:"test",
    status:"test"
  },
]

export default function ActiveAdmission() {
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
