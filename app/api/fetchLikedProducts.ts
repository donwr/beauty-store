// app/api/fetchLikedProducts.ts
import { fetchProductsByIds } from '@/lib/shopify';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  if (req.method === 'POST') {
    try {
      const ids = await req.json();
      // console.log(ids)
      const likedItems = await fetchProductsByIds(ids.productIds);
      return new NextResponse(JSON.stringify(likedItems), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error(error);
      return new NextResponse(JSON.stringify({ error: 'Failed to fetch liked products' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  } else {
    return new NextResponse('Method Not Allowed', { status: 405 });
  }
}
