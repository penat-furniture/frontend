import axios from 'axios';

const api = axios.create ({
  // baseURL: 'https://api.penat.su/api/',
  baseURL: 'http://127.0.0.1:8080/api/',
});

export default api;
