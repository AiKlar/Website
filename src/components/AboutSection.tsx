import { useEffect, useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
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
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-aiklar-dark mb-8 text-center animate-fade-in">
            Om <span className="text-aiklar-blue">os</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in">
              <p className="text-lg text-aiklar-dark/80 leading-relaxed">
              AiKlar er et dansk AI-firma med rødder i uddannelsessektoren og et klart mål: at bringe kunstig intelligens i øjenhøjde med mennesker. Vi udvikler løsninger, der er til at forstå, til at stole på – og til at bruge i praksis.
              </p>
              <p className="text-lg text-aiklar-dark/80 leading-relaxed">
              Vi er et lille, dedikeret team med stærke kompetencer inden for maskinlæring, softwareudvikling og pædagogik. Vores arbejde bygger på troen på, at AI skal understøtte og højne – ikke overtage – menneskelige beslutninger og relationer. Med SkoleMate, onlinekurser og målrettet rådgivning hjælper vi skoler med at navigere sikkert og meningsfuldt i en teknologisk virkelighed i hastig udvikling.
              </p>
            </div>
            
            <div className="bg-aiklar-light p-8 rounded-xl shadow-lg animate-scale-in">
              <h3 className="text-xl font-bold text-aiklar-dark mb-4">Vores kerneprincipper:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-aiklar-green flex items-center justify-center mr-3 mt-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-aiklar-dark/80">
                    <strong className="text-aiklar-dark">AI med mening</strong> - Vores løsninger skaber reel værdi i skolehverdagen – for både lærere, elever og ledere.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-aiklar-green flex items-center justify-center mr-3 mt-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-aiklar-dark/80">
                    <strong className="text-aiklar-dark">Sikkerhed som standard</strong> - Vi prioriterer datasikkerhed og overholder alle gældende regler, herunder GDPR og EU's AI-forordning.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-aiklar-green flex items-center justify-center mr-3 mt-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-aiklar-dark/80">
                    <strong className="text-aiklar-dark">Skabt til skoler</strong> - Teknologien er udviklet af folk med rødder i skoleverdenen – den passer til jeres praksis, ikke omvendt.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-aiklar-green flex items-center justify-center mr-3 mt-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-aiklar-dark/80">
                    <strong className="text-aiklar-dark">Vi bygger viden</strong> - AiKlar er mere end produkter – vi uddanner, inspirerer og hjælper skoler med at blive klar til fremtiden med AI.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-aiklar-blue/5 rounded-full" />
      <div className="absolute top-16 -right-16 w-32 h-32 bg-aiklar-green/5 rounded-full" />
    </section>
  );
};

export default AboutSection;