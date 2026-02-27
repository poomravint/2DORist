export interface RegisterData {
  username: string;
  email: string;
  password?: string;
}

export interface LoginCredentials {
  username: string;
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