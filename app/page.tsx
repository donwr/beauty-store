import { Brands } from '@/components/home/brands';
import { Categories } from '@/components/home/categories';
import { Discount } from '@/components/home/discount';
import { Info } from '@/components/home/info';
import { NewArrival } from '@/components/home/new-arrival';
import { Hero } from 'components/home/hero';
import { getCollectionProducts } from 'lib/shopify';
import dynamic from 'next/dynamic';

// Dynamically import the Trending component for client-side rendering
const TrendingWithNoSSR = dynamic(() => import('@/components/home/trending'), {
  ssr: false // This will disable server-side rendering for Trending
});

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  const allTrendingItems = await getCollectionProducts({ collection: 'trending-all' });

  return (
    <>
      <Hero />
      <TrendingWithNoSSR allTrendingItems={allTrendingItems} />
      <Categories />
      <Brands />
      <NewArrival />
      <Info />
      <Discount />
    </>
  );
}
