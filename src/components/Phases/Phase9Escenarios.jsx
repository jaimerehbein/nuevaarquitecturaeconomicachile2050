import React from 'react';
import { Warning, Lightning, RocketLaunch } from '@phosphor-icons/react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SimuladorH2V from '../Laboratorio/SimuladorH2V';
import SimuladorLitioLFP from '../Laboratorio/SimuladorLitioLFP';
export default function Phase9Escenarios() {
  const revealRef = useScrollReveal();

  return (
    <section id="escenarios" className="section reveal" ref={revealRef}>
      <div className="section-header center">
        <span className="phase-label">FASE 9</span>
        <h2 className="font-serif">Simulación de Escenarios y Costo de Inacción</h2>
        <p>El costo de oportunidad moral y financiero de mantener el modelo actual (Status Quo) es inaceptable, proyectando un PIB estancado. Modelamos múltiples escenarios estocásticos, confirmando que solo la ruta del 'Salto al Desarrollo Verde' asegura la convergencia con el ingreso per cápita top de la OCDE (Nivel Australia/Nueva Zelanda).</p>
        <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
          <strong>Políticas Clave:</strong> Test de estrés macroeconómico con precios base del cobre decrecientes.
        </p>
      </div>
      
      <div className="grid-3">
        <div className="scenario-card card danger-glass">
          <div className="prob-badge danger">Probabilidad: 35%</div>
          <h3><Warning weight="fill" /> Status Quo (Decadencia)</h3>
          <p>Crecimiento 1.5-2%. Pérdida de cuota en minerales por competencia. Trampa del Ingreso Medio permanente, tensiones resurgen.</p>
        </div>
        
        <div className="scenario-card card warning-glass">
          <div className="prob-badge warning">Probabilidad: 45%</div>
          <h3><Lightning weight="fill" /> Exportador 2.0</h3>
          <p>Crecimiento 3.5%. Líder en H2V exportando commodity verde, captando IED, pero con escasa captura de tecnología e IP propio (vulnerabilidad externa).</p>
        </div>
        
        <div className="scenario-card card success-glass scale-up">
          <div className="prob-badge success">Probabilidad: 20%</div>
          <h3><RocketLaunch weight="fill" /> El Salto al Desarrollo</h3>
        </div>
      </div>

      {/* Inyección del Laboratorio Algorítmico */}
      <SimuladorH2V />
      <SimuladorLitioLFP />
      
    </section>
  );
}
