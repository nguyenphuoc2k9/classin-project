import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import ALL from './pages/ALL.jsx'
import ACTIVE from "./pages/ACTIVE.jsx"
import COMPLETE from "./pages/COMPLETED.jsx"
function App() {

  const [input_val,change_val] = useState("")
    const onclickhandle = ()=>{
        let new_todo = {
          task: input_val,
          id: new Date().getMilliseconds(),
          active: false,
          date: new Date()
        }
        localStorage.setItem("todos",JSON.stringify([...todo,new_todo]))
        settodo([...todo,new_todo])
    }
    
    const onchangehandle = (element)=>{
        let newval = element.target.value
        change_val(newval)
    }
    
  const [todo,settodo] = useState(JSON.parse(localStorage.getItem("todos")))
  const onchangeactive = (value,id)=>{
    let new_arr  =[...todo]
    for(let i =0;i<new_arr.length;i++){
      if(new_arr[i].id == id){
        if(value == "false"){
          new_arr[i].active = true
        }
      }
    }
    localStorage.setItem("todos",JSON.stringify(new_arr))
    console.log(new_arr,id);
    settodo(new_arr)
  }
  const delete_one  =(id)=>{
    
    let new_arr =[...todo].filter(e => e.id!=id)
    localStorage.setItem("todos",JSON.stringify(new_arr))
    settodo(new_arr)
  }
  const delete_all = ()=>{
    let new_arr = todo.filter(todo => todo.active == false);
    localStorage.setItem("todos",JSON.stringify(new_arr))
    settodo(new_arr)
  }
  if (!todo){
    settodo([])
  }
  console.log(todo);
  return (
    <>
      <div className="todo">
        <div className="title">
          <h1>#todo</h1>
        </div>
        <div className="todo-box">
          <Routes>
            <Route path='/' element={<ALL todo={todo} input_val={input_val} onclickhandle={onclickhandle} onchangeactive={onchangeactive} onchangehandle={onchangehandle} />}/>
            <Route path='/active' element={<ACTIVE todo={todo} input_val={input_val} onchangeactive={onchangeactive}onclickhandle={onclickhandle} onchangehandle={onchangehandle}/>}/>
            <Route path='/complete' element={<COMPLETE todo={todo} delete_all={delete_all} delete_one={delete_one}/>}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
