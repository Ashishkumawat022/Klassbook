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
          <NavLink className={`btn ${tb.edit}`} title="Edit" to="/add-branch">
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
  { field: "id", headerName: "No.",flex:1,minWidth:80,},
  { field: "branch",headerName: "Branch",flex:1, minWidth:150,},
  { field: "country",headerName: "Country",flex:1,minWidth:100,},
  { field: "city", headerName: "City",flex:1,minWidth:100,},
  { field: "address", headerName: "Address" ,flex:1,minWidth:200,},
  { field: "phone", headerName: "Phone" ,flex:1, minWidth:180,},
  { field: "email", headerName: "Email" ,flex:1, minWidth:180, },
  { field: "status",headerName: "Status",flex:1, minWidth:100,renderCell: (params:any) => <StatusButton params={params} />,},
];

const row = [
  {
    id:1,
    branch:"Green Forest Farm",
    country:"Singpore",
    city:"Singpore",
    address:"7B Pid Dubom Street",
    phone:"+380 96 00 10 000",
    email:"test-email.@gmail.com",
    status:"test"
  },
  {
    id:2,
    branch:"Green Forest Farm",
    country:"Singpore",
    city:"Singpore",
    address:"7B Pid Dubom Street",
    phone:"+380 96 00 10 000",
    email:"test-email.@gmail.com",
    status:"test"
  },
  {
    id:3,
    branch:"Green Forest Farm",
    country:"Singpore",
    city:"Singpore",
    address:"7B Pid Dubom Street",
    phone:"+380 96 00 10 000",
    email:"test-email.@gmail.com",
    status:"test"
  },
  {
    id:4,
    branch:"Green Forest Farm",
    country:"Singpore",
    city:"Singpore",
    address:"7B Pid Dubom Street",
    phone:"+380 96 00 10 000",
    email:"test-email.@gmail.com",
    status:"test"
  },
  {
    id:5,
    branch:"Green Forest Farm",
    country:"Singpore",
    city:"Singpore",
    address:"7B Pid Dubom Street",
    phone:"+380 96 00 10 000",
    email:"test-email.@gmail.com",
    status:"test"
  },
  {
    id:6,
    branch:"Green Forest Farm",
    country:"Singpore",
    city:"Singpore",
    address:"7B Pid Dubom Street",
    phone:"+380 96 00 10 000",
    email:"test-email.@gmail.com",
    status:"test"
  },
  {
    id:7,
    branch:"Green Forest Farm",
    country:"Singpore",
    city:"Singpore",
    address:"7B Pid Dubom Street",
    phone:"+380 96 00 10 000",
    email:"test-email.@gmail.com",
    status:"test"
  },
  {
    id:8,
    branch:"Green Forest Farm",
    country:"Singpore",
    city:"Singpore",
    address:"7B Pid Dubom Street",
    phone:"+380 96 00 10 000",
    email:"test-email.@gmail.com",
    status:"test"
  },
  {
    id:9,
    branch:"Green Forest Farm",
    country:"Singpore",
    city:"Singpore",
    address:"7B Pid Dubom Street",
    phone:"+380 96 00 10 000",
    email:"test-email.@gmail.com",
    status:"test"
  },
  {
    id:10,
    branch:"Green Forest Farm",
    country:"Singpore",
    city:"Singpore",
    address:"7B Pid Dubom Street",
    phone:"+380 96 00 10 000",
    email:"test-email.@gmail.com",
    status:"test"
  },
  {
    id:11,
    branch:"Green Forest Farm",
    country:"Singpore",
    city:"Singpore",
    address:"7B Pid Dubom Street",
    phone:"+380 96 00 10 000",
    email:"test-email.@gmail.com",
    status:"test"
  },
]

export default function BranchDataGrid() {
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
