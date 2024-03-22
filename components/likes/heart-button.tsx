import { useLikedProducts } from '@/context/liked-product-context';
import React, { useEffect, useState } from 'react';
import { Heart } from 'react-feather'; // Assuming you're using react-feather for icons

interface HeartButtonProps {
  productId: string;
  className?: string;
}

const HeartButton: React.FC<HeartButtonProps> = ({ productId, className }) => {
  const { likedProducts, addProductToLiked, removeProductFromLiked } = useLikedProducts();
  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    // Ensure productIsLiked is a boolean by defaulting to false if likedProducts is null or undefined
    const productIsLiked = likedProducts?.some(product => product.id === productId) || false;
    setIsLiked(productIsLiked);
  }, [productId, likedProducts]);
  
  
  const toggleLike = () => {
    if (isLiked) {
      removeProductFromLiked(productId);
      console.log('Removing product like...')
    } else {
      addProductToLiked(productId);
      console.log('Adding product like...')
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
