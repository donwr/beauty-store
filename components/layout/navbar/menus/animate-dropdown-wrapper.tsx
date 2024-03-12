import { AnimatePresence, motion } from 'framer-motion';
import React, { ReactNode } from 'react';

// Define an interface for the component props
interface AnimatedDropdownWrapperProps {
  isVisible: boolean;
  children: ReactNode; // This type is suitable for any valid React child
}

const AnimatedDropdownWrapper: React.FC<AnimatedDropdownWrapperProps> = ({ isVisible, children }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="shadown-md absolute left-0 top-9 flex w-full flex-col bg-white"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedDropdownWrapper;
