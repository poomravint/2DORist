import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { authService } from '../services/authService';

const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

const handleSignIn = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const result = await authService.signIn({ username, password });
    console.log('Login Success:', result);
    
    // เก็บ Token ลง LocalStorage (ตัวอย่างเบื้องต้น)
    localStorage.setItem('token', result.token);
    
    // เมื่อ Login สำเร็จ ให้ส่งไปหน้า Todo List (สมมติว่าคือหน้า /dashboard)
    navigate('/dashboard'); 
  } catch (error: any) {
    alert(error.response?.data?.message || 'Login failed!');
  }
};

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div style={{ marginBottom: '10px' }}>
          <label>Username:</label><br />
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>Password:</label><br />
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <Button label="Login" onClick={() => {}} variant="primary" />
      </form>

      <hr />
      <Button label="Back to Home" onClick={() => navigate('/')} variant="secondary" />
    </div>
  );
};

export default SignInPage;