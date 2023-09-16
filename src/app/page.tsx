"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "./ui/Navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("http://localhost:3000/api/hello")
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  return (
    <div>
      <h3>홈페이지</h3>
      <Link href="/practice">practice</Link>
      <h4>네비게이션</h4>
      <Navigation />
    </div>
  );
}
