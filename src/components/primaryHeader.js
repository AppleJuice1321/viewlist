"use client";

import Navbar from "./navbar";

export default function PrimaryHeader() {
  return (
    <header className="fixed bottom-0 bg-white">
      {/* Navigation */}
      <Navbar/>
    </header>
  );
}
