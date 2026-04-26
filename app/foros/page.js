import Link from 'next/link';

export const metadata = {
  title: 'Comunidad | Baby Parents Club',
  description: 'Un espacio exclusivo para miembros. Únete a la comunidad de padres.',
};

export default function Foros() {
  return (
    <div style={{ paddingTop: 'var(--header-height)', minHeight: '80vh', display: 'flex', alignItems: 'center', backgroundColor: 'var(--color-bg-secondary)' }}>
      <section className="section container" style={{ textAlign: 'center', maxWidth: '600px' }}>
        <span style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-accent-terracotta)', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.875rem' }}>
          Exclusivo para Miembros
        </span>
        <h1 style={{ fontSize: '3.5rem', marginTop: '1rem', marginBottom: '2rem' }}>La Comunidad</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '3rem', lineHeight: 1.7 }}>
          El foro se encuentra en un entorno seguro y moderado donde compartimos tips, resolvemos dudas y conectamos. Inicia sesión o únete gratis hoy.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/login">
            <button className="btn btn-accent">Iniciar Sesión</button>
          </Link>
          <Link href="/registro">
            <button className="btn" style={{ backgroundColor: 'transparent', color: 'var(--color-text-main)', border: '1px solid var(--color-text-main)' }}>Registrarse</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
