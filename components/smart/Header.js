import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import InvContainedButton from "../reusable/InvContainedButton";

const Header = () => {
  const router = useRouter();
  const { route } = useRouter();
  const routeArray = route?.split("/").filter((el) => el !== "");

  const borderStyle = "border-b-2 border-blue-500";

  return (
    <div className="bg-white w-screen h-16 flex items-center justify-between px-10 sticky top-0 z-50 bg-opacity-50 backdrop-blur-xl">
      <h1 className="text-blue-800 text-lg font-bold">Salmon Project</h1>
      <ul className="flex items-center justify-between gap-5">
        <li className={routeArray.length === 0 ? borderStyle : ""}>
          <Link href="/">
            <a className="text-gray-500">Home</a>
          </Link>
        </li>
        <li className={routeArray.includes("posts") ? borderStyle : ""}>
          <Link href="/posts">
            <a className="text-gray-500">Articles</a>
          </Link>
        </li>
        <li>
          <Link href="/admin" passHref>
            <InvContainedButton variant="small">Sign in</InvContainedButton>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
