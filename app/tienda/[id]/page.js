"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Simulated mock database retrieval based on id
const getProductData = (id) => {
  const products = {
    '1': {
      title: "Coche De Paseo Travel System Morph Negro",
      price: "S/. 1,099",
      image: "/images/stroller.png",
      description: "El sistema de viaje definitivo para padres modernos. Ligero, resistente y diseñado para maximizar el confort de tu bebé. Su plegado compacto a una mano te permite manejarlo con facilidad en la ciudad.",
      features: ["Plegado a una mano", "Chasis de aluminio ligero", "Múltiples posiciones de reclinado", "Canastilla XXL"],
      tags: ["Travel System", "Recién nacido a 20kg"]
    },
    '2': {
      title: "EZ-Lift™ PLUS Infant Car Seat",
      price: "S/. 529",
      image: "/images/carseat.png",
      description: "Seguridad americana certificada en su máxima expresión. Su asa de transporte ergonómica EZ-Lift permite un fácil traslado. Incluye base para el auto.",
      features: ["Protección de impacto lateral", "Arnés de 5 puntos", "Asa ergonómica", "Base con LATCH inclullido"],
      tags: ["Auto", "Nacimiento a 15kg"]
    },
    '3': {
      title: "Silla Comer Babé Everlast 7 En 1",
      price: "S/. 714",
      image: "/images/chair.png",
      description: "Una silla que crece con tu bebé. Sus 7 modos de uso garantizan años de durabilidad. Diseñada con acabados premium lavables.",
      features: ["7 modos de crecimiento", "Bandeja removible", "Tapiz wipe-clean", "Plegado ultra compacto"],
      tags: ["Sillas de comer", "6 meses a 5 años"]
    }
  };

  return products[id] || products['1']; // fallback
};

export default function ProductPage() {
  const params = useParams();
  const id = params?.id || '1';
  const product = getProductData(id);

  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 2rem)' }}>
      <section className="section container">
        
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)', gap: '4rem', alignItems: 'center' }}>
          
          {/* Image Display */}
          <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', aspectRatio: '1/1', position: 'relative' }}>
            <Image 
              src={product.image}
              alt={product.title}
              fill
              style={{ objectFit: 'contain', padding: '2rem' }}
            />
          </div>

          {/* Product Info */}
          <div>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              {product.tags.map(tag => (
                <span key={tag} style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '4px 12px', fontSize: '0.75rem', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {tag}
                </span>
              ))}
            </div>

            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: 1.2 }}>{product.title}</h1>
            <div style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--color-text-main)', fontWeight: '600', marginBottom: '2rem' }}>
              {product.price}
            </div>

            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              {product.description}
            </p>

            <ul style={{ listStylePath: 'inside', paddingLeft: '1.5rem', color: 'var(--color-text-muted)', marginBottom: '3rem', fontSize: '1rem' }}>
              {product.features.map(feat => (
                <li key={feat} style={{ marginBottom: '0.5rem' }}>{feat}</li>
              ))}
            </ul>

            <button 
              className="btn btn-accent" 
              style={{ width: '100%', padding: '20px', fontSize: '1rem' }}
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new CustomEvent('open-cart', { detail: product }));
                }
              }}
            >
              Agregar al Carrito
            </button>

            <div style={{ borderTop: '1px solid var(--color-border)', marginTop: '2rem', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              <span>✅ Envío Standard a todo Perú</span>
              <span>🛡️ Devolución fácil garantizada</span>
            </div>
          </div>

        </div>

      </section>
    </div>
  );
}
