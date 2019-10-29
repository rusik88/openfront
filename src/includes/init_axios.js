import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://openback.os/',
  crossDomain: true,
});

instance.interceptors.request.use((config) => {
  console.log(config);
  return config;
});

export default instance;
