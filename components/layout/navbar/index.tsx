import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
const { SITE_NAME } = process.env;

export default async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');
  console.log(menu);
  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="block flex-none md:hidden">
        <MobileMenu menu={menu} />
      </div>
      <Link href="/" className="mr-2 flex items-center justify-center md:w-auto lg:mr-6">
        <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
          <img src="/images/logo.png" alt="loomis" className="" />
        </div>
      </Link>
      <div className="flex ">
        {menu.length ? (
          <ul className="hidden gap-6 text-sm md:flex md:items-center">
            {menu.map((item: Menu) => (
              <li key={item.title}>
                <Link
                  href={item.path}
                  className="text-neutral-500 underline-offset-4 hover:text-black hover:underline  "
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="flex justify-end">
        {/* <div className="hidden justify-center md:flex md:w-1/3">
          <Search />
        </div> */}
        <Suspense fallback={<OpenCart />}>
          <Cart />
        </Suspense>
      </div>
    </nav>
  );
}
