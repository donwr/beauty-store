'use client';
import { useWindowSize } from '@/hooks/window-resizes';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Price from 'components/price';
import { DEFAULT_OPTION } from 'lib/constants';
import type { Cart } from 'lib/shopify/types';
import { createUrl } from 'lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import CloseCart from './close-cart';
import { DeleteItemButton } from './delete-item-button';
import { EditItemQuantityButton } from './edit-item-quantity-button';
import OpenCart from './open-cart';

export type MerchandiseSearchParams = {
  [key: string]: string;
};

export default function CartModal({ cart }: { cart: Cart | undefined }) {
  const [isOpen, setIsOpen] = useState(false);
  const quantityRef = useRef(cart?.totalQuantity);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const [width] = useWindowSize();

  const isDesktop = width >= 768; // TailwindCSS md breakpoint

  useEffect(() => {
    // Open cart modal when quantity changes.
    if (cart?.totalQuantity !== quantityRef.current) {
      // But only if it's not already open (quantity also changes when editing items in cart).
      if (!isOpen) {
        setIsOpen(true);
      }

      // Always update the quantity reference
      quantityRef.current = cart?.totalQuantity;
    }
  }, [isOpen, cart?.totalQuantity, quantityRef]);

  return (
    <>
      <button aria-label="Open cart" onClick={openCart}>
        <OpenCart quantity={cart?.totalQuantity} />
      </button>
      {isOpen && (
        <>
          {isDesktop ? (
            // Desktop Modal
            <div className={`absolute right-0 top-12 z-50 ${isDesktop ? 'block' : 'hidden'}`}>
              <div className="h-full max-h-[40rem] w-[400px] overflow-auto bg-white px-4 py-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold uppercase">My Cart</p>

                  <button aria-label="Close cart" onClick={closeCart}>
                    <CloseCart />
                  </button>
                </div>

                {!cart || cart.lines.length === 0 ? (
                  <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
                    <ShoppingCartIcon className="h-16" />
                    <p className="my-6 text-center text-2xl font-bold">Your cart is empty.</p>
                  </div>
                ) : (
                  <div className="flex h-full flex-col justify-between p-2 space-y-4">
                    <ul className="flex-grow py-4 max-h-[22rem] overflow-y-scroll px-2">
                      {cart.lines.map((item, i) => {
                        const compareAtPrice = item.merchandise.compareAtPriceV2;
                        const sizeOption = item.merchandise.selectedOptions.find(
                          (option) => option.name === 'Size'
                        );
                        const colorOption = item.merchandise.selectedOptions.find(
                          (option) => option.name === 'Color'
                        );

                        const merchandiseSearchParams = {} as MerchandiseSearchParams;

                        item.merchandise.selectedOptions.forEach(({ name, value }) => {
                          if (value !== DEFAULT_OPTION) {
                            merchandiseSearchParams[name.toLowerCase()] = value;
                          }
                        });

                        const merchandiseUrl = createUrl(
                          `/product/${item.merchandise.product.handle}`,
                          new URLSearchParams(merchandiseSearchParams)
                        );

                        return (
                          <li
                            key={i}
                            className="flex w-full flex-col border-b border-neutral-300  "
                          >
                            <div className="relative flex w-full justify-between px-1 py-4">
                              <div className="flex w-full justify-between space-x-4">
                                <div className="relative h-[7.5rem] w-[7.5rem] cursor-pointer overflow-hidden bg-neutral-300  ">
                                  <Image
                                    className="h-full w-full object-cover"
                                    width={120}
                                    height={120}
                                    alt={
                                      item.merchandise.product.featuredImage.altText ||
                                      item.merchandise.product.title
                                    }
                                    src={item.merchandise.product.featuredImage.url}
                                  />
                                </div>
                                <div className="flex flex-grow flex-col justify-between">
                                  <div>
                                    <div className="mb-2 flex items-center justify-between">
                                      <Price
                                        className="flex items-center justify-end space-x-2 text-right text-sm text-[#F4A482]"
                                        amount={item.cost.totalAmount.amount}
                                        compareAtAmount={compareAtPrice}
                                        currencyCode={item.cost.totalAmount.currencyCode}
                                      />
                                      <div className="z-40 -mt-2 ml-[55px]">
                                        <DeleteItemButton item={item} />
                                      </div>
                                    </div>

                                    <Link
                                      href={merchandiseUrl}
                                      onClick={closeCart}
                                      className="z-30 flex flex-row space-x-4"
                                    >
                                      <div className="flex flex-1 flex-col space-y-2 text-base">
                                        <span className="text-sm leading-tight">
                                          {item.merchandise.product.title}
                                        </span>
                                      </div>
                                    </Link>
                                  </div>

                                  <div className="flex items-center text-xs">
                                    <div className="flex space-x-4">
                                      {sizeOption && (
                                        <p className=" text-neutral-500">
                                          Size: {sizeOption.value}
                                        </p>
                                      )}
                                      {colorOption && (
                                        <p className=" text-neutral-500">
                                          Color: {colorOption.value}
                                        </p>
                                      )}
                                    </div>
                                    <div className="ml-auto flex h-9 flex-row items-center  ">
                                      <EditItemQuantityButton item={item} type="minus" />
                                      <p className=" text-center relative">
                                        <span className="w-full text-xs">{item.quantity}</span>
                                      </p>
                                      <EditItemQuantityButton item={item} type="plus" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>

                    <div className="options flex justify-between space-x-4">
                      <a
                        href="/cart"
                        className="block w-full border border-[#F4A482] bg-white p-2 text-center text-sm font-medium uppercase text-[#F4A482] opacity-90 hover:opacity-100"
                      >
                        open cart
                      </a>
                      <a
                        href={cart.checkoutUrl}
                        className="block w-full bg-[#F4A482] p-2 text-center text-sm font-medium uppercase text-white opacity-90 hover:opacity-100"
                      >
                        checkout
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
}
