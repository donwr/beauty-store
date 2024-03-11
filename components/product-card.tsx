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
    new Intl.NumberFormat('en-US', { style: 'currency', currency: currencyCode }).format(
      parseFloat(amount)
    );

  // Extracting price and compareAtPrice for readability
  const price = firstVariant?.priceV2
    ? formatCurrency(firstVariant.priceV2.amount, firstVariant.priceV2.currencyCode)
    : null;
  const compareAtPrice = firstVariant?.compareAtPriceV2
    ? formatCurrency(
        firstVariant.compareAtPriceV2.amount,
        firstVariant.compareAtPriceV2.currencyCode
      )
    : null;

  return (
    <div className="product-card space-y-2">
      <div className="relative h-[15rem] w-full overflow-hidden">
        <img
          src={product.featuredImage.url}
          alt={product.title || 'Product Image'}
          className="absolute left-0 top-0 h-full w-full object-cover object-center transition-transform duration-300 hover:scale-110" // Adjust the scale
        />
        <Heart
          onClick={toggleLike}
          className={`heart-icon absolute right-4 top-4 h-5 w-5 text-white hover:text-[#e09c7f] ${
            isLiked ? 'filled-icon' : ''
          }`}
        />
      </div>
      <h3 className="text-sm">{product.title}</h3>

      <div className="space-x-2 text-sm">
        {compareAtPrice && <span className="line-through">{compareAtPrice}</span>}{' '}
        <span className="font-semibold text-[#F4A482]">{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
