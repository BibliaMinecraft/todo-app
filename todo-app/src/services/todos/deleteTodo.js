import axios from "axios";

export const deleteTodo = async (id) => {
    const req = await axios.delete("http://localhost:5000/api/todos/" + id);
    if (req.status === 204)
        return true;
    else
        return false;
}
