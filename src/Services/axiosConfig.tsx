import axios from "axios";
import { v4 as guid } from "uuid";

axios.interceptors.request.use(
  (config) => {
    config.headers["X-CorrelationId"] = guid();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
