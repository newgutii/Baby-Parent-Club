import Link from 'next/link';

export const metadata = {
  title: 'Página no encontrada | Baby Parents Club',
};

export default function NotFound() {
  return (
    <div style={{ paddingTop: 'var(--header-height)', minHeight: '80vh', display: 'flex', alignItems: 'center', backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
        <h1 style={{ fontSize: '8rem', fontFamily: 'var(--font-heading)', color: 'var(--color-accent-terracotta)', lineHeight: 1, marginBottom: '1rem' }}>404</h1>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Ups, parece que nos hemos perdido.</h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
          La página que estás buscando no existe o se ha movido a otro lugar.
        </p>
        <Link href="/" className="btn btn-accent">Volver al Inicio</Link>
      </div>
    </div>
  );
}
