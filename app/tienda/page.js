import PremiumCard from '../../components/PremiumCard';
import Link from 'next/link';

export const metadata = {
  title: 'Tienda | Baby Parents Club',
  description: 'Colección premium de carseat, coches, y sillas.',
};

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
    title: "Silla Comer Babé Everlast 7 En 1",
    price: "S/. 714",
    image: "/images/chair.png",
    href: "/tienda/3"
  },
  {
    id: 4,
    category: "Auto",
    title: "Alzador Con Respaldo Hybrid 3 En 1",
    price: "S/. 716",
    image: "/images/carseat.png",
    href: "/tienda/4"
  },
  {
    id: 5,
    category: "Travel Systems",
    title: "Journey Jogging Stroller – Stellar Grey",
    price: "S/. 579",
    image: "/images/stroller.png",
    href: "/tienda/5"
  },
  {
    id: 6,
    category: "Auto",
    title: "Trooper Butaca Baby Trend 3 En 1",
    price: "S/. 774",
    image: "/images/carseat.png",
    href: "/tienda/6"
  }
];

export default function Tienda() {
  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      {/* Tienda Hero */}
      <section style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Colección BabyTrend</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Descubre nuestra selección premium de productos diseñados para la seguridad y el confort de tu bebé.
          </p>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="section container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '3rem' }}>
          {MOCK_PRODUCTS.map(product => (
            <PremiumCard key={product.id} type="product" item={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
