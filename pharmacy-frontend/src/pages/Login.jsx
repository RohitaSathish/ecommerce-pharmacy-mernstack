import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", loginData);
    // Simple check for admin
    if (loginData.email === "admin@pharmacy.com" && loginData.password === "admin") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <Link to="/forgot-password">Forgot Password?</Link>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

