import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';
import { Heart, Search, User } from 'react-feather';
import MobileMenu from './mobile-menu';
export default async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');
  return (
    <nav className="sticky top-0 h-[4rem] bg-white border-b border-gray-200 p-4 shadow shadow-neutral-200 lg:px-6 z-[1000]">
      <div className="nav-wrapper flex items-center justify-between max-w-[85.25rem] mx-auto">
        <div className="flex">
          <MobileMenu menu={menu} />
          <Link href="/" className="mr-2 flex items-center justify-center md:w-auto lg:mr-6">
            <div className="ml-2 flex-none text-sm font-medium uppercase">
              <img src="/images/logo.png" alt="loomis" className="" />
            </div>
          </Link>
        </div>
        <div className="hidden lg:flex">
          {menu.length ? (
            <ul className="flex items-center gap-6 text-xs uppercase">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="tracking-wider text-neutral-500 underline-offset-4 hover:text-black hover:underline"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="flex items-center justify-end space-x-4">
          {/* <div className="justify-center md:flex md:w-1/3">
          <Search />
        </div> */}
          <Search className="h-4 w-4" />
          <Heart className="h-4 w-4" />
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
          <User className="h-4 w-4 md:hidden" />
          <Link href="/" className="hidden bg-[#F4A482] px-4 py-2 text-sm text-white md:block">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
