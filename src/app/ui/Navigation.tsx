"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Navigation = () => {
  const [toDos, setToDos] = useState<ToDo[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setToDos(data);
      });
  }, []);

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
    </>
  );
};

export default Navigation;
