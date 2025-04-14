
import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-sushi-navy text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white">Visit Us</h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            We'd love to welcome you to our restaurant for an unforgettable dining experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="mr-4 text-sushi-red shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Location</p>
                    <p className="text-white/80">123 Sushi Street</p>
                    <p className="text-white/80">San Francisco, CA 94103</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mr-4 text-sushi-red shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <p className="text-white/80">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="mr-4 text-sushi-red shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <p className="text-white/80">info@sushidelight.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="mr-4 text-sushi-red shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Hours</p>
                    <p className="text-white/80">Monday - Thursday: 11:30 AM - 9:30 PM</p>
                    <p className="text-white/80">Friday - Saturday: 11:30 AM - 10:30 PM</p>
                    <p className="text-white/80">Sunday: 12:00 PM - 9:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="btn-secondary w-full">Make a Reservation</Button>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] rounded-lg overflow-hidden">
            {/* This would be a map, but for now using a placeholder div */}
            <div className="w-full h-full bg-white/10 flex items-center justify-center">
              <p className="text-center px-4">
                <MapPin className="inline-block mb-4" size={48} />
                <br />
                <span className="text-lg">Map Location</span>
                <br />
                <span className="text-sm text-white/70">123 Sushi Street, San Francisco, CA 94103</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
