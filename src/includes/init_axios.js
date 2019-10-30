import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://openback.os/',
  crossDomain: true,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

instance.interceptors.request.use((config) => {
  if (config.method === 'post') {
    const formData = new FormData();
    const configDataKeys = Object.keys(config.data);
    for (let i = 0; i < configDataKeys.length; i += 1) {
      formData.append(configDataKeys[i], config.data[configDataKeys[i]]);
    }
    config.data = formData;
  }
  console.log('request', config);
  return config;
});

instance.interceptors.response.use((config) => {
  console.log('response', config);
  return config;
});

export default instance;
