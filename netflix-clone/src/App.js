import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";


function App() {
  return (
    <div className="App">
      Learn React Redux!!!!
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOrginals} />
      <Row title="Trending Now!!!!" fetchUrl={requests.fecthTrending} />
    </div>
  );
}

export default App;
