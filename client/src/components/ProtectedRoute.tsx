import React from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    // ถ้าไม่มี token ให้ Redirect ไปหน้า signin
    return <Navigate to="/" replace />;
  }

  // ถ้ามี token ให้แสดงเนื้อหาข้างใน (children) ตามปกติ
  return <>{children}</>;
};

export default ProtectedRoute;