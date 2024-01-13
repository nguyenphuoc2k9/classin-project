import React from 'react'
import GeographyChart from '../../components/GeographyChart'
import Header from '../../components/Header'
import {Box} from"@mui/material"
const Geography = () => {
  return (
    <Box m="20px">
        <Header title="GEOGRAPHY" subtitle="Simple Geography chart"/>
        <Box height="75vh">
            <GeographyChart/>
        </Box>
    </Box>
  )
}

export default Geography