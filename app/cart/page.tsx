import { DeleteItemButton } from '@/components/cart/delete-item-button';
import { EditItemQuantityButton } from '@/components/cart/edit-item-quantity-button';
import { MerchandiseSearchParams } from '@/components/cart/modal';
import { GridTileImage } from '@/components/grid/tile';
import Price from '@/components/price';
import { getCart } from '@/lib/shopify';
import { DEFAULT_OPTION } from 'lib/constants';
import { getProductRecommendations } from 'lib/shopify';
import { createUrl } from 'lib/utils';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
export const runtime = 'edge';

export default async function CartPage() {
  const cartId = cookies().get('cartId')?.value;
  let cart;
  if (cartId) {
    cart = await getCart(cartId);
  }

  return (
    <div className="h-full w-full">
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="links flex space-x-2 pt-4 text-xs">
          <Link href="/" className="text-[#E09C7F]">
            Home
          </Link>
          <p> / </p>
          <p>Cart</p>
        </div>
        <div className="grid grid-cols-12 gap-x-8 bg-white py-16 md:px-12 lg:px-0 ">
          <div className="col-span-12 h-full overflow-hidden lg:col-span-8">
            <h2>My Cart</h2>

            <ul className="px-2 py-4">
              {cart &&
                cart.lines.map((item, i) => {
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
                    <li key={i} className="flex w-full flex-col border-b border-neutral-300  ">
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

                              <Link href={merchandiseUrl} className="z-30 flex flex-row space-x-4">
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
                                  <p className=" text-neutral-500">Size: {sizeOption.value}</p>
                                )}
                                {colorOption && (
                                  <p className=" text-neutral-500">Color: {colorOption.value}</p>
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
          </div>

          <div className="col-span-12 lg:col-span-4">
            {cart && (
              <a
                href={cart.checkoutUrl}
                className="block w-full bg-[#F4A482] p-2 text-center text-sm font-medium uppercase text-white opacity-90 hover:opacity-100"
              >
                checkout
              </a>
            )}
            {cart && cart.lines[0]?.id && (
              <div>
                <Suspense>
                  <RelatedProducts id={cart.lines[0].merchandise.product.id} />
                </Suspense>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <div className="py-8">
      <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
      <ul className="w-full gap-4 overflow-x-auto pt-1 sm:flex">
        {relatedProducts.map((product) => (
          <li key={product.handle} className="w-full flex-none sm:w-1/4 lg:w-1/5">
            <Link className="relative h-full w-full" href={`/product/${product.handle}`}>
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode
                }}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
