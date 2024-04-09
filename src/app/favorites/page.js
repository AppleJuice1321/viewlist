"use client"

import axios from "axios";
import { useEffect, useState } from "react"

const API_KEY = "b501bb57edf97c9c373052ade4276d4c";

export default function Favorite() {
    const [requestToken, setRequestToken] = useState([])

    useEffect(() => {
        const getData = async () => {
          const response = await axios.get(
            ` https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`
          );                                                                                                                                                                                                                       
          setRequestToken(response.requestToken);
        };
        getData();
      }, []);

      console.log(requestToken)

    return (
        <></>
    )
}