import React from 'react'
import "../style/RemainingTodos.css"


export function RemainingTodos({ remaining}) {
  return (
    <div className='remaining-todos'>
        {
        remaining > 0 ? `${remaining} Tareas restantes!`: "Bien!, no hay tareas por cumplir"
        }
    </div> 
  )
}
