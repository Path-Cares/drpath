
import H3GradientText from "@/components/pages/common/H3GradientText";
import BlogSwiper from "./BlogSwiper";
import Faqs from "./Faqs";
const BlogSection = () => {
  return (
    <section className="py-20 px-5 bg-[#E8F6FF] sm:px-20 lg:px-20 xl:px-24 2xl:px-72" >
      <div className="flex justify-center">
      <h2 className="bg-[#1F2259] text-white text-center text-lg px-16 py-2 rounded-full mb-4 w-fit">Our News Shelter</h2>
      </div>
      <H3GradientText text="Stay heart-healthy

          with our blog" textalign="text-center"/>
      <p className="text-sm sm:text-center text-left text-gray-900 opacity-75 mt-3">Our team of expert brings you up-to-date information on the latest advances in heart health,
from cutting-edge treatments to lifestyle changes that can help you live a longer, healthier life</p>
      <BlogSwiper />
      <br/>
      <Faqs/>
      {/* blog posts */}
      {/* blog posts cards  end*/}
    </section>
  )
}
export default BlogSection;
