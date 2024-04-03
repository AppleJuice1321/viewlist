"use client";

import MovieSection from "@/components/movieSection";
import PrimaryHeader from "@/components/primaryHeader";
import SecondaryHeader from "@/components/secondaryHeader";

export default function Home() {
  return (
    <>
      {/* Header + App title & Theme-toggle */}
      <SecondaryHeader />
      <MovieSection/>
      {/* Header + navbar */}
      <PrimaryHeader />
    </>
  );
}
