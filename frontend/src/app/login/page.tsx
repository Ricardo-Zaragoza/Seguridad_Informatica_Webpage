'use client'
import NavBar from "../../app/components/NavBar"
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import './login.css'

export default function LoginPage() {
  const router = useRouter()
 
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const username = formData.get('username')
    const password = formData.get('password')
 
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
 
    if (response.ok) {
      router.push('/profile')
    } else {
      // Maneja errores aquí
    }
  }
 
  return (
    <div className="login-page">
    <NavBar></NavBar>
    <div className="profile-box" />
    <form className="login-form">
        <input 
          type="text" 
          name="email" 
          placeholder="email" 
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
  );
};
