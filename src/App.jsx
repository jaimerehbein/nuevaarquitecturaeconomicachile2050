import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ReporteOCDE from './components/ReporteOCDE';
import BenchmarksInternacionales from './components/BenchmarksInternacionales';
import Phase9Escenarios from './components/Phases/Phase9Escenarios';
import Phase10Blueprint from './components/Phases/Phase10Blueprint';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <main className="container content-wrapper">
        <ReporteOCDE />
        <BenchmarksInternacionales />
        <Phase9Escenarios />
        <Phase10Blueprint />
        <Footer />
      </main>
    </>
  );
}

export default App;
