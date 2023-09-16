import axios from "axios";

const getToDos = async () => {
  const response = await axios.get("/api/todos");
  return response.data;
};

export default getToDos;
