"use client";
import { useLikedProducts } from '@/context/liked-product-context';
import clsx from 'clsx';
import { Heart } from 'react-feather';

export default function OpenLikes({
  className,
}: {
  className?: string;
}) {
  const { likedProducts } = useLikedProducts();
  return (
    <div className="relative flex items-center justify-center">
      <Heart className={clsx('h-4 text-black hover:scale-110', className)} />
      {likedProducts.length ? (
        <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-[#F4A482] text-[11px] font-medium text-white">
          {likedProducts.length}
        </div>
      ) : null}
    </div>
  );
}
