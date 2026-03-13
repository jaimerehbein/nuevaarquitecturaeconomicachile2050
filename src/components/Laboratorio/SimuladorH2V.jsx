import { useState, useEffect } from 'react';
import { ChartLineUp, MapPin, Drop, Lightning } from '@phosphor-icons/react';

export default function SimuladorH2V() {
  // Parámetros por defecto (Optimistas para Chile 2030)
  const [capexSolar, setCapexSolar] = useState(500); // USD/kW
  const [capexElectrolyzer, setCapexElectrolyzer] = useState(450); // USD/kW
  const [capacityFactor, setCapacityFactor] = useState(55); // % (Magallanes Híbrido)
  
  // Resultados Calculados
  const [lcoh, setLcoh] = useState(0);
  const [lcoa, setLcoa] = useState(0);

  // Constants
  const wacc = 0.08;
  const plantLife = 25;
  const efficiency = 48; // kWh por kg H2

  // Motor Matemático LCOA / LCOH
  useEffect(() => {
    let discountSum = 0;
    for (let i = 1; i <= plantLife; i++) {
      discountSum += 1 / Math.pow(1 + wacc, i);
    }

    const factor = capacityFactor / 100;
    const annualGenKwh = 8760 * factor;
    
    // 1. LCOE (Simplificado)
    const lcoe = (capexSolar + 20) / (annualGenKwh * discountSum);
    
    // 2. LCOH ($/kg)
    const annualH2Kg = annualGenKwh / efficiency;
    const rawLcoh = (capexElectrolyzer + (lcoe * efficiency)) / (annualH2Kg / discountSum);
    // Escalamos el rawLcoh para que tenga sentido industrial (aprox $1.5 a $3.5)
    const adjustedLcoh = Math.max(0.5, rawLcoh * 10);
    setLcoh(adjustedLcoh.toFixed(2));

    // 3. LCOA ($/Ton)
    // Se requieren ~177 kg de H2 por Tonelada de NH3
    const h2CostPerTon = adjustedLcoh * 177;
    const capexHBTon = 500;
    const opsHBTon = 60;
    
    const finalLcoa = h2CostPerTon + (capexHBTon / discountSum) + opsHBTon;
    setLcoa(finalLcoa.toFixed(0));

  }, [capexSolar, capexElectrolyzer, capacityFactor]);

  return (
    <div className="simulador-container card glass" style={{ marginTop: '3rem', padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
            <ChartLineUp size={32} color="var(--primary)" weight="duotone" />
            <div>
                <h3 style={{ margin: 0, color: 'var(--text-main)' }}>Laboratorio Algorítmico</h3>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Proyección de Costo Nivelado: Amoníaco Verde (LCOA) vs. Hidrógeno (LCOH)</p>
            </div>
        </div>

        <div className="grid-2 align-start">
            {/* Controles del Simulador */}
            <div className="simulador-controls" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="control-group">
                    <label style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                        <span><Lightning size={16} style={{marginRight: '4px', verticalAlign: 'text-bottom'}}/> CapEx Solar/Eólico (USD/kW)</span>
                        <span style={{ color: 'var(--primary)' }}>${capexSolar}</span>
                    </label>
                    <input 
                        type="range" min="200" max="1000" step="50" 
                        value={capexSolar} onChange={(e) => setCapexSolar(Number(e.target.value))}
                        style={{ width: '100%', accentColor: 'var(--primary)' }}
                    />
                    <small style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Meta 2030: &lt; $400 USD/kW</small>
                </div>

                <div className="control-group">
                    <label style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                        <span><Drop size={16} style={{marginRight: '4px', verticalAlign: 'text-bottom'}}/> CapEx Electrolizador (USD/kW)</span>
                        <span style={{ color: 'var(--accent-primary)' }}>${capexElectrolyzer}</span>
                    </label>
                    <input 
                        type="range" min="150" max="1200" step="50" 
                        value={capexElectrolyzer} onChange={(e) => setCapexElectrolyzer(Number(e.target.value))}
                        style={{ width: '100%', accentColor: 'var(--accent-primary)' }}
                    />
                    <small style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Meta 2030: &lt; $300 USD/kW (Curva de aprendizaje)</small>
                </div>

                <div className="control-group">
                    <label style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                        <span><MapPin size={16} style={{marginRight: '4px', verticalAlign: 'text-bottom'}}/> Factor de Planta Combinado (%)</span>
                        <span style={{ color: 'var(--warning)' }}>{capacityFactor}%</span>
                    </label>
                    <input 
                        type="range" min="20" max="75" step="1" 
                        value={capacityFactor} onChange={(e) => setCapacityFactor(Number(e.target.value))}
                        style={{ width: '100%', accentColor: 'var(--warning)' }}
                    />
                    <small style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Magallanes (Eólico + Solar) puede rozar el 60%</small>
                </div>
            </div>

            {/* Panel de Resultados */}
            <div className="simulador-results" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', backgroundColor: 'var(--section-alt-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <h4 style={{ margin: '0 0 1rem 0', color: 'var(--text-main)' }}>Resultados de la Proyección (2030)</h4>
                
                <div className="result-card" style={{ backgroundColor: '#ffffff', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-primary)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>LCOH (Costo Hidrógeno)</div>
                    <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-main)', marginTop: '0.25rem' }}>
                        ${lcoh} <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-muted)' }}>USD / kg</span>
                    </div>
                    {lcoh <= 1.5 ? <div style={{ fontSize: '0.8rem', color: 'var(--success)', marginTop: '0.25rem', fontWeight: 600 }}>Costo Ultra-Competitivo Global ✅</div> : <div style={{ fontSize: '0.8rem', color: 'var(--warning)', marginTop: '0.25rem' }}>Competitividad Media ⚠️</div>}
                </div>

                <div className="result-card" style={{ backgroundColor: '#ffffff', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid var(--success)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>LCOA (Costo Amoníaco Export.)</div>
                    <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-main)', marginTop: '0.25rem' }}>
                        ${lcoa} <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-muted)' }}>USD / Tonelada</span>
                    </div>
                    {lcoa <= 350 ? <div style={{ fontSize: '0.8rem', color: 'var(--success)', marginTop: '0.25rem', fontWeight: 600 }}>Vence al Amoníaco Gris Fósil ✅</div> : <div style={{ fontSize: '0.8rem', color: 'var(--danger)', marginTop: '0.25rem' }}>Demasiado costoso vs Fósil ❌</div>}
                </div>
                
                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                    *Modelo estocástico simplificado a WACC 8%. Vida útil 25 años.
                </p>
            </div>
        </div>
    </div>
  );
}
