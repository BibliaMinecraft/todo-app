import axios from "axios"

export const createTodo = async (text) => {
    const response = await axios.post("http://localhost:5000/api/todos", { text: text })
    var { data } = response
    return data
}