import { MongoClient } from "mongodb";

let client: any = null;

async function connectDB() {
  if (client) {
    // 이미 연결된 경우
    return client;
  }

  try {
    client = new MongoClient(process.env.MONGO_URI || "");
    await client.connect();
  } catch (error) {
    console.error("MongoDB 연결에 실패했습니다:", error);
    throw error;
  }

  console.log("MongoDB 연결됨");
  return client;
}

export default connectDB;
