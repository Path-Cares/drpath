'use client'
import NewsletterForm from "@/components/pages/NewsletterForm";
const SubscribeNewsletter = () => {
    return (
        <section className="bg-[#E8F6FF] flex flex-row justify-center py-10 px-5">
            <div className="bg-white  shadow-lg grid grid-cols-1 lg:grid-cols-2 lg:w-8/10 xl:w-3/4 rounded-xl py-10 px-4 lg:px-20 space-y-5 relative">
                <div className="">
                    <h5 className="text-[#1F2259] font-semibold text-2xl">Subscribe to our newsletter</h5>
                    <p className="text-sm opacity-75 pb-2">
                        Keep up to date with important news about our clinic and your medical records.
                    </p>
                </div>
                <NewsletterForm />
                <img src="images/subscribe.png" alt="" height="50" width="50" className="absolute bottom-2 -right-4" />
            </div>
        </section>
    )
};

export default SubscribeNewsletter;
