"use client";

import Data from "@/fetch/data";
import Cta from "./cta";
import Heading from "./heading";

export default function MovieSection() {
  return (
    <section className="flex flex-col p-4">
      <div className="flex justify-between items-center pb-4">
        <Heading heading="Now Showing" />
        <Cta />
      </div>
      <Data />
    </section>
  );
}
