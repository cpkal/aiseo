import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";

export default function Feature() {
  return (
    <>
      <Navbar />

      <div className="p-20">
        <HowItWorks />
      </div>
      
      <Testimonials />

      <Footer />
    </>
  )
}