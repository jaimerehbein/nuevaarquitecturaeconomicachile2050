import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import mermaid from 'mermaid';

export default function MermaidDiagram({ chart, id }) {
  const containerRef = useRef(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      themeVariables: {
        fontFamily: 'Inter, sans-serif',
        primaryColor: '#005AAA',
        primaryTextColor: '#ffffff',
        primaryBorderColor: '#003d73',
        lineColor: '#6c757d',
        secondaryColor: '#f8f9fa',
        tertiaryColor: '#e9ecef',
        background: 'transparent'
      },
      flowchart: {
        curve: 'basis'
      },
      securityLevel: 'loose'
    });
    
    if (containerRef.current) {
        containerRef.current.innerHTML = ''; // Force re-render
        mermaid.render(id, chart).then(({ svg }) => {
            if (containerRef.current) {
                containerRef.current.innerHTML = svg;
            }
        }).catch(err => console.error("Mermaid Render Error", err));
    }
  }, [chart, id]);

  return <div className="mermaid" ref={containerRef} />;
}

MermaidDiagram.propTypes = {
  chart: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

