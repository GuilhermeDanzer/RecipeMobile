import axios from "axios";
const instance = axios.create({
  baseURL: "https://6d2ee0b4860e.ngrok.io",
});

export default instance;
