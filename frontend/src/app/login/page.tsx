'use client'
import NavBar from "../../app/components/NavBar"
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import './login.css'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const loginData = {
      email,
      password,
    }

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      })

      if (response.ok) {
        const data = await response.json()
        const token = data.token
        const rol = data.rol

        localStorage.setItem('token', token)

        if (rol === 'admin') {
          router.push('/admin')
        } else {
          router.push('/usuario')
        }
      } else {
        alert('Usuario o contraseña incorrectos')
      }
    } catch (error) {
      alert('Error de conexión con el servidor')
      console.error('Error de login:', error)
    }
  }

  return (
    <div className="login-page">
      <NavBar />
      <div className="profile-box" />
      <form className="login-form" onSubmit={handleSubmit}>
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
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
        <button type="submit" className="login-button">Iniciar Sesión</button>
      </form>
    </div>
  )
}
