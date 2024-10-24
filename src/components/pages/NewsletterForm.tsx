import React, { useState } from 'react';

const NewsletterForm = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log('Form submitted with email:', email);
    };
    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row sm:space-x-6 sm:items-center space-y-3 sm:space-y-0">
            <input
                type="email"
                className="rounded-full border border-1 border-gray-300  pl-4 pr-4 xs:pr-8 sm:pr-16 py-1.5 focus:border-[#00B7AB] outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
            />
            <button className="bg-[#00B7AB] text-white rounded-full px-8 py-2 hover:scale-[1.01] duration-150 ease-linear transition-all" type="submit">Subscribe</button>
        </form>
    );
};

export default NewsletterForm;
