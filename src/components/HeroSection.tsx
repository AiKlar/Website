
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fadeInElement');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-aiklar-dark overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-aiklar-dark/30 to-aiklar-dark" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-aiklar-blue/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-aiklar-green/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            <span className="block animate-[fadeIn_1s_ease-in-out_forwards,slideUp_1s_ease-out_forwards] opacity-0 translate-y-8">Smartere Skoler</span>
            <span className="block mt-2 animate-[fadeIn_1s_ease-in-out_0.3s_forwards,slideUp_1s_ease-out_0.3s_forwards,pulse_2s_ease-in-out_1.3s] opacity-0 translate-y-8">Mennesker i centrum.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto mb-8 transition-all duration-1000 ease-out delay-600 translate-y-0 opacity-100" style={{ animationFillMode: 'forwards' }}>
            Vi er et dansk AI-firma, der underviser og bygger løsninger til Efterskoler, Frie Fagskoler og Specialskoler.
          </p>
          
          <a 
            href="#kontakt" 
            className="inline-block bg-aiklar-blue hover:bg-aiklar-blue/90 text-white py-3 px-8 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-1000 ease-out delay-900 translate-y-0 opacity-100"
            style={{ animationFillMode: 'forwards' }}
          >
            Kontakt os her
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/60">
          <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
