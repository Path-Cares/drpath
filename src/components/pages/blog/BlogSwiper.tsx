'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, A11y} from 'swiper/modules';
import Image from 'next/image';

const BlogSwiper = () => {
    return (
        <Swiper className="mt-10"
            modules={[Navigation, Pagination, A11y]}
            loop={true}
            spaceBetween={50}
            slidesPerView={3}
            breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 3,
                },
              }}
            pagination={{ clickable: true }}
        >
            <SwiperSlide >
                <div className="bg-white shadow-lg rounded-md ">
                    <div className="p-5">
                        <div className="text-[.85rem] bg-[#F1F6FF] w-fit py-2 px-3 rounded-full">
                            Heart Health
                        </div>
                        <h4 className="text-md text-blue font-medium mt-3 text-[#1F2259]">The 5 Best questions to  Ask
                            Your Cardiologist</h4>
                        <hr className="my-3" />
                        <p className="text-sm">Dr. Path cares Has Created Tech Enabled Processes That Ensure That The Customers Entire Journey From Booking To Report Delivery Is Seamless And Simplified. Through Our Proprietary s Seamless And Simplified. Through Our Proprietary View More </p>
                    </div>
                    <Image src="/images/blogpost.webp" width={500} height={200} alt="" className="w-full mt-5" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="bg-white shadow-lg rounded-md">
                    <div className="p-5">
                        <div className="text-[.85rem] bg-[#F1F6FF] w-fit py-2 px-3 rounded-full">
                            Heart Health
                        </div>
                        <h4 className="text-md text-blue font-medium mt-3 text-[#1F2259]">Where do Coronaviruses originate?</h4>
                        <hr className="my-3" />
                        <p className="text-sm">Coronaviruses can infect and spread among various animal species including cats, dogs, and pigs. Several coronavirus groups also circulate in humans and cause seasonal epidemics, usually during the winter. Human coronaviruses are believed to originate from animal reservoirs. </p>
                    </div>
                    <Image src="/images/cunsult (1).jpg" width={500} height={200} alt="" className="w-full mt-5" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="bg-white shadow-lg rounded-md">
                    <div className="p-5">
                        <div className="text-[.85rem] bg-[#F1F6FF] w-fit py-2 px-3 rounded-full">
                            Heart Health
                        </div>
                        <h4 className="text-md text-blue font-medium mt-3 text-[#1F2259]">What causes a heart attack?</h4>
                        <hr className="my-3" />
                        <p className="text-sm">Atherosclerosis, or the gradual narrowing and reduction of arteries over time, is one of the primary contributors to coronary artery diseases. Atherosclerosis results from fat accumulation on arterial walls known as atheromas; over time these rigid, narrower vessels become more rigid and narrower until eventually they clog completely with deposits known as atheromas.</p>
                    </div>
                    <Image src="/images/cunsult (2).jpg" width={500} height={200} alt="" className="w-full mt-5" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-white shadow-lg rounded-md">
                    <div className="p-5">
                        <div className="text-[.85rem] bg-[#F1F6FF] w-fit py-2 px-3 rounded-full">
                            Heart Health
                        </div>
                        <h4 className="text-md text-blue font-medium mt-3 text-[#1F2259]">Why should my blood glucose level be between 120 and 200?</h4>
                        <hr className="my-3" />
                        <p className="text-sm">Uncontrolled blood sugar levels can lead to kidney disease, heart attacks or strokes.</p>
                    </div>
                    <Image src="/images/cunsult (3).jpg" width={500} height={200} alt="" className="w-full mt-5" />
                </div>
            </SwiperSlide>
         
        </Swiper >
        
    );
};

export default BlogSwiper;
