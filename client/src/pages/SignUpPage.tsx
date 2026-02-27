import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { authService } from '../services/authService';

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  
  // สร้าง State สำหรับเก็บข้อมูล Form
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState<string>('');

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // ตรวจสอบว่า Password ตรงกันไหม
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

  try {
    // ส่ง name, email, password ตามที่ Backend รับใน req.body
    await authService.register({ 
      name: formData.username, // ใน UI คุณอาจใช้ชื่อตัวแปร username แต่ Backend รับ name
      email: formData.email, 
      password: formData.password 
    });
    alert("Register Success!");
    navigate('/signin');
  } catch (err: any) {
    alert(err.response?.data?.message || "Error");
  }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <form onSubmit={handleSignUp}>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label>
          <input 
            type="email" 
            required
            style={{ width: '100%', padding: '8px' }}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Username:</label>
          <input 
            type="text" 
            required
            style={{ width: '100%', padding: '8px' }}
            onChange={(e) => setFormData({...formData, username: e.target.value})}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Password:</label>
          <input 
            type="password" 
            required
            style={{ width: '100%', padding: '8px' }}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>Confirm Password:</label>
          <input 
            type="password" 
            required
            style={{ width: '100%', padding: '8px' }}
            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
          />
        </div>
        
        <Button label="Register" onClick={() => {}} variant="primary" />
      </form>

      <hr />
      <Button label="Back to Home" onClick={() => navigate('/')} variant="secondary" />
    </div>
  );
};

export default SignUpPage;