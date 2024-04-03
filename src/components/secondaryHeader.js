"use client";

import Heading from "./heading";
import ToggleTheme from "./toggleTheme";

export default function SecondaryHeader() {
  return (
    <header className="flex justify-center items-center p-6">
        {/* App title - My Movies */}
        <Heading heading="My Movies"/>
        {/* Dark / Light mode */}
        <ToggleTheme className="absolute end-0 mr-4"/>
    </header>
  );
}