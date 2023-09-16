import { NextResponse } from "next/server";

import insertToDo from "@services/todos/insertToDo";
import getAllToDos from "@services/todos/getAllToDos";

export async function POST(req: Request) {
  try {
    const newTodo = await insertToDo({ id: 1, title: "Hello World" });
    return NextResponse.json({ newTodo });
  } catch (error) {
    console.error("Error inserting todo:", error);
    return NextResponse.error();
  }
}

export async function GET(req: Request, res: Response) {
  try {
    const arrayToDos = await getAllToDos();
    return NextResponse.json(arrayToDos);
  } catch (error) {
    console.error("Error getting todos:", error);
    return NextResponse.error();
  }
}
