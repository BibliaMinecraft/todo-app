const express = require("express")
const cors = require("cors")
const app = express()
const logger = require("./middleware/logger")
const error404 = require("./404.js")
const todoRouter = require("./routes/todos")

const port = 5000

app.use(logger)
app.use(cors())
app.use(express.json())
app.use((request , response , next) => {
    console.log(request.method,request.path,request.body)
    next()
})

app.get("/", (request, response) => {
    response.send("<h1>Hola Mundo!</h1>")
})


app.use("/api/todos",todoRouter)


app.use(error404)


app.listen(port, () => {
    console.log("Server Running!","localhost:"+port)
})
