import React, { useState, useEffect } from "react";
import Axios from "./Axios";
// import requests from "../requests";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className = "row">
      <h2> {title} </h2>
    <div className = "row_posters"></div>
    </div>
  );
}

export default Row;
