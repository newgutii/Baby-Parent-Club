"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Registro() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // /////////////////////////////////////////////////////////////////////////
    // TODO: CONNECT REGISTRATION LOGIC TO CRM / AUTH PROVIDER HERE
    // Replace the redirect below with actual account creation logic.
    // /////////////////////////////////////////////////////////////////////////
    
    router.push('/foros');
  };

  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 2rem)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-bg-secondary)' }}>
      <div style={{ backgroundColor: 'var(--color-bg-primary)', padding: '4rem', border: '1px solid var(--color-border)', borderRadius: '2px', width: '100%', maxWidth: '600px', textAlign: 'center' }}>
        
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: '700', letterSpacing: '-0.03em', color: 'var(--color-text-main)', textTransform: 'uppercase', marginBottom: '2rem' }}>
          Baby<span style={{ color: 'var(--color-accent-terracotta)' }}>Parents</span>Club
        </div>

        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Únete al Club</h1>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem', fontSize: '0.95rem' }}>Crea tu cuenta gratuita para acceder a foros, eventos LIVE y recursos exclusivos respaldados por Baby Trend.</p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <label htmlFor="nombre" style={{ display: 'none' }}>Nombre</label>
              <input type="text" id="nombre" placeholder="Nombre" required />
            </div>
            <div>
              <label htmlFor="apellido" style={{ display: 'none' }}>Apellido</label>
              <input type="text" id="apellido" placeholder="Apellido" required />
            </div>
          </div>

          <div>
            <label htmlFor="email" style={{ display: 'none' }}>Correo electrónico</label>
            <input type="email" id="email" placeholder="Correo electrónico" required />
          </div>
          
          <div>
            <label htmlFor="password" style={{ display: 'none' }}>Contraseña</label>
            <input type="password" id="password" placeholder="Contraseña" required />
          </div>

          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--color-text-muted)', cursor: 'pointer' }}>
            <input type="checkbox" required style={{ width: 'auto', marginTop: '4px' }} />
            <span>Acepto los <Link href="#" style={{ textDecoration: 'underline' }}>Términos de Servicio</Link> y la <Link href="#" style={{ textDecoration: 'underline' }}>Política de Privacidad</Link>.</span>
          </label>

          <button type="submit" className="btn btn-accent" style={{ width: '100%', marginTop: '1rem' }}>Crear Cuenta</button>
        </form>

        <div style={{ marginTop: '3rem', fontSize: '0.95rem', color: 'var(--color-text-main)' }}>
          ¿Ya tienes cuenta? <Link href="/login" style={{ color: 'var(--color-accent-terracotta)', fontWeight: '600' }}>Inicia sesión</Link>
        </div>
      </div>
    </div>
  );
}
