import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />

      <div className="p-20">
        <h2 className="text-5xl font-semibold text-center">Contact Us</h2>

        <div className="px-20 w-full">
          <div className="grid grid-cols-2 gap-4 mt-10">
            <input className="bg-zinc-800 px-4 py-2 rounded-2xl" placeholder="Name" />
            <input className="bg-zinc-800 px-4 py-2 rounded-2xl" placeholder="Email" />
          </div>
          <textarea className="bg-zinc-800 px-4 py-2 rounded-2xl w-full mt-8" rows={5} placeholder="Your Message..."></textarea>
          <button className="bg-amber-600 px-6 py-3 rounded-xl mt-8 w-full hover:cursor-pointer">Send</button>
        </div>
      </div>

      <Footer />
    </>
  )
}