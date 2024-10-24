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
  const {
    addToCart,
    removeFromCart,
    isInCart
  } = useCart();
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
    <>
      <div className="">
        <div
          className="px-4 bg-no-repeat bg-cover bg-right-bottom rounded-2xl shadow-md shadow-gray-300"
          style={{ backgroundImage: "url('images/rectangle-for-plan.png')" }}
        >
          <div className=" text-end flex justify-end">
            <span className=" text-white pb-1 rounded-b text-lg px-3  bg-gradient-to-tr from-[#00514C] to-[#00B7AB]">
              Checkup
            </span>
          </div>
          <div className="flex text-white items-baseline pb-8 gap-2">
            <div className="w-2/3">
            <Image src="/images/full-body.png" alt="alt" width={25} height={25} />
              <p className="text-2xl font-semibold text-grey-600">{testname}</p>
            </div>
            <div className="w-1/3">
              <p className="font-semibold text-lg">
                <span className="line-through text-sm">{originalprice}</span> {saleprice}
              </p>
              {/* <p className="px-3 py-1 rounded-lg text-center bg-gradient-to-r from-[#1F2259] to-[#4349BF]">75% off</p> */}
            </div>
          </div>
        </div>
        <div className="px-6">
          <div className="shadow-md shadow-gray-300 rounded-b-lg py-4 px-6">
            <div className="grid 2xl:flex gap-4 lg:gap-2">
              <div className="flex items-center gap-5">
              <Image src="/images/parameters-includes.png" alt="alt" width={25} height={25} />
                <p className="text-sm text-gray-800">{totaltest}</p>
              </div>
              <div className="flex items-center gap-5">
              <Image src="/images/reports-within.png" alt="alt" width={25} height={25} />
                <p className="text-sm text-gray-800"> {estimatetime}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:gap-3 mt-3">
              <Link href={`${url}`} className="border-2 border-[#00B7AB] text-center text-[#00B7AB] font-semibold py-1 px-2 rounded-lg text-sm sm:txt-md"><button type="button">View Details</button></Link>
              <button
                onClick={handleAddRemove}
                className={`py-1 px-2 rounded-lg ${inCart ? 'bg-red-500 text-white' : 'bg-gradient-to-r from-[#1F2259] to-[#4349BF] text-white'
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
      </div>
    </>
  )
}
export default TestView;