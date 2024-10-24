// CartBadge.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import { useCart } from '@/hooks/cart/CartContext';

interface CartBadgeProps {
  onClick: () => void;
}

const CartBadge: React.FC<CartBadgeProps> = ({ onClick }) => {
  const { cart } = useCart();
  return (
    <div
      role="button"
      className="border-[2px] border-gray-200 rounded-full p-1 relative cursor-pointer z-50"
      onClick={onClick}
    >
      <span className="absolute -top-[.6rem] -right-[.2rem] inline-flex items-center justify-center px-1.5 py-1 text-xs font-bold leading-none text-white bg-[#00B7AB] rounded-full">
        {cart.length}
      </span>
      <Image src="/images/shopping-cart.png" width={30} height={30} alt="Shopping Cart" />
    </div>
  );
};

export default CartBadge;
