import Axios from "Axios";
export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  responseType: "json"
});

