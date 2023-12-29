import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import "./regisdesign.css";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await api.post("/users", { username, password });
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  };

  return (
    <div className="bodyr">
      <h2 className="register">Register</h2>
      <input className="inputusername"
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input className="inputpassword"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister} className="registerbutton">Register</button>
      <button className="loginbutton"
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Register;
