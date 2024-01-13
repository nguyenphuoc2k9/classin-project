import React, { useState } from 'react'
import {Box,Typography,useTheme,Button} from "@mui/material"
import { DataGrid,GridToolbar } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import {mockDataInvoices} from "../../data/mockData"
import Header from '../../components/Header'
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
const Invoices = () => {
    const theme = useTheme()
    const [row,setRow] = useState(JSON.parse(localStorage.getItem("invoices")))
    const colors = tokens(theme.palette.mode)
    const handleDelete = (id)=>{
        const newdata = row.filter(data=> data.id != id)
        setRow(newdata)
        localStorage.setItem('invoices',JSON.stringify(newdata))
    }
    const columns = [
        { field: "id", headerName: "ID",flex:0.5},
        {
          field: "name",
          headerName: "Name",
          flex: 1,
          cellClassName: "name-column--cell",
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
            field: "cost",
            headerName: "Cost",
            flex: 1,
            renderCell:(params)=>(
                <Typography color={colors.greenAccent[500]}>
                    ${params.row.cost}
                </Typography>
            ),
            editable:true

        },
        {
            field: "date",
            headerName: "Date",
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
        const updateRow = {...newrow,isNew:false}
        const newdata = row.map((row)=> (row.id===newrow.id ? updateRow:row))        
        setRow(newdata)
        localStorage.setItem("invoices",JSON.stringify(newdata))
        return updateRow
      }
  return (
    <Box m="20px">
        <Header title="INVOICES" subtitle="List Of Invoices Balances"/>
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
                "& .MuiCheckbox-root":{
                    color: `${colors.greenAccent[200]} !important`
                },
            }}
        >
            <DataGrid 
                checkboxSelection
                editMode='row'
                rows={row}
                columns={columns}
                processRowUpdate={processRowUpdate}
            />
        </Box>
    </Box>
  )
}

export default Invoices