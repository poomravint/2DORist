export interface SignInCredentials {
  username: string;
  password?: string; // ใส่ ? ถ้าต้องการให้เป็น optional แต่ปกติควรมีครับ
}

export interface SignUpData {
  email: string;
  username: string;
  password?: string;
}

export interface AuthResponse {
  token: string;      // JWT Token ที่ได้จาก Backend
  user: {
    id: string;
    username: string;
    email: string;
  };
  message?: string;
}