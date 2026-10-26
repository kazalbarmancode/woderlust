import { NextRequest, NextResponse } from "next/server"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    // TODO: Replace with actual database query
    // const destination = await prisma.destination.findUnique({ where: { id } })

    const destinations = [
      {
        id: "1",
        destinationName: "Bali Paradise",
        country: "Indonesia",
        category: "Beach",
        price: 1299,
        duration: "7 Days/6 Nights",
        departureDate: "2026-12-15",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
        description: "The Bali Trip Was Absolutely Magical!",
      },
    ]

    const destination = destinations.find((d) => d.id === id)

    if (!destination) {
      return NextResponse.json({ error: "Destination not found" }, { status: 404 })
    }

    return NextResponse.json(destination)
  } catch (error) {
    console.error("Error fetching destination:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()

    const { destinationName, country, category, price, duration, departureDate, imageUrl, description } = body

    if (!destinationName || !country || !category || !price || !duration || !departureDate || !imageUrl || !description) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const priceNum = Number(price)
    if (isNaN(priceNum)) {
      return NextResponse.json({ error: "Invalid price format" }, { status: 400 })
    }

    // TODO: Replace with actual database update
    // const updated = await prisma.destination.update({ where: { id }, data: { ... } })

    const updatedDestination = {
      id,
      destinationName,
      country,
      category,
      price: priceNum,
      duration,
      departureDate,
      imageUrl,
      description,
      updatedAt: new Date().toISOString(),
    }

    return NextResponse.json({ success: true, data: updatedDestination })
  } catch (error) {
    console.error("Error updating destination:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    // TODO: Replace with actual database delete
    // await prisma.destination.delete({ where: { id } })

    return NextResponse.json({ success: true, message: "Destination deleted" })
  } catch (error) {
    console.error("Error deleting destination:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}