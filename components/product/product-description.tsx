import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import { VariantSelector } from './variant-selector';

// Helper function to extract numerical ID
const extractNumericalId = (productID: string) => {
  const matches = productID.match(/\d+$/);
  return matches ? matches[0] : null;
};

export function ProductDescription({ product }: { product: Product }) {
  // Extract numerical ID
  const numericalId = extractNumericalId(product.id);

  return (
    <>
      <div className="mb-6 flex flex-col pt-8 lg:py-6 space-y-2">
        <h1 className="text-base font-medium">{product.title}</h1>
        <div className="text-sm text-[#E09C7F]">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
        {/* Use the extracted numerical ID */}
        <p className="text-sm text-[#7E7B77]">Product code: {numericalId}</p>
      </div>
      <div>

      <VariantSelector options={product.options} variants={product.variants} />
      </div>

      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight"
          html={product.descriptionHtml}
        />
      ) : null}

      <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
    </>
  );
}
