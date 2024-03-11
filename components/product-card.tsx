import { Product } from '@/lib/shopify/types';
import React, { useState } from 'react';
import { Heart } from 'react-feather';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);

  // Function to toggle liked state
  const toggleLike = () => setIsLiked(!isLiked);

  // Assuming you're interested in the first variant's pricing details
  const firstVariant = product.variants[0];

  // Format currency function
  const formatCurrency = (amount: string, currencyCode: string) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: currencyCode }).format(parseFloat(amount));

  // Extracting price and compareAtPrice for readability
  const price = firstVariant?.priceV2 ? formatCurrency(firstVariant.priceV2.amount, firstVariant.priceV2.currencyCode) : null;
  const compareAtPrice = firstVariant?.compareAtPriceV2 ? formatCurrency(firstVariant.compareAtPriceV2.amount, firstVariant.compareAtPriceV2.currencyCode) : null;

  return (
    <div className="product-card space-y-2">
      <div className="relative h-[15rem] w-full">
        <img
          src={product.featuredImage.url}
          alt={product.title || 'Product Image'}
          className="absolute top-0 left-0 h-full w-full object-cover object-center"
        />
        <Heart 
          onClick={toggleLike}
          className={`h-5 w-5 absolute top-4 right-4 ${isLiked ? 'filled-icon' : 'text-white'}`} 
          fill={isLiked ? "currentColor" : "none"} 
          stroke={isLiked ? "currentColor" : "white"}
        />
      </div>
      <h3 className="text-sm">{product.title}</h3>
      {/* Displaying the prices */}
      <div className="text-sm space-x-2">
        {compareAtPrice && <span className="line-through">{compareAtPrice}</span>} <span className="text-[#F4A482] font-semibold">{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
