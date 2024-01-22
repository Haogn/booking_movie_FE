import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:6789",
})

export default instance;