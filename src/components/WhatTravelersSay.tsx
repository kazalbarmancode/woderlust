'use client'
import React from 'react'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'

const testimonials = [
  {
    id: 1,
    quote:
      '"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."',
    name: 'Michael Chen',
    location: 'Singapore',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 2,
    quote:
      '"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"',
    name: 'Sarah Johnson',
    location: 'New York, USA',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 3,
    quote:
      '"An incredible trip from start to finish. The customer support was always active and helped us personalize our itinerary with ease."',
    name: 'David Silva',
    location: 'London, UK',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
  },
]

export default function WhatTravelersSay() {
  return (
    <section
      className="bg-white py-16 px-4 sm:px-6 lg:px-8"
      aria-label="Traveler testimonials"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 tracking-tight">
            What Travelers Say
          </h2>
          <p className="mt-2 text-slate-500 text-sm sm:text-base">
            Real experiences from our happy travelers
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: 'start',
            slidesToScroll: 1,
            loop: true,
            breakpoints: {
              '(min-width: 768px)': {
                slidesToScroll: 1,
              },
            },
          }}
          className="relative"
        >
          <CarouselContent className="pb-4 md:pb-0">
            {testimonials.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2">
                <div className="border border-slate-200/80 rounded-sm p-6 sm:p-8 h-full flex flex-col justify-between bg-white shadow-xs">
                  <div className="flex flex-col-reverse sm:flex-row items-start justify-between gap-6">
                    {/* Quote & Author Info */}
                    <div className="flex-1 flex flex-col justify-between h-full">
                      <p className="text-slate-800 font-serif text-base sm:text-lg leading-relaxed">
                        {item.quote}
                      </p>

                      <div className="mt-8">
                        <p className="text-cyan-600 font-medium text-sm flex items-center gap-1">
                          <span className="inline-block w-3 h-[1.5px] bg-cyan-600" />
                          {item.name}
                        </p>
                        <p className="text-slate-400 text-xs mt-0.5 ml-4">
                          {item.location}
                        </p>
                      </div>
                    </div>

                    {/* Profile Picture */}
                    <div className="relative w-full sm:w-44 h-56 sm:h-44 flex-shrink-0 rounded-md overflow-hidden bg-slate-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 176px"
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className="bg-white/80 hover:bg-white border-slate-300 hover:border-slate-800 text-slate-600 hover:text-slate-900 shadow-md -left-8 md:-left-12"
            aria-label="Previous testimonial"
          />
          <CarouselNext
            className="bg-white/80 hover:bg-white border-slate-300 hover:border-slate-800 text-slate-600 hover:text-slate-900 shadow-md -right-8 md:-right-12"
            aria-label="Next testimonial"
          />
        </Carousel>
      </div>
    </section>
  )
}