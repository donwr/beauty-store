import { useLikedProducts } from '@/context/liked-product-context'; // Adjust the import path as necessary
import React, { useEffect, useState } from 'react';
import { Heart } from 'react-feather'; // Assuming you're using react-feather for icons

interface HeartButtonProps {
  productId: string;
  className?: string;
}

const HeartButton: React.FC<HeartButtonProps> = ({ productId, className }) => {
  const { likedProducts, addProductToLiked, removeProductFromLiked } = useLikedProducts();
  const [isLiked, setIsLiked] = useState<boolean>(false);

  // Check if the product is in the liked list
  useEffect(() => {
    setIsLiked(likedProducts.includes(productId));
  }, [productId, likedProducts]);

  const toggleLike = () => {
    if (isLiked) {
      removeProductFromLiked(productId);
    } else {
      addProductToLiked(productId);
    }
    setIsLiked(!isLiked);
  };

  return (
    <Heart
      onClick={toggleLike}
      className={` ${className} heart-icon ${isLiked ? 'filled-icon' : ''} cursor-pointer`}
    />
  );
};

export default HeartButton;
