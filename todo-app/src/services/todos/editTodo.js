import axios from "axios";

export const editTodo = async (id , body) => {
    const res = await axios.put("http://localhost:5000/api/todos/" + id, body);
    var { data } = res;
    return data;
}