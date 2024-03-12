'use client';
import AnimatedDropdownWrapper from '@/components/layout/navbar/menus/animate-dropdown-wrapper'; // Adjust the import path accordingly
import { useDropdown } from '@/context/dropdown-context';
import { useEffect, useRef } from 'react';
import { ClothingDropdown } from './menus/clothing-dropdown';
import GiftsDropdown from './menus/gifts-dropdown';
import { NewInDropdown } from './menus/new-in-dropdown';
import { SaleDropdown } from './menus/sale-dropdown';

const NavbarMenu = () => {
  const { registerComponent, toggleDropdown, isDropdownOpen, getComponentForDropdown } =
    useDropdown();

  useEffect(() => {
    registerComponent('SALE', <SaleDropdown />);
    registerComponent('NEW IN', <NewInDropdown />);
    registerComponent('CLOTHING', <ClothingDropdown />);
    registerComponent('GIFTS', <GiftsDropdown />);
  }, [registerComponent]);

  const navbarRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        // Your logic to close the dropdown
      }
    };

    // Attach event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Clean up event listener
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // Dependencies might include functions from your context if they are expected to change

  const menuOptions = [
    'SALE',
    'NEW IN',
    'CLOTHING',
    'SHOES',
    'ACCESSORIES',
    'GIFTS',
    'COLLECTIONS'
  ];

  return (
    <ul ref={navbarRef} className="relative flex w-full justify-center space-x-4 text-sm">
      {menuOptions.map((item) => (
        <li className="cursor-pointer text-xs" key={item} onClick={() => toggleDropdown(item)}>
          {item}
          <AnimatedDropdownWrapper isVisible={isDropdownOpen(item)}>
            {getComponentForDropdown(item)}
          </AnimatedDropdownWrapper>
        </li>
      ))}
    </ul>
  );
};

export default NavbarMenu;
