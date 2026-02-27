import React from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

const GuestRoute: React.FC<Props> = ({ children }) => {
  const token = localStorage.getItem('token');

  if (token) {
    // ถ้ามี Token แล้ว (Login อยู่) ห้ามเข้าหน้านี้ ให้เด้งไปหน้า Profile แทน
    return <Navigate to="/profile" replace />;
  }

  // ถ้าไม่มี Token (เป็น Guest) ให้เข้าถึงหน้า Login/Register ได้ปกติ
  return <>{children}</>;
};

export default GuestRoute;