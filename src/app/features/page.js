import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";

export default function Feature() {
  return (
    <>
      <Navbar />

      <HowItWorks />
      
      <hr className="text-gray-800 visible md:invisible" />

      <Testimonials />

      <Footer />
    </>
  )
}