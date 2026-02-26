import api from './api';
import { SignInCredentials, SignUpData, AuthResponse } from '../types/auth';

export const authService = {
  // ฟังก์ชันสำหรับ Sign In
  signIn: async (credentials: SignInCredentials): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/auth/signin', credentials);
    return response.data;
  },

  // ฟังก์ชันสำหรับ Sign Up
  signUp: async (userData: SignUpData): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/auth/signup', userData);
    return response.data;
  },
};