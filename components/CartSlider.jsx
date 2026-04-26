"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CartSlider() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const handleOpenCart = (e) => {
      if (e.detail) {
        setCartItems(prev => [...prev, e.detail]);
      }
      setIsOpen(true);
    };

    window.addEventListener('open-cart', handleOpenCart);
    return () => window.removeEventListener('open-cart', handleOpenCart);
  }, []);

  if (!isOpen) return null;

  return (
    <>
      <div 
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 10000, transition: 'opacity 0.3s' }}
        onClick={() => setIsOpen(false)}
      />
      <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: '100%', maxWidth: '400px', backgroundColor: 'var(--color-bg-primary)', zIndex: 10001, padding: '2rem', display: 'flex', flexDirection: 'column', boxShadow: '-10px 0 30px rgba(0,0,0,0.1)', animation: 'slideIn 0.3s forwards' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>Tu Carrito</h2>
          <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--color-text-main)' }}>✕</button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {cartItems.length === 0 ? (
            <p style={{ color: 'var(--color-text-muted)', textAlign: 'center', marginTop: '2rem' }}>Tu carrito está vacío.</p>
          ) : (
            cartItems.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '80px', height: '80px', position: 'relative', backgroundColor: 'var(--color-bg-secondary)', borderRadius: '4px' }}>
                  <Image src={item.image} alt={item.title} fill style={{ objectFit: 'contain', padding: '0.5rem' }} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '0.25rem', fontFamily: 'var(--font-heading)', color: 'var(--color-text-main)' }}>{item.title}</h4>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{item.price}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '2rem', marginTop: 'auto' }}>
            {/* 
              /////////////////////////////////////////////////////////////////////////
              // TODO: CONNECT PAYMENT GATEWAY / CRM HERE
              // This button triggers the checkout flow.
              /////////////////////////////////////////////////////////////////////////
            */}
            <button className="btn btn-accent" style={{ width: '100%', padding: '16px' }} onClick={() => {
              window.location.href = '/checkout';
            }}>Proceder al Pago</button>
            <button className="btn" style={{ width: '100%', marginTop: '1rem', backgroundColor: 'transparent', color: 'var(--color-text-main)' }} onClick={() => setIsOpen(false)}>Seguir Comprando</button>
          </div>
        )}
        
      </div>
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  );
}
