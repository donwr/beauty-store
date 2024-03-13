import { useDropdown } from '@/context/dropdown-context';
import useOutsideClick from '@/hooks/use-outside-click';
import { AnimatePresence, motion } from 'framer-motion';
import React, { ReactNode, useRef } from 'react';

interface AnimatedDropdownWrapperProps {
  isVisible: boolean;
  children: ReactNode;
  name: string;
}

const AnimatedDropdownWrapper: React.FC<AnimatedDropdownWrapperProps> = ({ isVisible, children, name }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { toggleDropdown } = useDropdown();

  useOutsideClick(wrapperRef, () => {
    if (isVisible) toggleDropdown(name); // Use the name prop here
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={wrapperRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="shadow-md absolute left-0 top-9 flex w-full flex-col bg-white"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedDropdownWrapper;