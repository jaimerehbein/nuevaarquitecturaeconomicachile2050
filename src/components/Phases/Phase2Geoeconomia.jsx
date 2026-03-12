import React from 'react';
import { GlobeHemisphereEast, Sun, Island, Bank } from '@phosphor-icons/react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Phase2Geoeconomia() {
  const revealRef = useScrollReveal();

  return (
    <section id="geoeconomia" className="section reveal" ref={revealRef}>
      <div className="grid-2 align-start">
        <div>
          <span className="phase-label">FASE 2</span>
          <h2 className="font-serif mb-4">Inserción Geoeconómica</h2>
          <p className="mb-4" style={{ marginBottom: "1rem" }}>
            Frente a la fragmentación global y la rivalidad entre súper-potencias, Chile posee un apalancamiento único. Reposicionaremos nuestra diplomacia comercial desde la neutralidad transaccional hacia el suministro garantizado de 'Tierras Raras', Cobre Verde y Litio de grado de batería para las economías democráticas e industrializadas.
          </p>
          <div className="highlight-box glass primary-border" style={{ marginBottom: "1rem", padding: "20px", borderRadius: "16px", display: "flex", gap: "16px" }}>
            <GlobeHemisphereEast weight="fill" className="highlight-icon" style={{ fontSize: "32px", color: "var(--accent-secondary)", minWidth: "32px" }} />
            <div>
              <h4 style={{ marginBottom: "8px" }}>Nodo Estratégico (Friendshoring)</h4>
              <p style={{ margin: 0, fontSize: "0.95rem" }}>
                <strong>Políticas Clave:</strong> Firma de Alianzas Estratégicas de Minerales Críticos con el Indo-Pacífico, EE.UU. y la U.E. Desarrollo de Puertos Hub-Logísticos duales (Datos y Energía).
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <span className="phase-label">FASE 3</span>
          <h2 className="font-serif mb-4">Ventajas Competitivas (Estado Emprendedor)</h2>
          <p className="mb-4" style={{ marginBottom: "1rem", color: "var(--text-muted)" }}>
            La radiación del Desierto de Atacama y los vientos continentales de la Patagonia son ventajas naturales estáticas. El salto al desarrollo ocurrirá transformando estas ventajas en ecosistemas de manufactura guiados por políticas industriales de 'Estado Emprendedor'.
          </p>
          <div className="cards-column">
            <div className="card basic glass">
              <h4 style={{ display: "flex", alignItems: "center", gap: "8px" }}><Sun weight="fill" color="var(--warning)" /> Manufactura Verde (H2V/LFP)</h4>
              <p style={{ margin: 0 }}>Creación del Instituto Nacional del Hidrógeno (INH) para certificar Amoníaco Verde y Cátodos LFP.</p>
            </div>
            <div className="card basic glass">
              <h4 style={{ display: "flex", alignItems: "center", gap: "8px" }}><Bank weight="fill" color="var(--accent-primary)" /> Transferencia Tecnológica</h4>
              <p style={{ margin: 0 }}>Subsidios estatales condicionados a la transferencia tecnológica (Joint Ventures obligatorios).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
