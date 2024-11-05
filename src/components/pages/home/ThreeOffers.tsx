import Image from "next/image";

const ThreeOffers = () => {
  return (
    <section className="px-5 lg:px-20 xl:px-24 2xl:px-72 pb-20">
      <div className="grid gap-16 lg:grid-cols-3">
        <div
          className="p-5 rounded-xl w-fit bg-cover bg-no-repeat text-white"
          style={{ backgroundImage: "url('/images/three-offers.webp')" }}
        >
          <h2 className="text-2xl font-bold">Why Dr. PathCares?</h2>
          <h3 className="text-xl mb-3">State-of-Art-labs</h3>
          <div className="flex items-center gap-4">
            <Image
              src="/images/Guarantee.png"
              className="bg-[#C7FDF9] rounded-2xl"
              width={50}
              height={50}
              alt="Guarantee"
            />
            <p className="text-lg font-semibold">
             
              <span className="font-normal">Certified Lab</span>
            </p>
          </div>
          <div className="flex justify-center">
            <Image 
              src="/images/health.webp" 
              width={307} 
              height={200} 
              alt="Health" 
            />
          </div>
          <p>
            Fully automated labs where our team of expert pathologists and technicians deliver four-sigma quality
          </p>
        </div>

        <div
          className="p-5 rounded-xl w-fit bg-cover bg-no-repeat text-white"
          style={{ backgroundImage: "url('/images/three-offers.webp')" }}
        >
          <h2 className="text-2xl font-bold">Why Dr. PathCares?</h2>
          <h3 className="text-xl mb-3">State-of-Art-labs</h3>
          <div className="flex items-center gap-4">
            <Image
              src="/images/fast-delivery-tick.png"
              className="bg-[#C7FDF9] rounded-2xl"
              width={50}
              height={50}
              alt="Fast Delivery"
            />
            <p className="text-lg font-semibold">
              100% on time <br />
              <span className="font-normal">sample collection</span>
            </p>
          </div>
          <div className="flex justify-center">
            <Image 
              src="/images/fasat-delivery.webp" 
              width={307} 
              height={200} 
              alt="Fast Delivery" 
            />
          </div>
          <p>
            Fully automated labs where our team of expert pathologists and technicians deliver four-sigma quality
          </p>
        </div>

        <div
          className="p-5 rounded-xl w-fit bg-cover bg-no-repeat text-white"
          style={{ backgroundImage: "url('/images/three-offers.webp')" }}
        >
          <h2 className="text-2xl font-bold">Why Dr. PathCares?</h2>
          <h3 className="text-xl mb-3">State-of-Art-labs</h3>
          <div className="flex items-center gap-4">
            <Image
              src="/images/trained-badge.png"
              className="bg-[#C7FDF9] rounded-2xl"
              width={50}
              height={50}
              alt="Trained Badge"
            />
            <p className="text-lg font-semibold">
              100+ Hours <br />
              <span className="font-normal">of training</span>
            </p>
          </div>
          <div className="flex justify-end">
            <Image 
              src="/images/home-checkup.webp" 
              width={307} 
              height={200} 
              alt="Home Checkup" 
            />
          </div>
          <p>
            Fully automated labs where our team of expert pathologists and technicians deliver four-sigma quality
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThreeOffers;
