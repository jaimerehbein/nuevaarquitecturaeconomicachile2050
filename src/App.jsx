import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Phase1Diagnostico from './components/Phases/Phase1Diagnostico';
import MarcoHistorico from './components/MarcoHistorico';
import Phase2Geoeconomia from './components/Phases/Phase2Geoeconomia';
import Phase4Arquitectura from './components/Phases/Phase4Arquitectura';
import Phase5Motores from './components/Phases/Phase5Motores';
import Phase6Infraestructura from './components/Phases/Phase6Infraestructura';
import Phase8Transicion from './components/Phases/Phase8Transicion';
import Phase9Escenarios from './components/Phases/Phase9Escenarios';
import Phase10Blueprint from './components/Phases/Phase10Blueprint';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <main className="container content-wrapper">
        <MarcoHistorico />
        <Phase1Diagnostico />
        <Phase2Geoeconomia />
        <Phase4Arquitectura />
        <Phase5Motores />
        <Phase6Infraestructura />
        <Phase8Transicion />
        <Phase9Escenarios />
        <Phase10Blueprint />
        <Footer />
      </main>
    </>
  );
}

export default App;
