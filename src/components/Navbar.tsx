
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <span className="font-bold text-2xl text-sushi-navy">Sushi Delight</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-700 hover:text-sushi-red font-medium">Home</a>
          <a href="#about" className="text-gray-700 hover:text-sushi-red font-medium">About</a>
          <a href="#menu" className="text-gray-700 hover:text-sushi-red font-medium">Menu</a>
          <a href="#testimonials" className="text-gray-700 hover:text-sushi-red font-medium">Testimonials</a>
          <a href="#contact" className="text-gray-700 hover:text-sushi-red font-medium">Contact</a>
          <Button className="btn-secondary">Order Online</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white pb-4 animate-fade-in">
          <div className="container-custom flex flex-col space-y-4">
            <a href="#home" className="text-gray-700 hover:text-sushi-red font-medium py-2" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" className="text-gray-700 hover:text-sushi-red font-medium py-2" onClick={() => setIsOpen(false)}>About</a>
            <a href="#menu" className="text-gray-700 hover:text-sushi-red font-medium py-2" onClick={() => setIsOpen(false)}>Menu</a>
            <a href="#testimonials" className="text-gray-700 hover:text-sushi-red font-medium py-2" onClick={() => setIsOpen(false)}>Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-sushi-red font-medium py-2" onClick={() => setIsOpen(false)}>Contact</a>
            <Button className="btn-secondary w-full">Order Online</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
