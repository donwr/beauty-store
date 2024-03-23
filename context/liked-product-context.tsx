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
  const [likedProducts, setLikedProducts] = useState<LikedItem[] | null>(null);

  const fetchProductDetails = async (productId: string) => {
    const response = await fetch(`/api/products/${encodeURIComponent(productId)}`);
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
    const fetchAndSetLikedProducts = async () => {
      // Retrieve the stringified product IDs array from the cookies
      const likedProductsString = Cookies.get('likedProducts');

      // Parse the stringified product IDs array, if it exists
      if (likedProductsString) {
        const productIds = JSON.parse(likedProductsString);
        try {
          // Fetch details for each product ID concurrently
          const productsDetailsPromises = productIds.map((productId: string) =>
            fetchProductDetails(productId).catch((error) => {
              console.error(`Failed to fetch details for product ${productId}:`, error);
              return null; // Return null for any failed request
            })
          );

          const productsDetails = await Promise.all(productsDetailsPromises);
          const validProducts = productsDetails.filter((product) => product !== null); // Filter out failed requests

          // Update the state with the fetched product details
          setLikedProducts(validProducts);
        } catch (error) {
          console.error('Error fetching liked products:', error);
        }
      } else {
        // Handle the case where there are no product IDs in cookies
        console.log('No liked products found in cookies.');
        setLikedProducts([]);
      }
    };

    fetchAndSetLikedProducts();
  }, []); // Dependency array is empty, so this runs once on component mount

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
