
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
        
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto items-start gap-8 mt-4">
          <div className="flex justify-center fadeInElement w-full md:w-1/2">
            <div className="relative w-full max-w-lg h-auto">
              <img 
                src="/skolem8_dialog1.png" 
                alt="SkoleM8 Dialog Interface" 
                className="mx-auto rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <p className="mb-6 text-aiklar-dark">
              SkoleM8 er en digital assistent, der taler skolens sprog og er tæt integreret med jeres systemer. Den støtter eleverne i fagene, hjælper med struktur i hverdagen, reagerer på mistrivsel og fungerer som en virtuel kontaktlærer.
            </p>
            
            <div className="grid grid-cols-1 gap-4 mb-6">
              <div className="feature-item fadeInElement">
                <h3 className="font-semibold">Tæt integreret med jeres skole i viden, sprog og udtryk</h3>
              </div>
              <div className="feature-item fadeInElement">
                <h3 className="font-semibold">Hjælper i specifikke fag som matematik, dansk, fysik m.fl.</h3>
              </div>
              <div className="feature-item fadeInElement">
                <h3 className="font-semibold">Afspejler dansk efterskolekultur i sprog og vejledning</h3>
              </div>
              <div className="feature-item fadeInElement">
                <h3 className="font-semibold">Den digitale kontaktlærer</h3>
              </div>
              <div className="feature-item fadeInElement">
                <h3 className="font-semibold">Datadrevet indsigt til fremtidens skole</h3>
              </div>
              <div className="feature-item fadeInElement">
                <h3 className="font-semibold">Overholder datasikkerhed og lovgivning</h3>
              </div>
            </div>
            
            
            <div>
              <a 
                href="/skolem8" 
                className="inline-block px-6 py-3 bg-aiklar-blue text-white font-medium rounded-lg hover:bg-aiklar-blue-dark transition-colors duration-300"
              >
                Læs mere om SkoleM8
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
