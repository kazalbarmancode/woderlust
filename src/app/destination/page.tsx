"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight, Calendar, MapPin, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Destination {
    _id:string
  id: string
  name:string,
  destinationName: string
  country: string
  category: string
  price: number
  duration: string
  departureDate: string
  imageUrl: string
  description: string
}

export default function DestinationsPage() {
  const [destinations, setDestinations] = useState<Destination[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await fetch("http://localhost:5000/destinations")
        if (!res.ok) {
          throw new Error("Failed to fetch destinations")
        }
        const json = await res.json() 
        setDestinations(Array.isArray(json) ? json : []) 
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong!")
      } finally {
        setLoading(false)
      }
    }

    fetchDestinations()
  }, [])
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-red-700">
          <p className="font-medium">Error loading destinations</p>
          <p className="text-sm text-red-500 mt-1">{error}</p>
        </div>
      </div>
    )
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-serif text-slate-900 tracking-tight">
          Explore All Destinations
        </h1>
        <p className="mt-2 text-slate-500">
          Find your perfect travel experience from our curated collection
        </p>
      </div>

      {/* Filter Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <select className="border border-slate-200 bg-white rounded-md px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
          <option value="">All Categories</option>
          <option value="Beach">Beach</option>
          <option value="Mountain">Mountain</option>
          <option value="City">City</option>
          <option value="Desert">Desert</option>
        </select>
        <select className="border border-slate-200 bg-white rounded-md px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
          <option value="">Price Range</option>
          <option value="0-500">$0 - $500</option>
          <option value="500-1000">$500 - $1,000</option>
          <option value="1000-2000">$1,000 - $2,000</option>
          <option value="2000+">$2,000+</option>
        </select>
        <select className="border border-slate-200 bg-white rounded-md px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
          <option value="">Sort By</option>
          <option value="newest">Newest First</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      <p className="text-slate-500 text-sm mb-6">
        Showing {destinations.length} destination{destinations.length !== 1 ? "s" : ""}
      </p>

      {/* Destination Cards */}
      {destinations.length === 0 ? (
        <div className="text-center py-16">
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-12 max-w-md mx-auto">
            <p className="text-slate-500">No destinations found.</p>
            <Link
              href="/adddestination"
              className="mt-4 inline-flex items-center gap-2 text-cyan-600 font-medium hover:underline"
            >
              Add your first destination
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest,index) => (
            <div
              key={dest.id||index}
              className="border border-slate-200/80 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col"
            >
              {/* Image Container with Rating Badge */}
              <div className="relative h-48 w-full bg-slate-100">
                <Image
                  src={dest.imageUrl}
                  alt={dest.destinationName|| `${dest.imageUrl}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1 text-slate-800 shadow">
                  <span>{(4.5).toFixed(1)}</span>
                  <Star className="w-3.5 h-3.5 fill-black text-black" />
                </div>
              </div>

              {/* Content Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-slate-500 text-xs mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{dest.country}</span>
                  </div>
                  <div>
                    <h1>Destination Name{dest.destinationName}</h1>
                  </div>

                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-semibold text-lg text-slate-900 line-clamp-1">
                      {dest.name}
                    </h3>
                    <div className="text-right">
                      <span className="font-bold text-slate-900">${dest.price}</span>
                      <span className="text-slate-400 text-xs">/Person</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-slate-400 text-xs mb-4">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{dest.duration}</span>
                  </div>

                  <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                    {dest.description}
                  </p>
                </div>

                {/* Action Button */}
                <Link
                  href={`/destination/${dest._id }`}
                  className="inline-flex items-center gap-1 text-cyan-600 font-semibold text-sm hover:underline tracking-wide uppercase border-t border-slate-100 pt-4"
                >
                  View Details
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}