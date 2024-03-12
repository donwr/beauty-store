"use client";
import { FunctionComponent, ReactNode, createContext, useCallback, useContext, useState } from 'react';

// Define a new type for the component mapping
type ComponentMapping = {
  [dropdownName: string]: ReactNode;
};

// Extend the context type to include a method for setting components
type DropdownContextType = {
  toggleDropdown: (dropdownName: string | null) => void;
  isDropdownOpen: (dropdownName: string) => boolean;
  registerComponent: (dropdownName: string, component: ReactNode) => void;
  getComponentForDropdown: (dropdownName: string) => ReactNode | null;
};

const DropdownContext = createContext<DropdownContextType | undefined>(undefined);
export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (context === undefined) {
    throw new Error('useDropdown must be used within a DropdownProvider');
  }
  return context;
};

interface DropdownProviderProps {
  children: ReactNode;
}

export const DropdownProvider: FunctionComponent<DropdownProviderProps> = ({ children }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [components, setComponents] = useState<ComponentMapping>({});

  const toggleDropdown = useCallback((dropdownName: string | null) => {
    setOpenDropdown((currentDropdown) => (currentDropdown === dropdownName ? null : dropdownName));
  }, []);

  const isDropdownOpen = useCallback((dropdownName: string) => {
    return openDropdown === dropdownName;
  }, [openDropdown]);

  const registerComponent = useCallback((dropdownName: string, component: ReactNode) => {
    setComponents((currentComponents) => ({ ...currentComponents, [dropdownName]: component }));
  }, []);

  const getComponentForDropdown = useCallback((dropdownName: string): ReactNode | null => {
    return components[dropdownName] || null;
  }, [components]);


  return (
    <DropdownContext.Provider value={{ toggleDropdown, isDropdownOpen, registerComponent, getComponentForDropdown }}>
      {children}
    </DropdownContext.Provider>
  );
};
