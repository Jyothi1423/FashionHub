import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      });

      if (res.data.token) {
        // ✅ Store token
        localStorage.setItem("token", res.data.token);

        // ✅ ADD THESE (for auto logout after 30 mins)
        localStorage.setItem("loginTime", Date.now());
        localStorage.setItem("isAuth", "true");

        alert("Login success!");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      alert("Login failure. Please check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;