import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://openback.os/',
  crossDomain: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
});

instance.interceptors.request.use((config) => {
  console.log(config);
  return config;
});

export default instance;
