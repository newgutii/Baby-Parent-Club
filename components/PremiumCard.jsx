import Link from 'next/link';
import Image from 'next/image';
import styles from './PremiumCard.module.css';

export default function PremiumCard({ type = 'product', item }) {
  const isProduct = type === 'product';

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {item.image ? (
          <Image 
            src={item.image} 
            alt={item.title} 
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--color-text-muted)' }}>
            No image available
          </div>
        )}
      </div>

      <div className={styles.content}>
        <span className={styles.category}>{item.category}</span>
        <h3 className={styles.title}>{item.title}</h3>
        
        {isProduct ? (
          <div className={styles.price}>{item.price}</div>
        ) : (
          <p className={styles.description}>{item.excerpt}</p>
        )}

        <div className={styles.footer}>
          <Link href={item.href || '#'} className={styles.link}>
            {isProduct ? 'Ver Detalles' : 'Leer Artículo'}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
