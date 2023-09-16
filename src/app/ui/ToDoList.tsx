"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import getToDos from "@axios/getToDos";
import postToDo from "@axios/postToDo";

interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const ToDoList = () => {
  const [toDos, setToDos] = useState<ToDo[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getToDos();
      setToDos(data);
    })();
  }, []);

  const handlePost = async () => {
    await postToDo();
    const data = await getToDos();
    setToDos(data);
  };

  return (
    <>
      {toDos.map((todo, index) => {
        return (
          <div key={index}>
            <Link href={"/todo/" + String(todo.id)} key={todo.id}>
              {todo.title}
            </Link>
          </div>
        );
      })}
      <button onClick={handlePost}>
        test 디비에 todos 콜렉션에 데이터 하나 넣겠습니다.
      </button>
    </>
  );
};

export default ToDoList;
