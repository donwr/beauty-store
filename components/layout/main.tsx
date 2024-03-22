"use client";
import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { useRouter } from 'next/router';
import { ReactNode, Suspense } from 'react';

const noNavbarFooterRoutes = ['/auth/login', '/auth/signup'];

interface StandardLayoutProps {
  children: ReactNode;
}

const StandardLayout = ({ children }: StandardLayoutProps) => {
  const router = useRouter();
  const showNavbarAndFooter = !noNavbarFooterRoutes.includes(router.pathname);

  return (
    <>
      {showNavbarAndFooter && <Navbar />}
      <Suspense fallback={<div>Loading...</div>}>
        <main>{children}</main>
      </Suspense>
      {showNavbarAndFooter && <Footer />}
    </>
  );
};

export default StandardLayout;
