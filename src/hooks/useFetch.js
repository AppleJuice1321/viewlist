"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export const UseFetch = () => {
  const [ data, setData] = useState([]);
  const [ error, setError] = useState();
  const [ loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(url);                                                                                                                                                                                                                                            
        setData(response.data);
      } catch(err) {
        console.log(err)
      } finally {

      }
    });

  }, [url]);

  return { data }
}