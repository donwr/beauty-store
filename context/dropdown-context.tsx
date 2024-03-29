'use client';
import { Overlay } from '@/components/layout/overlay';
import {
  FunctionComponent,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState
} from 'react';

// Define a new type for the component mapping
type ComponentMapping = {
  [dropdownName: string]: ReactNode;
};

// Extend the context type to include additional methods
type DropdownContextType = {
  toggleDropdown: (dropdownName: string | null) => void;
  isDropdownOpen: (dropdownName: string) => boolean;
  registerComponent: (dropdownName: string, component: ReactNode) => void;
  getComponentForDropdown: (dropdownName: string) => ReactNode | null;
  isOverlayVisible: boolean;
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
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleDropdown = useCallback((dropdownName: string | null) => {
    setOpenDropdown((currentDropdown) => {
      const isOpening = currentDropdown !== dropdownName;
      setIsOverlayVisible(isOpening);
      return isOpening ? dropdownName : null;
    });
  }, []);

  const isDropdownOpen = useCallback(
    (dropdownName: string) => openDropdown === dropdownName,
    [openDropdown]
  );

  const registerComponent = useCallback((dropdownName: string, component: ReactNode) => {
    setComponents((currentComponents) => ({ ...currentComponents, [dropdownName]: component }));
  }, []);

  const getComponentForDropdown = useCallback(
    (dropdownName: string): ReactNode | null => components[dropdownName] || null,
    [components]
  );
  return (
    <DropdownContext.Provider
      value={{
        toggleDropdown,
        isDropdownOpen,
        registerComponent,
        getComponentForDropdown,
        isOverlayVisible,
      }}
    >
      {children}
      {isOverlayVisible && <Overlay />}
    </DropdownContext.Provider>
  );
};
