import axios from 'axios';

// กำหนด URL ของ Backend (เช่น Express หรือ NestJS ที่คุณจะทำต่อ)
const API_URL = 'http://localhost:5000/api'; 

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;