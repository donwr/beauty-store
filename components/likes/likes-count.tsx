"use client";
import { useLikedProducts } from '@/context/liked-product-context';
import { useEffect, useState } from 'react';

export default function LikesCount() {
  const { likedProducts } = useLikedProducts();
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will update the count state whenever the likedProducts change.
    setCount(likedProducts?.length ?? 0);
  }, [likedProducts]);

  if (count === 0) return null;

  return (
    <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-[#F4A482] text-[11px] font-medium text-white">
      {count}
    </div>
  );
}
