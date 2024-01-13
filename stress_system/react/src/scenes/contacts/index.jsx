import {useState} from 'react'
import {Box,Button,useTheme} from "@mui/material"
import { DataGrid,GridToolbar } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import {mockDataTeam,mockDataContacts} from "../../data/mockData"
import Header from '../../components/Header'
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

const Team = () => {
    const theme = useTheme()
    const [row,setRow] = useState(JSON.parse(localStorage.getItem("contacts")))
    const colors = tokens(theme.palette.mode)
    const handleDelete = (id)=>{
        const newdata = row.filter(data=> data.id != id)
        setRow(newdata)
        localStorage.setItem('contacts',JSON.stringify(newdata))
      }
    const columns = [
        { field: "id", headerName: "ID",flex:0.5},
        { field:"registrarId",headerName:"Registrar ID"},
        {
          field: "name",
          headerName: "Name",
          flex: 1,
          cellClassName: "name-column--cell",
          editable:true
        },
        {
          field: "age",
          headerName: "Age",
          type: "number",
          headerAlign: "left",
          align: "left",
          editable:true

        },
        {
          field: "phone",
          headerName: "Phone Number",
          flex: 1,
          editable:true

        },
        {
          field: "email",
          headerName: "Email",
          flex: 1,
          editable:true

        },
        {
            field: "address",
            headerName: "Address",
            flex: 1,
            editable:true

        },
        {
            field: "city",
            headerName: "City",
            flex: 1,
            editable:true

        },
        {
            field: "zipCode",
            headerName: "ZipCode",
            flex: 1,
            editable:true

        },
        {
            field:"action",
            headerName:"Action",
            flex:1,
            type:"action",
            width:100,
            cellClassName:"action",
            renderCell: ({row:{id}})=>{
              return (
                <Button startIcon={<DeleteIcon/>} sx={{
                  "&:hover":{
                    backgroundColor:`${colors.redAccent[700]} !important`
                  },
                  backgroundColor:colors.redAccent[500],color:colors.grey[100],padding:"5px" ,margin:"0 auto",display:"flex",justifyContent:"center",width:"60%"}} onClick={()=>handleDelete(id)} >
                  Delete
                </Button>
              )
            }
          }

      ];
    const processRowUpdate = (newrow)=>{
        const Updaterow = {...newrow,isNew:false}
        const newdata = row.map((row)=>row.id === newrow.id ? Updaterow:row)
        setRow(newdata)
        localStorage.setItem("contacts",JSON.stringify(newdata))
        return Updaterow
    }
  return (
    <Box m="20px">
        <Header title="CONTACTS" subtitle="List Of Contacts For Future Reference"/>
        <Box
            m="40px 0 0 0"
            height="75vh"
            sx={{
                "& .MuiDataGrid-root":{
                    border:"none"
                },
                "& .MuiDataGrid-cell":{
                    borderBottom:"none"
                },
                "& .name-column--cell":{
                    color:colors.greenAccent[300]
                },
                "& .MuiDataGrid-columnHeaders":{
                    backgroundColor:colors.blueAccent[700],
                    borderBotttom:"none"
                },
                "& .MuiDataGrid-virtualScroller":{
                    backgroundColor:colors.primary[400]
                },
                "& .MuiDataGrid-footerContainer":{
                    borderTop:"none",
                    backgounrdColor:colors.blueAccent[700]
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
                    color: `${colors.grey[100]} !important`
                },
            }}
        >
            <DataGrid 
                rows={row}
                columns={columns}
                editMode='row'
                components={{ Toolbar: GridToolbar}}
                processRowUpdate={processRowUpdate}
            />
        </Box>
    </Box>
  )
}

export default Team