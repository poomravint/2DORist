export interface RegisterData {
  name: string;
  email: string;
  password?: string;
}

export interface LoginCredentials {
  email: string;
  password?: string;
}

export interface AuthResponse {
  token: string;
}

export interface UserProfile {
  id: number;
  name: string;
  email: string;
}