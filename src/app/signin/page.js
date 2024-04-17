"use client";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";

export default function SignIn() {
  const [token, setToken] = useState([]);

  async function createToken() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/authentication/token/new",
      {
        headers: {
          Authorization: "Bearer " + process.env.NEXT_PUBLIC_READ_ACCESS_TOKEN,
        },
      }
    );
    console.log(response);
    setToken(response.data.request_token);
  }

  useEffect(function () {
    createToken();
  }, []);

  return (
    <>
      <Link
        href={`https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:3000/approved`}
      >
        Deez nuts
      </Link>
    </>
  );
}
