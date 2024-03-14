"use client";
import Cookies from 'js-cookie';
import { ReactNode, createContext, useContext, useState } from 'react';

interface LikedProductsContextType {
  likedProducts: string[];
  addProductToLiked: (productId: string) => void;
  removeProductFromLiked: (productId: string) => void;
}

// Providing a default context value that matches the expected type
const defaultContextValue: LikedProductsContextType = {
  likedProducts: [],
  addProductToLiked: () => {},
  removeProductFromLiked: () => {},
};

const LikedProductsContext = createContext<LikedProductsContextType>(defaultContextValue);

export const LikedProductsProvider = ({ children }: { children: ReactNode }) => {
  const [likedProducts, setLikedProducts] = useState<string[]>(() => {
    const likedProductsString = Cookies.get('likedProducts');
    return likedProductsString ? JSON.parse(likedProductsString) : [];
  });

  const addProductToLiked = (productId: string) => {
    const updatedLikedProducts = [...likedProducts, productId];
    setLikedProducts(updatedLikedProducts);
    Cookies.set('likedProducts', JSON.stringify(updatedLikedProducts), { expires: 7 });
  };

  const removeProductFromLiked = (productId: string) => {
    const updatedLikedProducts = likedProducts.filter(id => id !== productId);
    setLikedProducts(updatedLikedProducts);
    Cookies.set('likedProducts', JSON.stringify(updatedLikedProducts), { expires: 7 });
  };

  return (
    <LikedProductsContext.Provider value={{ likedProducts, addProductToLiked, removeProductFromLiked }}>
      {children}
    </LikedProductsContext.Provider>
  );
};

export const useLikedProducts = () => {
  const context = useContext(LikedProductsContext);
  if (!context) {
    throw new Error('useLikedProducts must be used within a LikedProductsProvider');
  }
  return context;
};
