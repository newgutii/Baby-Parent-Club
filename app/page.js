import Image from 'next/image';
import Link from 'next/link';
import PremiumCard from '../components/PremiumCard';
import styles from './page.module.css';

const MOCK_PRODUCTS = [
  {
    id: 1,
    category: "Travel Systems",
    title: "Coche De Paseo Travel System Morph Negro",
    price: "S/. 1,099",
    image: "/images/stroller.png",
    href: "/tienda/1"
  },
  {
    id: 2,
    category: "Auto",
    title: "EZ-Lift™ PLUS Infant Car Seat",
    price: "S/. 529",
    image: "/images/carseat.png",
    href: "/tienda/2"
  },
  {
    id: 3,
    category: "Corralitos y Sillas",
    title: "Silla Comer Babé Baby Trend Everlast 7 En 1",
    price: "S/. 714",
    image: "/images/chair.png",
    href: "/tienda/3"
  }
];

const MOCK_ARTICLES = [
  {
    id: 1,
    category: "Reflexiones",
    title: "Cuando fui papá por primera vez: miedos, aprendizajes y cómo cambió mi forma de ver la vida",
    excerpt: "Recuerdo claramente el momento en que me enteré de que iba a ser papá por primera vez...",
    href: "/blog/cuando-fui-papa",
    image: "/images/blog1.png"
  },
  {
    id: 2,
    category: "Seguridad",
    title: "Checklist de seguridad para viajar en auto con tu bebé en Perú",
    excerpt: "Viajar en auto con un bebé es un tema que genera dudas y hasta ansiedad en muchos padres...",
    href: "/blog/checklist-seguridad",
    image: "/images/blog2.png"
  }
];

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image 
            src="/images/hero.png"
            alt="Familia feliz"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
        </div>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={`${styles.heroTitle} animate-fade-in`}>
            Eleva tu Paternidad.
          </h1>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s', display: 'flex', justifyContent: 'center' }}>
            <Link href="/foros" className="btn btn-accent">Únete al Club</Link>
          </div>
        </div>
      </section>

      {/* Core Values Strip */}
      <section style={{ padding: '4rem 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🛡️</div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Seguridad Garantizada</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>Manejamos equipos avalados por pediatras mundiales y testeados bajo altos parámetros.</p>
          </div>
          <div>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🤝</div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Comunidad Real</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>Padres como tú compartiendo tips honestos, dudas sin tapujos y aprendizajes valiosos.</p>
          </div>
          <div>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>👩‍⚕️</div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Respaldo Médico</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>Sesiones live en foros privados con pediatras y psicólogos que guiarán tus pasos.</p>
          </div>
        </div>
      </section>

      <section id="tienda" className="section container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Nuestra Colección Premium</h2>
          <Link href="/tienda" className={styles.viewAll}>Ver toda la tienda</Link>
        </div>
        <div className={styles.grid}>
          {MOCK_PRODUCTS.map((product) => (
            <PremiumCard key={product.id} type="product" item={product} />
          ))}
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Revista y Comunidad</h2>
            <Link href="/blog" className={styles.viewAll}>Ir al Blog</Link>
          </div>
          <div className={styles.gridAlt}>
            <div className={styles.grid} style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              {MOCK_ARTICLES.map((article) => (
                <PremiumCard key={article.id} type="article" item={article} />
              ))}
            </div>
            
            <div className={styles.eventCard}>
              <span className={styles.eventLabel} style={{ color: 'white' }}>Próximo Evento (LIVE)</span>
              <h3>El Primer Mes</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                Con el Dr. Peter Stephans. Una sesión especial para apoyarnos en esta maravillosa aventura.
              </p>
              <Link href="/eventos" className="btn btn-accent">
                Reservar Cupo
              </Link>
              
              <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                <span className={styles.eventLabel} style={{ backgroundColor: 'transparent', border: '1px solid var(--color-accent-terracotta)', color: 'var(--color-accent-terracotta)' }}>Próximamente</span>
                <h3 style={{ marginTop: '1rem' }}>Trucos para que se duerman</h3>
                <p style={{ color: 'var(--color-text-muted)' }}>Con mamá invitada: Loretta Marquez.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', letterSpacing: '-0.03em' }}>Lo que dicen nuestros padres</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', textAlign: 'left' }}>
          <div style={{ padding: '3rem', border: '1px solid var(--color-border)' }}>
            <p style={{ fontStyle: 'italic', color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>"Logré conciliar el sueño después de tres meses gracias al Live de Loretta en los Foros. Este club ha sido mi salvavidas."</p>
            <strong style={{ fontFamily: 'var(--font-heading)' }}>Mariana L., Mamá de Leo</strong>
          </div>
          <div style={{ padding: '3rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-secondary)' }}>
            <p style={{ fontStyle: 'italic', color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>"Compré el carseat guiado por el blog técnico. Fue la mejor inversión. Tanta información puede marear, pero aquí es directa y honesta."</p>
            <strong style={{ fontFamily: 'var(--font-heading)' }}>Diego P., Papá primerizo</strong>
          </div>
        </div>
      </section>
    </>
  );
}
