"use client";

import Link from "next/link";

export default function Navbar() {


  return (
    // Navigation - 3 links
    <nav className="flex justify-between px-10 py-4 w-screen">
      <Link className="text-gray-400" href="/">
        <span className="material-symbols-outlined">movie</span>
      </Link>
      <Link className="text-gray-400" href="/">
        <span className="material-symbols-outlined">book_4</span>
      </Link>
      <Link className="text-gray-400" href="favorites">
        <span className="material-symbols-outlined">bookmark</span>
      </Link>
    </nav>
  );
}
