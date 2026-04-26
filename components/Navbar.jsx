"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${menuOpen ? styles.navbarOpen : ''}`}>
      <div className={styles.navbarInner}>
        <Link href="/" className={styles.logo}>
          Baby<span>Parents</span>Club
        </Link>

        {/* Mobile menu wrapper logic handled in CSS module via .navLinksOpen class */}
        <div className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
          <Link href="/nosotros" className={styles.navLink}>Nosotros</Link>
          <Link href="/tienda" className={styles.navLink}>Tienda</Link>
          <Link href="/blog" className={styles.navLink}>Blog</Link>
          <Link href="/eventos" className={styles.navLink}>Eventos</Link>
          <Link href="/foros" className={styles.navLink}>Comunidad</Link>
          <Link href="/contacto" className={styles.navLink}>Contacto</Link>
        </div>

        <div className={styles.rightActions}>
          <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <Link href="/login" className={styles.userIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </Link>
          <div className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}
