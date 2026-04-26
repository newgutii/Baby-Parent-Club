import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            Baby<span>Parents</span>Club
          </div>
        </div>
        
        <div className={styles.column}>
          <h4>Explora</h4>
          <div className={styles.links}>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/#tienda">Tienda</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/foros">Comunidad</Link>
          </div>
        </div>

        <div className={styles.column}>
          <h4>Eventos</h4>
          <div className={styles.links}>
            <Link href="/eventos">El Primer Mes (LIVE)</Link>
            <Link href="/eventos">Trucos para Dormir</Link>
          </div>
        </div>

        <div className={styles.column}>
          <h4>Newsletter</h4>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Enter your email" className={`input-minimal ${styles.newsletterInput}`} required />
            <button type="submit" className={styles.newsletterSubmit}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div className={`container ${styles.bottomBar}`}>
        <p>© Baby Parents Club - Todos los derechos reservados - 2025</p>
        <div className={styles.socials}>
          {/* Social Icons Placeholders */}
        </div>
      </div>
    </footer>
  );
}
