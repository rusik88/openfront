import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://openback.os/',
  crossDomain: true,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

instance.interceptors.request.use((config) => {
  const formData = new FormData();
  const configData = Object.assign(config.data);
  if (config.method === 'post') {
    Object.keys(configData).forEach((key) => {
      formData.append(key, configData[key]);
    });
  }
  config.data = formData;
  return config;
});

export default instance;
