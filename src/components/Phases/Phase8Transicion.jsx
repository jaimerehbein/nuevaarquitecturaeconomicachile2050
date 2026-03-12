import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Phase8Transicion() {
  const revealRef = useScrollReveal();

  return (
    <section id="transicion" className="section reveal section-center" ref={revealRef}>
      <div className="section-header center">
        <span className="phase-label">FASE 8</span>
        <h2 className="font-serif">Estrategia de Transición y Roadmap</h2>
        <p>La reconversión estructural no ocurre en un periodo presidencial. Nuestra hoja de ruta establece tres épocas vinculantes para alinear las proyecciones de inversión a largo plazo (Patient Capital).</p>
      </div>
      
      <div className="timeline glass">
        <div className="timeline-item">
          <div className="time-marker font-serif">2025 – 2030</div>
          <div className="time-content">
            <h3>I. Despegue Desregulador</h3>
            <p>Shock de agilización de permisos. Firma de mega-contratos H2V. Expansión cableado nacional. Meta: Cierre rápido de brechas de infraestructura y I+D &gt; 1%.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="time-marker font-serif">2030 – 2040</div>
          <div className="time-content">
            <h3>II. Escalamiento Global</h3>
            <p>Exportación masiva de moléculas verdes hacia el Asia. Primeros clusters de baterías y Venture Capital profundizado. Renta promedio OCDE plena.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="time-marker font-serif">2040 – 2050</div>
          <div className="time-content">
            <h3>III. Economía del Conocimiento</h3>
            <p>H2V pesa más que cobre bruto. Chile exporta patentes (IP), software y automatización. Estabilidad demográfica completamente absorbida.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
