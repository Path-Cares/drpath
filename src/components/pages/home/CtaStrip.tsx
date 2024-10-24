const CtaStrip = () => {
  return (
    <section className="" style={{ backgroundImage: "url('images/cta-strip.webp')" }}>
    <div className="py-10 px-5 lg:px-20 xl:px-24 2xl:px-40">
      <div className="lg:flex gap-10 text-white">
        <div className="lg:w-2/3">
            <h2 className="font-bold text-3xl mb-2">Make an appointment now</h2>
            <p className="">Make an appointment at our medical clinic and trust our professionals to take care of your health.</p>
        </div>
        <div className="flex gap-10 lg:w-1/3 h-auto mt-4 lg:mt-0">
            <a href="tel:+919125393939"><button className="bg-[#00B7AB] px-6 rounded-xl h-12">Call Us</button></a>
            <a href="mailto:dr.pathcare@gmail.com"><button className="bg-white text-[#161920] rounded-xl h-12 px-6">Write Us</button></a>
        </div>
      </div>
    </div>
    </section>
  );
};
export default CtaStrip;
