'use client';
import AnimatedDropdownWrapper from '@/components/layout/navbar/menus/animate-dropdown-wrapper'; // Adjust the import path accordingly
import { useDropdown } from '@/context/dropdown-context';
import { useEffect } from 'react';
import { AccessoriesDropdown } from './menus/accessories-dropdown';
import { ClothingDropdown } from './menus/clothing-dropdown';
import GiftsDropdown from './menus/gifts-dropdown';
import { NewInDropdown } from './menus/new-in-dropdown';
import { SaleDropdown } from './menus/sale-dropdown';
import { ShoesDropdown } from './menus/shoes-dropdown';

const NavbarMenu = () => {
  const { registerComponent, toggleDropdown, isDropdownOpen, getComponentForDropdown } =
    useDropdown();

  useEffect(() => {
    registerComponent('SALE', <SaleDropdown />);
    registerComponent('NEW IN', <NewInDropdown />);
    registerComponent('CLOTHING', <ClothingDropdown />);
    registerComponent('GIFTS', <GiftsDropdown />);
    registerComponent('SHOES', <ShoesDropdown />);
    registerComponent('ACCESSORIES', <AccessoriesDropdown />);
  }, [registerComponent]);

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
    <ul className="relative flex w-full justify-center space-x-4 text-sm">
      {menuOptions.map((item) => (
        <li key={item} className="group text-xs">
          <button onClick={() => toggleDropdown(item)} className="focus:outline-none cursor-pointer">
            {item}
          </button>
          <AnimatedDropdownWrapper isVisible={isDropdownOpen(item)} name={item}>
            {getComponentForDropdown(item)}
          </AnimatedDropdownWrapper>
        </li>
      ))}
    </ul>
  );
};

export default NavbarMenu;
