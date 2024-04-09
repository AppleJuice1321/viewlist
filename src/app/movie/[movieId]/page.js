"use client";

import ToggleTheme from "@/components/toggleTheme";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import Heading from "@/components/heading";

const API_KEY = "b501bb57edf97c9c373052ade4276d4c";

export default function Page({ params }) {
  const [data, setData] = useState([]);
  const [genreData, setGenreData] = useState([]);
  const [video, setVideo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        ` https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${API_KEY}`
      );
      const response2 = await axios.get(
        ` https://api.themoviedb.org/3/movie/${params.movieId}/videos?api_key=${API_KEY}`
      );
      setData(response.data);
      setGenreData(response.data.genres);
      setVideo(response2.data.results);
    };
    getData();
  }, []);
  // console.log(data);
  // console.log(video);

  const URL = video.key

  return (
    <div>
      <header>
        <div className="flex justify-between items-center p-4">
          {/* App title - My Movies */}
          <Link href="/">
            <span className="material-symbols-outlined">west</span>
          </Link>
          {/* Dark / Light mode */}
          <ToggleTheme className="absolute end-0 pr-4" />
        </div>
        <iframe
          className="w-screen"
          src={"https://www.youtube.com/watch?v=" + URL}
          frameborder="0"
          title={video.name}
        />
      </header>

      <ul className="p-4">
        <div key={data.id}>
          <div className="flex justify-between">
            <h1>{data.title}</h1>
            <Link href="favorites">
              <span className="material-symbols-outlined">bookmark</span>
            </Link>
          </div>
          <div className="flex items-center">
            <span className="material-symbols-outlined text-yellow-500">
              grade
            </span>
            <h2>{data.vote_average}/10 IMDb</h2>
          </div>
          <div className="flex">
            {genreData &&
              genreData.map((genre) => {
                return (
                  <li
                    key={genre.id}
                    className="w-24 text-center rounded-2xl px-2 py-1 bg-blue-100 text-blue-600"
                  >
                    <h2 className="text-[8px]">{genre.name.toUpperCase()}</h2>
                  </li>
                );
              })}
          </div>
          <div className="flex">
            <span>
              <h1>Length</h1>
              <span>{data.runtime}</span>
            </span>
            <span>
              <h1>Language</h1>
              <span>{data.original_language}</span>
            </span>
            <span>
              <h1>Rating</h1>
              <span>{data.original_language}</span>
            </span>
          </div>
        </div>
        <div>
          <Heading heading="Description" />
          <p>{data.overview}</p>
        </div>
      </ul>
    </div>
  );
}
