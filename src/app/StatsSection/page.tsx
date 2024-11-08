import { FaHeartbeat, FaUserFriends, FaClinicMedical, FaStar } from "react-icons/fa";

const StatsSection = () => {
  return (
    <section className="flex justify-center py-12">
      <div className="bg-[#00B7AB] text-white w-full max-w-6xl rounded-xl shadow-lg p-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center">
          <FaHeartbeat size={40} />
          <h3 className="text-3xl font-bold mt-2">100000</h3>
          <p className="text-gray-200 text-sm mt-1">Lab Test Done</p>
        </div>
        <div className="flex flex-col items-center">
          <FaUserFriends size={40} />
          <h3 className="text-3xl font-bold mt-2">100000</h3>
          <p className="text-gray-200 text-sm mt-1">Happy Clients</p>
        </div>
        <div className="flex flex-col items-center">
          <FaClinicMedical size={40} />
          <h3 className="text-3xl font-bold mt-2">90000</h3>
          <p className="text-gray-200 text-sm mt-1">Diet Consultation</p>
        </div>
        <div className="flex flex-col items-center">
          <FaStar size={40} />
          <h3 className="text-3xl font-bold mt-2">4000</h3>
          <p className="text-gray-200 text-sm mt-1">Google Review & Rating 4.7</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
