import React from 'react';
import { FlagBanner } from '@phosphor-icons/react';

export default function Navbar() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if(targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    }
  };

  return (
    <nav className="navbar glass">
        <div className="container nav-container">
            <div className="logo">
                <FlagBanner weight="fill" color="#10b981" />
                <span className="font-serif">CHILE <strong>2050</strong></span>
            </div>
            <ul className="nav-links">
                <li><a href="#diagnostico" onClick={(e) => handleScroll(e, '#diagnostico')}>Fase 1</a></li>
                <li><a href="#arquitectura" onClick={(e) => handleScroll(e, '#arquitectura')}>Fase 4</a></li>
                <li><a href="#motores" onClick={(e) => handleScroll(e, '#motores')}>Fase 5</a></li>
                <li><a href="#escenarios" onClick={(e) => handleScroll(e, '#escenarios')}>Fase 9</a></li>
                <li><a href="#blueprint" onClick={(e) => handleScroll(e, '#blueprint')}>Fase 10</a></li>
            </ul>
        </div>
    </nav>
  );
}
