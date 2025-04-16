
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  
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

  const navItems = ['Om os', 'Det vi gør', 'SkoleM8', 'Kontakt'];

  const NavLinks = ({ className = "", onClick = () => {} }) => (
    <ul className={`space-y-4 md:space-y-0 md:flex md:space-x-8 ${className}`}>
      {navItems.map((item) => (
        <li key={item}>
          <a 
            href={`#${item === 'Om os' ? 'about' : item === 'Det vi gør' ? 'ydelser' : item.toLowerCase()}`} 
            className="text-white/80 hover:text-white transition-colors duration-300 text-sm tracking-wide"
            onClick={onClick}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-aiklar-dark/90 backdrop-blur-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="/"
          className="text-2xl font-bold text-white tracking-tight cursor-pointer"
        >
          <span className="text-aiklar-green">Ai</span>Klar
        </a>
        
        <nav className="hidden md:block">
          <NavLinks />
        </nav>
        
        {isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-aiklar-dark/95 backdrop-blur-md text-white border-aiklar-dark">
              <div className="flex flex-col h-full pt-10">
                <NavLinks onClick={() => document.querySelector('[data-radix-dialog-close]')?.click()} />
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
};

export default Header;
