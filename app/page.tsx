"use client";
/* eslint-disable @next/next/no-img-element */
import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>HOME</h1>
      <ul>
        <li>
          <input type="file" onChange={() => {}}></input>
        </li>
        <li>
          <Link href="imgScreen">이미지 보러가기</Link>
        </li>
        <li>
          <Link href="imgScreen/about">다른 화면 가기</Link>
        </li>
        <li>
          <Link href="imgScreen/1">아무 화면 가기</Link>
        </li>
      </ul>
    </div>
  );
}
