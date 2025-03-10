import BrandMarquee from "@/components/BrandMarquee";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import OurPartners from "@/components/OurPartners";
import Footer from "@/components/Footer";
import PricePlans from "@/components/PricePlans";
import LinkButton from "@/components/LinkButton";
import OurContact from "@/components/OurContact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BrandMarquee />

      <div className="p-6 md:p-20 mt-4 flex flex-col md:flex-row items-center">
        <div className="grow">
          <h2 className="text-2xl md:text-5xl font-semibold">Powerful  SEO Tools <br /> <span className="text-violet-500">Boost</span> Your Website’s Ranking</h2>
          <p className="mt-4 text-gray-300">Optimize your website with AI-powered analysis, real-time insights, and data-driven strategies.</p>
          <div className="mt-8 order-3 md:order-2">
            <LinkButton href={'#'} type="primary">Get Started</LinkButton>
          </div>
        </div>
        <div className="grow mt-8 md:mt-0 order-2 md:order-3">
          <div className="grid grid-cols-2 text-center gap-8">
            <div className="border-1 rounded-xl border-violet-500 py-3 px-2">
              <h3 className="text-2xl md:text-5xl text-violet-500 font-semibold">300+</h3>
              <p className="text-gray-300">teams use our services</p>
            </div>
            <div className="border-1 rounded-xl border-violet-500 py-3 px-2">
              <h3 className="text-2xl md:text-5xl text-violet-500 font-semibold">500TB+</h3>
              <p className="text-gray-300">logs processed every month</p>
            </div>
            <div className="border-1 rounded-xl border-violet-500 py-3 px-2">
              <h3 className="text-2xl md:text-5xl text-violet-500 font-semibold">30+</h3>
              <p className="text-gray-300">available around the world</p>
            </div>
            <div className="border-1 rounded-xl border-violet-500 py-3 px-2">
              <h3 className="text-2xl md:text-5xl text-violet-500 font-semibold">80%</h3>
              <p className="text-gray-300">reduce time with AI-Powered tools</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="text-gray-800" />

      <HowItWorks />
      <OurPartners />
      <PricePlans />
      <Testimonials />


      <hr className="text-gray-800" />

      <OurContact />

      <Footer />

    </>
  );
}
