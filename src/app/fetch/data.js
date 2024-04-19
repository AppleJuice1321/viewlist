"use client";

import Cta from "@/components/cta";
import Heading from "@/components/heading";
import axios from "axios";
import Link from "next/link";

import { useEffect, useState } from "react";

// fetch fra data - hovedesiden
// pre render detalje pagen
// hent dataene fra cachen under favorite siden

// + append_to_response

export default function Data() {
  const [data, setData] = useState([]);
  const [dataTwo, setDataTwo] = useState([]);
  const [dataThree, setDataThree] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        // &append_to_response=videos,casts
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      const responseTwo = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      const responseThree = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      setData(response.data.results);
      setDataTwo(responseTwo.data.results);
      setDataThree(responseThree.data.genres);
    };
    getData();
  }, []);

  const POPULAR =
    data &&
    data.map((movie) => {
      return (
        <Link href={`/movie/${movie.id}`} key={movie.id}>
          <li
            key={movie.id}
            className="flex items-center w-fill gap-4 text-sm my-6"
          >
            {/* string con */}
            <img
              className="block h-40 w-auto rounded-xl"
              src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
              alt="Movie Image"
            />
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-lg">{movie.title}</h1>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-yellow-500">
                  grade
                </span>
                <span>{movie.vote_average.toFixed(1)}/10 IMDb</span>
              </div>
            </div>
            <div></div>
          </li>
        </Link>
      );
    });

  const SHOWING =
    dataTwo &&
    dataTwo.map((movieTwo) => {
      return (
        <Link href={`/movie/${movieTwo.id}`} key={movieTwo.id}>
          <li key={movieTwo.id} className="flex flex-col">
            <img
              className="block h-52 w-60 rounded-xl"
              src={"https://image.tmdb.org/t/p/original" + movieTwo.poster_path}
              alt="Movie Image"
            />
            <div className="w-[10em]">
              <h1 className="font-bold text-lg">{movieTwo.title}</h1>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-yellow-500">
                  grade
                </span>
                <span>{movieTwo.vote_average.toFixed(1)}/10 IMDb</span>
              </div>
            </div>
          </li>
        </Link>
      );
    });

  return (
    <>
      {/* Showen movies section */}
      <div className="flex justify-between items-center pb-4">
        <Heading heading="Now Showing" />
        <Cta />
      </div>
      <ul className="flex overflow-x-scroll no-scrollbar overflow-y-hidden gap-6 pb-2 font-sans">
        {SHOWING}
      </ul>
      {/* Popular movies section */}
      <div className="flex justify-between items-center">
        <Heading heading="Popular" />
        <Cta />
      </div>
      <ul className="font-sans">{POPULAR}</ul>
    </>
  );
}
