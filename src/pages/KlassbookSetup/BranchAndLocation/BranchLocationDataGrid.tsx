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
  { field: "branch",headerName: "Branch",flex:1, minWidth:160,},
  { field: "type",headerName: "Type",flex:1,minWidth:120,},
  { field: "location", headerName: "Location",flex:1,minWidth:200,},
  { field: "address", headerName: "Address" ,flex:1,minWidth:180,},
  { field: "contact", headerName: "Contact" ,flex:1, minWidth:200,},
  { field: "email", headerName: "Email" ,flex:1, minWidth:200,},
  { field: "phone", headerName: "Phone" ,flex:1, minWidth:200,},
  { field: "attended",headerName: "Attended",flex:1, minWidth:120,renderCell: (params:any) =>  <label className={`${st.checkbox}`} style={{marginTop:"-22px"}}><Checkbox/></label>,},
];

const row = [
  {
    id:1,
    branch:"Green Forest Family",
    type:"Online",
    location:"Singpore, Lviv, Lviv region",
    address:"7B Pid Dubom Street",
    contact:"Andreas Maria Viktorivna",
    email:"test-email.@gmail.com",
    phone:"+380 96 00 10 000",
    attended:"test"
  },
  {
    id:2,
    branch:"Green Forest Family",
    type:"Online",
    location:"Singpore, Lviv, Lviv region",
    address:"7B Pid Dubom Street",
    contact:"Andreas Maria Viktorivna",
    email:"test-email.@gmail.com",
    phone:"+380 96 00 10 000",
    attended:"test"
  },
  {
    id:3,
    branch:"Green Forest Family",
    type:"Online",
    location:"Singpore, Lviv, Lviv region",
    address:"7B Pid Dubom Street",
    contact:"Andreas Maria Viktorivna",
    email:"test-email.@gmail.com",
    phone:"+380 96 00 10 000",
    attended:"test"
  },
  {
    id:4,
    branch:"Green Forest Family",
    type:"Online",
    location:"Singpore, Lviv, Lviv region",
    address:"7B Pid Dubom Street",
    contact:"Andreas Maria Viktorivna",
    email:"test-email.@gmail.com",
    phone:"+380 96 00 10 000",
    attended:"test"
  },
  {
    id:5,
    branch:"Green Forest Family",
    type:"Online",
    location:"Singpore, Lviv, Lviv region",
    address:"7B Pid Dubom Street",
    contact:"Andreas Maria Viktorivna",
    email:"test-email.@gmail.com",
    phone:"+380 96 00 10 000",
    attended:"test"
  },
  {
    id:6,
    branch:"Green Forest Family",
    type:"Online",
    location:"Singpore, Lviv, Lviv region",
    address:"7B Pid Dubom Street",
    contact:"Andreas Maria Viktorivna",
    email:"test-email.@gmail.com",
    phone:"+380 96 00 10 000",
    attended:"test"
  },
  {
    id:7,
    branch:"Green Forest Family",
    type:"Online",
    location:"Singpore, Lviv, Lviv region",
    address:"7B Pid Dubom Street",
    contact:"Andreas Maria Viktorivna",
    email:"test-email.@gmail.com",
    phone:"+380 96 00 10 000",
    attended:"test"
  },
  {
    id:8,
    branch:"Green Forest Family",
    type:"Online",
    location:"Singpore, Lviv, Lviv region",
    address:"7B Pid Dubom Street",
    contact:"Andreas Maria Viktorivna",
    email:"test-email.@gmail.com",
    phone:"+380 96 00 10 000",
    attended:"test"
  },
  {
    id:9,
    branch:"Green Forest Family",
    type:"Online",
    location:"Singpore, Lviv, Lviv region",
    address:"7B Pid Dubom Street",
    contact:"Andreas Maria Viktorivna",
    email:"test-email.@gmail.com",
    phone:"+380 96 00 10 000",
    attended:"test"
  },
  {
    id:10,
    branch:"Green Forest Family",
    type:"Online",
    location:"Singpore, Lviv, Lviv region",
    address:"7B Pid Dubom Street",
    contact:"Andreas Maria Viktorivna",
    email:"test-email.@gmail.com",
    phone:"+380 96 00 10 000",
    attended:"test"
  },
  


 
]

export default function BranchAndLocation() {
  const navigate = useNavigate();
  const handleRowClick = (params:any) => {
    navigate(`/k-setup/branch-location-details`);
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

