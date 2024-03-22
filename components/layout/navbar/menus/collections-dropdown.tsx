import { salesDropdownCategories } from '@/data/menu-dropdown-info';
import { motion } from 'framer-motion';

export const CollectionsDropdown = () => {
  return (
    <>
      {/* This div now takes up the remaining space */}
      <div className="flex flex-grow">
        <div className="right h-full flex-col p-8">
          <h4 className="mb-4 text-sm font-semibold uppercase text-black">categories</h4>
          {/* New element with categories in an auto-sizing grid layout */}
          <div className="grid grid-cols-4 gap-4 overflow-y-auto">
            {salesDropdownCategories.map((category, index) => {
              return (
                <motion.div
                  key={index}
                  className="category-option flex items-center space-x-4"
                >
                 
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
