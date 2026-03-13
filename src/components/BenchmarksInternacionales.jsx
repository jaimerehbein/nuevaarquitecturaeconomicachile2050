import { Globe, Lightbulb, TrendUp, Database, UsersThree } from '@phosphor-icons/react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const benchmarks = [
  {
    country: "Singapur",
    strategy: "Prospectiva Dinámica",
    description: "Uso de 'signposts' y puntos de decisión flexibles en lugar de planes rígidos. Adaptación constante a la evolución tecnológica del H2V.",
    icon: <Globe weight="fill" />
  },
  {
    country: "Corea del Sur",
    strategy: "Misiones Tecnológicas",
    description: "Coordinación férrea Estado-Industria (Chaebols) bajo un 'Green New Deal' orientado a exportar tecnologías hegemónicas.",
    icon: <Lightbulb weight="fill" />
  },
  {
    country: "Noruega",
    strategy: "Gestión de Rentas",
    description: "Inversión del Fondo Soberano (NBIM) en infraestructura de energía renovable no cotizada para financiar el bienestar futuro.",
    icon: <TrendUp weight="fill" />
  },
  {
    country: "Estonia",
    strategy: "Estado Personal Digital",
    description: "Eliminación total de la fricción burocrática mediante interoperabilidad 100%. El 'Estado como Plataforma' para la inversión.",
    icon: <Database weight="fill" />
  },
  {
    country: "Finlandia",
    strategy: "Prospectiva Social Inclusiva",
    description: "Integración de la capacidad de carga de la naturaleza en el currículo nacional y cohesión social como motor de innovación.",
    icon: <UsersThree weight="fill" />
  }
];

export default function BenchmarksInternacionales() {
  const revealRef = useScrollReveal();

  return (
    <section id="benchmarks" className="section reveal" ref={revealRef}>
      <div className="section-header center">
        <span className="phase-label">BENCHMARK GLOBAL</span>
        <h2 className="font-serif">Referentes de Éxito Internacional</h2>
        <p>Para elevar el estándar chileno, integramos las mejores prácticas de naciones que han liderado transformaciones estructurales. Chile 2050 adopta la agilidad de Singapur, la misión de Corea y la gobernanza de Noruega.</p>
      </div>

      <div className="grid-5" style={{ marginTop: '3rem' }}>
        {benchmarks.map((item, index) => (
          <div key={index} className="card glass text-center" style={{ padding: '1.5rem' }}>
            <div className="card-icon" style={{ margin: '0 auto 1rem', color: 'var(--accent-primary)' }}>
              {item.icon}
            </div>
            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{item.country}</h4>
            <h5 style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>{item.strategy}</h5>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.5', color: 'var(--text-muted)' }}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
