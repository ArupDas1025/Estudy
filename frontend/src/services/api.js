// ```javascript id="a1b2c3"
import axios from "axios";

const API = axios.create({
  baseURL: "/api",
  withCredentials: true,
});

export default API;
// ```
