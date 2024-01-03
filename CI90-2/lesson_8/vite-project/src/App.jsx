import { useState } from 'react'
import './App.css'

function App() {
  const [todo,settodo] = useState([])
  const [val,setval] = useState("")
  const onclickhandle = ()=>{
    const newtodo = {
      title : val,
      date: new Date().getSeconds(),
      id:new Date().getSeconds()
    }
  settodo(todo.concat(newtodo))
  
  }
  const deletehandle = (index)=>{
    const newtodo = todo.slice(index,index)
    settodo(newtodo)
  }
  return (
    <div className='todo'>
      <div className="todo-form">
        <h1>To do list </h1>
        <div className="todo-input">
          <input type="text" onChange={(e) => setval(e.target.value)} placeholder='enter your to do'/>
          <button onClick={onclickhandle}>Submit</button>
        </div>
      
      </div>
      <div className="todo-box">
        {todo.map((todo,index)=>{
          return (
             <div className="todo-info" key={index}>
             <p>{todo.title}</p>
             <div className="todo-button">
                 <button >Edit</button>
                 <button onClick={()=> deletehandle(index)}>Delete</button>
             </div>
           </div>)
        })
        }
        
      </div>
    </div>
  )
}

export default App
