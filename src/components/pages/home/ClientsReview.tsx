'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import H3GradientText from "@/components/pages/common/H3GradientText";
import Image from 'next/image';

const reviews = [
    {
        name: "Mr. Ambresh Yadav",
        designation: "Cardiac Computerized Tomography",
        text: "Very good doctor and kind at heart. Gives maximum time to hear patient views. His clinical diagnosis is very sharp. Most of the times he avoids surgery and does not do unnecessary surgeries. And, after treatment, he himself calls the patients and follow up their condition, which is a rare quality we see in doctors nowadays. Thank you",
        image: "/images/patient3.jpeg"
    },
    {
        name: "Ms. Vijay Singh",
        designation: "Patient",
        text: "Excellent care and service. Highly recommended!",
        image: "/images/patient4.jpeg"
    },
    {
        name: "Mr. Ashish Solanki",
        designation: "Patient",
        text: "A very professional and attentive doctor.",
        image: "/images/patient1.jpeg"
    },
    {
        name: "Mr. Ambresh Yadav",
        designation: "Cardiac Computerized Tomography",
        text: "Very good doctor and kind at heart. Gives maximum time to hear patient views. His clinical diagnosis is very sharp. Most of the times he avoids surgery and does not do unnecessary surgeries. And, after treatment, he himself calls the patients and follow up their condition, which is a rare quality we see in doctors nowadays. Thank you",
        image: "/images/patient2.jpeg"
    },
    {
        name: "Ms. Vijay Singh",
        designation: "Patient",
        text: "Excellent care and service. Highly recommended!",
        image: "/images/patient3.jpeg"
    },
    {
        name: "Mr. Ashish Solanki",
        designation: "Patient",
        text: "A very professional and attentive doctor.",
        image: "/images/patient4.jpeg"
    },
];

const ClientsReview = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="px-5 lg:px-20 xl:px-24 2xl:px-56 pb-20 lg:my-12">
            <div className="lg:flex gap-4">
                <div className="lg:w-1/2">
                    <h2 className='bg-[#1F2259] text-white text-center text-lg px-16 py-2 rounded-full mb-4 w-fit'>HAPPY PATIENTS</h2>
                    <H3GradientText
                        textalign="text-left"
                        text="Reviews from Our Patient"
                    />
                    <p className="mb-4">{reviews[activeIndex].text}</p>
                    <p className="font-bold">{reviews[activeIndex].name}</p>
                    <p className="text-gray-500">{reviews[activeIndex].designation}</p>
                </div>
                <div className="lg:w-1/2">
                    <Swiper
                        className="mt-10"
                        modules={[Navigation, Pagination, A11y, Autoplay]}
                        loop={true}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            }
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        autoplay={{ delay: 3000, disableOnInteraction: true }}
                    >
                        {reviews.map((review, index) => (
                            <SwiperSlide key={index} className={`grayscalew-fit ${activeIndex === index ? "grayscale-0" : "grayscale"}`}>
                                <Image src={review.image} width={500} height={500} className="rounded-xl h-72" alt={review.name} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default ClientsReview;
