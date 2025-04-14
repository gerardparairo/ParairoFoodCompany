
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center hero-pattern bg-sushi-cream">
      <div className="absolute inset-0 bg-gradient-to-r from-sushi-navy/90 to-sushi-dark/80"></div>
      <div className="container-custom relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-up">
          Experience Authentic<br />Japanese Cuisine
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '200ms' }}>
          Handcrafted sushi made with the freshest ingredients, prepared by expert chefs delivering unforgettable flavors.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '400ms' }}>
          <Button className="btn-secondary" size="lg">
            View Our Menu
          </Button>
          <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/20">
            Make Reservation
          </Button>
        </div>
        
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={36} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
