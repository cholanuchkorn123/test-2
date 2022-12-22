import { useState } from "react";
import axios from "axios";

function useHook() {
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState([]);
  const seacrhmovie = async (q) => {
    let search = q || "a";
    const results = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=a55258223c93ec62405d7a0d8825af53&query=${search}`
    );

    setData(results.data.results);
    console.log(data);
  };
  const pickmovie = async (id) => {
    const results = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=a55258223c93ec62405d7a0d8825af53&language=en-US`
    );

    setDetail(results.data);
  };
  return { data, seacrhmovie, detail, pickmovie };
}

export default useHook;
