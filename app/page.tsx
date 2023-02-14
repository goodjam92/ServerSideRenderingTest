/* eslint-disable @next/next/no-img-element */
import { Inter } from "@next/font/google";
import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>HOME</h1>
      <li>
        <Link href="serversiderendering">Server Side Rendering</Link>
      </li>
    </div>
  );
}

export default Home;
