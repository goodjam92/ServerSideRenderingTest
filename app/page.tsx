/* eslint-disable @next/next/no-img-element */
import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <div>
      <h1>HOME</h1>
      <ul>
        <li>
          <Link href="serversiderendering">Server Side Rendering</Link>
        </li>
        <li>
          <Link href="clientsiderendering">Client Side Rendering</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
