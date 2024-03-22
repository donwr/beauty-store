'use client';
import { LikedItem } from '@/lib/shopify/types';
import Cookies from 'js-cookie';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

interface LikedProductsContextType {
  likedProducts: LikedItem[] | null;
  addProductToLiked: (productId: string) => void;
  removeProductFromLiked: (productId: string) => void;
  updateLikedProducts: (productIds: string[]) => void;
}

const defaultContextValue: LikedProductsContextType = {
  likedProducts: null,
  addProductToLiked: () => {},
  removeProductFromLiked: () => {},
  updateLikedProducts: () => {}
};

const LikedProductsContext = createContext<LikedProductsContextType>(defaultContextValue);

export const LikedProductsProvider = ({ children }: { children: ReactNode }) => {
  const [likedProducts, setLikedProducts] = useState<LikedItem[] | null>(() => {
    const likedProductsString = Cookies.get('likedProducts');
    return likedProductsString ? JSON.parse(likedProductsString) : undefined;
  });

  const fetchProductDetails = async (globalId: string) => {
    // Extract the numeric ID from the Shopify Global ID
    const matches = globalId.match(/Product\/(\d+)/);
    const productId = matches ? matches[1] : null;

    if (!productId) {
      throw new Error('Invalid product ID');
    }

    const response = await fetch(`/api/products/${productId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product details');
    }
    return response.json();
  };

  const addProductToLiked = async (productId: string) => {
    try {
      const productDetails = await fetchProductDetails(productId);
      const updatedLikedProducts = likedProducts
        ? [...likedProducts, productDetails]
        : [productDetails];
      console.log('Adding product via context file..');
      console.log(updateLikedProducts);
      setLikedProducts(updatedLikedProducts);
      Cookies.set(
        'likedProducts',
        JSON.stringify(updatedLikedProducts.map((product) => product.id)),
        { expires: 7 }
      );
    } catch (error) {
      console.error('Error adding product to liked:', error);
    }
  };

  const removeProductFromLiked = (productId: string) => {
    if (!likedProducts) return; // Early return if likedProducts is undefined

    // Filter out the product with the given productId
    const updatedLikedProducts = likedProducts.filter((product) => product.id !== productId);
    console.log('Removing product via context file..');
    console.log(updateLikedProducts);
    // Update the state with the filtered list
    setLikedProducts(updatedLikedProducts);

    // Update the cookies to reflect the change
    Cookies.set(
      'likedProducts',
      JSON.stringify(updatedLikedProducts.map((product) => product.id)),
      { expires: 7 }
    );
  };

  const updateLikedProducts = async (productIds: string[]) => {
    try {
      const productsDetails = await Promise.all(productIds.map((id) => fetchProductDetails(id)));
      const validProducts = productsDetails.filter(Boolean); // This assumes fetchProductDetails returns null/undefined for not found products
      setLikedProducts(validProducts);
    } catch (error) {
      console.error('Error updating liked products:', error);
    }
  };

  useEffect(() => {
    const productIds = likedProducts?.map((product) => product.id);
    if (productIds && productIds.length > 0) {
      updateLikedProducts(productIds);
    }
  }, []); // Ensures this runs once on mount

  return (
    <LikedProductsContext.Provider
      value={{ likedProducts, addProductToLiked, removeProductFromLiked, updateLikedProducts }}
    >
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
