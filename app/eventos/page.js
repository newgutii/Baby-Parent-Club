import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Eventos LIVE | Baby Parents Club',
  description: 'Conéctate con nuestros especialistas en vivo.',
};

export default function Eventos() {
  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      <section className="section container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Próximos Eventos</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '4rem' }}>
          Únete a nuestras sesiones streaming donde pediatras y expertos resuelven todas tus dudas en vivo.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', textAlign: 'left' }}>
          {/* Event 1 */}
          <div style={{ padding: '3rem', border: '1px solid var(--color-border)', borderRadius: '2px', backgroundColor: 'var(--color-bg-primary)', display: 'flex', gap: '3rem', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <span style={{ color: 'red', fontWeight: 'bold', fontSize: '0.85rem', letterSpacing: '0.1em' }}>• EN VIVO ESTE VIERNES</span>
              <h2 style={{ fontSize: '2rem', marginTop: '0.5rem', marginBottom: '1rem' }}>El Primer Mes</h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                Con el Dr. Peter Stephans. Todo lo que necesitas saber desde el momento en que sales del hospital hasta el primer mes de tu bebé.
              </p>
              <Link href="/foros" className="btn btn-accent">Reservar Cupo</Link>
            </div>
            <div style={{ width: '120px', height: '120px', backgroundColor: 'var(--color-bg-secondary)', borderRadius: '50%', flexShrink: 0, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span style={{ fontSize: '3rem' }}>👨‍⚕️</span>
            </div>
          </div>

          {/* Event 2 */}
          <div style={{ padding: '3rem', border: '1px solid var(--color-border)', borderRadius: '2px', backgroundColor: 'var(--color-bg-primary)', display: 'flex', gap: '3rem', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <span style={{ color: 'var(--color-accent-terracotta)', fontWeight: 'bold', fontSize: '0.85rem', letterSpacing: '0.1em' }}>PRÓXIMAMENTE</span>
              <h2 style={{ fontSize: '2rem', marginTop: '0.5rem', marginBottom: '1rem' }}>Trucos para que se duerman</h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                Con Mamá invitada: Loretta Marquez. Compartiremos experiencias y rutinas que sí funcionan para el sueño del bebé.
              </p>
              <Link href="/foros" className="btn">Avísame</Link>
            </div>
            <div style={{ width: '120px', height: '120px', backgroundColor: 'var(--color-bg-secondary)', borderRadius: '50%', flexShrink: 0, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span style={{ fontSize: '3rem' }}>👩‍👧</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
