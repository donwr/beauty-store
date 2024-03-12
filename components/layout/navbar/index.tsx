import { getMenu } from '@/lib/shopify';
import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import Link from 'next/link';
import { Suspense } from 'react';
import { Heart, Search, User } from 'react-feather';
import MobileMenu from './mobile-menu';
import NavbarMenu from './navbar-menu';
const menuOptions = ['SALE', 'NEW IN', 'CLOTHING', 'SHOES', 'ACCESSORIES', 'GIFTS', 'COLLECTIONS'];

export default async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');
  return (
    <nav className="sticky top-0 z-[1000] h-[4rem] border-b border-gray-200 bg-white p-4 shadow-neutral-200 lg:px-6">
      <div className="nav-wrapper mx-auto grid max-w-[85.25rem] grid-cols-12 items-center gap-x-8">
        <div className="col-span-6 flex lg:col-span-1">
          <MobileMenu menu={menu} />
          <Link href="/" className="mr-2 flex items-center justify-center md:w-auto lg:mr-6">
            <div className="ml-2 flex-none text-sm font-medium uppercase">
              <img src="/images/logo.png" alt="loomis" className="" />
            </div>
          </Link>
        </div>
        <div className="col-span-8 hidden justify-center lg:flex">
          <NavbarMenu />
        </div>

        <div className="col-span-5 flex items-center justify-end space-x-4 lg:col-span-3">
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
