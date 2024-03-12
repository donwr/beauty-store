import { DropdownProvider } from '@/context/dropdown-context';
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
    <DropdownProvider>
      <nav className="sticky top-0 z-[1000] h-[4rem] border-b border-gray-200 bg-white p-4 shadow shadow-neutral-200 lg:px-6">
        <div className="nav-wrapper mx-auto max-w-[85.25rem] items-center grid grid-cols-12 gap-x-8">
            <MobileMenu menu={menu} />
          <div className="col-span-1 flex">
            <Link href="/" className="mr-2 flex items-center justify-center md:w-auto lg:mr-6">
              <div className="ml-2 flex-none text-sm font-medium uppercase">
                <img src="/images/logo.png" alt="loomis" className="" />
              </div>
            </Link>
          </div>
          <div className="hidden lg:flex justify-center col-span-8">
            <NavbarMenu />
          </div>

          <div className="flex items-center justify-end space-x-4 col-span-3">
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
    </DropdownProvider>
  );
}
