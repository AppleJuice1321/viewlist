"use client"

import { UseFetch } from "./useFetch"

const API_KEY = "b501bb57edf97c9c373052ade4276d4c";

export default function UseTMDB() {
    const { data } = UseFetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)

    return { data }
  }