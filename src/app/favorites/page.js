"use client";

import getIds from "@/actions/get-ids";
import PrimaryHeader from "@/components/primaryHeader";
import SecondaryHeader from "@/components/secondaryHeader";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Favorites() {
    const [data, setData] = useState({})


    useEffect(() => {
        // getIds().then((ids) => console.log(ids));
        const getFavoriteMovies = async () => {
          const response = await axios.get(`https://api.themoviedb.org/3/account/21191127/favorite/movies`,       {
            headers: {
              Authorization: "Bearer " + process.env.NEXT_PUBLIC_READ_ACCESS_TOKEN,
            },
          })
          setData(response.data)
        }
        getFavoriteMovies()
      }, [])
      console.log(data);

  return (
    <div>
        <SecondaryHeader/>
        <section>
            
        </section>
        <PrimaryHeader/>
    </div>
  );
}
