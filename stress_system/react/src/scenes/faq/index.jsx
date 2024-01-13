import React from 'react'
import Header from '../../components/Header'
import Accordion from '@mui/material/Accordion'
import AccordionSummary  from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from '../../theme'
import {Box,useTheme,Typography} from "@mui/material"
const Question=({colors})=>{
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">An Important question</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veniam cum consectetur non dolorum aspernatur, officia alias exercitationem eius harum recusandae incidunt corporis omnis possimus ipsam debitis nemo sunt nihil!</Typography>
            </AccordionDetails>
        </Accordion>
    )
}
const Faq = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    
  return (
    <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions Page"/>
        <Question colors={colors}/>
        <Question colors={colors}/>
        <Question colors={colors}/>
        <Question colors={colors}/>
        <Question colors={colors}/>
        <Question colors={colors}/>
    </Box>
  )
}

export default Faq