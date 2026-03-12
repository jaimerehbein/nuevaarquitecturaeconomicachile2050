import React from 'react';
import { ShieldCheck, WarningCircle } from '@phosphor-icons/react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Phase1Diagnostico() {
  const revealRef = useScrollReveal();

  return (
    <section id="diagnostico" className="section reveal" ref={revealRef}>
        <div className="section-header">
            <span className="phase-label">FASE 1</span>
            <h2 className="font-serif">Diagnóstico Estructural</h2>
            <p>El milagro económico chileno ha convergido al estancamiento. Nuestro crecimiento potencial ha caído del 5% al 2% anual debido a una matriz productiva anclada en la baja complejidad tecnológica. Escapar de la 'Trampa del Ingreso Medio' requiere admitir el agotamiento institucional del modelo rentista primario exportador.</p>
        </div>
        
        <div className="grid-2">
            <div className="card glass success-border">
                <div className="card-icon success">
                    <ShieldCheck weight="fill" />
                </div>
                <h3>Fortalezas Estructurales</h3>
                <ul className="feature-list">
                    <li><strong>Solidez Macroeconómica:</strong> Reglas fiscales responsables, Banco Central autónomo.</li>
                    <li><strong>Integración Comercial:</strong> Red global de TLC inigualable en la región.</li>
                    <li><strong>Posición Geográfica:</strong> Dotación extraordinaria (Cobre, Litio, Radiación, Vientos) con acceso a la Cuenca del Pacífico.</li>
                </ul>
            </div>
            
            <div className="card glass danger-border">
                <div className="card-icon danger">
                    <WarningCircle weight="fill" />
                </div>
                <h3>La Trampa del Ingreso Medio</h3>
                <ul className="feature-list">
                    <li><strong>Baja Complejidad:</strong> Alta dependencia de recursos sin valor agregado.</li>
                    <li><strong>Estancamiento de Productividad:</strong> Medición estricta requerida de una PTF estancada desde 2010.</li>
                    <li><strong>Brecha de Innovación:</strong> Auditoría de Inversión en I+D como porcentaje del PIB (actualmente &lt; 0.4%, meta OCDE &gt; 2.0%).</li>
                    <li><strong>Permisología y Desigualdad:</strong> Burocracia ineficiente que frena la inversión crítica de capital.</li>
                </ul>
            </div>
        </div>
    </section>
  );
}
