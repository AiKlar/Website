
import { useEffect, useRef } from 'react';

interface FounderProps {
  name: string;
  description: string;
  delay: number;
  imageSrc?: string;
  email?: string;
  title?: string;
  linkedIn?: string;
}

const Founder = ({ name, description, delay, imageSrc, email, title, linkedIn }: FounderProps) => {
  // Email with bot protection through JavaScript
  const renderEmail = () => {
    if (!email) return null;
    
    return (
      <button 
        className="text-aiklar-blue hover:underline text-sm font-normal -mt-2 mb-3 mr-4"
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

  // LinkedIn link
  const renderLinkedIn = () => {
    if (!linkedIn) return null;
    
    return (
      <a 
        href={linkedIn}
        target="_blank"
        rel="noopener noreferrer"
        className="text-aiklar-blue hover:underline text-sm font-normal inline-flex items-center"
        aria-label={`${name}'s LinkedIn profile`}
      >
        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
        LinkedIn
      </a>
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
      <div className="flex flex-wrap items-center">
        {renderEmail()}
      </div>
      <div className="mb-3">
        {renderLinkedIn()}
      </div>
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
            linkedIn="https://www.linkedin.com/in/søren-larsen-38234b355/"
          />
          <Founder 
            name="Jimmi Bram" 
            description="Jimmi Bram er en erfaren IT-arkitekt og underviser med en baggrund i softwareudvikling, cybersikkerhed og AI. Efter mange år i ledende IT-roller har han valgt at fokusere på at udvikle AI-løsninger til skoler, hvor teknologi understøtter læring uden at fjerne det menneskelige element. "
            delay={500}
            imageSrc="/jimmiprofil.jpeg"
            email="jb@aiklar.dk"
            title="Stifter & CTO"
            linkedIn="https://www.linkedin.com/in/jimmibram/"
          />
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
