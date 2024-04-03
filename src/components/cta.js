"use client";

import Link from "next/link";

export default function Cta() {
  return (
    <>
        {/* See more btn */}
        <Link className="border-2 rounded-2xl py-1 px-2 text-xs text-gray-400" href="/">See more</Link>
    </>
  );
}
