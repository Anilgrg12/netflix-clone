import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
// import axios from './axios';

function App() {
  return (
    <div className="App">
      Learn React
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOrginals} />
      <Row title="Trending Now" fetchUrl={requests.fecthTrending} />
    </div>
  );
}

export default App;
