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
            Hvad vi <span className="text-aiklar-blue">gør</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in">
              <p className="text-lg text-aiklar-dark/80 leading-relaxed">
                Hos AiKlar har vi en dyb forståelse for, at kunstig intelligens kun har værdi, når den sætter mennesker i stand til at opnå mere. Vi bygger AI-systemer, der forstærker menneskelige evner i stedet for at erstatte dem.
              </p>
              <p className="text-lg text-aiklar-dark/80 leading-relaxed">
                Vi fokuserer på at udvikle løsninger, der er transparente, forklarlige og etisk forsvarlige. Vores team kombinerer ekspertise inden for maskinlæring, software udvikling og domænespecifik viden for at skabe teknologier, der fungerer i den virkelige verden.
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
                    <strong className="text-aiklar-dark">Menneskecentreret design</strong> - Vi lytter til brugerne og designer løsninger, der naturligt passer ind i deres arbejdsgang.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-aiklar-green flex items-center justify-center mr-3 mt-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-aiklar-dark/80">
                    <strong className="text-aiklar-dark">Transparens</strong> - Vi bygger systemer, hvor beslutningsprocesser er gennemskuelige og forståelige.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-aiklar-green flex items-center justify-center mr-3 mt-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-aiklar-dark/80">
                    <strong className="text-aiklar-dark">Etisk ansvarlighed</strong> - Vi integrerer etiske overvejelser i alle aspekter af vores udviklingsproces.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-aiklar-green flex items-center justify-center mr-3 mt-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-aiklar-dark/80">
                    <strong className="text-aiklar-dark">Praktisk innovation</strong> - Vi skaber løsninger, der løser reelle problemer og skaber målbar værdi.
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