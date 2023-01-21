import axios from "axios";

const apiClient = () =>
  axios.create({
    // Later read this URL from an environment variable
    baseURL: "https://jsonplaceholder.typicode.com",
    paramsSerializer: {
      indexes: null,
    },
  });

export default apiClient;
