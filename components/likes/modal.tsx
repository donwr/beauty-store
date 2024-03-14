'use client';
import { useWindowSize } from '@/hooks/window-resizes';
import type { Product } from 'lib/shopify/types';
import { useState } from 'react';
import OpenLikes from './open-likes';

export default function LikedProductsModal({ products }: { products: Product[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [width] = useWindowSize();
  const isDesktop = width >= 768;

  console.log(products);
  return (
    <>
      <button onClick={openModal} aria-label="Open liked products">
        <OpenLikes className="h-4 text-black hover:scale-110" />
      </button>

      {isOpen && (
        <>
          {isDesktop ? (
            // Desktop Modal
            <div className={`absolute right-0 top-12 z-50 ${isDesktop ? 'block' : 'hidden'}`}>
              {/* <div className="h-full max-h-[40rem] w-[400px] overflow-auto bg-white px-4 py-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold uppercase">My Cart</p>

                  <button aria-label="Close cart" onClick={closeModal}>
                    
                  </button>
                </div>

                {!products ? (
                  <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
                    <Heart className="h-16" />
                    <p className="my-6 text-center text-2xl font-bold"> You haven&apos;t liked any items yet.</p>
                  </div>
                ) : (
                  <div className="flex h-full flex-col justify-between space-y-4 p-2">
                    <ul className="max-h-[22rem] flex-grow overflow-y-scroll px-2 py-4">
                      {products.map((product, i) => {
                        const compareAtPrice = product.variants[0]?.compareAtPriceV2;
                        
                        const sizeOption = product.merchandise.selectedOptions.find(
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
                                      <p className=" relative text-center">
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
                        href={cart.checkoutUrl}
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
              </div> */}
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
