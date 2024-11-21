'use client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '@/hooks/cart/CartContext';
import Image from 'next/image';

interface TestViewProps {
  testname: string;
  totaltest: string;
  originalprice: string;
  saleprice: string;
  estimatetime: string;
  url: string;
}

const TestView: React.FC<TestViewProps> = ({ testname, totaltest, originalprice, saleprice, estimatetime, url }) => {
  const { addToCart, removeFromCart, isInCart } = useCart();
  const item = { testname, totaltest, originalprice, saleprice, estimatetime, url };
  const inCart = isInCart(item);

  const handleAddRemove = () => {
    if (inCart) {
      removeFromCart(item);
    } else {
      addToCart(item);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-2xl shadow-md overflow-hidden">
      {/* Top Section */}
      <div
        className="flex-1 px-4 bg-no-repeat bg-cover bg-right-bottom"
        style={{ backgroundImage: "url('images/rectangle-for-plan.png')" }}
      >
        <div className="flex justify-end">
          <span className="text-white mb-1 rounded-b text-base px-3 bg-gradient-to-tr from-[#00514C] to-[#00B7AB]">
            Our First Priority Package
          </span>
        </div>
        <div className="flex text-white items-baseline gap-2 mt-4">
          <div className="w-2/3">
            <Image src="/images/full-body.png" alt="Test Icon" width={25} height={25} />
            <p className="text-2xl font-semibold">{testname}</p>
          </div>
          <div className="w-1/3 text-right">
            <p className="font-semibold text-lg">
              <span className="line-through text-sm">{originalprice}</span> {saleprice}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-6 py-4 bg-gray-50 flex flex-col justify-between">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-2">
          <div className="flex items-center gap-3">
            <Image src="/images/parameters-includes.png" alt="Parameters" width={20} height={20} />
            <p className="text-sm text-gray-800">{totaltest}</p>
          </div>
          <div className="flex items-center gap-3">
            <Image src="/images/reports-within.png" alt="Reports" width={20} height={20} />
            <p className="text-sm text-gray-800">{estimatetime}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Link
            href={`${url}`}
            className="border-2 border-[#00B7AB] text-center text-[#00B7AB] font-semibold py-1 rounded-lg text-sm"
          >
            View Details
          </Link>
          <button
            onClick={handleAddRemove}
            className={`py-1 rounded-lg text-sm ${
              inCart ? 'bg-red-500 text-white' : 'bg-gradient-to-r from-[#1F2259] to-[#4349BF] text-white'
            }`}
          >
            {inCart ? (
              <>
                Remove <FontAwesomeIcon icon={faTrash} />
              </>
            ) : (
              'Add to Cart'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestView;
