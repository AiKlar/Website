
import { useEffect, useRef } from 'react';

interface FounderProps {
  name: string;
  description: string;
  delay: number;
}

const Founder = ({ name, description, delay }: FounderProps) => {
  return (
    <div 
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scale-in opacity-0"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="w-32 h-32 bg-aiklar-dark/10 rounded-full mx-auto mb-6 overflow-hidden">
        {/* Placeholder for founder image */}
        <div className="w-full h-full flex items-center justify-center text-aiklar-dark/30 text-5xl font-light">
          {name.charAt(0)}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-aiklar-dark">{name}</h3>
      <p className="text-aiklar-dark/70">{description}</p>
    </div>
  );
};

const FoundersSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-scale-in');
            elements.forEach(el => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="stiftere" ref={sectionRef} className="py-24 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 section-heading">
          Stiftere
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Founder 
            name="Søren Larsen" 
            description="Søren har undervist unge i efterskoler og lignende i mange år."
            delay={200}
          />
          <Founder 
            name="Jimmi Bram" 
            description="Jimmi har lang erfaring fra tech-branchen, med roller som udvikler og CTO."
            delay={500}
          />
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
