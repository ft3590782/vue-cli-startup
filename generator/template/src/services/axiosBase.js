import axios from "axios";

axios.defaults.retry = 1;
axios.defaults.retryDelay = 500;

let axiosWrap = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL
});


axiosWrap.interceptors.request.use(async config => {
  return config;
});

axiosWrap.interceptors.response.use(
  result => {
    return result;
  },
  result => {
    return Promise.reject(result);
  }
);

export default axiosWrap;
