import React, { useState, useEffect } from 'react';
import { TrendUp, BatteryFull, Export, Factory } from '@phosphor-icons/react';

export default function SimuladorLitioLFP() {
  // Parámetros por defecto de exportación
  const [toneladasCarbonato, setToneladasCarbonato] = useState(100000); // Base: 100,000 Tons LCE
  const [precioLCE, setPrecioLCE] = useState(15000); // USD/Ton (Promedio histórico estabilizado)
  
  // Porcentaje de retención para industrializar (Estado Emprendedor)
  const [retencionIndustrial, setRetencionIndustrial] = useState(25); // % de la cuota retenida para hacer cátodos
  
  // Multiplicadores de Valor en la Cadena (Estimaciones Geoeconómicas)
  const [precioCatodoLFP, setPrecioCatodoLFP] = useState(40000); // USD/Ton (Cátodo refinado)
  const [precioBateria, setPrecioBateria] = useState(120000); // USD equivalent per Ton of LCE contained in packs

  // Resultados Financieros
  const [exportacionBruta, setExportacionBruta] = useState(0);
  const [valorAgregado, setValorAgregado] = useState(0);
  const [deltaGanancia, setDeltaGanancia] = useState(0);

  // Motor Matemático: Salto de Complejidad
  useEffect(() => {
    // Escenario 1: Exportar todo como Carbonato de Litio (Commodity Crudo)
    const ingresosBrutos = (toneladasCarbonato * precioLCE) / 1000000; // En Millones de USD (MM USD)
    setExportacionBruta(ingresosBrutos);

    // Escenario 2: Modelo Híbrido (Exportar una parte Raw, Industrializar el resto)
    const tonsRaw = toneladasCarbonato * (1 - (retencionIndustrial / 100));
    const tonsIndustrialized = toneladasCarbonato * (retencionIndustrial / 100);

    // Asumimos que de la parte industrializada:
    // 70% se hace Cátodos LFP, 30% llega a Celdas/Baterías completas
    const ingresosRaw = (tonsRaw * precioLCE) / 1000000;
    
    // Por simplicidad estequiométrica 1 Ton LCE -> ~1 Ton Cátodo LFP (aprox. peso de Li en el cátodo + valor agregado)
    const ingresosCatodos = ((tonsIndustrialized * 0.70) * precioCatodoLFP) / 1000000;
    const ingresosBaterias = ((tonsIndustrialized * 0.30) * precioBateria) / 1000000;

    const ingresosTotalesComplejos = ingresosRaw + ingresosCatodos + ingresosBaterias;
    setValorAgregado(ingresosTotalesComplejos);

    // Delta de ganancia por hacer Política Industrial
    setDeltaGanancia(ingresosTotalesComplejos - ingresosBrutos);

  }, [toneladasCarbonato, precioLCE, retencionIndustrial, precioCatodoLFP, precioBateria]);

  return (
    <div className="simulador-container card glass" style={{ marginTop: '2rem', padding: '2rem', border: '1px solid var(--accent-secondary)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--accent-secondary)', paddingBottom: '1rem' }}>
            <BatteryFull size={32} color="var(--accent-secondary)" weight="duotone" />
            <div>
                <h3 style={{ margin: 0, color: 'var(--text-main)' }}>Laboratorio Algorítmico: Complejidad del Litio</h3>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Proyección del Delta de Ingresos: Exportación LCE Bruto vs. Industrialización Nacional (LFP)</p>
            </div>
        </div>

        <div className="grid-2 align-start">
            {/* Controles del Simulador Litio */}
            <div className="simulador-controls" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="control-group">
                    <label style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                        <span><Export size={16} style={{marginRight: '4px', verticalAlign: 'text-bottom'}}/> Cuota Nacional Litio (Tons LCE)</span>
                        <span style={{ color: 'var(--text-main)' }}>{toneladasCarbonato.toLocaleString()}</span>
                    </label>
                    <input 
                        type="range" min="50000" max="400000" step="10000" 
                        value={toneladasCarbonato} onChange={(e) => setToneladasCarbonato(Number(e.target.value))}
                        style={{ width: '100%', accentColor: 'var(--text-main)' }}
                    />
                    <small style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Producción Base de Atacama/Maricunga</small>
                </div>

                <div className="control-group">
                    <label style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                        <span><Factory size={16} style={{marginRight: '4px', verticalAlign: 'text-bottom'}}/> Cuota Retenida p/ Industria Local (%)</span>
                        <span style={{ color: 'var(--accent-secondary)' }}>{retencionIndustrial}%</span>
                    </label>
                    <input 
                        type="range" min="0" max="100" step="5" 
                        value={retencionIndustrial} onChange={(e) => setRetencionIndustrial(Number(e.target.value))}
                        style={{ width: '100%', accentColor: 'var(--accent-secondary)' }}
                    />
                    <small style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>% del Litio forzado a manufactura nacional vía SQM/Albemarle</small>
                </div>

                <div className="control-group" style={{opacity: 0.8}}>
                    <label style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                        <span>Precio Cátodo LFP Terminado ($/Ton)</span>
                        <span style={{ color: 'var(--primary)' }}>${precioCatodoLFP.toLocaleString()}</span>
                    </label>
                    <input 
                        type="range" min="20000" max="80000" step="5000" 
                        value={precioCatodoLFP} onChange={(e) => setPrecioCatodoLFP(Number(e.target.value))}
                        style={{ width: '100%', accentColor: 'var(--primary)' }}
                    />
                    <small style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>El valor sube drásticamente al cruzar Litio con Hierro y Fósforo.</small>
                </div>
            </div>

            {/* Panel de Resultados Litio */}
            <div className="simulador-results" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', backgroundColor: '#e2e8f0', padding: '1.5rem', borderRadius: '12px', border: '1px solid #cbd5e1' }}>
                <h4 style={{ margin: '0 0 1rem 0', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <TrendUp size={20} color="var(--success)" weight="bold" /> 
                    Retorno Macroeconómico Anual
                </h4>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.5rem', borderBottom: '1px dotted #94a3b8' }}>
                        <span style={{ fontSize: '0.9rem', color: '#475569' }}>Escenario Status Quo (100% Export Raw)</span>
                        <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>${exportacionBruta.toLocaleString(undefined, {maximumFractionDigits:0})} MM USD</span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.5rem', borderBottom: '1px solid #94a3b8' }}>
                        <span style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 600 }}>Nuevo Modelo (Raw + Manufactura LFP)</span>
                        <span style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--primary)' }}>${valorAgregado.toLocaleString(undefined, {maximumFractionDigits:0})} MM USD</span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.5rem', backgroundColor: deltaGanancia > 0 ? '#dcfce7' : 'transparent', padding: deltaGanancia > 0 ? '0.5rem' : '0',  borderRadius: '4px' }}>
                        <span style={{ fontSize: '0.85rem', color: deltaGanancia > 0 ? 'var(--success)' : '#64748b', fontWeight: 600 }}>Delta Económico Generado por la Complejidad</span>
                        <span style={{ fontWeight: 700, fontSize: '1.1rem', color: deltaGanancia > 0 ? 'var(--success)' : '#64748b' }}>
                            +{deltaGanancia.toLocaleString(undefined, {maximumFractionDigits:0})} MM USD
                        </span>
                    </div>
                </div>

                {deltaGanancia > 0 && (
                <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--success)', backgroundColor: '#bbf7d0', padding: '0.75rem', borderRadius: '6px', fontWeight: 500 }}>
                    💡 <strong>Insight Estratégico:</strong> Procesar ese {retencionIndustrial}% en Chile generaría ${deltaGanancia.toLocaleString(undefined, {maximumFractionDigits:0})} Millones EXTRA al año. Suficiente para apalancar el Fondo Soberano Tecnológico.
                </div>
                )}
            </div>
        </div>
    </div>
  );
}
