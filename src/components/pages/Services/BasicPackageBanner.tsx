  interface BasicPackageBannerProps {
    testname: string;
    totaltest: string;
    originalprice: string;
    saleprice: string;
    image: string;
  }
  
  const BasicPackageBanner: React.FC<BasicPackageBannerProps> = ({ testname, totaltest, originalprice, saleprice, image}) => {
    return (
      <section className="px-5 lg:px-20 xl:px-24 2xl:px-56 mt-20 mb-12">
        <div className="lg:flex justify-between items-center gap-8 backdrop-blur-lg bg-white bg-center bg-no-repeat bg-cover rounded-2xl" style={{ backgroundImage: "url('images/banner-background.webp')" }}>
          <div className="p-8">
            <h1 className="text-3xl mb-3 font-bold">{testname}</h1>
            <h2 className="text-2xl font-semibold mb-2">{totaltest}</h2>
            <p className="font-semibold text-xl"><span className="line-through text-sm">{originalprice}</span> {saleprice}</p>
            <a href="/contact"><button className="bg-[#07C7B5] text-white px-3 py-2 rounded-2xl mt-5 mb-3 hover:bg-[#00B7AB]">Book An Appointment</button></a>
          </div>
          <div className="pt-4 pr-4 flex justify-center">
            <img src={`${image}`} className="h-80 rounded-xl" alt="" />
          </div>
        </div>
      </section>
    );
  };
  
  export default BasicPackageBanner;