
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-aiklar-dark/90 backdrop-blur-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-2xl font-bold text-white tracking-tight cursor-pointer"
        >
          <span className="text-aiklar-green">Ai</span>Klar
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['Om os', 'Ydelser', 'SkoleM8', 'Kontakt'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item === 'Om os' ? 'about' : item.toLowerCase()}`} 
                  className="text-white/80 hover:text-white transition-colors duration-300 text-sm tracking-wide"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
