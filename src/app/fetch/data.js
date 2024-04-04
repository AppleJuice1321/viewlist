"use client";

import Cta from "@/components/cta";
import Heading from "@/components/heading";
import axios from "axios";
import Link from "next/link";

import { useEffect, useState } from "react";

export default function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      // ${params.movieId}
      const response = await axios.get(`http://localhost:3002/movies/`);
      setData(response.data);
    };
    getData();
  }, []);

  const SHOWING_MOVIES =
    data &&
    data.map((movie) => (
      <Link href={`/movies/${movie.id}`}>
      <li key={movie.id} className="flex flex-col">
        <img
          className="block h-52 w-60 rounded-xl"
          src={movie.image}
          alt="Placeholder Img"
          />
        <div className="w-[10em]">
          <h1 className="font-bold text-lg">{movie.title}</h1>
          <div className="flex items-center">
            <span className="material-symbols-outlined text-yellow-500">
              grade
            </span>
            <span>{movie.rating}</span>
          </div>
        </div>
      </li>
          </Link>
    ));

  const POPULAR_MOVIES =
    data &&
    data.map((movie) => (
      <li
        key={movie.id}
        className="flex items-center w-fill gap-4 text-sm my-2"
      >
        <img
          className="block h-32 w-24 rounded-xl"
          src={movie.image}
          alt="Placeholder Img"
        />
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-lg">{movie.title}</h1>
          <div className="flex items-center">
            <span className="material-symbols-outlined text-yellow-500">
              grade
            </span>
            <span>{movie.rating}</span>
          </div>
          <div className="flex items-center justify-start flex-wrap gap-2">
            <span className="block rounded-2xl px-3 py-[2px] bg-blue-100 text-blue-600 text-[10px]">
              {movie.genre[0]}
            </span>
            <span className="block rounded-2xl px-3 py-[2px] bg-blue-100 text-blue-600 text-[10px]">
              {movie.genre[1]}
            </span>
            <span className="block rounded-2xl px-3 py-[2px] bg-blue-100 text-blue-600 text-[10px]">
              {movie.genre[2]}
            </span>
          </div>
          <div className="flex items-center">
            <span className="material-symbols-outlined ">schedule</span>
            <span>{movie.time}</span>
          </div>
        </div>
      </li>
    ));

  return (
    <>
      {/* Showen movies section */}
      <div className="flex justify-between items-center pb-4">
        <Heading heading="Now Showing" />
        <Cta />
      </div>
      <ul className="flex overflow-x-scroll no-scrollbar overflow-y-hidden gap-6 pb-2 font-sans">{SHOWING_MOVIES}</ul>

      {/* Popular movies section */}
      <div className="flex justify-between items-center pb-4">
        <Heading heading="Popular" />
        <Cta />
      </div>
      <ul className="font-sans">{POPULAR_MOVIES}</ul>
    </>
  );
}
