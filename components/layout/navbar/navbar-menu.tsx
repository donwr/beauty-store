"use client";
import AnimatedDropdownWrapper from '@/components/layout/navbar/menus/animate-dropdown-wrapper'; // Adjust the import path accordingly
import { useDropdown } from '@/context/dropdown-context';
import { useEffect } from 'react';
import { ClothingDropdown } from './menus/clothing-dropdown';
import { NewInDropdown } from './menus/new-in-dropdown';
import { SaleDropdown } from './menus/sale-dropdown';

const NavbarMenu = () => {
  const { registerComponent, toggleDropdown, isDropdownOpen, getComponentForDropdown } =
    useDropdown();

  useEffect(() => {
    registerComponent('SALE', <SaleDropdown />);
    registerComponent('NEW IN', <NewInDropdown />);
    registerComponent('CLOTHING', <ClothingDropdown />);
  }, [registerComponent]);

  const menuOptions = ['SALE', 'NEW IN', 'CLOTHING', 'SHOES', "ACCESSORIES", "GIFTS", "COLLECTIONS"];

  return (
    <ul className="relative w-full flex space-x-4 justify-center text-sm">
      {menuOptions.map((item) => (
        <li className="cursor-pointer" key={item} onClick={() => toggleDropdown(item)}>
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
