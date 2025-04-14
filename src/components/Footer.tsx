
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sushi-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Sushi Delight</h3>
            <p className="text-white/70 mb-4">
              Authentic Japanese cuisine crafted with care and expertise for an unforgettable dining experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#menu" className="text-white/70 hover:text-white transition-colors">Menu</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-2 text-white/70">
              <li>123 Sushi Street</li>
              <li>San Francisco, CA 94103</li>
              <li>(555) 123-4567</li>
              <li>info@sushidelight.com</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-white/70">
              <li>Monday - Thursday: 11:30 AM - 9:30 PM</li>
              <li>Friday - Saturday: 11:30 AM - 10:30 PM</li>
              <li>Sunday: 12:00 PM - 9:00 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/70">© {new Date().getFullYear()} Sushi Delight. All rights reserved.</p>
          <p className="text-white/50 text-sm mt-2">
            Designed with <span className="text-sushi-red">♥</span> by Lovable
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
