import React, { useState, useEffect } from "react";
import Axios from "./Axios";

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
    <div className="row">
      <h2> {title} </h2>
      <div className="row-posters"></div>
    </div>
  );
}

export default Row;
