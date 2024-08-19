import React, { useRef, useEffect } from 'react';
import './styles.scss';

const Section = ({ id, children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (sectionRef.current) {
        sectionRef.current.style.minHeight = `${window.innerHeight}px`;
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);

    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <section id={id} className="section" ref={sectionRef}>
      {children}
    </section>
  );
};

export default Section;