import { useCart } from '@/hooks/cart/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
export interface ItemType {
  id: number;
  testname: string;
  saleprice: number;
  description: string;
};

const CartItem = ({ item }: { item: ItemType }) => {
  const { removeFromCart } = useCart();

  const handleRemoveFromCart = () => {
    // Call the removeFromCart function from the context to remove the item
    removeFromCart(item);
  };
  return (
    <div className="bg-white p-4 shadow-sm  rounded-md my-3 text-md">
      <div className=" flex justify-between gap-2">
        <div className="bg-gradient-to-br from-[#00B7AB] to-[#1F2259] text-transparent bg-clip-text">
          <h3 className={`text-md font-bold`}>
            {item.testname}
          </h3>
        </div>
        {/* <p>{item.testname}</p> */}
        <button onClick={handleRemoveFromCart} className="text-sm bg-gray-100 px-2 py-1 rounded-sm text-gray-500"><FontAwesomeIcon icon={faTrash} /></button>
      </div>
      <p className='text-sm'>
        {item.saleprice}
      </p>
    </div>

  );
};

export default CartItem;
