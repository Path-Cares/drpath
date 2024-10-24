


import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import Image from 'next/image'

const socialActivity = () => {
  return (
    <>
    <div
      className="bg-cover bg-center p-8 h-[100vh]"
      style={{ backgroundImage: "url('/images/banner-background.webp')" }}
    >
      <Nav />
      <div className="container mx-auto flex flex-col md:flex-row items-start p-16 justify-between">
        <div className="text-left md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Social Activities</h1>
          <p className="mb-4 text-xl">
            Dr. Path Cares, a leading healthcare provider in India, is dedicated to promoting health awareness among the public. We consistently organize free camps offering blood tests and health fitness checks. We have successfully conducted numerous free health check-up camps across Delhi NCR. Our mission is to extend these services to over a lakh people in Delhi NCR and Meerut in the coming year.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg md:w-1/3">
          <h2 className="text-2xl font-bold mb-4">Organise Health camp in your area</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Your City"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button className="bg-[#00B7AB] text-white py-2 px-4 rounded w-full hover:bg-[#46716f] transition">
              Get a call back
            </button>
          </form>
        </div>
      </div>
      
      
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        
        <div className="border rounded-lg p-4 bg-white shadow-md">
          <Image
            src="/images/award1.png"
            alt="Award 1"
            layout="responsive"
            width={500}
            height={300}
            objectFit="cover"
            className="rounded-lg"
          />
          <p className="mt-2 text-center text-sm text-gray-600">
            Description of Award 1.
          </p>
        </div>

        <div className="border rounded-lg p-4 bg-white shadow-md">
          <Image
            src="/images/award3.png"
            alt="Award 2"
            layout="responsive"
            width={500}
            height={300}
            objectFit="cover"
            className="rounded-lg"
          />
          <p className="mt-2 text-center text-sm text-gray-600">
            Description of Award 2.
          </p>
        </div>

        
        <div className="border rounded-lg p-4 bg-white shadow-md">
          <Image
            src="/images/award4.png"
            alt="Award 3"
            layout="responsive"
            width={500}
            height={300}
            objectFit="cover"
            className="rounded-lg"
          />
          <p className="mt-2 text-center text-sm text-gray-600">
            Description of Award 3.
          </p>
        </div>

        <div className="border rounded-lg p-4 bg-white shadow-md">
          <Image
            src="/images/award3.png"
            alt="Award 4"
            layout="responsive"
            width={500}
            height={300}
            objectFit="cover"
            className="rounded-lg"
          />
          <p className="mt-2 text-center text-sm text-gray-600">
            Description of Award 4.
          </p>
        </div>

       
        <div className="border rounded-lg p-4 bg-white shadow-md">
          <Image
            src="/images/award1.png"
            alt="Award 5"
            layout="responsive"
            width={500}
            height={300}
            objectFit="cover"
            className="rounded-lg"
          />
          <p className="mt-2 text-center text-sm text-gray-600">
            Description of Award 5.
          </p>
        </div>

        <div className="border rounded-lg p-4 bg-white shadow-md">
          <Image
            src="/images/award4.png"
            alt="Award 6"
            layout="responsive"
            width={500}
            height={300}
            objectFit="cover"
            className="rounded-lg"
          />
          <p className="mt-2 text-center text-sm text-gray-600">
            Description of Award 6.
          </p>
        </div>
      </div> */}
    </div>
    <Footer/>
    </>
  );
};

export default socialActivity;



