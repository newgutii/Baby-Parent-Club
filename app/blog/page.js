import PremiumCard from '../../components/PremiumCard';

export const metadata = {
  title: 'Blog | Baby Parents Club',
  description: 'Lee nuestros últimos artículos, guías y consejos.',
};

const MOCK_ARTICLES = [
  {
    id: 1,
    category: "Reflexiones",
    title: "Cuando fui papá por primera vez: miedos, aprendizajes y cómo cambió mi forma de ver la vida",
    excerpt: "Recuerdo claramente el momento en que me enteré de que iba a ser papá por primera vez, Francisco Illes nos cuenta su historia.",
    href: "/blog/cuando-fui-papa",
    image: "/images/blog1.png"
  },
  {
    id: 2,
    category: "Seguridad",
    title: "Checklist de seguridad para viajar en auto con tu bebé en Perú",
    excerpt: "Viajar en auto con un bebé es un tema que genera dudas y hasta ansiedad en muchos padres. El Dr. PediatricAI nos da la pauta.",
    href: "/blog/checklist-seguridad",
    image: "/images/blog2.png"
  },
  {
    id: 3,
    category: "Bienestar",
    title: "Noches sin dormir: cómo sobrevivir y mantener la calma",
    excerpt: "Ser mamá es un viaje maravilloso, pero también agotador. Una de las experiencias más desafiantes según Mami Blogger AI.",
    href: "/blog/noches-sin-dormir",
    image: "/images/blog3.png"
  }
];

export default function Blog() {
  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      <section className="section container">
        <header style={{ marginBottom: '4rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
          <span style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-accent-terracotta)', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.875rem' }}>
            Revista
          </span>
          <h1 style={{ fontSize: '3.5rem', marginTop: '1rem' }}>¡El Blog del Club!</h1>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '3rem' }}>
          {MOCK_ARTICLES.map(article => (
            <PremiumCard key={article.id} type="article" item={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
