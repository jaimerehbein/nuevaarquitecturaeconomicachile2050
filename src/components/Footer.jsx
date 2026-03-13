import { FlagBanner } from '@phosphor-icons/react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="logo" style={{ marginBottom: "10px" }}>
          <FlagBanner weight="fill" />
          <span className="font-serif">CHILE <strong>2050</strong></span>
        </div>
        <div className="author-footer">
          <strong>Jaime Rehbein</strong>
          <span>Licenciatura en Economía y Maestría en Ciencias Económicas</span>
          <span>Universidad Tecnológica de México (TECH)</span>
        </div>
      </div>
    </footer>
  );
}
