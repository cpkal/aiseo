import Link from "next/link"

export default function Footer() {
  return (
    <footer className="p-6 md:p-16 flex flex-col items-center md:items-start md:flex-row gap-12 border-t-1 border-violet-800">
      <div className="w-3/5 md:w-1/5">
        <h1 className="text-3xl font-semibold">AI<span className="text-violet-500">SEO</span></h1>
        <p className="py-4 text-gray-300">AISEO Technologies Inc; <br /> Bandung, Indonesia | Jakarta, Indonesia</p>
        <Link className="mt-8 block" href={'mailto:haikalg2003@gmail.com'}>company@aiseo.co.id</Link>
      </div>

      <div className="w-3/5 md:w-1/5">
        <p className="font-semibold">Product</p>
        <p className="mt-5 text-gray-300">Home</p>
        <p className="mt-5 text-gray-300">Features</p>
        <p className="mt-5 text-gray-300">Pricing</p>
        <p className="mt-5 text-gray-300">Testimonial</p>
      </div>

      <div className="w-3/5 md:w-1/5">
        <p className="font-semibold">Features</p>
        <p className="mt-5 text-gray-300">Home</p>
        <p className="mt-5 text-gray-300">Features</p>
        <p className="mt-5 text-gray-300">Pricing</p>
        <p className="mt-5 text-gray-300">Testimonial</p>
      </div>

      <div className="w-3/5 md:w-1/5">
        <p className="font-semibold">Company</p>
        <p className="mt-5 text-gray-300">Home</p>
        <p className="mt-5 text-gray-300">Features</p>
        <p className="mt-5 text-gray-300">Pricing</p>
        <p className="mt-5 text-gray-300">Testimonial</p>
        <p className="mt-5 text-gray-300">Home</p>
        <p className="mt-5 text-gray-300">Features</p>
        <p className="mt-5 text-gray-300">Pricing</p>
        <p className="mt-5 text-gray-300">Testimonial</p>
        <p className="mt-5 text-gray-300">Home</p>
        <p className="mt-5 text-gray-300">Features</p>
        <p className="mt-5 text-gray-300">Pricing</p>
        <p className="mt-5 text-gray-300">Testimonial</p>
      </div>

      <div className="w-3/5 md:w-1/5">
        <p className="font-semibold">Legal</p>
        <p className="mt-5 text-gray-300">Home</p>
        <p className="mt-5 text-gray-300">Features</p>
        <p className="mt-5 text-gray-300">Pricing</p>
        <p className="mt-5 text-gray-300">Testimonial</p>
      </div>
    </footer>
  )
}