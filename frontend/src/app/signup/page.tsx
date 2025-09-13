"use client"
import { useState } from "react";
import NavBar from "../../app/components/NavBar"
import './signup.css'

export default function SignUp(){
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Valida que las contraseñas coincidan
    if (password !== confirmpassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const userData = {
      nombre,
      email,
      password,
      confirmpassword
    };
  console.log(userData)
    try {
      const response = await fetch("http://localhost:5000/api/register",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.status === 201) {
        alert("Usuario registrado exitosamente");
      } else {
        alert(data.message || "Error al registrar el usuario");
      }
    } catch (error) {
      alert("Error en la conexión");
      console.error("Error", error);
    }
  };

  return (
    <div className="login-page">
      <NavBar />
      <div className="profile-box" />
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="User name"
          required
          className="login-input"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="email@gmail.com"
          required
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          name="confirmpassword"
          placeholder="Confirm password"
          required
          className="login-input"
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" className="login-button">Registrar</button>
      </form>
    </div>
  );
}
