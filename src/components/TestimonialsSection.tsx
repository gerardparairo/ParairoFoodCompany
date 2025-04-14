
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Food Enthusiast",
      comment: "The freshest sushi I've ever had outside of Japan! The flavors are incredible and the presentation is beautiful. Will definitely be coming back regularly.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Davis",
      role: "Local Resident",
      comment: "I've been a regular here for years and the quality has never declined. The Dragon Roll is my absolute favorite - perfectly balanced flavors every time!",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Culinary Blogger",
      comment: "As someone who's traveled extensively through Japan, I can say this restaurant truly captures the essence of authentic sushi. The attention to detail is remarkable.",
      rating: 5
    }
  ];

  const renderStars = (count: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={`${i < count ? 'text-sushi-gold fill-sushi-gold' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">Don't just take our word for it - hear from our valued guests</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <Card key={testimonial.id} className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-500 font-medium text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
