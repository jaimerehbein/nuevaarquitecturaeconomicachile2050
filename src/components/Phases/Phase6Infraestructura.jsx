import React from 'react';
import { Lightning, Boat, Broadcast, Train, Bank, RoadHorizon, Buildings, ChartLineUp } from '@phosphor-icons/react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Phase6Infraestructura() {
  const revealRef = useScrollReveal();

  return (
    <section id="gobernanza" className="section reveal" ref={revealRef}>
      <div className="grid-2 align-stretch">
        <div className="card glass">
          <span className="phase-label">FASE 6</span>
          <h2 className="font-serif mb-4">Infraestructura Crítica</h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Un Chile complejo requiere un hardware nacional moderno. Ejecutaremos una inyección de capital sin precedentes en infraestructura logística portuaria automatizada, redes eléctricas de corriente continua (HVDC) desde Atacama hasta Magallanes, y cinturones de fibra óptica oscura intercontinentales.
            <br/><br/>
            <strong>Políticas Clave:</strong> Agencia Nacional de Infraestructura Crítica (ANIC).
          </p>
          <ul className="timeline-list">
            <li>
              <Lightning weight="bold" />
              <div>
                <strong>Súper-Red Eléctrica (HVDC):</strong> Conectando Atacama con zonas de consumo (Centro/Sur).
              </div>
            </li>
            <li>
              <Boat weight="bold" />
              <div>
                <strong>Megapuertos H2V:</strong> Expansión en San Antonio, Mejillones y Magallanes.
              </div>
            </li>
            <li>
              <Broadcast weight="bold" />
              <div>
                <strong>Cable Submarino Humboldt:</strong> Conexión Fibra Óptica directa Valparaíso-Asia.
              </div>
            </li>
            <li>
              <Train weight="bold" />
              <div>
                <strong>Corredor Bioceánico:</strong> Tren transandino para extraer exportaciones hacia Asia vía puertos chilenos.
              </div>
            </li>
          </ul>
        </div>
        <div className="card glass">
          <span className="phase-label">FASE 7</span>
          <h2 className="font-serif mb-4">Gobernanza Institucional</h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            La mayor barrera al desarrollo hoy es endógena: la burocracia permisológica. Implementaremos una disrupción institucional —'Permitting Fast-Track'—, centralizando la toma de decisiones para inversiones hiper-estratégicas superiores a los USD $1,000 millones.
            <br/><br/>
            <strong>Políticas Clave:</strong> "Ventanilla Única Digital" para mega-inversiones (permisología automatizada en 90 días).
          </p>
          <ul className="timeline-list">
            <li>
              <Bank weight="bold" />
              <div>
                <strong>Ministerio de Hacienda 2.0:</strong> Flujos de capital natural en cuentas fiscales.
              </div>
            </li>
            <li>
              <RoadHorizon weight="bold" />
              <div>
                <strong>Corfo 2.0 (Fondo Soberano):</strong> Agencia co-inversora estilo DARPA/Temasek fondeada con royalty minero.
              </div>
            </li>
            <li>
              <Buildings weight="bold" />
              <div>
                <strong>Agencia de Infraestructura:</strong> Planificación a 30 años independiente del ciclo político.
              </div>
            </li>
            <li>
              <ChartLineUp weight="bold" />
              <div>
                <strong>Banco Central Evolucionado:</strong> Modelos mitigadores de riesgo sistémico climático.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
