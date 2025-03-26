
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 section-heading">
          SkoleM8
        </h2>
        
        <div className="max-w-2xl mx-auto mb-12 bg-aiklar-blue/10 p-4 rounded-lg border border-aiklar-blue/20 text-center">
          <p className="text-aiklar-dark font-medium mb-2">Under Udvikling</p>
          <p className="text-aiklar-dark/80 text-sm">
            SkoleM8 er i øjeblikket under udvikling. Vi søger skoler, der vil være med til at udvikle SkoleM8 sammen med os, så den kan blive den bedste tæt integrerede digitale kontaktlærer, elev og undervisningsassistent. 
            <a href="#kontakt" className="text-aiklar-blue hover:underline ml-1">
              Kontakt os for at høre mere.
            </a>
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          <div className="space-y-8 md:pr-6">
            <div className="feature-item fadeInElement">
              <h3 className="font-semibold mb-2">Tæt integreret med din skole</h3>
              <p className="text-aiklar-dark/70">SkoleM8 kan give info om skemaer, regler på skolen, kultur og meget mere, da den er tæt integreret med netop jeres skole.</p>
            </div>
            <div className="feature-item fadeInElement">
              <h3 className="font-semibold mb-2">Opdager tegn på mistrivsel og reagerer</h3>
              <p className="text-aiklar-dark/70">SkoleM8 leder hele tiden efter spor på mistrivsel, med AI modeller specielt trænet til dette. Herefter guider den unge i retning mod kvalificeret hjælp.</p>
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
                    <p className="text-sm">Hvodan får man egentlig lettest nye venner på skolen her?</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm max-w-[80%]">
                    <p className="text-sm">Vi hører ofte fra tidligere elever at de mødte hinanden til fritidsarrangementerne om aftenen.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 md:pl-6">
            <div className="feature-item fadeInElement">
              <h3 className="font-semibold mb-2">Hjælper i specifikke fag som matematik, dansk, fysik m.fl.</h3>
              <p className="text-aiklar-dark/70">Giver faglig støtte og svar inden for pensum. SkoleM8 løser aldrig opgaven, men kan hjælpe eleven videre og inspirere til løsninger.</p>
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
