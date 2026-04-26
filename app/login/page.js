"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // /////////////////////////////////////////////////////////////////////////
    // TODO: CONNECT LOGIN LOGIC TO CRM / AUTH PROVIDER HERE
    // Replace the redirect below with actual authentication logic.
    // /////////////////////////////////////////////////////////////////////////
    
    router.push('/foros');
  };

  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 2rem)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-bg-secondary)' }}>
      <div style={{ backgroundColor: 'var(--color-bg-primary)', padding: '4rem', border: '1px solid var(--color-border)', borderRadius: '2px', width: '100%', maxWidth: '500px', textAlign: 'center' }}>
        
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: '700', letterSpacing: '-0.03em', color: 'var(--color-text-main)', textTransform: 'uppercase', marginBottom: '2rem' }}>
          Baby<span style={{ color: 'var(--color-accent-terracotta)' }}>Parents</span>Club
        </div>

        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Bienvenido de nuevo</h1>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem', fontSize: '0.95rem' }}>Ingresa tus datos para acceder a tu cuenta.</p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
          <div>
            <label htmlFor="email" style={{ display: 'none' }}>Correo electrónico</label>
            <input type="email" id="email" placeholder="Correo electrónico" required />
          </div>
          <div>
            <label htmlFor="password" style={{ display: 'none' }}>Contraseña</label>
            <input type="password" id="password" placeholder="Contraseña" required />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link href="#" style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>¿Olvidaste tu contraseña?</Link>
          </div>

          <button type="submit" className="btn btn-accent" style={{ width: '100%', marginTop: '1rem' }}>Iniciar Sesión</button>
        </form>

        <div style={{ marginTop: '3rem', fontSize: '0.95rem', color: 'var(--color-text-main)' }}>
          ¿Aún no tienes una cuenta? <Link href="/registro" style={{ color: 'var(--color-accent-terracotta)', fontWeight: '600' }}>Regístrate aquí</Link>
        </div>
      </div>
    </div>
  );
}
