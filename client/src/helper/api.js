import axios from "axios";
const instance = axios.create({
    baseURL: 'https://server-phi-wine.vercel.app' // Replace with your desired localhost server URL
  });
export default instance;
