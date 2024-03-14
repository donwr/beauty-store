// Trending.tsx

'use client';

import ProductCard from '@/components/product-card'; // Adjust the import path as necessary
import { Product } from '@/lib/shopify/types';
import React, { useEffect, useState } from 'react';
import 'swiper/css'; // Ensure Swiper's CSS is imported
import 'swiper/css/pagination'; // Import pagination if you plan to use it
import { Pagination } from 'swiper/modules'; // Import Swiper modules as needed
import { Swiper, SwiperSlide } from 'swiper/react';

interface TrendingProps {
  allTrendingItems: Product[];
}

const Trending: React.FC<TrendingProps> = ({ allTrendingItems }) => {
  const [trendingItems, setTrendingItems] = useState<Product[]>(allTrendingItems);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [categories, setCategories] = useState<string[]>(['All']);

  // Extract unique categories from allTrendingItems
  useEffect(() => {
    const uniqueCategories = new Set(allTrendingItems.map((item) => item.productType));
    setCategories(['All', ...Array.from(uniqueCategories)]);
  }, [allTrendingItems]);

  // Filter items based on selected category
  useEffect(() => {
    if (selectedCategory === 'All') {
      setTrendingItems(allTrendingItems);
    } else {
      const filteredItems = allTrendingItems.filter(
        (item) => item.productType === selectedCategory
      );
      setTrendingItems(filteredItems);
    }
  }, [selectedCategory, allTrendingItems]);

  return (
    <section className="trending">
      <div className="trending-wrapper mx-auto max-w-[85.25rem] px-4 py-16">
        <h2 className="mb-4 text-center text-2xl uppercase">Trending Now</h2>
        {/* Category Selection Dropdown */}
        {/* Category Buttons */}
        <div className="flex space-x-4 overflow-x-scroll mb-4 py-2 menu-no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border border-[#7E7B77] text-sm tracking-tight px-4 py-2 hover:bg-[#E08C7F] hover:text-white hover:border-[#E09C7F] transition-all duration-200 ${
                selectedCategory === category ? 'bg-[#E09C7F] text-white border-none' : 'bg-transparent text-[#7E7B77]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Display Cards in Swiper */}
        <Swiper
          slidesPerView={4.5}
          spaceBetween={30}
          modules={[Pagination]}
          className="mySwiper"
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            769: {
              slidesPerView: 4,
              spaceBetween: 40
            }
          }}
        >
          {trendingItems.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Trending;
