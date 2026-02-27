import api from './api';
// นำเข้า Interface ที่เราจะสร้างในขั้นตอนถัดไป
import type { RegisterData, LoginCredentials, AuthResponse, UserProfile } from '../types/auth';

export const authService = {
  // สมัครสมาชิก (ใช้ /register ตาม routes ของคุณ)
  register: async (data: RegisterData): Promise<{ message: string }> => {
    const response = await api.post('/auth/register', data);
    return response.data;
  },

  // เข้าสู่ระบบ (ใช้ /login)
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },

  // ดึงข้อมูลโปรไฟล์ (ต้องใช้ Token)
  getProfile: async (): Promise<UserProfile> => {
    const response = await api.get('/auth/profile');
    return response.data;
  }
};