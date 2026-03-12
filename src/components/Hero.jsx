import React from 'react';
import { ArrowDown } from '@phosphor-icons/react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hero() {
  const revealRef = useScrollReveal();

  const handleScroll = (e) => {
    e.preventDefault();
    const target = document.querySelector('#diagnostico');
    if (target) {
        window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
        });
    }
  };

  return (
    <header className="hero container reveal" ref={revealRef}>
      <div className="hero-badge">
        <span className="badge-dot"></span>
        Documento Estratégico Oficial
      </div>
      <h1 className="hero-title font-serif">
        <span>Nueva Arquitectura Económica</span>
        <span className="gradient-text">para Chile</span>
        <span className="year-accent">2025 – 2050</span>
      </h1>
      <p className="hero-subtitle">
        Este documento establece un plano maestro para la transición de Chile de una economía extractivista a una <strong>potencia geoeconómica de energía limpia, complejidad tecnológica y servicios avanzados en el Indo-Pacífico</strong>.
      </p>
      <div className="hero-actions">
        <a href="#diagnostico" className="btn btn-primary" onClick={handleScroll}>
          Explorar el Blueprint
        </a>
        <p className="author-note">
          <strong>Jaime Rehbein</strong>
          Licenciatura en Economía y Maestría en Ciencias Económicas — Universidad Tecnológica de México (TECH)
        </p>
      </div>
    </header>
  );
}
