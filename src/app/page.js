import BrandMarquee from "@/components/BrandMarquee";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Testimonials from "@/components/Testimonials";
import OurPartners from "@/components/OurPartners";
import Footer from "@/components/Footer";
import PricePlans from "@/components/PricePlans";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BrandMarquee />

      <div className="p-20 mt-4 flex items-center">
        <div className="grow">
          <h2 className="text-5xl font-semibold">Powerful  SEO Tools <br /> Boost Your Website’s Ranking</h2>
          <p className="mt-4">Optimize your website with AI-powered analysis, real-time insights, and data-driven strategies.</p>
          <div className="mt-8">
            <Link href={'/get-started'} className="bg-amber-600 px-6 py-3 rounded-full">Get Started</Link>
          </div>
        </div>
        <div className="grow">
          <div className="grid grid-cols-2 text-center gap-8">
            <div className="border-1 rounded-xl border-amber-600 py-3 px-2">
              <h3 className="text-5xl text-amber-600 font-semibold">300+</h3>
              <p>teams use our services</p>
            </div>
            <div className="border-1 rounded-xl border-amber-600 py-3 px-2">
              <h3 className="text-5xl text-amber-600 font-semibold">500TB+</h3>
              <p>logs processed every month</p>
            </div>
            <div className="border-1 rounded-xl border-amber-600 py-3 px-2">
              <h3 className="text-5xl text-amber-600 font-semibold">30+</h3>
              <p>available around the world</p>
            </div>
            <div className="border-1 rounded-xl border-amber-600 py-3 px-2">
              <h3 className="text-5xl text-amber-600 font-semibold">80%</h3>
              <p>reduce time with AI-Powered tools</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="text-gray-800" />

      <HowItWorks />
      <Testimonials />
      <OurPartners />

      <PricePlans />

      <hr className="text-gray-800" />

      <div className="p-20 text-center">
        <h2 className="text-5xl font-semibold">We're always here to help.</h2>
        <p className="mt-16">Whether you’d like to see a demo, have a <br /> pricing related query, or want to partner up, <br /> just get in touch.</p>
        <p className="mt-8">hello@kloudmate.com</p>

        
      </div>

      <Footer />

    </>
  );
}
