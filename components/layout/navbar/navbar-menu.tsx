'use client';
import { useDropdown } from '@/context/dropdown-context';
import { useEffect } from 'react';
import { SaleDropdown } from './menus/sale-dropdown';

const NavbarMenu = () => {
  const { registerComponent, toggleDropdown, isDropdownOpen, getComponentForDropdown } =
    useDropdown();

  useEffect(() => {
    registerComponent('SALE', <SaleDropdown />);
  }, [registerComponent]);

  const menuOptions = ['SALE', 'NEW IN', 'CLOTHING'];

  return (
    <ul className="relative w-full flex space-x-4 justify-center text-sm">
      {menuOptions.map((item) => (
        <li key={item} onClick={() => toggleDropdown(item)}>
          {item}
          {isDropdownOpen(item) && getComponentForDropdown(item)}
        </li>
      ))}
    </ul>
  );
};

export default NavbarMenu;
