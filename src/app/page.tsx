"use client";

import Link from "next/link";
import Navigation from "./ui/Navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  const handlePost = () => {
    fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "test" }),
    });
  };

  return (
    <div>
      <h3>홈페이지</h3>
      <Link href="/practice">practice</Link>
      <h4>네비게이션</h4>
      <Navigation />
      <button onClick={handlePost}>
        test 디비에 todos 콜렉션에 데이터 하나 넣겠습니다.
      </button>
    </div>
  );
}
