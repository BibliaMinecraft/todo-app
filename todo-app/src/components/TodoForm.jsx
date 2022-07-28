import React, {useState} from 'react'
import "../style/TodoForm.css"
import { v4 as uuidv4 } from "uuid"

export function TodoForm(props) {
  const [input , setInput] = useState("")

  const handleChange = e => {
    setInput(e.target.value)
  }
  const handleTodo = e => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      text: input,
      completed: false
    }
    props.onSubmit(newTodo)
  }
  return (
    <form
      className='todo-form' 
      onSubmit={handleTodo}>
        <input
            className='todo-form__input'
            type="text"
            placeholder='Escribe tus tareas!...'
            name='text'
            onChange={handleChange}
        />
        <button className='todo-form__button' >
            Agregar Tarea 
        </button>
    </form>
  )
}
