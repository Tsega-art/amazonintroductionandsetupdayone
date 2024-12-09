import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-bde90/us-central1/api",
  baseURL: "https://api-rcu4mgbfgq-uc.a.run.app",
});

export { axiosInstance };
