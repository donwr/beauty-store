"use client";
import { useEffect, useState } from 'react';

// Custom hook for detecting window size with TypeScript types
export const useWindowSize = (): [number, number] => {
  // Initialize state with a default value to avoid type issues
  const [size, setSize] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    // Check if window is defined (this runs only in the browser)
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      const handleResize = () => {
        // Set window width and height to state
        setSize([window.innerWidth, window.innerHeight]);
      };

      // Add event listener
      window.addEventListener('resize', handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return size;
};

export default useWindowSize;
