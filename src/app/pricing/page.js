import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PricePlans from "@/components/PricePlans";
import Testimonials from "@/components/Testimonials";

export default function Pricing() {
    return (
      <>
        <Navbar />

        <div className="p-20">
          <PricePlans />
        </div>
        
        <Testimonials />
        <Footer />
      </>
    )
  }