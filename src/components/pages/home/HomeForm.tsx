'use client';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
const HomeForm = () => {

    const [formData, setFormData] = useState({ name: '', date: '', email: '', time: '' });
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/api/email`, formData, {
                headers: { 'Content-Type': 'application/json' },
            });
            console.log(response);
            if (response.status === 200) {
                toast.success('Email sent successfully');
            } else {
                console.error('Failed to send email');
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };
    return (

        <form onSubmit={handleSubmit}>
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    className: '',
                    duration: 5000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },

                    success: {
                        duration: 4000,
                    },
                }}
            />
            <div className="lg:flex grid gap-5 lg:gap-8">
                <div className="grid gap-5 lg:gap-8">
                    <input type="text" placeholder="Name" name="name" className="border-2 border-gray-300 px-3 py-2 rounded-2xl focus-visible:outline-[#00B7AB]"/>
                    <input type="date" name="date" className="border-2 border-gray-300 px-3 py-2 rounded-2xl focus-visible:outline-[#00B7AB]" />
                </div>
                <div className="grid gap-5 lg:gap-8">
                    <input type="email" name="email" placeholder="Email" className="border-2 border-gray-300 px-3 py-2 rounded-2xl focus-visible:outline-[#00B7AB]" />
                    <input type="time" name="time" className="border-2 border-gray-300 px-3 py-2 rounded-2xl focus-visible:outline-[#00B7AB]" />
                </div>
                <div className="grid gap-5 lg:gap-8">
                    <input type="text" name="number" placeholder="Phone Number" className="border-2 border-gray-300 px-3 py-2 rounded-2xl focus-visible:outline-[#00B7AB]" />
                    <button type="submit" className="bg-[#00B7AB] text-white px-3 py-2 rounded-2xl" >Book An Appointment</button>
                </div>
            </div>
        </form>

    );
};
export default HomeForm