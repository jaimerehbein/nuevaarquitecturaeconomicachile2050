import React from 'react';
import { ShieldCheck, WarningCircle, ChartLineUp, GlobeHemisphereWest, Factory, Nut, Wind, Buildings, ProjectorScreenChart, Target, Coins, Fingerprint, FlagBanner } from '@phosphor-icons/react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const phases = [
  {
    icon: <Target weight="fill" />,
    id: "fase1", title: "FASE 1: Auditoría Conceptual",
    text: "Reconocimiento de un 'cambio de era' sistémico. El éxito no se mide en PIB crudo, sino en la sofisticación de las 'letras' (capacidades) para formar 'palabras' (productos básicos vs complejos)."
  },
  {
    icon: <Fingerprint weight="fill" />,
    id: "fase2", title: "FASE 2: Marco Teórico",
    text: "Eje en la Teoría de la Complejidad Económica (Hausmann). El crecimiento deriva del know-how acumulado. Chile debe transmutar de exportar energía a exportar ingeniería y servicios avanzados."
  },
  {
    icon: <WarningCircle weight="fill" />,
    id: "fase3", title: "FASE 3: El Diagnóstico del Estancamiento",
    text: "Chile invierte apenas 0.36% del PIB en I+D (OCDE exige >2.7%). La Productividad Total de Factores (PTF) está estancada. La crisis de inversión (23.8% del PIB) es el principal cuello de botella."
  },
  {
    icon: <GlobeHemisphereWest weight="fill" />,
    id: "fase4", title: "FASE 4: Geoeconomía y Friendshoring",
    text: "Chile como eslabón indispensable en la seguridad nacional de las potencias. Neutralidad Activa: Socio confiable para electromovilidad occidental mientras se mantiene el volumen con China."
  },
  {
    icon: <Wind weight="fill" />,
    id: "fase5", title: "FASE 5: Ventajas Competitivas Dinámicas",
    text: "Proyección de Hidrógeno Verde a 0.8-1.0 USD/kg para 2030 (el costo más bajo del mundo). Se requiere modernización masiva de la red de transmisión (Kimal-Lo Aguirre) para ser operacional en 2029."
  },
  {
    icon: <ProjectorScreenChart weight="fill" />,
    id: "fase6", title: "FASE 6: Arquitectura Sistémica",
    text: "Triple Motor: 1. Complejidad Verde (Productivo), 2. Estado Estratega (Institucional), 3. Bienestar Resiliente (Social). El fin es evitar la 'dependencia verde' (exportar crudo e importar tecnología)."
  },
  {
    icon: <Factory weight="fill" />,
    id: "fase7", title: "FASE 7: Ecosistemas e Innovación Abierta",
    text: "Misiones Nacionales: Consorcios público-privados para agregación de valor. Chile debe entrar en la 'zona de adyacencia' de alta complejidad (robótica extrema, sensores químicos)."
  },
  {
    icon: <Nut weight="fill" />,
    id: "fase8", title: "FASE 8: Infraestructura y Capital Humano",
    text: "Reforma profunda de la educación técnica. 'Skills Councils' sectoriales para cerrar el desajuste de habilidades en IA y automatización. Sin talento local, seremos solo un enclave tecnológico."
  },
  {
    icon: <Buildings weight="fill" />,
    id: "fase9", title: "FASE 9: Arquitectura Institucional",
    text: "Reforma a la 'permisología': Sistema unificado con silencios administrativos positivos. El Estado debe actuar como 'Inversor de Primera Instancia' (Mazzucato) con una Agencia de Misiones."
  },
  {
    icon: <Coins weight="fill" />,
    id: "fase10", title: "FASE 10: Arquitectura Financiera",
    text: "Estabilización de deuda/PIB bajo el 40%. Creación de Fondos de Capital Paciente y un mercado de carbono (ETS) sectorial para financiar la infraestructura de 300 GW renovables."
  },
  {
    icon: <ChartLineUp weight="fill" />,
    id: "fase11", title: "FASE 11: Simulación y Riesgos",
    text: "Modelamiento de equilibrio general para mitigar la 'Enfermedad Holandesa'. Vigilancia tecnológica ante la aparición de sustitutos del litio (Sodio) o retrasos en la paridad del H2V."
  },
  {
    icon: <ShieldCheck weight="fill" />,
    id: "fase12", title: "FASE 12: Mapa de Poder y Pacto Social",
    text: "Nuevo contrato social para la inversión. Ayudas estatales bidireccionales: facilidades regulatorias a cambio de reducción de huella hídrica e inversión en I+D local verificable."
  },
  {
    icon: <FlagBanner weight="fill" />,
    id: "fase13", title: "FASE 13: El Blueprint Final",
    text: "Chile como líder de la economía verde global. Convergencia proyectada (4% PIB tendencial) para alcanzar los estándares de vida de Australia y Nueva Zelanda hacia 2050."
  }
];

export default function ReporteOCDE() {
  const revealRef = useScrollReveal();

  return (
    <section id="informe-estrategico" className="section reveal" ref={revealRef}>
      <div className="section-header center">
        <span className="phase-label">DOCUMENTO RECTOR (VERSIÓN 2050)</span>
        <h2 className="font-serif">Auditoría Geoeconómica Internacional</h2>
        <p>Informe Estratégico de 13 Fases elaborado por el panel de expertos internacionales. Se establecen los parámetros estructurales, teóricos y productivos para salir de la trampa del ingreso medio hacia una soberanía humanista.</p>
      </div>

      <div className="phases-timeline" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2rem', 
          marginTop: '3rem' 
        }}>
        {phases.map((phase) => (
          <div key={phase.id} className="card glass" style={{ borderTop: '4px solid var(--accent-primary)', padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
              <div style={{ background: 'var(--accent-tertiary)', padding: '12px', borderRadius: '50%', color: 'var(--accent-primary)' }}>
                {phase.icon}
              </div>
              <h3 style={{ margin: 0, fontSize: '1.1rem', lineHeight: '1.3' }}>{phase.title}</h3>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--text)', lineHeight: '1.6' }}>{phase.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
