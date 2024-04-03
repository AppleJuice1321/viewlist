"use client";

import { useState } from "react";

export default function ToggleTheme({ className }) {
  const [toggle, setToggle] = useState(true);

  //   Importer dette til page.js og lave en if statement med: if true then change color!
  const toggleTheme = () => {
    setToggle(!toggle);
  };

  return (
    <div className={className}>
      {toggle ? (
        <div
          onClick={toggleTheme}
          className="rounded-2xl bg-gray-400 w-10 p-[2px]"
        >
          <div className="bg-white rounded-2xl h-5 w-5"></div>
        </div>
      ) : (
        <div
          onClick={toggleTheme}
          className="rounded-2xl bg-white w-10 p-[2px]"
        >
          <div className="bg-black rounded-2xl h-5 w-5 ml-4"></div>
        </div>
      )}
    </div>
  );
}
