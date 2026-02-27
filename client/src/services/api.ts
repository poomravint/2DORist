import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/', // เช็คให้ตรงกับ port ของ server.ts
});

// ดึง Token จาก LocalStorage แนบไปกับทุก Request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;