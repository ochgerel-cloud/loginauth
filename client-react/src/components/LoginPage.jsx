// frontend/src/components/LoginPage.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";

const LoginPage = () => {
  const [username, setUsername] = useState("elon@tesla.com");
  const [password, setPassword] = useState("password1");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(username, password);
      console.log("NOW NAVIGATE TO HOME: ", response);

      navigate("/home"); // Хэрэглэгчийг нэвтэрсэн хуудас руу шилжүүлэх
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>ERROR: {error}</p>}
    </div>
  );
};

export default LoginPage;
