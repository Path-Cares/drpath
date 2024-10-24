import { useCart } from '@/hooks/cart/CartContext';
import CartItem, { ItemType } from './CartItem';
import { useEffect } from 'react';
interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { cart } = useCart();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      console.log(isOpen);
    };
  }, [isOpen]);
  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-[299]" onClick={onClose}></div>}
      <div className={`fixed top-0 right-0 w-[300px] xs:w-[360px] sm:w-[450px]  bg-[#E3F5F8]  h-full z-[300] transition-all duration-500 ease-linear ${isOpen ? 'translate-x-0 ' : 'translate-x-full'}`}>
        <div className="p-4">
          <button className="py-3 text-gray-800 flex items-center justify-center gap-2 text-md font-medium" onClick={onClose}>
            <span className='inline-flex items-center justify-center px-1.5 pt-[0.15rem] pb-[0.25rem] leading-none text-white rounded-full bg-[#00B7AB]' >&#60;</span>  Back to home</button>

          <ul className="overflow-y-visible ">
            {cart.map((item: ItemType) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
        </div>

        <div className="fixed bottom-0 w-full ">
          <div className="bg-[#00B7AB] text-white py-1 w-full text-xs px-4">
            Get 20% OFF* on 1st order above ₹500
            Use : PATH20
          </div>
          <div className="flex flex-row justify-between  items-center w-full px-4 py-5">
            <div className="">
              {cart.length > 0 && <p className="text-sm">{cart.length} Tests</p>}
            </div>
            <button className="bg-gradient-to-br from-[#00B7AB] to-[#1F2259] text-white text-md sm:text-lg py-2 sm:py-3 px-6 sm:px-10 rounded-lg my-3">Book Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
