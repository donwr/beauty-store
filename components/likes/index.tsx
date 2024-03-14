import { Product } from 'lib/shopify/types';
import { cookies } from 'next/headers';
import LikedProductsModal from './modal';

import { fetchProductsByIds } from 'lib/shopify';

const Liked = async () => {
  const likedProductHandlesString = cookies().get('likedProducts')?.value;
  console.log('Liked Product Handles String:', likedProductHandlesString);

  let products: Product[] = [];
  
  if (likedProductHandlesString) {
    const likedProductIds: string[] = JSON.parse(likedProductHandlesString);
    console.log('Parsed Liked Product IDs:', likedProductIds);
    
    if (likedProductIds.length > 0) {
      products = await fetchProductsByIds(likedProductIds);
    }
  }

  return <LikedProductsModal products={products} />;
};

export default Liked;
