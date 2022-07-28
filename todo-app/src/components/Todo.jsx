import React from 'react'
import "../style/Todo.css"
import { AiFillDelete } from "react-icons/ai"

export function Todo({ text, completed, id, completeTodo, removeTodo}) {
  return (
    <div className={completed ? "todo completed" : "todo"}>
        <div className='todo-text' onClick={() => completeTodo(id)}>
            {text}
        </div>
        <div className='todo-icon-container' onClick={() => removeTodo(id)}>
            <AiFillDelete className='todo-icon'/>
        </div>
    </div>
  )
}
