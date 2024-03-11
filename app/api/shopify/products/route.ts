// app/api/shopify/collection-products/route.ts

import { getCollectionProducts } from '@/lib/shopify'; // Adjust the import path as necessary
import { NextResponse } from 'next/server';

// Optional: Define for more specific control over request handling
export const config = {
  runtime: 'experimental-edge'
};

export async function GET(request: Request) {
  const url = new URL(request.url);
  const collection = url.searchParams.get('collection');
  const reverseParam = url.searchParams.get('reverse');
  const reverse = reverseParam ? reverseParam === 'true' : undefined;
  const sortKey = url.searchParams.get('sortKey') ?? undefined;

  // Ensure that the collection parameter is provided
  if (!collection) {
    return new NextResponse(JSON.stringify({ error: 'Collection parameter is required' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  try {
    const products = await getCollectionProducts({
      collection,
      reverse,
      sortKey
    });
    return new NextResponse(JSON.stringify(products), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: 'Failed to fetch products' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
