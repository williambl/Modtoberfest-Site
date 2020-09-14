import Link from "next/link";
import React, { useState } from "react";
import NavUser from "./NavUser";

export default function NavBar() {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <nav>
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <a className="font-brand text-xl tracking-wide">Modtoberfest</a>
        </Link>
      </div>

      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          onClick={(e) => {
            setExpanded(!isExpanded);
          }}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className={`w-full ${
          isExpanded ? "block" : "hidden"
        } flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow flex flex-row-reverse items-center">
          <NavUser />

          <Link href="/faq">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              FAQ
            </a>
          </Link>

          <Link href="/about">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              About
            </a>
          </Link>

          <Link href="/">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Home
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}