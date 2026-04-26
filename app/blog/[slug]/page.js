import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Artículo | Baby Parents Club',
};

// Simulated mock database retrieval based on slug
const getArticleData = (slug) => {
  const articles = {
    'cuando-fui-papa': {
      title: "Cuando fui papá por primera vez: miedos, aprendizajes y cómo cambió mi forma de ver la vida",
      author: "Francisco Illes",
      date: "12 Abril, 2024",
      image: "/images/blog1.png",
      content: `Recuerdo claramente el momento en que me enteré de que iba a ser papá por primera vez. Una mezcla incontrolable de alegría, pánico y responsabilidad pura me golpeó al mismo tiempo. No hay manual para esto, te lo aseguro. Te compras el mejor carseat, lees veinte libros de crianza, pero cuando tienes a esa pequeña persona en tus brazos, todo cambia.

La vida se reestructura. Dejas de ser el centro de tu universo y de repente tus prioridades se alinean de una forma que nunca imaginaste. En el Baby Parents Club he encontrado no solo una guía técnica de qué productos comprar, sino un verdadero apoyo emocional de otras personas pasando exactamente por lo mismo.

A todos los papás primerizos: respiren. Van a cometer errores, pero el amor siempre compensa la falta de técnica. ¡Nos vemos en el foro!`,
    },
    'checklist-seguridad': {
      title: "Checklist de seguridad para viajar en auto con tu bebé en Perú",
      author: "Doctor PediatricAI",
      date: "28 Marzo, 2024",
      image: "/images/blog2.png",
      content: `Viajar en auto con un bebé es un tema que genera dudas y hasta ansiedad en muchos padres, especialmente en ciudades con el tráfico de Lima. La seguridad no es negociable, y aquí te damos el checklist definitivo.

1. **La Silla Correcta:** Asegúrate de que el carseat o butaca esté homologado y sea adecuado para el peso y la edad de tu bebé. Productos como el EZ-Lift™ PLUS son ideales para recién nacidos.
2. **Instalación Firme:** Una silla mal instalada pierde el 90% de su efectividad. Usa el sistema ISOFIX o LATCH si tu auto lo permite, o el cinturón de seguridad asegurándote de que no haya holgura.
3. **Sentido Contrario a la Marcha:** Es vital que los bebés viajen mirando hacia atrás el mayor tiempo posible (idealmente hasta los 2 años o más).
4. **Nada de Abrigos Gruesos:** No le pongas casacas gruesas al bebé antes de asegurarlo. Las correas deben quedar ajustadas al cuerpo.

Para cualquier duda técnica, en nuestra tienda BabyTrend te asesoramos con la instalación.`,
    },
    'noches-sin-dormir': {
      title: "Noches sin dormir: cómo sobrevivir y mantener la calma",
      author: "Mami Blogger AI",
      date: "05 Mayo, 2024",
      image: "/images/blog3.png",
      content: `Ser mamá es un viaje maravilloso, pero también agotador. Una de las experiencias más desafiantes son esas primeras semanas (o meses) donde dormir de un tirón parece una leyenda urbana.

La privación del sueño es real y afecta tu estado de ánimo, paciencia y energía. Aquí mis estrategias probadas para sobrevivir:

- **Duerme cuando el bebé duerma:** Olvídate de los platos sucios. Si tu bebé cierra los ojos, acuéstate tú también. Es supervivencia pura.
- **Pide ayuda:** No tienes que hacerlo todo sola. Que tu pareja, familiares o amigos se encarguen de otras tareas para que tú puedas descansar y enfocarte en el bebé.
- **Establece una rutina:** Conforme pasen las semanas, empieza a marcar la diferencia entre el día y la noche con luces y ruidos suaves.

Recuerda: esta etapa pasará. ¡Únete a nuestro próximo evento LIVE sobre técnicas de sueño para más tips de expertas!`,
    }
  };

  return articles[slug] || articles['cuando-fui-papa']; // fallback
};

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const article = getArticleData(slug);

  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      <article className="section container" style={{ maxWidth: '800px' }}>
        
        <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>{article.title}</h1>
          <div style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem' }}>
            <span>Por {article.author}</span>
            <span style={{ margin: '0 10px' }}>•</span>
            <span>{article.date}</span>
          </div>
        </header>

        <div style={{ position: 'relative', width: '100%', height: '400px', backgroundColor: 'var(--color-bg-secondary)', marginBottom: '4rem', borderRadius: '4px', overflow: 'hidden' }}>
          <Image 
            src={article.image}
            alt={article.title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div style={{ fontSize: '1.15rem', color: 'var(--color-text-main)', lineHeight: 1.8, marginBottom: '6rem' }}>
          {article.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx} style={{ marginBottom: '1.5rem' }} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          ))}
        </div>

        <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
          <Link href="/blog" className="btn" style={{ backgroundColor: 'transparent', color: 'var(--color-text-main)' }}>← Volver al Blog</Link>
          <Link href="/foros" className="btn btn-accent">Comentar en Foros</Link>
        </div>

      </article>
    </div>
  );
}
