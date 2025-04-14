
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const MenuSection = () => {
  const menuCategories = [
    {
      id: 1,
      name: "Signature Rolls",
      description: "Our chef's special creations",
      items: [
        {
          name: "Dragon Roll",
          description: "Shrimp tempura, cucumber, topped with avocado and unagi sauce",
          price: "$16.99",
          popular: true
        },
        {
          name: "Rainbow Roll",
          description: "California roll topped with assorted sashimi and avocado",
          price: "$18.99",
          popular: false
        },
        {
          name: "Volcano Roll",
          description: "Spicy tuna, cucumber, topped with spicy crab and tempura flakes",
          price: "$17.99",
          popular: true
        }
      ]
    },
    {
      id: 2,
      name: "Sashimi",
      description: "Premium slices of raw fish",
      items: [
        {
          name: "Salmon Sashimi",
          description: "5 slices of fresh Atlantic salmon",
          price: "$14.99",
          popular: false
        },
        {
          name: "Tuna Sashimi",
          description: "5 slices of bluefin tuna",
          price: "$16.99",
          popular: true
        },
        {
          name: "Yellowtail Sashimi",
          description: "5 slices of yellowtail",
          price: "$15.99",
          popular: false
        }
      ]
    },
    {
      id: 3,
      name: "Nigiri",
      description: "Traditional sushi with rice",
      items: [
        {
          name: "Salmon Nigiri",
          description: "2 pieces of fresh salmon on sushi rice",
          price: "$6.99",
          popular: false
        },
        {
          name: "Tuna Nigiri",
          description: "2 pieces of bluefin tuna on sushi rice",
          price: "$7.99",
          popular: false
        },
        {
          name: "Unagi Nigiri",
          description: "2 pieces of grilled freshwater eel on sushi rice",
          price: "$8.99",
          popular: true
        }
      ]
    }
  ];

  return (
    <section id="menu" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Menu</h2>
          <p className="section-subtitle">Explore our carefully crafted selection of authentic Japanese cuisine</p>
        </div>
        
        <div className="space-y-16">
          {menuCategories.map(category => (
            <div key={category.id}>
              <h3 className="text-2xl font-bold text-sushi-navy mb-2">{category.name}</h3>
              <p className="text-gray-600 mb-6">{category.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-gray-800">{item.name}</h4>
                        <span className="font-medium text-sushi-red">{item.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                      {item.popular && (
                        <span className="inline-block mt-2 bg-sushi-gold/20 text-sushi-dark text-xs font-medium px-2 py-1 rounded">
                          Popular Choice
                        </span>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="italic text-gray-600 mb-6">* Consuming raw or undercooked seafood may increase your risk of foodborne illness.</p>
          <p className="font-medium">View our full menu in restaurant for more options and seasonal specials.</p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
