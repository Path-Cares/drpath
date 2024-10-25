import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import Image from 'next/image';

const socialActivity = () => {
  return (
    <>
      <div
        className="bg-cover bg-center p-8 h-auto"
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

        {/* Video Section */}
        <div className="container mx-auto my-12">
          <h2 className="text-3xl font-bold text-center mb-6">Our Recent Social Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Video 1 */}
            <div className="w-full h-[35rem] overflow-hidden rounded-lg shadow-lg">
              <video
                src="/images/video1.mp4"
                controls
                className="object-cover w-full h-full"
              ></video>
            </div>
            {/* Video 2 */}
            <div className="w-full h-[35rem] overflow-hidden rounded-lg shadow-lg">
              <video
                src="/images/video2.mp4"
                controls
                className="object-cover w-full h-full"
              ></video>
            </div>
            {/* Video 3 */}
            <div className="w-full h-[35rem] overflow-hidden rounded-lg shadow-lg">
              <video
                src="/images/video3.mp4"
                controls
                className="object-cover w-full h-full"
              ></video>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default socialActivity;
