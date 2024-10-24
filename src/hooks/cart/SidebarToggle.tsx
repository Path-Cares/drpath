import { useState } from 'react';

const SidebarToggle = (initialState: boolean ) => {
  const [isCartOpen, setIsCartOpen] = useState(initialState);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return [isCartOpen, toggleCart] as const;
};

export default SidebarToggle;
