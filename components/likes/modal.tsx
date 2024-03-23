'use client';
import { useLikedProducts } from '@/context/liked-product-context';
import { useWindowSize } from '@/hooks/window-resizes';
import { XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import OpenLikes from './open-likes';

export default function LikedProductsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [width] = useWindowSize();
  const isDesktop = width >= 768;
  const { likedProducts } = useLikedProducts();
  return (
    <>
      <button onClick={openModal} aria-label="Open liked products">
        <OpenLikes className="h-4 text-black hover:scale-110" />
      </button>

      {isOpen && (
        <>
          {isDesktop ? (
            <div className={`absolute right-0 top-12 z-50 ${isDesktop ? 'block' : 'hidden'}`}>
              <div className="h-full max-h-[40rem] w-[400px] overflow-auto bg-white px-4 py-6 shadow-xl">
                <div className="flex items-center justify-between p-4">
                  <h2 className="text-lg font-semibold">Liked Items</h2>
                  <button onClick={closeModal}>
                    <div className="relative flex h-11 w-11 items-center justify-center text-black transition-colors ">
                      <XMarkIcon
                        className={clsx('h-5 transition-all ease-in-out hover:scale-110 ')}
                      />
                    </div>
                  </button>
                </div>

                {!likedProducts || likedProducts.length == 0 ? (
                  <div className="flex flex-col items-center justify-center p-10">
                    <p>Your list of liked items is empty.</p>
                  </div>
                ) : (
                  <ul>
                    {likedProducts &&
                      likedProducts.map((product) => (
                        <li key={product.id} className="border-b border-gray-200 p-4">
                          <div className="flex space-x-4">
                            <div className="w-20 flex-none">
                              <Image
                                src={product.images[0]?.node.src || ''}
                                alt={product.images[0]?.node.altText || product.title}
                                width={80}
                                height={80}
                                objectFit="cover"
                              />
                            </div>
                            <div className="flex-grow">
                              <h3 className="text-sm font-semibold">{product.title}</h3>
                              <p className="text-xs">{`Price: ${product.priceRange.minVariantPrice.amount} ${product.priceRange.minVariantPrice.currencyCode}`}</p>
                              <Link
                                href={`/product/${product.handle}`}
                                className="mt-2 inline-block text-xs text-blue-500"
                              >
                                View Product
                              </Link>
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            </div>
          ) : (
            // Mobile Modal
            <></>
          )}
        </>
      )}
    </>
  );
}
