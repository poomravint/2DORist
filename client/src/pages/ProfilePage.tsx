import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import type { UserProfile } from '../types/auth';
import Button from '../components/Button';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const data = await authService.getProfile();
        setUser(data);
      } catch (err: any) {
        console.error('Failed to fetch profile:', err);
        setError('Session expired or unauthorized. Please login again.');
        // ถ้าดึงโปรไฟล์ไม่ได้ (เช่น Token หมดอายุ) ให้ลบ token และเด้งไปหน้า login
        localStorage.removeItem('token');
        setTimeout(() => navigate('/signin'), 3000); 
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/signin');
  };

  if (loading) return <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading profile...</div>;

  if (error) return <div style={{ color: 'red', textAlign: 'center', marginTop: '50px' }}>{error}</div>;

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
      <h1>User Profile</h1>
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
        {user ? (
          <>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </>
        ) : (
          <p>No user data found.</p>
        )}
      </div>

      <div style={{ marginTop: '20px' }}>
        <Button label="Go to Todo List" onClick={() => navigate('/todos')} variant="primary" />
        <Button label="Logout" onClick={handleLogout} variant="secondary" />
      </div>
    </div>
  );
};

export default ProfilePage;