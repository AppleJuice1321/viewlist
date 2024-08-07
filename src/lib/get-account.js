import axios from "axios";

export default async function getAccount(session_id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/account?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${session_id}`,
      { method: "GET", headers: { accept: "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
