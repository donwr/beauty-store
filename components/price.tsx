import { Money } from '@/lib/shopify/types';
import React from 'react';

const Price = ({
  amount,
  compareAtAmount, // Can be string or Money type
  className,
  currencyCode = 'USD',
  currencyCodeClassName
}: {
  amount: string;
  compareAtAmount?: string | Money; // Allow string or Money type
  className?: string;
  currencyCode: string;
  currencyCodeClassName?: string;
} & React.ComponentProps<'p'>) => {
  // Helper function to format price
  const formatPrice = (price: string) =>
    new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currencyCode,
      currencyDisplay: 'narrowSymbol'
    }).format(parseFloat(price));

  // Helper to get the string amount from compareAtAmount when it is a Money type
  const getCompareAtAmountString = (
    compareAtAmount: string | Money | undefined
  ): string | undefined => {
    if (typeof compareAtAmount === 'string') {
      return compareAtAmount;
    } else if (compareAtAmount && typeof compareAtAmount === 'object') {
      return compareAtAmount.amount;
    }
    return undefined;
  };

  const compareAtAmountString = getCompareAtAmountString(compareAtAmount);
  return (
    <div className={className}>
      {compareAtAmountString && (
        <p className="line-through">{formatPrice(compareAtAmountString)}</p>
      )}
      <p className="font-semibold ">{formatPrice(amount)}</p>
      {/* {currencyCode && <span className={clsx('ml-1 inline', currencyCodeClassName)}>{currencyCode}</span>} */}
    </div>
  );
};

export default Price;
