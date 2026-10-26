import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { destinationName, country, category, price, duration, departureDate, imageUrl, description } = body

    if (!destinationName || !country || !category || !price || !duration || !departureDate || !imageUrl || !description) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    const priceNum = Number(price.replace(/[^0-9.]/g, ''))
    if (isNaN(priceNum)) {
      return NextResponse.json({ error: 'Invalid price format' }, { status: 400 })
    }

    // TODO: Replace with actual database insertion
    // Example with Prisma:
    // const destination = await prisma.destination.create({
    //   data: {
    //     name: destinationName,
    //     country,
    //     category,
    //     price: priceNum,
    //     duration,
    //     departureDate: new Date(departureDate),
    //     imageUrl,
    //     description,
    //   },
    // })

    const newDestination = {
      id: Date.now().toString(),
      destinationName,
      country,
      category,
      price: priceNum,
      duration,
      departureDate,
      imageUrl,
      description,
      createdAt: new Date().toISOString(),
    }

    console.log('Created destination:', newDestination)

    return NextResponse.json({ success: true, data: newDestination }, { status: 201 })
  } catch (error) {
    console.error('Error creating destination:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  try {
    // TODO: Replace with actual database query
    // const destinations = await prisma.destination.findMany({ orderBy: { createdAt: 'desc' } })
    
    const destinations = [
      {
        id: '1',
        destinationName: 'Bali Paradise',
        country: 'Indonesia',
        category: 'Beach',
        price: 1299,
        duration: '7 Days/6 Nights',
        departureDate: '2026-12-15',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
        description: 'The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned.',
        createdAt: '2026-10-01T00:00:00.000Z',
      },
    ]

    return NextResponse.json({ data: destinations })
  } catch (error) {
    console.error('Error fetching destinations:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}