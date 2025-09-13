'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

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
    <div>
      <h1>Página de admin</h1>
    </div>
  );
}