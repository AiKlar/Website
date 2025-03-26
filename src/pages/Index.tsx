
import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
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
      <FoundersSection />
      <OfferingsSection />
      <ProductSection />
      <ContactSection />
    </div>
  );
};

export default Index;
