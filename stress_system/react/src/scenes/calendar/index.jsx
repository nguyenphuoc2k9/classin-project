import { useState } from 'react'
import { formatDate } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Box,List,ListItem,ListItemText,Typography,useTheme } from '@mui/material'
import Header from "../../components/Header.jsx"
import {tokens} from "../../theme.js"
const Calendar = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    console.log();
    const [ currentEvents,setCurrentEvents] = useState(JSON.parse(localStorage.getItem("events")))
    if(!localStorage.getItem("events")){
        setCurrentEvents([])
    }
    const handleDateClick = (selected) =>{
        const title = prompt("Pleast enter a new title for new event")
        const calendarApi = selected.view.calendar
        calendarApi.unselect()
        const newevent = {
                id:`${selected.startStr}-${title}`,
                title,
                start:selected.startStr,
                end:selected.endStr,
                allDay:selected.allDay
        }
        if(title) {
            calendarApi.addEvent(newevent)
        }
        
        localStorage.setItem("events",JSON.stringify([...currentEvents,newevent]))
    }
    const handleEventClick = (selected)=>{
        if(window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)){
            selected.event.remove()
            const newarr = currentEvents.filter((event)=> event.id != selected.event.id)
            localStorage.setItem("events",JSON.stringify(newarr))
        }
    }
  return (
    <Box m="20px">
        <Header title="CALENDAR" subtitle="Full Calendar Interactive Page"/>

        <Box display="flex" justifyContent="space-between">
            <Box flex="1 1 20%" backgroundColor={colors.primary[400]} p="15px" borderRadius="4px">
                <Typography variant='h5'>Events</Typography>
                <List>
                    {currentEvents.map((event)=>(
                        <ListItem
                            key={event.id}
                            sx={{
                                backgroundColor:colors.greenAccent[500],
                                margin:"10px 0",
                                borderRadius:"2px",

                            }}
                        >
                            <ListItemText
                                primary={event.title}
                                secondary={
                                    <Typography>{formatDate(event.start,{
                                        year:"numeric",
                                        month:"short",
                                        day:"numeric",
                                    })}</Typography>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box flex="1 1 100%"ml="15px">
            <FullCalendar
                height="75vh"
                plugins={[
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin,
                    listPlugin
                ]}
                headerToolbar={{
                    left:"prev,next today",
                    center:"title",
                    right:"dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                }}
                initialView="dayGridMonth"
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                select={handleDateClick}
                eventClick={handleEventClick}
                eventsSet={(events)=> setCurrentEvents(events)}
                initialEvents={currentEvents}
            />
        </Box>
        </Box>
        
    </Box>
  )
}

export default Calendar