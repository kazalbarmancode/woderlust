"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Star,
  Calendar,
  Check,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import EditDestinationDiolog from "@/components/EditDestinationDiolog";
import DeleteDestinationPage from "@/components/DeleteDestinationPage";

interface Destination {
  _id: string;
  name: string;
  country: string;
  category: string;
  price: string | number;
  duration: string;
  departureDate: string;
  imageUrl: string;
  description: string;
}

export default function DestinationDetailsPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = use(props.params);
  const id = params.id;

  const [destination, setDestination] = useState<Destination | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const res = await fetch(`http://localhost:5000/destinations/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch destination details");
        }
        const data = await res.json();
        setDestination(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchDestination();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500" />
      </div>
    );
  }

  if (error || !destination) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-md mx-auto">
          <p className="text-red-600 font-medium text-lg">
            {error || "Destination not found"}
          </p>
          <Link
            href="/destination"
            className="mt-4 inline-flex items-center gap-2 text-cyan-600 font-semibold hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Destinations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-slate-800 bg-white">
      {/* Top Bar: Back Link & Action Buttons (Edit / Cancel) */}
      <div className="flex items-center justify-between mb-6">
        <Link
          href="/destination"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 text-sm font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Destinations
        </Link>

        <div className="flex items-center gap-3">
          <EditDestinationDiolog />
          <DeleteDestinationPage id={id} />
        </div>
      </div>

      {/* Main Banner Image */}
      <div className="relative w-full h-80 sm:h-105 md:h-120 rounded-xl overflow-hidden mb-8 shadow-sm bg-slate-100">
        <Image
          src={
            destination.imageUrl ||
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4"
          }
          alt={destination.name}
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover"
        />
      </div>

      {/* Content Section & Sidebar Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left 2 Columns: Main Details */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-2">
              <MapPin className="w-4 h-4 text-slate-500" />
              <span>{destination.country}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif text-slate-900 font-bold tracking-tight mb-3">
              {destination.name}
            </h1>

            <div className="flex items-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-1 font-semibold text-slate-900">
                <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                <span>4.9</span>
                <span className="text-slate-400 font-normal text-xs">
                  (234 reviews)
                </span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5 text-slate-600">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>{destination.duration || "7 Days / 6 Nights"}</span>
              </div>
            </div>
          </div>

          <hr className="border-slate-200" />

          {/* Overview Section */}
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Overview
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {destination.description ||
                "Discover the magic with pristine beaches, ancient temples, and vibrant culture. Experience luxury resorts, tropical landscapes, and unforgettable sunsets."}
            </p>
          </div>

          {/* Highlights Section */}
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Highlights
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Discover the magic with pristine beaches, ancient temples, and
              vibrant culture. Experience luxury resorts, tropical landscapes,
              and unforgettable sunsets.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Luxury beachfront accommodation</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Visit Uluwatu Temple at sunset</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Traditional Balinese spa treatment</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Private beach dinner experience</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Sunrise trek to Mount Batur</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right 1 Column: Booking Card Sidebar */}
        <div>
          <div className=" pt-10 mt-8 bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-6">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                Starting from
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-cyan-600">
                  ${destination.price}
                </span>
                <span className="text-slate-400 text-xs">per person</span>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm text-slate-700 font-medium text-center">
              {destination.departureDate || "05/15/2026"}
            </div>

            <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm shadow-sm">
              Book Now
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="space-y-2.5 pt-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Free cancellation up to 7 days</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Travel insurance included</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>24/7 customer support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
