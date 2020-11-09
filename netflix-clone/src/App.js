import "./App.css";
import Row from "./components/Row";
import requests from "./requests";

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
