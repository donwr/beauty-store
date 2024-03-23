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
  const {likedProducts} = useLikedProducts();

  console.log(likedProducts)
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
                        className={clsx(
                          'h-5 transition-all ease-in-out hover:scale-110 ',
                          
                        )}
                      />
                    </div>
                  </button>
                </div>

                {!likedProducts || likedProducts.length ==  0 ? (
                  <div className="flex flex-col items-center justify-center p-10">
                    <p>Your list of liked items is empty.</p>
                  </div>
                ) : (
                  <ul>
                    {likedProducts && likedProducts.map((product) => (
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
            <div className="fixed inset-0 z-[1001] flex items-center justify-center">
              {/* <Transition show={true} as={Fragment}>
                <Dialog as="div" className="relative z-[1001]" onClose={closeCart}>
                  <Transition.Child
                    as={Fragment}
                    enter="transition-all ease-in-out duration-300"
                    enterFrom="opacity-0 backdrop-blur-none"
                    enterTo="opacity-100 backdrop-blur-[.5px]"
                    leave="transition-all ease-in-out duration-200"
                    leaveFrom="opacity-100 backdrop-blur-[.5px]"
                    leaveTo="opacity-0 backdrop-blur-none"
                  >
                    <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                  </Transition.Child>
                  <Transition.Child
                    as={Fragment}
                    enter="transition-all ease-in-out duration-300"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition-all ease-in-out duration-200"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl  ">
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-semibold">My Cart</p>

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
                        <div className="flex h-full flex-col justify-between overflow-hidden p-1">
                          <ul className="flex-grow overflow-auto py-4">
                            {cart.lines.map((item, i) => {
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
                                  <div className="relative flex w-full flex-row justify-between px-1 py-4">
                                    <div className="absolute z-40 -mt-2 ml-[55px]">
                                      <DeleteItemButton item={item} />
                                    </div>
                                    <Link
                                      href={merchandiseUrl}
                                      onClick={closeCart}
                                      className="z-30 flex flex-row space-x-4"
                                    >
                                      <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300  ">
                                        <Image
                                          className="h-full w-full object-cover"
                                          width={64}
                                          height={64}
                                          alt={
                                            item.merchandise.product.featuredImage.altText ||
                                            item.merchandise.product.title
                                          }
                                          src={item.merchandise.product.featuredImage.url}
                                        />
                                      </div>

                                      <div className="flex flex-1 flex-col text-base">
                                        <span className="leading-tight">
                                          {item.merchandise.product.title}
                                        </span>
                                        {item.merchandise.title !== DEFAULT_OPTION ? (
                                          <p className="text-sm text-neutral-500  ">
                                            {item.merchandise.title}
                                          </p>
                                        ) : null}
                                      </div>
                                    </Link>
                                    <div className="flex h-16 flex-col justify-between">
                                      <Price
                                        className="flex justify-end space-y-2 text-right text-sm"
                                        amount={item.cost.totalAmount.amount}
                                        currencyCode={item.cost.totalAmount.currencyCode}
                                      />
                                      <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 ">
                                        <EditItemQuantityButton item={item} type="minus" />
                                        <p className="w-6 text-center">
                                          <span className="w-full text-sm">{item.quantity}</span>
                                        </p>
                                        <EditItemQuantityButton item={item} type="plus" />
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                          <div className="py-4 text-sm text-neutral-500  ">
                            <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1  ">
                              <p>Taxes</p>
                              <Price
                                className="text-right text-base text-black "
                                amount={cart.cost.totalTaxAmount.amount}
                                currencyCode={cart.cost.totalTaxAmount.currencyCode}
                              />
                            </div>
                            <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1  ">
                              <p>Shipping</p>
                              <p className="text-right">Calculated at checkout</p>
                            </div>
                            <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1  ">
                              <p>Total</p>
                              <Price
                                className="text-right text-base text-black "
                                amount={cart.cost.totalAmount.amount}
                                currencyCode={cart.cost.totalAmount.currencyCode}
                              />
                            </div>
                          </div>
                          <a
                            href={cart.checkoutUrl}
                            className="block w-full rounded-full bg-[#F4A482] p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100"
                          >
                            Proceed to Checkout
                          </a>
                        </div>
                      )}
                    </Dialog.Panel>
                  </Transition.Child>
                </Dialog>
              </Transition> */}
            </div>
          )}
        </>
      )}
    </>
  );
}
