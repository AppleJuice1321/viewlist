"use client";

export default function Heading(props) {
  return (
    <>
    {/* Title for sections */}
    <h1 className="text-xl font-bold">{props.heading}</h1>
    </>
  );
}