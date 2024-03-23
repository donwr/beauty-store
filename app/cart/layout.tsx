import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { Suspense } from 'react';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <Navbar />
      <Suspense>
        <main className='max-w-[85.25rem] mx-auto'>{children}</main>
      </Suspense>
      <Footer />
    </Suspense>
  );
}
