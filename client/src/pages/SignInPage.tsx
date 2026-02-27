import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { authService } from "../services/authService";

const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await authService.login({ email, password });
      localStorage.setItem("token", result.token); // เก็บ token ไว้ใช้
      alert("Sucess");
      navigate('/profile'); // หรือหน้า Todo ของคุณf
    } catch (err: any) {
      alert("Login Failed");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div style={{ marginBottom: "10px" }}>
          <label>email:</label>
          <br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label>Password:</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <Button label="Login" onClick={() => {}} variant="primary" />
      </form>

      <hr />
      <Button
        label="Back to Home"
        onClick={() => navigate("/")}
        variant="secondary"
      />
    </div>
  );
};

export default SignInPage;
