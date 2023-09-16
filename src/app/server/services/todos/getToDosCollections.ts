import connectDb from "@db/connectDB";
import getCollection from "@db/getCollection";

const getToDosCollection = async () => {
  const client = await connectDb();
  return await getCollection(client, "todos");
};

export default getToDosCollection;
