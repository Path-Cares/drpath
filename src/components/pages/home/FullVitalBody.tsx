import H3GradientText from "@/components/pages/common/H3GradientText";
import Image from "next/image";

const FullVitalBody = () => {
  return (
    <section className="px-6 lg:px-20 xl:px-24 2xl:px-72 py-12">
      <div className="lg:flex gap-16">
        {/* Left Text Section */}
        <div className="lg:w-2/4">
          <H3GradientText textalign="text-left" text="For Vital Body Organs" />
          <p className="py-4 text-gray-900 text-lg leading-relaxed">
            Explore our comprehensive range of diagnostic tests tailored for
            vital body organs. Our specialized diagnostic tests focus on
            evaluating the well-being of essential body organs, ensuring you
            receive the care you deserve.
          </p>
          <div className="flex justify-start lg:justify-start mt-6">
            <button className="px-8 py-3 border-2 border-[#00B7AB] text-[#00B7AB] rounded-full font-semibold hover:bg-[#00B7AB] hover:text-white transition duration-300">
              View all Packages
            </button>
          </div>
        </div>

        {/* Icon Grid Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 lg:w-2/4 mt-8 lg:mt-0">
          {[
            { src: "/images/heart-icon.png", label: "Heart" },
            { src: "/images/kidney-icon.png", label: "Kidney" },
            { src: "/images/liver-icon.png", label: "Liver" },
            { src: "/images/bone-icon.png", label: "Bone" },
            { src: "/images/vitamin.png", label: "Vitamin" },
            { src: "/images/hormones.png", label: "Hormones" },
            { src: "/images/gut-icon.png", label: "Gut Health" },
            { src: "/images/blood-icon.png", label: "Blood" },
            { src: "/images/reproductive-organs-icon.png", label: "Reproductive Organs" }
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <Image src={item.src} alt={item.label} width={80} height={50} />
              <p className="mt-3 font-semibold text-gray-700 text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullVitalBody;
