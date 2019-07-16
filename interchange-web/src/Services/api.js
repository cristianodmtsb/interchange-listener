import axios from "axios";

const api = axios.create({
  baseURL: "https://interchange-listener-api.herokuapp.com"
});

export default api;
