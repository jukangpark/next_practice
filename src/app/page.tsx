"use client";

import Link from "next/link";
import ToDoList from "./ui/ToDoList";

export default function Home() {
  return (
    <div>
      <h3>홈페이지</h3>
      <Link href="/practice">practice</Link>
      <ToDoList />
    </div>
  );
}
