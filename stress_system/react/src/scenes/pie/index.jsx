import React from 'react'
import PieChart from "../../components/PieChart"
import Header from '../../components/Header'
import {Box} from"@mui/material"
const Line = () => {
  return (
    <Box m="20px">
        <Header title="GEOGRAPHY" subtitle="Simple Geography chart"/>
        <Box height="75vh">
            <PieChart/>
        </Box>
    </Box>
  )
}

export default Line