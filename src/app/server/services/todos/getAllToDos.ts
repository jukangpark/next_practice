import getToDosCollection from "./getToDosCollections";

export const getAllToDos = async () => {
  const todos = await getToDosCollection();
  return await todos.find({}).toArray();
};

export default getAllToDos;
