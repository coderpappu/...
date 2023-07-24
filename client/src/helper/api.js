import axios from "axios";
const instance = axios.create({
    baseURL: 'https://account-authentication-system.vercel.app' // Replace with your desired localhost server URL
  });
export default instance;
