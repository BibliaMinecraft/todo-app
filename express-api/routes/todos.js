const express = require("express")
const todoRouter = express.Router()
const todos = require("../todos")
const { v4: uuidv4 } = require("uuid")


//Get All Todos
todoRouter.get("/", (req, res) => res.json(todos))

//Get A Single Todo 
todoRouter.get("/:id", (request , response) => {
    const id = request.params.id
    const todo = todos.find(todo => todo.id === id)
    if (todo) {
        response.send(todo)
    }else {
        response.status(404).json({
            error : "Not Found"
        }).end()
    }
})

//Create New Todo
todoRouter.post("/" , (request , response) => {
    const todo = request.body

    if (!todo || !todo.text){
        return response.status(400).json({
            error: "todo.text is missing! :("
        })
    }

    const newTodo = {
        id: uuidv4(),
        text: todo.text,
        completed: todo.completed || false
    }

    todos.push(newTodo)
    response.status(201).send(newTodo)
})

// Update todo
todoRouter.put("/:id", (request, response) => {
    const id = request.params.id
    todos.map(todo => {
        if (todo.id === id) {
            const isCompleted = () => {
                if(updTodo.completed === true) {
                    return true
                }else if (updTodo.completed === false){
                    return false
                }else{
                    return todo.completed
                }
            }
            const updTodo = request.body
            todo.completed = isCompleted()
            todo.text = updTodo.text || todo.text

            response.json(todo)
        }
    })
})

// Delete todo
todoRouter.delete("/:id", (request, response) => {
    const id = request.params.id
    todos.forEach((todo , index) => {
        if (todo.id === id){
            todos.splice(index,1)         
        }
    })
    response.status(200).json(todos).end()
})

module.exports = todoRouter