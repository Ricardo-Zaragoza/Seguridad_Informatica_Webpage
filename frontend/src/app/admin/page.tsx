'use client'
import NavBar2 from "../../app/components/Navbar2"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './page.css'
export default function UsuarioPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      // Si no hay token, redirigir al login
      router.push('/login');
    }
  }, []);

    return (
    <div className="login-page">
      <NavBar2/>
      <div className="profile-box" />
      <form className="login-form">
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          required 
          className="login-input"
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          required 
          className="login-input"
        />
        <button type="submit" className="login-button">Iniciar Sesión</button>
      </form>
    </div>
  )
}