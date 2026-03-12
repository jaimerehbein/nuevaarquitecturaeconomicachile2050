import React from 'react';
import MermaidDiagram from '../MermaidDiagram';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Phase4Arquitectura() {
  const revealRef = useScrollReveal();

  const chart = `
flowchart TD
    %% Define Top-Down main flow for better vertical scaling (prevents horizontal squishing)
    subgraph F1 ["1. Base Material Nativa"]
        direction LR
        B1("Radiación<br/>Atacama")
        B2("Vientos<br/>Magallanes")
        B3("Minerales<br/>Críticos")
    end

    subgraph F2 ["2. Infraestructura"]
        direction LR
        I1("Red Nacional<br/>HVDC")
        I2("Megapuertos<br/>H2 Verde")
        I3("Corredores<br/>Oceánicos")
    end

    subgraph F3 ["3. Complejidad Productiva"]
        direction LR
        P1("Manufactura<br/>Cero Emisiones")
        P2("Minería Climática<br/>& Cátodos")
        P3("AgroTech y<br/>Desalinización")
    end

    subgraph F4 ["4. Estado Superior"]
        direction LR
        K1("Fondo Soberano<br/>Innovación")
        K2("Venture Capital<br/>Profundo")
        K3("IA y Softwares<br/>Data")
    end

    F1 ==>|Suministro de Energía y Materiales| F2
    F2 ==>|Plataforma Sistémica| F3
    F3 ==>|Salto Cualitativo de Valor| F4

    classDef c1 fill:#f8f9fa,stroke:#dee2e6,stroke-width:2px,color:#495057
    classDef c2 fill:#e0f2fe,stroke:#bae6fd,stroke-width:2px,color:#0284c7
    classDef c3 fill:#00A9E0,stroke:#007ba8,stroke-width:2px,color:#ffffff
    classDef c4 fill:#005AAA,stroke:#003d73,stroke-width:2px,color:#ffffff

    class B1,B2,B3 c1
    class I1,I2,I3 c2
    class P1,P2,P3 c3
    class K1,K2,K3 c4

    style F1 fill:transparent,stroke:#dee2e6,stroke-width:2px,stroke-dasharray: 5 5,color:#6c757d
    style F2 fill:transparent,stroke:#bae6fd,stroke-width:2px,stroke-dasharray: 5 5,color:#0284c7
    style F3 fill:transparent,stroke:#007ba8,stroke-width:2px,stroke-dasharray: 5 5,color:#007ba8
    style F4 fill:transparent,stroke:#005AAA,stroke-width:2px,stroke-dasharray: 5 5,color:#005AAA
  `;

  return (
    <section id="arquitectura" className="section reveal section-center" ref={revealRef}>
      <div className="section-header center">
        <span className="phase-label">FASE 4</span>
        <h2 className="font-serif">Arquitectura Sistémica</h2>
        <p>Presentamos la topología del nuevo modelo bioeconómico. No operamos bajo silos ministeriales aislados; la arquitectura 2050 es un grafo integrado donde el capital de riesgo estatal fluye dinámicamente hacia clústeres tecnológicos, retroalimentando la innovación mediante regalías mineras.</p>
        <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
          <strong>Políticas Clave:</strong> Fondo Soberano de Innovación de Alta Complejidad. Triangulación Universidad-Empresa-Corfo para patentes (IP).
        </p>
      </div>
      
      <div className="diagram-container glass">
        <MermaidDiagram chart={chart} id="arquitectura-graph" />
      </div>
    </section>
  );
}
