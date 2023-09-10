import Image from "next/image";
import Link from "next/link";
import Navigation from "./ui/Navigation";

export default function Home() {
  return (
    <div>
      <h3>홈페이지</h3>
      <Link href="/practice">practice</Link>
      <h4>네비게이션</h4>
      <Navigation />
    </div>
  );
}
