
import React from 'react';

interface AboutSectionProps {
  ownerImage: string;
}

const AboutSection = ({ ownerImage }: AboutSectionProps) => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">Discover the story behind our passion for authentic sushi</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-sushi-red rounded-lg"></div>
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={ownerImage || "/placeholder.svg"} 
                alt="Restaurant Owner" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-sushi-navy mb-4">Our Sushi Story</h3>
            <p className="text-gray-700 mb-6">
              For over 15 years, our family-owned restaurant has been serving the finest Japanese cuisine with a focus on traditional sushi preparation methods and innovative flavors.
            </p>
            <p className="text-gray-700 mb-6">
              Our journey began in the coastal regions of Japan, where our head chef mastered the art of sushi making under the guidance of renowned sushi masters. We brought these authentic techniques to our restaurant, combining them with locally sourced ingredients to create a unique dining experience.
            </p>
            <p className="text-gray-700 mb-6">
              Today, our passion for exceptional sushi continues to drive us. We take pride in our meticulous attention to detail, from selecting the freshest seafood to creating the perfect sushi rice. Every dish is crafted to bring you the true essence of Japanese culinary artistry.
            </p>
            <div className="flex items-center">
              <div className="mr-4">
                <img 
                  src="/placeholder.svg" 
                  alt="Chef Signature"
                  className="w-20 h-auto" 
                />
              </div>
              <div>
                <p className="font-medium text-sushi-navy">Chef Hiroshi Takahashi</p>
                <p className="text-sm text-gray-500">Founder & Master Chef</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
