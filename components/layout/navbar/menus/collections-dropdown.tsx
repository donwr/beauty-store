import { salesDropdownCategories } from '@/data/menu-dropdown-info';
import { motion } from 'framer-motion';

export const CollectionsDropdown = () => {
  return (
    <>
      <div className="relative flex h-[11rem] overflow-hidden border border-neutral-50 bg-[#FCF7F5]">
        {/* Background SVGs */}
        <img src="/images/sale.png" alt="" className="absolute left-0 top-0 h-[15rem] w-[15rem]" />
        <img
          src="/images/sale-02.png"
          alt=""
          className="absolute right-0 top-0 h-[15rem] w-[15rem]"
        />
        <div className="flex h-full w-full flex-col items-center justify-center space-y-4">
          <h3 className="text-lg uppercase text-[#887568]">get up to 20% discount</h3>
          <p className="max-w-[35rem] text-center text-sm text-[#37393d]">
            Don&apos;t miss your last chance to get a 20% discount on the entire assortment provided
            in this category
          </p>
        </div>
      </div>
      {/* This div now takes up the remaining space */}
      <div className="flex flex-grow">
        <div className="left flex h-full w-1/2 flex-col p-8">
          <h4 className="mb-4 text-sm font-semibold uppercase text-black">shop by sex</h4>
          <div className="choice-container flex h-full gap-x-4">
            <div className="mens relative h-full w-1/2">
              <img
                src="/images/sales-dropdown-mens.png"
                alt=""
                className="absolute left-0 top-0 h-full w-full object-cover object-center"
              />
              <div className="relative z-[1] flex h-full w-full items-center">
                <p className="w-full bg-white/50 py-2 text-center font-semibold uppercase tracking-widest">
                  for him
                </p>
              </div>
            </div>
            <div className="womens relative h-full w-1/2">
              <img
                src="/images/sales-dropdown-womens.png"
                alt=""
                className="absolute left-0 top-0 h-full w-full object-cover object-center"
              />
              <div className="relative z-[1] flex h-full w-full items-center">
                <p className="w-full bg-white/50 py-2 text-center font-semibold uppercase tracking-widest">
                  for her
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right h-full w-1/2 flex-col p-8">
          <h4 className="mb-4 text-sm font-semibold uppercase text-black">categories</h4>
          {/* New element with categories in an auto-sizing grid layout */}
          <div className="grid grid-cols-2 gap-4 overflow-y-auto">
            {salesDropdownCategories.map((category, index) => {
              return (
                <motion.div
                  key={index}
                  className="category-option flex items-center space-x-4 border-2 border-neutral-50 px-4 py-4"
                >
                  <img src={category.image} alt={category.alt} className="h-8 w-8 object-cover" />
                  <p className="text-sm">{category.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
