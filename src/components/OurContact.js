import Link from "next/link"

export default function OurContact() {
  return (
    <div className="p-6 md:p-20 text-center">
      <h2 className="text-2xl md:text-5xl font-semibold">We're here to <span className="text-violet-500">assist</span> you!</h2>
      <p className="mt-16 text-gray-300">Whether you need a demo, have questions about <br /> pricing, or are interested in a partnership, feel free to reach out.</p>
      <Link className="mt-8 block text-gray-300" href={'mailto:haikalg2003@gmail.com'}>company@aiseo.co.id</Link>


    </div>
  )
}