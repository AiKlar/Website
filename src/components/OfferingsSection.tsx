import { useEffect, useRef } from 'react';

interface OfferingProps {
  title: string;
  description: string;
  bulletPoints?: string[];
  delay: number;
  icon: React.ReactNode;
}


const Offering = ({ title, description, bulletPoints, delay, icon }: OfferingProps) => {
  return (
    <div 
      className="bg-white rounded-2xl p-8 shadow-lg border border-aiklar-green/10 hover:border-aiklar-green/30 transition-all duration-500 group opacity-0 animate-slide-in flex flex-col h-full"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="w-16 h-16 bg-aiklar-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-aiklar-blue/20 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-center text-aiklar-dark">{title}</h3>
      
      <div className="text-aiklar-dark/70 mb-4">{description}</div>
      
      {bulletPoints && bulletPoints.length > 0 && (
        <div className="mt-auto pt-3 border-t border-aiklar-green/10">
          <ul className="space-y-1 list-disc list-inside text-aiklar-dark/80">
            {bulletPoints.map((point, index) => (
              <li key={index} className="text-sm">{point}</li>
            ))}
          </ul>
        </div>
      )}
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
          Det vi gør
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Offering 
            title="Inspiration" 
            description="Vi introducerer dig til AI's muligheder og udfordringer gennem engagerende foredrag og hands-on workshops." 
            bulletPoints={[
              "Foredrag om AI's potentiale i uddannelse",
              "Praktiske workshops med værktøjer",
              "Demystificering af AI-teknologier"
            ]}
            delay={100} 
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.663 17H6.75C5.23122 17 4 15.7688 4 14.25V7.75C4 6.23122 5.23122 5 6.75 5H17.25C18.7688 5 20 6.23122 20 7.75V10.5M15.5 14V19M15.5 19L13 16.5M15.5 19L18 16.5M9 9H15M9 13H12" stroke="#4F76F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />
          
          <Offering 
            title="Opkvalificering" 
            description="On- og offline undervisning i AI løsninger og hvordan man bedst bruger dem i undervisningen." 
            bulletPoints={[
              "Hands-on workshops til lærere",
              "Praktiske tilgange til AI i undervisningen",
              "Etik og sikkerhed i anvendelsen af AI"
            ]}
            delay={300} 
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 11V14M12 14V17M12 14H15M12 14H9M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#4F76F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />
          
          <Offering 
            title="AI Løsninger" 
            description="Målrettede AI løsninger til Efterskolerne, Frie Fagskoler og Specialskoler. Herunder vores SkoleM8 (SkoleMate), som er en chatbot der kan hjælpe eleverne i og udenfor undervisningen. En slags digital kontaktlære, dansklære, matematiklære og meget mere."
            bulletPoints={[
              "SkoleM8 - Digital kontaktlærer og assistent",
              "Værktøjer til effektivisering af administration",
              "Tilpassede løsninger til specifikke behov"
            ]}
            delay={500} 
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12H12.01M8 12H8.01M16 12H16.01M21 12C21 16.4183 16.9706 20 12 20C10.4607 20 9.01172 19.6565 7.74467 19.0511L3 20L4.39499 16.28C3.51156 15.0423 3 13.5743 3 12C3 7.58172 7.02944 4 12 4C16.9706 4 21 7.58172 21 12Z" stroke="#4F76F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;