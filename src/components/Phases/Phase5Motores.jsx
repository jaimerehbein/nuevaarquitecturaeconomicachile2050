import React from 'react';
import { Drop, Cpu, Database, Plant, Anchor } from '@phosphor-icons/react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Phase5Motores() {
  const revealRef = useScrollReveal();

  return (
    <section id="motores" className="section reveal" ref={revealRef}>
      <div className="section-header">
        <span className="phase-label">FASE 5</span>
        <h2 className="font-serif">Motores de Crecimiento 2.0</h2>
        <p>Los motores tradicionales han perdido cilindrada. La próxima frontera de acumulación de capital chileno reside en la Economía del Conocimiento (Hubs de Datos y Astronomía algorítmica), Agro-tecnología genómica y la exportación masiva de Hidrógeno Verde y sus derivados moleculares.</p>
        <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
          <strong>Políticas Clave:</strong> Incentivos tributarios masivos para la instalación de Data Centers alimentados 100% por ERNC. Desregulación ágil ("Fast Track" ambiental) para plantas desalinizadoras de uso corporativo-estatal.
        </p>
      </div>
      
      <div className="motors-grid">
        <div className="motor-card glass glow-hover">
          <div className="motor-icon"><Drop weight="fill" /></div>
          <h3>Clúster H2V</h3>
          <p>Dominio global en Hidrógeno Verde y Amoníaco para Europa y Asia.</p>
        </div>
        <div className="motor-card glass glow-hover">
          <div className="motor-icon"><Cpu weight="fill" /></div>
          <h3>Minería Climática</h3>
          <p>Producción de cátodos de litio, "Cobre Verde" con blockchain y baterías.</p>
        </div>
        <div className="motor-card glass glow-hover">
          <div className="motor-icon"><Database weight="fill" /></div>
          <h3>IA y Data</h3>
          <p>Aprovechamiento de cielos astronómicos para Data Centers alimentados con energía verde.</p>
        </div>
        <div className="motor-card glass glow-hover">
          <div className="motor-icon"><Plant weight="fill" /></div>
          <h3>AgroTech Avanzada</h3>
          <p>Biotecnología endémica, desalinización y agricultura de precisión controlada.</p>
        </div>
        <div className="motor-card glass glow-hover">
          <div className="motor-icon"><Anchor weight="fill" /></div>
          <h3>Logística Pacífico</h3>
          <p>Hubs multipropósito, control de rutas navieras y megapuertos transferenciales.</p>
        </div>
      </div>
    </section>
  );
}
