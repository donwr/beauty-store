import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import Collections from 'components/layout/search/collections';
import { AlternateFilterList } from 'components/layout/search/filter';
import { sorting } from 'lib/constants';
import { Suspense } from 'react';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Suspense>
        <div className="mx-auto my-8 flex max-w-[85.25rem] flex-col gap-8 px-4 pb-4  text-black md:flex-row">
          <div className="order-first w-full flex-none md:max-w-[180px]">
            <Collections />
          </div>
          <div className="order-last min-h-screen w-full md:order-none">
            <div className="order-none mb-8 flex justify-end md:order-last">
              <AlternateFilterList list={sorting} title="Sort by" />
            </div>
            {children}
          </div>
        </div>
      </Suspense>
      <Footer />
    </>
  );
}
