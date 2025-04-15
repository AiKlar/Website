
import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FoundersSection from "@/components/FoundersSection";
import OfferingsSection from "@/components/OfferingsSection";
import ProductSection from "@/components/ProductSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    document.querySelectorAll('.fadeInElement').forEach(el => {
      observer.observe(el);
    });

    // Handle section scrolling from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const section = urlParams.get('section');
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }

    return () => {
      document.querySelectorAll('.fadeInElement').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-aiklar-light">
      <Header />
      <HeroSection />
      <AboutSection />
      <FoundersSection />
      <OfferingsSection />
      <ProductSection />
      <ContactSection />
    </div>
  );
};

export default Index;
