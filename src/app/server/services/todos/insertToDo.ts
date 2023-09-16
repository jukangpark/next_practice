import getToDosCollection from "./getToDosCollections";

const insertToDo = async (data: object) => {
  const todos = await getToDosCollection();
  return await todos.insertOne(data);
};

export default insertToDo;
