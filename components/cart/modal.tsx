'use client';
import { useWindowSize } from '@/hooks/window-resizes';
import type { Cart } from 'lib/shopify/types';
import { useEffect, useRef, useState } from 'react';
import DesktopCartModal from './desktop-modal';
import MobileCartModal from './mobile-modal';
import OpenCart from './open-cart';
export type MerchandiseSearchParams = {
  [key: string]: string;
};

export interface CartModalProps {
  cart: Cart | undefined;
  closeCart: () => void;
}

export default function CartModal({ cart }: { cart: Cart | undefined }) {
  const [isOpen, setIsOpen] = useState(false);
  const quantityRef = useRef(cart?.totalQuantity);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const [width] = useWindowSize();

  const isDesktop = width >= 768; // TailwindCSS md breakpoint

  useEffect(() => {
    // Open cart modal when quantity changes.
    if (cart?.totalQuantity !== quantityRef.current) {
      // But only if it's not already open (quantity also changes when editing items in cart).
      if (!isOpen) {
        setIsOpen(true);
      }

      // Always update the quantity reference
      quantityRef.current = cart?.totalQuantity;
    }
  }, [isOpen, cart?.totalQuantity, quantityRef]);

  return (
    <>
      <button aria-label="Open cart" onClick={openCart}>
        <OpenCart quantity={cart?.totalQuantity} />
      </button>
      {isOpen && (
        <>
          {isDesktop ? (
            <DesktopCartModal cart={cart} closeCart={closeCart} />
          ) : (
            <MobileCartModal cart={cart} closeCart={closeCart} />
          )}
        </>
      )}
    </>
  );
}
