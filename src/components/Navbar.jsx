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
                <li><a href="#informe-estrategico" onClick={(e) => handleScroll(e, '#informe-estrategico')}>Informe (13 Fases)</a></li>
                <li><a href="#benchmarks" onClick={(e) => handleScroll(e, '#benchmarks')}>Benchmarks</a></li>
                <li><a href="#escenarios" onClick={(e) => handleScroll(e, '#escenarios')}>Laboratorio</a></li>
                <li><a href="#blueprint" onClick={(e) => handleScroll(e, '#blueprint')}>Blueprint 2050</a></li>
            </ul>
        </div>
    </nav>
  );
}
