import AuthDropdown from '@/components/auth-dropdown';
import Cart from '@/components/cart';
import OpenCart from '@/components/cart/open-cart';
import LogoIcon from '@/components/icons/logo';
import Liked from '@/components/likes';
import OpenLikes from '@/components/likes/open-likes';
import { getMenu } from '@/lib/shopify';
import Link from 'next/link';
import { ReactNode, Suspense } from 'react';
import MobileMenu from './mobile-menu';
import NavbarMenu from './navbar-menu';
import Search from './search';
interface NavbarProps {
  children?: ReactNode;
}
export default async function Navbar({ children }: NavbarProps) {
  const menu = await getMenu('next-js-frontend-header-menu');
  return (
    <nav className="sticky top-0 z-[1000] h-[4rem] border-b border-gray-200 bg-white p-4 shadow-neutral-200 lg:px-6">
      <div className="nav-wrapper mx-auto grid max-w-[85.25rem] grid-cols-12 items-center gap-x-8">
        <div className="col-span-6 flex lg:col-span-1">
          <MobileMenu menu={menu} />
          <Link href="/" className="mr-2 flex items-center justify-center md:w-auto lg:mr-6">
            <LogoIcon className="ml-2 flex-none text-sm font-medium uppercase" />
          </Link>
        </div>
        <div className="col-span-8 hidden justify-center lg:flex">
          <NavbarMenu />
        </div>

        <div className="relative col-span-5 flex items-center justify-end space-x-4 lg:col-span-3">
          <div className="flex justify-center">
            <Search />
          </div>

          <Suspense fallback={<OpenLikes />}>
            <Liked />
          </Suspense>

          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>

          {children}
          <AuthDropdown />
        </div>
      </div>
    </nav>
  );
}
