"use client";

import axios from "axios";

import { useEffect, useState } from "react";

export default function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3002/movies");
      setData(response.data);
    };
    getData();
  }, []);

//   const SHOWING_MOVIES =
//     data &&
//     data.map((movie) => (
//       <li key={movie.id}>
//         <figure>
//           <img className="block" src={movie.image} alt="Placeholder Img" />
//         </figure>
//         <h1>{movie.title}</h1>
//         <span>{movie.rating}</span>
//       </li>
//     ));

  const POPULAR_MOVIES =
    data &&
    data.map((movie) => (
      <li key={movie.id}>
        <img className="block" src={movie.image} alt="Placeholder Img" />
        <h1 className="font-bold">{movie.title}</h1>
        <div className="flex items-center">
          <span className="material-symbols-outlined">grade</span>
          <span>{movie.rating}</span>
        </div>
        <div className="flex">
        <span className="block border-2 rounded-2xl px-2 bg-blue-400 text-xs">{movie.genre[0]}</span>
        <span className="block border-2 rounded-2xl px-2 bg-blue-400 text-xs">{movie.genre[1]}</span>
        <span className="block border-2 rounded-2xl px-2 bg-blue-400 text-xs">{movie.genre[2]}</span>

        </div>
        <div className="flex items-center">
          <span className="material-symbols-outlined">schedule</span>
          <span>{movie.time}</span>
        </div>
      </li>
    ));

  return (
    <>
      {/* <ul className="flex overflow-auto">{SHOWING_MOVIES}</ul> */}
      <ul>{POPULAR_MOVIES}</ul>
    </>
  );
}
