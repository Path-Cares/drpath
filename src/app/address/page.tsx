"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaChevronRight } from "react-icons/fa";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function AddressSelection() {
  const router = useRouter();
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 12.9352,
    lng: 77.6245,
  });

  const handleLocationSelect = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      setSelectedLocation({
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      });
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Navbar */}
      <div className="flex flex-col md:flex-row justify-between items-center py-4 px-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-[#00B7AB]">
          Dr <span className="text-green-600">PathLabs</span>
        </h1>
        <div className="flex items-center gap-4 text-gray-600 font-medium mt-4 md:mt-0">
          <span className="flex items-center gap-1">
            <FaUser /> Member Details
          </span>
          <span className="text-[#00B7AB] flex items-center gap-1">
            <FaChevronRight /> Address
          </span>
          <span className="flex items-center gap-1">
            <FaChevronRight /> Slot
          </span>
        </div>
      </div>

      {/* Address Selection Section */}
      <div className="flex flex-col md:flex-row mt-6 gap-6">
        <div className="w-full md:w-3/5 bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-4">
            Where shall we collect your sample?
          </h2>
          <div className="h-80 w-full rounded-lg overflow-hidden">
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "100%" }}
                center={selectedLocation}
                zoom={15}
                onClick={handleLocationSelect}
                options={{ disableDefaultUI: true }} // Removes extra controls
              >
                <Marker position={selectedLocation} draggable />
              </GoogleMap>
            </LoadScript>
          </div>

          <div className="mt-4">
            <label className="text-gray-600 font-medium">Location *</label>
            <input
              type="text"
              placeholder="Search for society, area, street name..."
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mt-4">
            <label className="text-gray-600 font-medium">Address *</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="House no, Block, Street, Main road"
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mt-4">
            <label className="text-gray-600 font-medium">
              Landmark / Directions to reach (Optional)
            </label>
            <input
              type="text"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
              placeholder="e.g., Red gate next to supermarket"
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mt-4">
            <label className="text-gray-600 font-medium">Save as</label>
            <div className="flex gap-4 mt-2">
              <button className="px-4 py-2 border rounded-md w-full md:w-auto">
                Home
              </button>
              <button className="px-4 py-2 border rounded-md bg-[#00B7AB] text-white w-full md:w-auto">
                Other
              </button>
            </div>
          </div>
        </div>

        {/* Right Side Summary */}
        <div className="w-full md:w-2/5 bg-gray-50 p-6 shadow-md rounded-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">1 member added</h3>
            <div className="flex gap-2">
              <p className="text-gray-600 mt-1 line-through">₹420</p>
              <p className="text-[#00B7AB] text-xl font-bold">₹380</p>
            </div>
          </div>
          <button
            className="mt-4 w-full bg-[#00B7AB] text-white font-medium p-3 rounded-md"
            onClick={() => router.push("/slot")}
          >
            Save Address and Proceed
          </button>
        </div>
      </div>
    </div>
  );
}
