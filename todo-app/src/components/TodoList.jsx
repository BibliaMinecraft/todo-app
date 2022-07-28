import React , { useEffect } from 'react'
import "../style/TodoList.css"
import { TodoForm } from './TodoForm'
import { useState } from 'react'
import { Todo } from './Todo'
import { LoadingSpinner } from './LoadingSpinner'
import { RemainingTodos } from './RemainingTodos'
import { getAllTodos } from '../services/todos/getAllTodos'
import { createTodo } from '../services/todos/createTodo'
import { editTodo } from '../services/todos/editTodo'
import { deleteTodo } from '../services/todos/deleteTodo'

export function TodoList() {
    
    const [todos, setTodos] = useState([])
    const [ loading, setloading ] = useState(false)

    useEffect(() => {
        setloading(true)
        getAllTodos().then(data => {
            setTodos(data);
            setloading(false);
        })
    }, [])

    const addTodo = todo => {
        if (todo.text.trim()){
            todo.text = todo.text.trim();

            createTodo(todo.text).then(data => {
                setTodos( (preview) => [...preview,data] )
            })
        };
    };

    const removeTodo = (id) => {
        deleteTodo(id)
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const completeTodo = id => {
        const updateTodos = todos.map( todo => {
            if (todo.id === id){
                todo.completed = !todo.completed;
                editTodo(id, {completed: todo.completed})
                return todo
            }
            return todo
        })
        setTodos(updateTodos)
    }

    const remainingTodos = todos.length - todos.filter(todo => todo.completed !== false).length
    return (
        <>
            <TodoForm onSubmit={addTodo} />
            <RemainingTodos remaining={remainingTodos} />
            <LoadingSpinner value={loading} />
            <div className='todo-list'>
                {todos.map( (todo , index) => {
                    return <Todo 
                        key={todo.id}
                        id={todo.id}
                        text={index+1 + " • " + todo.text} 
                        completed={todo.completed}
                        removeTodo={removeTodo}
                        completeTodo={completeTodo}
                    />
                })}
            </div>
        </>
  )
}
