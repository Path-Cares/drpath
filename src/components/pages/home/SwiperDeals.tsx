'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const SwiperDeals = () => {
  return (
    <section className="px-5 lg:px-20 xl:px-24 2xl:px-56 pb-20 lg:my-12">
      {/* <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      > */}
      <Swiper className="mt-10"
        modules={[Navigation, Pagination, A11y, Autoplay]}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          728: {
            slidesPerView: 1,
            spaceBetween: 20,
          }
        }}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: true }}
      >
        <SwiperSlide>
          <div className="lg:flex items-center justify-center">
            <div className="bg-gradient-to-tr from-[#00B7AB] h-fit to-[#1F2259] pl-16 text-white p-6 lg:rounded-l-xl lg:rounded-tr-none rounded-t-xl lg:w-[60%]">
              <h2 className="font-semibold text-xl">
                Add a family member <span className="text-3xl">GET 30% OFF</span>
              </h2>
              <div className="flex justify-between mt-3">
                <button className="bg-white text-black px-4 py-2 rounded-lg tg-black">USER CODE: FAMILY</button>
                <button className="underline">Book Now</button>
              </div>
              <p className="text-xs mt-3">*on min order value of ₹ 1000</p>
            </div>

            <div className="flex items-center justify-center">
              <Image width={500}
                src="/images/one-family.webp"
                className="rounded-b-xl lg:rounded-xl"
                height={253}
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:flex items-center justify-center ">
            <div className="bg-gradient-to-tr from-[#00B7AB] h-fit to-[#1F2259] pl-16 text-white p-6 lg:rounded-l-xl lg:rounded-tr-none rounded-t-xl lg:w-[60%]">
              <h2 className="font-semibold text-xl">
                Add a family member <span className="text-3xl">GET 30% OFF</span>
              </h2>
              <div className="flex justify-between mt-3">
                <button className="bg-white text-black px-4 py-2 rounded-lg tg-black">USER CODE: FAMILY</button>
                <button className="underline">Book Now</button>
              </div>
              <p className="text-xs mt-3">*on min order value of ₹ 1000</p>
            </div>

            <div className="flex items-center justify-center">
              <Image width={500}
                src="/images/family2.jpeg"
                className="rounded-b-xl lg:rounded-xl"
                height={253}
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:flex items-center justify-center">
            <div className="bg-gradient-to-tr from-[#00B7AB] h-fit to-[#1F2259] pl-16 text-white p-6 lg:rounded-l-xl lg:rounded-tr-none rounded-t-xl lg:w-[60%]">
              <h2 className="font-semibold text-xl">
                Add a family member <span className="text-3xl">GET 30% OFFER</span>
              </h2>
              <div className="flex justify-between mt-3">
                <button className="bg-white text-black px-4 py-2 rounded-lg tg-black">USER CODE: FAMILY</button>
                <button className="underline">Book Now</button>
              </div>
              <p className="text-xs mt-3">*on min order value of ₹ 1000</p>
            </div>

            <div className="flex items-center justify-center">
              <Image width={500}
                src="/images/family3.jpeg"
                className="h-80 rounded-b-xl lg:rounded-xl"
                height={253}
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlide components here if you have more slides */}
      </Swiper>
    </section>
  );
};

export default SwiperDeals;