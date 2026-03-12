import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function MarcoHistorico() {
  const revealRef = useScrollReveal();

  return (
    <section id="historia" className="section reveal" ref={revealRef}>
      <div className="section-header center" style={{ maxWidth: '900px' }}>
        <span className="phase-label">PRÓLOGO</span>
        <h2 className="font-serif">50 Años de Transformación Económica (1974 - 2024)</h2>
        <p>Un breve recorrido institucional para contextualizar el imperativo de la nueva arquitectura geoeconómica.</p>
      </div>
      
      <div className="grid-3 align-stretch">
        <div className="card">
          <h3 className="font-serif" style={{ fontSize: '1.25rem', color: 'var(--accent-primary)', marginBottom: '16px' }}>1. Las Reformas y la Apertura (1974 - 1989)</h3>
          <p style={{ fontSize: '0.95rem' }}>
            La arquitectura económica contemporánea de Chile nace tras las profundas reformas estructurales. A través de la liberalización de precios, la apertura unilateral al comercio, la desregulación financiera y un agresivo programa de privatizaciones, el país transitó hacia una economía de mercado. A pesar de los altos costos iniciales y las crisis financieras, sentó las bases institucionales (autonomía del Banco Central) para la estabilidad venidera.
          </p>
        </div>
        
        <div className="card">
          <h3 className="font-serif" style={{ fontSize: '1.25rem', color: 'var(--accent-primary)', marginBottom: '16px' }}>2. Consolidación y Súper-Ciclo (1990 - 2010)</h3>
          <p style={{ fontSize: '0.95rem' }}>
            Con el retorno a la democracia, Chile experimentó su "Edad de Oro". Apoyado por un consenso en torno al "crecimiento con equidad" y la firma de masivos Tratados de Libre Comercio (TLC). Impulsado por el ciclo de los commodities (demanda china de cobre), el PIB creció aceleradamente, reduciendo drásticamente la pobreza y situando al país a la cabeza del ingreso per cápita sudamericano hasta su ingreso a la OCDE en 2010.
          </p>
        </div>
        
        <div className="card">
          <h3 className="font-serif" style={{ fontSize: '1.25rem', color: 'var(--accent-primary)', marginBottom: '16px' }}>3. La Trampa del Ingreso Medio (2010 - 2024)</h3>
          <p style={{ fontSize: '0.95rem' }}>
            El modelo comenzó a mostrar rendimientos decrecientes y un estancamiento en la Productividad Total de los Factores (PTF). La excesiva dependencia extractivista sumergió a Chile en la clásica "Trampa del Ingreso Medio", derivando en estancamiento y fricciones institucionales (2019). Frente a la descarbonización global, la economía chilena se encuentra hoy en un punto de inflexión: o innova hacia la complejidad y el valor agregado, o asume su declive.
          </p>
        </div>
      </div>
    </section>
  );
}
