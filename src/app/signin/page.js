"use client";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import SecondaryHeader from "@/components/secondaryHeader";
import PrimaryHeader from "@/components/primaryHeader";

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
      <SecondaryHeader />
      <div className="p-20 flex justify-center">
        <Link
          className="text-white bg-blue-900 rounded-lg p-4"
          href={`https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:3000/approved`}
        >
          Log in på TMDB
        </Link>
      </div>
      <PrimaryHeader />
    </div>
  );
}
