
import { useEffect, useRef } from 'react';

interface FounderProps {
  name: string;
  description: string;
  delay: number;
  imageSrc?: string;
  email?: string;
  title?: string;
}

const Founder = ({ name, description, delay, imageSrc, email, title }: FounderProps) => {
  // Email with bot protection through JavaScript
  const renderEmail = () => {
    if (!email) return null;
    
    return (
      <button 
        className="text-aiklar-blue hover:underline text-sm font-normal -mt-2 mb-3 "
        onClick={(e) => {
          e.preventDefault();
          window.location.href = `mailto:${email}`;
        }}
        aria-label={`Send email to ${name}`}
      >
        {email}
      </button>
    );
  };
  return (
    <div 
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scale-in opacity-0"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-aiklar-dark/10 flex items-center justify-center text-aiklar-dark/30 text-5xl font-light">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold mb-1 text-aiklar-dark">{name}</h3>
      <p className="text-aiklar-dark">{title}</p>
      {renderEmail()}
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
          Stifterne af AiKlar
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Founder 
            name="Søren Larsen" 
            description="Søren har en solid baggrund som underviser på Efterskoler og Frie Fagskoler, hvor han ikke kun har formidlet viden, men også skabt strukturer, der optimerer både undervisning og administration. Han har gang på gang taget rollen som optimeringsekspert og sat retningslinjer, der sikrer en mere effektiv og meningsfuld hverdag for både elever og ansatte."
            delay={200}
            imageSrc="/sorenprofil.jpeg"
            email="sl@aiklar.dk"
            title="Stifter & CEO"
          />
          <Founder 
            name="Jimmi Bram" 
            description="Jimmi Bram er en erfaren IT-arkitekt og underviser med en baggrund i softwareudvikling, cybersikkerhed og AI. Efter mange år i ledende IT-roller har han valgt at fokusere på at udvikle AI-løsninger til skoler, hvor teknologi understøtter læring uden at fjerne det menneskelige element. "
            delay={500}
            imageSrc="/jimmiprofil.jpeg"
            email="jb@aiklar.dk"
            title = "Stifter & CTO"
          />
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
