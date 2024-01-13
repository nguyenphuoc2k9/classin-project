import React, { useState } from 'react'
import {Box,Typography,useTheme,Button} from "@mui/material"
import { DataGrid,GridActionsCellItem } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import {mockDataTeam} from "../../data/mockData"
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

import Header from '../../components/Header'
const Team = () => {
    const theme = useTheme()
    const [row,setRow] = useState(JSON.parse(localStorage.getItem("team")))
    const colors = tokens(theme.palette.mode)
    if(!localStorage.getItem("team")){
      localStorage.setItem("team",JSON.stringify(mockDataTeam))
    }
    const handleDelete = (id)=>{
      const newdata = row.filter(data=> data.id != id)
      setRow(newdata)
      localStorage.setItem('team',JSON.stringify(newdata))
    }
    const columns = [
        { field: "id", headerName: "ID" },
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
          field: "accessLevel",
          headerName: "Access Level",
          flex: 1,
          renderCell: ({ row: { access } }) => {
            return (
              <Box
                width="60%"
                m="0 auto"
                p="5px"
                display="flex"
                justifyContent="center"
                backgroundColor={
                  access === "admin"
                    ? colors.greenAccent[600]
                    : access === "manager"
                    ? colors.greenAccent[700]
                    : colors.greenAccent[700]
                }
                borderRadius="4px"
              >
                {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                {access === "manager" && <SecurityOutlinedIcon />}
                {access === "user" && <LockOpenOutlinedIcon />}
                <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                  {access}
                </Typography>
              </Box>
            );
          },
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
      ]
  const processRowUpdate = (newrow)=>{
    const updateRow = {...newrow,isNew:false}
    const newdata = row.map((row)=> (row.id===newrow.id ? updateRow:row))
    setRow(newdata)
    localStorage.setItem("team",JSON.stringify(newdata))
    return updateRow
  }
  return (
    <Box m="20px">
        <Header title="TEAM" subtitle="Managing the Team Members"/>
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
            }}
        >
            <DataGrid 
                rows={row}
                columns={columns}
                editMode="row"
                processRowUpdate={processRowUpdate}
            />
        </Box>
    </Box>
  )
}

export default Team