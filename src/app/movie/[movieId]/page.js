"use client";

import ToggleTheme from "@/components/toggleTheme";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import Heading from "@/components/heading";
import Cta from "@/components/cta";
import getIds from "@/actions/get-ids";

export default function Page({ params }) {
  const [data, setData] = useState([]);
  const [genreData, setGenreData] = useState([]);
  const [video, setVideo] = useState([]);
  const [cast, setCast] = useState([]);

  const baseYoutubeURL = "https://youtube.com/embed/";

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        ` https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      const response2 = await axios.get(
        ` https://api.themoviedb.org/3/movie/${params.movieId}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      const response3 = await axios.get(
        ` https://api.themoviedb.org/3/movie/${params.movieId}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      setData(response.data);
      setGenreData(response.data.genres);
      setVideo(
        response2.data.results.find(
          (video) =>
            video.name.toLowerCase() === "official trailer".toLowerCase()
        )
      );
      setCast(response3.data.cast);
    };
    getData();
  }, []);

  // console.log("https://www.youtube.com/embed/" + video.key + "&controls=0");
  const [add_favorite, setAdd_favorite] = useState({});

  useEffect(() => {
    const postMovie = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/account/21191127/favorite`,
        {
          method:'POST',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json', 
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTAxYmI1N2VkZjk3YzljMzczMDUyYWRlNDI3NmQ0YyIsInN1YiI6IjY2MTA1NTE3YjNmNmY1MDE0NzU2NzhmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rUJbuRF90nXa95aicaQnPDH_DHLRtg-RosXiclZuzuw",
          },
          body: JSON.stringify({
            media_type: "movie",
            media_id: 929590,
            favorite: true,
          }),
        }
      );
      setAdd_favorite(res.add_favorite);
      console.log(res);
    };
    postMovie();
  }, []);

  console.log(add_favorite)

  const CAST =
    cast &&
    cast.map((cast_member) => {
      return (
        <Link href={`/movie/${cast_member.id}`} key={cast_member.id}>
          <li key={cast_member.id} className="flex flex-col">
            <img
              className="block object-cover object-center h-24 w-24 rounded-lg"
              src={
                "https://image.tmdb.org/t/p/original" + cast_member.profile_path
              }
              alt="Movie Image"
            />
            <div className="w-24">
              <h1 className="font-bold text-lg">{cast_member.name}</h1>
            </div>
          </li>
        </Link>
      );
    });

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
        {/* video */}
        <iframe
          className="w-screen h-[15em]"
          src={baseYoutubeURL && baseYoutubeURL + video.key}
          title="Youtube video player"
          allowFullScreen
        ></iframe>
      </header>

      <ul className="p-4">
        <div key={data.id}>
          <div className="flex justify-between">
            <h1>{data.title}</h1>

            <span className="material-symbols-outlined">bookmark</span>
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
        <section>
          <div className="flex justify-between items-center pb-4">
            <Heading heading="Cast" />
            <Cta />
          </div>
          <ul className="flex overflow-x-scroll no-scrollbar gap-4 overflow-y-hidden font-sans">
            {CAST}
          </ul>
        </section>
      </ul>
    </div>
  );
}
