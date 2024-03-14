import { Product } from '@/lib/shopify/types';
import Link from 'next/link';
import React from 'react';
import HeartButton from './likes/heart-button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
    <div className="relative">
      <Link href={`/product/${product.handle}`} className="product-card space-y-2">
        <div className="relative h-[15rem] w-full overflow-hidden">
          <img
            src={product.featuredImage.url}
            alt={product.title || 'Product Image'}
            className="absolute left-0 top-0 h-full w-full object-cover object-center transition-transform duration-300 hover:scale-110" 
          />
        </div>
        <h3 className="text-sm">{product.title}</h3>

        <div className="space-x-2 text-sm">
          {compareAtPrice && <span className="line-through">{compareAtPrice}</span>}{' '}
          <span className="font-semibold text-[#F4A482]">{price}</span>
        </div>
      </Link>
      <HeartButton productId={product.id} className="absolute top-4 right-4" />
    </div>
  );
};

export default ProductCard;
