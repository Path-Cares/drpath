'use client';
import React from 'react';
import Image from 'next/image';
import { useCart } from '@/hooks/cart/CartContext';

interface CartBadgeProps {
  onClick: () => void;
  className?: string; // Add className as an optional prop
}

const CartBadge: React.FC<CartBadgeProps> = ({ onClick, className }) => {
  const { cart } = useCart();
  return (
    <div
      role="button"
      className={`border-[2px] border-gray-200 rounded-full p-1 lg:hidden relative cursor-pointer z-50 ${className}`}
      onClick={onClick}
    >
      <span className="absolute -top-[.6rem] -right-[.2rem] inline-flex items-center justify-center px-1.5 py-1  text-xs font-bold leading-none text-white bg-[#00B7AB] rounded-full">
        {cart.length}
      </span>
      <Image src="/images/shopping-cart.png" width={30} height={30} alt="Shopping Cart" />
    </div>
  );
};

export default CartBadge;
