import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to FullStack TodoApp</h1>
      <p>Please sign in or create an account to continue</p>
      
      <div>
        <Button 
          label="Sign In" 
          onClick={() => navigate('/signin')} 
          variant="primary" 
        />
        <Button 
          label="Sign Up" 
          onClick={() => navigate('/signup')} 
          variant="secondary" 
        />
      </div>
    </div>
  );
};

export default HomePage;