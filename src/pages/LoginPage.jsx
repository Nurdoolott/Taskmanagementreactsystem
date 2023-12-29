import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import "./logindesign.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await api.get("/users", {
        params: { username, password },
      });

      if (response.data.length > 0) {
        localStorage.setItem("userId", response.data[0].id);
        console.log("Login successful");
        navigate("/task-page");
      } else {
        console.error("Invalid credentials");
      }
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="logbody">
      <h2 className="loglogin">Login</h2>
      <input className="loginputlogin"
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input className="loginputpassword"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className="logloginbutton">Login</button>
    </div>
  );
};

export default Login;
