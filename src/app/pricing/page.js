import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PricePlans from "@/components/PricePlans";
import Testimonials from "@/components/Testimonials";

export default function Pricing() {
    return (
      <>
        <Navbar />
        <PricePlans />
        
        <hr className="text-gray-800 visible md:invisible" />
        
        <Testimonials />
        <Footer />
      </>
    )
  }