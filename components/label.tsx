import { Money } from '@/lib/shopify/types';
import clsx from 'clsx';
import Price from './price';
const Label = ({
  title,
  amount,
  compareAtAmount,
  currencyCode,
  position = 'bottom'
}: {
  title: string;
  amount: string;
  compareAtAmount?: Money | string;
  currencyCode: string;
  position?: 'bottom' | 'center';
}) => {
  return (
    <div
      className={clsx('flex w-full px-4 py-4 @container/label', {
        'lg:px-20 lg:pb-[35%]': position === 'center'
      })}
    >
      <div className="flex flex-col items-center p-1 text-sm text-center w-full">
        <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">{title}</h3>
        <Price
          className="flex space-x-4 p-2 text-[#F4A482] text-xs"
          amount={amount}
          compareAtAmount={compareAtAmount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
      </div>
    </div>
  );
};

export default Label;
