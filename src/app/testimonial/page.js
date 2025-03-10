import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";

export default function Testimonial() {
  return (
    <>
      <Navbar />
        <div className="px-20 pt-20">
          <h2 className="text-5xl font-semibold text-center">Our <span className="text-violet-500">Customers</span></h2>
        </div>
        <Testimonials />
      <Footer />
    </>
  )
}