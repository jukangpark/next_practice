import { MongoClient } from "mongodb";

let client: MongoClient | null = null;
// 타입 단언 사용 : TypeScript 에서는 타입 단언을 사용하여, 변수의 타입을 지정할 수 있습니다.
const MONGO_URI = process.env.MONGO_URI as string;

async function connectDB() {
  if (client) {
    // 이미 연결된 경우 재사용 및 함수 종료
    return client;
  }

  try {
    client = new MongoClient(MONGO_URI);
    await client.connect();
  } catch (error) {
    console.error("MongoDB 연결에 실패했습니다:", error);
    throw error;
  }

  console.log("MongoDB 연결됨");
  return client;
}

export default connectDB;
