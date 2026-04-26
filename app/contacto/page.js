"use client";

import Script from 'next/script';
import { useState } from 'react';

// Client component wrapper for metadata separation if needed, but since it's "use client", we can't export metadata here directly in Next.js 13+.
// We will just rename this to standard component since Next.js allows it if we remove metadata, or we can just leave it client-rendered and ignore metadata for this mock step.
// Actually, to keep it simple, I'll remove metadata export and let layout handle it.

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 5000);
  };

  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      {/* Mock reCAPTCHA loading script for SEO/Security compliance sin logica */}
      <Script src="https://www.google.com/recaptcha/api.js?render=explicit" strategy="lazyOnload" />

      <section className="section container">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1.5fr)', gap: '6rem' }}>
          
          <div>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Contacto</h1>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem', fontSize: '1.1rem' }}>
              ¿Tienes preguntas, sugerencias o simplemente quieres saludar? Déjanos tu mensaje y nos pondremos en contacto contigo lo más pronto posible.
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <strong style={{ display: 'block', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>Email</strong>
              <a href="mailto:info@babyparentsclub.com" style={{ color: 'var(--color-accent-terracotta)' }}>info@babyparentsclub.com</a>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <strong style={{ display: 'block', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>WhatsApp</strong>
              <a href="tel:+51999999999" style={{ color: 'var(--color-text-muted)' }}>+51 999 999 999</a>
            </div>

            <div style={{ marginBottom: '4rem' }}>
              <strong style={{ display: 'block', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>Sala de Exhibición (Showroom)</strong>
              <span style={{ color: 'var(--color-text-muted)' }}>Surco, Lima, Perú.</span>
            </div>

            {/* FAQ Accordion Mockup */}
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Preguntas Frecuentes</h3>
              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1rem', marginBottom: '1rem' }}>
                <strong style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--color-text-main)' }}>¿El registro en el club tiene algún costo?</strong>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem', fontSize: '0.95rem' }}>No, registrarse en nuestra comunidad es 100% gratuito.</p>
              </div>
              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1rem', marginBottom: '1rem' }}>
                <strong style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--color-text-main)' }}>¿Realizan envíos fuera de Lima?</strong>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem', fontSize: '0.95rem' }}>Sí, a través de nuestra alianza con Olva Courier enviamos a todo el Perú.</p>
              </div>
              <div style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', paddingTop: '1rem', paddingBottom: '1rem' }}>
                <strong style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--color-text-main)' }}>¿Cómo asisto a los eventos LIVE?</strong>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem', fontSize: '0.95rem' }}>Siendo miembro registrado, te llegará el link de Zoom directamente a tu correo horas antes del evento.</p>
              </div>
            </div>

          </div>

          <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '4rem', borderRadius: '2px', height: 'fit-content' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Envíanos un mensaje</h3>
            
            {enviado ? (
              <div style={{ padding: '2rem', backgroundColor: 'var(--color-accent-sage)', color: 'var(--color-bg-primary)', textAlign: 'center', borderRadius: '4px' }}>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>¡Mensaje Enviado!</h4>
                <p>Nos pondremos en contacto contigo pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <label htmlFor="nombre" style={{ display: 'none' }}>Nombre(s)</label>
                    <input type="text" id="nombre" name="nombre" placeholder="Nombre(s)" required />
                  </div>
                  <div>
                    <label htmlFor="apellido" style={{ display: 'none' }}>Apellidos</label>
                    <input type="text" id="apellido" name="apellido" placeholder="Apellidos" required />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="correo" style={{ display: 'none' }}>Correo electrónico</label>
                  <input type="email" id="correo" name="correo" placeholder="Correo electrónico" required />
                </div>

                <div>
                  <label htmlFor="asunto" style={{ display: 'none' }}>Asunto</label>
                  <input type="text" id="asunto" name="asunto" placeholder="Asunto" required />
                </div>

                <div>
                  <label htmlFor="mensaje" style={{ display: 'none' }}>Tu mensaje</label>
                  <textarea id="mensaje" name="mensaje" placeholder="Tu mensaje" rows={5} required></textarea>
                </div>

                <div style={{ marginTop: '1rem' }}>
                  <button type="submit" className="btn btn-accent" style={{ padding: '16px 32px' }}>Enviar Mensaje</button>
                </div>
                
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '1rem' }}>
                  Este sitio está protegido por reCAPTCHA y la Política de Privacidad de Google.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
