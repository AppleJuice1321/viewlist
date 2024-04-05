"use client"

import axios from "axios";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    const getMovie = async () => {
      const response = await axios.get(`http://localhost:3002/movies/${params.movieId }`);
      console.log(response)
      setMovie(response.data);
    };
    getMovie();
  }, []);
  console.log(movie)
  return (
    <section>
      <h1>{movie.title}</h1>
      <span>{movie.rating}</span>
      <span>{movie.genre[0]}</span>
      <span>{movie.genre[1]}</span>
      <span>{movie.genre[2]}</span>
    </section>
  );
}
