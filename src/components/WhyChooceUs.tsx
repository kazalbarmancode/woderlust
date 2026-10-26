import React from 'react';
import { ShieldCheck, Map, Headphones } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: ShieldCheck,
      title: 'Safe & Secure',
      description: 'Your safety is our priority with comprehensive travel insurance and 24/7 support.',
    },
    {
      id: 2,
      icon: Map,
      title: 'Expert Guides',
      description: 'Local experts who bring destinations to life with authentic cultural insights.',
    },
    {
      id: 3,
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer service to assist you wherever your journey takes you.',
    },
  ];

  return (
    <section className="bg-[#f0f9ff] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Top Decorative Line */}
        <div className="w-8 h-1 bg-cyan-500 mx-auto rounded-full mb-4" />

        {/* Section Title & Subtitle */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 tracking-tight">
          Why Choose Wanderlast
        </h2>
        <p className="mt-3 text-slate-500 text-sm sm:text-base">
          Your trusted partner for exceptional travel experiences
        </p>

        {/* Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 flex flex-col items-start"
              >
                {/* Icon */}
                <div className="p-2 text-cyan-600 mb-6">
                  <Icon className="w-10 h-10 stroke-[1.75]" />
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-serif font-medium text-slate-900 mb-3">
                  {feature.title}
                </h3>

                {/* Card Description */}
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Decorative Line */}
        <div className="w-8 h-1 bg-cyan-500 mx-auto rounded-full mt-12" />
      </div>
    </section>
  );
}