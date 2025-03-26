
import { useEffect, useRef } from 'react';

const ProductSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.fadeInElement');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 200);
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
    <section id="skolem8" ref={sectionRef} className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 section-heading">
          SkoleM8
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          <div className="space-y-8 md:pr-6">
            <div className="feature-item fadeInElement">
              <h3 className="font-semibold mb-2">Tæt integreret med din skole</h3>
              <p className="text-aiklar-dark/70">Chatbotten kan forbindes med skolens systemer.</p>
            </div>
            <div className="feature-item fadeInElement">
              <h3 className="font-semibold mb-2">Opdager tegn på psykisk mistrivsel og reagerer</h3>
              <p className="text-aiklar-dark/70">Den monitorerer elevernes trivsel og alarmerer ved bekymrende mønstre.</p>
            </div>
          </div>
          
          <div className="flex justify-center fadeInElement">
            <div className="relative w-64 h-auto">
              <div className="absolute inset-0 bg-gradient-to-b from-aiklar-blue/20 to-aiklar-green/20 rounded-3xl blur-xl -z-10"></div>
              <div className="bg-aiklar-dark rounded-3xl overflow-hidden border-8 border-aiklar-dark shadow-2xl">
                <div className="w-full h-12 bg-aiklar-dark flex items-center justify-center">
                  <div className="w-24 h-4 rounded-full bg-aiklar-dark-800"></div>
                </div>
                <div className="bg-aiklar-light p-4 space-y-3 h-96">
                  <div className="bg-white rounded-lg p-3 shadow-sm max-w-[80%]">
                    <p className="text-sm">Hej! Jeg er SkoleM8. Hvordan kan jeg hjælpe dig i dag?</p>
                  </div>
                  <div className="bg-aiklar-blue/10 rounded-lg p-3 shadow-sm max-w-[80%] ml-auto">
                    <p className="text-sm">Kan du hjælpe mig med min matematik opgave?</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm max-w-[80%]">
                    <p className="text-sm">Selvfølgelig! Fortæl mig om opgaven, så hjælper jeg dig trin for trin.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 md:pl-6">
            <div className="feature-item fadeInElement">
              <h3 className="font-semibold mb-2">Hjælper i specifikke fag som matematik, dansk, fysik m.fl.</h3>
              <p className="text-aiklar-dark/70">Giver faglig støtte og svar inden for pensum.</p>
            </div>
            <div className="feature-item fadeInElement">
              <h3 className="font-semibold mb-2">Afspejler dansk efterskolekultur i sprog og vejledning</h3>
              <p className="text-aiklar-dark/70">Kommunikerer i et sprog og tonefald, der matcher efterskoleelevernes hverdag.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
