import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Nosotros | Baby Parents Club',
  description: 'Conoce la historia detrás del Baby Parents Club en Perú.',
};

export default function Nosotros() {
  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      <section className="section" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Nuestra Historia</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
            "Porque no hay manual para nuevos padres, pero sí un lugar donde podemos ayudarnos."
          </p>
        </div>
      </section>

      <section className="section container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>El Club</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Baby Parents Club nace para ofrecer a padres y madres en Perú un lugar de encuentro, aprendizaje y apoyo. Con el respaldo de Baby Trend, compartimos consejos prácticos, guías de compra y acceso a productos seguros y funcionales para bebés.
            </p>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
              Tenemos papás con alguna experiencia con hijos más grandes, primerizos igual que muchos de ustedes y también pediatras y psicólogos expertos para apoyarnos a todos en esta maravillosa aventura de ser papás y mamás.
            </p>
            <Link href="/foros" className="btn btn-accent">Únete a la Comunidad</Link>
          </div>
          <div style={{ position: 'relative', aspectRatio: '4/5', backgroundColor: 'var(--color-bg-secondary)' }}>
             <Image 
                src="/images/nosotros.png"
                alt="Grupo de padres compartiendo experiencias"
                fill
                style={{ objectFit: 'cover' }}
             />
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', letterSpacing: '-0.03em' }}>Nuestros Especialistas</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
            
            <div style={{ backgroundColor: 'var(--color-bg-primary)', padding: '3rem', border: '1px solid var(--color-border)' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--color-accent-sage)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>👨‍⚕️</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Dr. Peter Stephans</h3>
              <p style={{ color: 'var(--color-accent-terracotta)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.05em', marginBottom: '1rem' }}>Pediatra Principal</p>
              <p style={{ color: 'var(--color-text-muted)' }}>Especialista en desarrollo infantil y cuidados neonatales.</p>
            </div>

            <div style={{ backgroundColor: 'var(--color-bg-primary)', padding: '3rem', border: '1px solid var(--color-border)' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--color-accent-taupe)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>👩‍⚕️</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Dra. Ana Silva</h3>
              <p style={{ color: 'var(--color-accent-terracotta)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.05em', marginBottom: '1rem' }}>Psicóloga Familiar</p>
              <p style={{ color: 'var(--color-text-muted)' }}>Brindando apoyo emocional a padres durante transiciones vitales.</p>
            </div>

            <div style={{ backgroundColor: 'var(--color-bg-primary)', padding: '3rem', border: '1px solid var(--color-border)' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--color-border)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>👩‍👧</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Loretta Marquez</h3>
              <p style={{ color: 'var(--color-accent-terracotta)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.05em', marginBottom: '1rem' }}>Consultora de Sueño</p>
              <p style={{ color: 'var(--color-text-muted)' }}>Coach certificada en rutinas de sueño para bebés y toddlers.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
