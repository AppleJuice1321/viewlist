"use client";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import PrimaryHeader from "@/components/primaryHeader";
import SecondaryHeader from "@/components/secondaryHeader";

export default function SignIn() {
  const [token, setToken] = useState(null);

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
    <div>
      <SecondaryHeader/>
      <div className="w-screen h-[20em] flex justify-center items-center">
      <Link className="border-black rounded-lg p-2 bg-blue-900 text-white"
        href={`https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:3000/approved`}
        >
        Log in på TMDB
      </Link>
          </div>
        <PrimaryHeader/>
    </div>
  );
}
