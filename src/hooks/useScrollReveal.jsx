import { useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const defaultOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -10px 0px",
      ...options
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observerInstance.unobserve(entry.target);
        }
      });
    }, defaultOptions);

    const currentRef = ref.current;
    
    // Fallback: Si no se dispara el observer en 1s, forzar visibilidad
    const timeoutId = setTimeout(() => {
      if (currentRef && !currentRef.classList.contains('active')) {
        currentRef.classList.add('active');
      }
    }, 1000);

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      clearTimeout(timeoutId);
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return ref;
}
