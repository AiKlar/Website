
import { useEffect, useRef } from 'react';

interface OfferingProps {
  title: string;
  subtitle: string;
  delay: number;
}

const Offering = ({ title, subtitle, delay }: OfferingProps) => {
  return (
    <div 
      className="bg-white rounded-2xl p-8 shadow-lg border border-aiklar-green/10 hover:border-aiklar-green/30 transition-all duration-500 group opacity-0 animate-slide-in"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="w-16 h-16 bg-aiklar-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-aiklar-blue/20 transition-all duration-300">
        {title === "Foredrag" && (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 10V12C19 15.866 15.866 19 12 19M19 10V6C19 3.79086 17.2091 2 15 2H9C6.79086 2 5 3.79086 5 6V16C5 18.2091 6.79086 20 9 20H12M19 10H15M12 19V22M8 22H16M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#4F76F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
        {title === "Online kurser" && (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 18V14M9 14V18M15 14V18M9 22H15C17.2091 22 19 20.2091 19 18V9C19 8.44772 18.5523 8 18 8H6C5.44772 8 5 8.44772 5 9V18C5 20.2091 6.79086 22 9 22ZM3 8H21M12 8V3C12 2.44772 11.5523 2 11 2H8C7.44772 2 7 2.44772 7 3V6" stroke="#4F76F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
        {title === "SkoleM8 chat-robot" && (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12H12.01M8 12H8.01M16 12H16.01M21 12C21 16.4183 16.9706 20 12 20C10.4607 20 9.01172 19.6565 7.74467 19.0511L3 20L4.39499 16.28C3.51156 15.0423 3 13.5743 3 12C3 7.58172 7.02944 4 12 4C16.9706 4 21 7.58172 21 12Z" stroke="#4F76F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center text-aiklar-dark">{title}</h3>
      <p className="text-center text-aiklar-dark/70">{subtitle}</p>
    </div>
  );
};

const OfferingsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-slide-in');
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
    <section id="ydelser" ref={sectionRef} className="py-24 px-6 bg-aiklar-light">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 section-heading">
          Hvad vi tilbyder
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Offering title="Foredrag" subtitle="Engagement" delay={100} />
          <Offering title="Online kurser" subtitle="Uddannelse" delay={300} />
          <Offering title="SkoleM8 chat-robot" subtitle="AI-løsninger" delay={500} />
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
