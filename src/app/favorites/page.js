"use client"

import axios from "axios";
import { useEffect, useState } from "react"

const API_KEY = "b501bb57edf97c9c373052ade4276d4c";
const ACCOUNT_ID = "21191127"
const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json'
  },
  body: JSON.stringify({media_type: 'movie', media_id: 550, favorite: true})
};

export default function Favorite() {
    const [favorite, setFavorite] = useState([])

    useEffect(() => {
        const postData = async () => {
          const response = await axios.get(
            `https://api.themoviedb.org/3/account/${ACCOUNT_ID}/favorite?api_key=${API_KEY}`, options
          );                                                                                                                                                                                                                       
          setFavorite(response.favorite);
          console.log(response)
        };
        postData();
      }, []);


    return (
        <></>
    )
}