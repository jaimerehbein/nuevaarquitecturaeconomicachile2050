import React from 'react';
import { Buildings, GlobeHemisphereWest, Nut, Wind, Plant } from '@phosphor-icons/react';
import MermaidDiagram from '../MermaidDiagram';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Phase10Blueprint() {
  const revealRef = useScrollReveal();

  const chart = `
flowchart TD
    %% Base Geoeconómica
    subgraph Geo["1. Base Geoeconómica Nacional"]
        direction LR
        Sol("Radiación<br/>Atacama")
        Viento("Vientos<br/>Patagonia")
        Min("Reservas Cobre<br/>& Litio")
        GeoEspacio("Océano<br/>Pacífico")
    end

    %% Nodos de Complejidad
    subgraph Core["2. Producción de Complejidad"]
        direction LR
        H2("Clúster<br/>H2 Verde")
        MinVerde("Cátodos &<br/>Minería Climática")
        Tech("Hub de Datos &<br/>IA Astronómica")
        Agro("Agro-Food<br/>Resiliente")
    end

    %% Arquitectura Institucional
    subgraph Inst["3. Arquitectura Institucional"]
        direction LR
        Fondo("Fondo Soberano<br/>I+D")
        Infra("Agencia Nac.<br/>Infraestructura")
        Finanzas("Finanzas<br/>Verdes")
        Talento("Ecosistema<br/>STEM")
    end

    %% Ecosistema Global
    subgraph Global["4. Sistema Global Integrado"]
        direction LR
        EEUU("EE.UU.<br/>(Software/Inversiones)")
        Asia("Asia-Pacífico<br/>(Energía/Manufactura)")
        Latam("Latinoamérica<br/>(Servicios Hub)")
    end

    %% El Fin Último: Desarrollo Humano (Paradigma Garcés/Sen)
    subgraph Human["5. Política Pública como Política Humana"]
        direction LR
        Capacidades("Expansión de<br/>Capacidades (Libertad)")
        Bienestar("Factores de<br/>Conversión Positivos")
        Agencia("Agencia y<br/>Participación")
    end

    %% Relaciones
    Sol --> H2
    Sol --> Tech
    Viento --> H2
    Min --> MinVerde
    GeoEspacio --> Tech
    GeoEspacio --> Latam

    H2 ==> MinVerde
    Tech ==> MinVerde
    Tech ==> Agro

    Inst -.-> Core
    Fondo ==> Tech
    Fondo ==> H2
    Finanzas ==> Infra
    Infra ==> Core

    H2 ==>|Exportación Energía| Asia
    MinVerde ==>|Cátodos/Baterías| EEUU
    MinVerde ==>|Minerales Estratégicos| Asia
    Tech ==>|Data Services / IA| EEUU
    Agro ==>|Seguridad Alimentaria| Latam

    %% Vínculo de Medios a Fines (Bien-tener a Bien-estar)
    Fondo ===>|Inversión Causal| Capacidades
    Inst -.->|Soporte Institucional| Bienestar
    Core ==>|Renta Tecnológica| Human
    Global -.->|Retorno Soberano Instrumental| Human
    classDef nGeo fill:#e2e8f0,stroke:#64748b,stroke-width:2px,color:#0f172a,font-weight:bold
    classDef nCore fill:#005AAA,stroke:#003d73,stroke-width:2px,color:#ffffff,font-weight:bold
    classDef nInst fill:#00A9E0,stroke:#007ba8,stroke-width:2px,color:#ffffff,font-weight:bold
    classDef nGlob fill:#1e293b,stroke:#0f172a,stroke-width:2px,color:#ffffff,font-weight:bold
    classDef nHum fill:#10b981,stroke:#047857,stroke-width:3px,color:#ffffff,font-weight:800

    class Sol,Viento,Min,GeoEspacio nGeo
    class H2,MinVerde,Tech,Agro nCore
    class Fondo,Infra,Finanzas,Talento nInst
    class EEUU,Asia,Latam nGlob
    class Capacidades,Bienestar,Agencia nHum

    %% Estilos de Contenedores (Subgraphs)
    style Geo fill:transparent,stroke:#64748b,stroke-width:2px,stroke-dasharray: 5 5,color:#475569
    style Core fill:transparent,stroke:#005AAA,stroke-width:2px,stroke-dasharray: 5 5,color:#005AAA
    style Inst fill:transparent,stroke:#00A9E0,stroke-width:2px,stroke-dasharray: 5 5,color:#00A9E0
    style Global fill:transparent,stroke:#1e293b,stroke-width:2px,stroke-dasharray: 5 5,color:#1e293b
    style Human fill:#ecfdf5,stroke:#10b981,stroke-width:3px,color:#047857,font-weight:bold
  `;

  return (
    <section id="blueprint" className="section reveal" ref={revealRef}>
      <div className="section-header center">
        <span className="phase-label">FASE 13</span>
        <h2 className="font-serif">Blueprint Geoeconómico Final 2050</h2>
        <p>Esta es la matriz metabólica de Chile 2050. Sin embargo, <strong>la economía extractiva y la tecnología son meramente instrumentales (medios).</strong> El fin teleológico absoluto de esta arquitectura es la transformación en un "Estado de Capacidades", donde el crecimiento se mide exclusivamente por la ampliación de las libertades reales, la salud, agencia y factores de conversión positivos de sus ciudadanos.</p>
        <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
          <strong>Indicador Clave (Norte Magnético):</strong> Índice de Desarrollo Humano Ajustado por Desigualdad (IDH-D) e Índice de Pobreza Multidimensional en lugar del crecimiento simple del PIB.
        </p>
      </div>
      
      <div className="diagram-wrapper glass">
        <MermaidDiagram chart={chart} id="blueprint-graph" />
      </div>

      <div style={{ marginTop: '4rem' }}>
        <h3 className="font-serif" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2.5rem', color: 'var(--accent-primary)' }}>Desencriptando el Sistema</h3>
        <div className="grid-2 align-stretch">
          
          <div className="card glass" style={{ borderLeft: '4px solid #64748b' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{ background: '#e2e8f0', padding: '12px', borderRadius: '50%', color: '#475569' }}>
                    <Wind size={28} weight="fill" />
                </div>
                <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#0f172a' }}>1. Base Geoeconómica Nacional</h4>
            </div>
            <p style={{ fontSize: '0.95rem' }}>Las ventajas estáticas de Chile. Es el "hardware" natural del país: la insolación récord de Atacama, los vientos magallánicos y el monopolio topográfico sobre reservas críticas (Litio y Cobre). Constituyen el combustible bruto del modelo.</p>
          </div>

          <div className="card glass" style={{ borderLeft: '4px solid #005AAA' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{ background: '#e0f2fe', padding: '12px', borderRadius: '50%', color: '#005AAA' }}>
                    <Nut size={28} weight="fill" />
                </div>
                <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#005AAA' }}>2. Producción de Complejidad</h4>
            </div>
            <p style={{ fontSize: '0.95rem' }}>El motor industrial. Es donde aplicamos tecnología para transformar piedras y viento en productos premium. Aquí el hidrógeno pasa a ser Amoníaco Verde, el LCE se refina a Cátodos LFP y la energía limpia alimenta Datacenters para Inteligencia Artificial.</p>
          </div>

          <div className="card glass" style={{ borderLeft: '4px solid #00A9E0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{ background: '#e0f7fa', padding: '12px', borderRadius: '50%', color: '#00A9E0' }}>
                    <Buildings size={28} weight="fill" />
                </div>
                <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#007ba8' }}>3. Arquitectura Institucional</h4>
            </div>
            <p style={{ fontSize: '0.95rem' }}>El "software" del Estado. Leyes e instrumentos que aseguren el flujo de capital: un <em>Fondo Soberano Tecnológico</em> (Regla de Hartwick) blindado contra ciclos políticos, y una <em>Agencia Fast-Track</em> que usa IA para aprobar grandes inversiones verdes en solo 90 días.</p>
          </div>

          <div className="card glass" style={{ borderLeft: '4px solid #1e293b' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{ background: '#f1f5f9', padding: '12px', borderRadius: '50%', color: '#1e293b' }}>
                    <GlobeHemisphereWest size={28} weight="fill" />
                </div>
                <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#0f172a' }}>4. Sistema Global Integrado</h4>
            </div>
            <p style={{ fontSize: '0.95rem' }}>El tablero geopolítico del cliente ("Friendshoring Dual"). Vendemos energía y química pesada a las fábricas del <strong>Asia-Pacífico</strong>, mientras exportamos procesamiento de datos en la nube y componentes de vehículos eléctricos (bajo la IRA) hacia <strong>Estados Unidos</strong>.</p>
          </div>

        </div>

        <div className="card glass" style={{ marginTop: '40px', borderTop: '6px solid #10b981', background: '#f0fdf4' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{ background: '#10b981', padding: '12px', borderRadius: '50%', color: '#ffffff' }}>
                    <Plant size={28} weight="fill" />
                </div>
                <h4 style={{ margin: 0, fontSize: '1.3rem', color: '#047857' }}>5. Política Pública como Política Humana</h4>
            </div>
            <p style={{ fontSize: '1.05rem', color: '#064e3b', fontWeight: 500 }}>
                El Gran Giro Filosófico. Inpirado en Amartya Sen, este bloque establece que vender Cobre o Amoníaco no es el fin, sino solo el <em>medio</em>. Las mega-ganancias tecnológicas están moral y legalmente obligadas a converger aquí para generar <strong>Factores de Conversión Positivos</strong> (Salud y Educación de élite pública). El único y verdadero KPI de éxito nacional es expandir las Libertades y Capacidades Reales de todos los ciudadanos.
            </p>
        </div>
      </div>
    </section>
  );
}
