import axios from "axios";

/** 할일 추가해주는 함수 추후에 데이터 스키마 정해지면 바뀔 예정 */
const postToDo = () => {
  axios.post("/api/todos", {});
};

export default postToDo;
