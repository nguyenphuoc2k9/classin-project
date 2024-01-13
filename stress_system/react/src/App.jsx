import { useState } from 'react'
import  { ColorModeContext,useMode} from "./theme.js"
import { CssBaseline,ThemeProvider } from '@mui/material'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Topbar from './scenes/global/topbar.jsx'
import Dashboard from './scenes/dashboard'
import Sidebar from './scenes/global/Sidebar.jsx'
// import Sidebar from './scenes/global/Sidebar.jsx'
import Team from './scenes/team'
import Invoices from './scenes/invoices/index.jsx'
import Contacts from './scenes/contacts/index.jsx'
import Bar from './scenes/bar/index.jsx'
import Form from './scenes/form/index.jsx'
import Line from './scenes/line/index.jsx'
import Pie from './scenes/pie/index.jsx'
import Faq from './scenes/faq/index.jsx'
import Geography from './scenes/geography/index.jsx'
import Calendar from './scenes/calendar/index.jsx'
function App() {
  const [theme,colorMode] = useMode()

  return (
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline/>
              <div className="app">
                <Sidebar/>
                <main className='content'>
                  <Topbar/>
                  <Routes>
                      <Route path='/' element={<Dashboard/>}/>
                      <Route path='/team' element={<Team/>}/>
                      <Route path='/contacts' element={<Contacts/>}/>
                      <Route path='/invoices' element={<Invoices/>}/>
                      <Route path='/form' element={<Form/>}/>
                      <Route path='/calendar' element={<Calendar/>}/> 
                      <Route path='/faq' element={<Faq/>}/>
                      <Route path='/geography' element={<Geography/>}/>
                      <Route path='/bar' element={<Bar/>}/>
                      <Route path='/pie' element={<Pie/>}/>
                      <Route path='/Line' element={<Line/>}/>
                  </Routes>
                </main>
              </div>
            </ThemeProvider>
          </ColorModeContext.Provider>
  )
}

export default App
