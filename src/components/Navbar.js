import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="px-8 md:px-32 py-0 md:py-6 flex justify-between items-center w-full">
      <Link className="hover:text-gray-300"  href={'/'}>
        {/* <Image src={'https://framerusercontent.com/images/0DKffaybgkUTX9tYwtLbVoYCp0.svg'} width={210} height={100} alt="Logo" /> */}
        <h1 className="text-3xl font-semibold">AI<span className="text-amber-600">SEO</span></h1>
      </Link>

      <div className="hidden md:flex gap-8 text-gray-400">
        <div>
          <Link className="hover:text-gray-300"  href={'/features'}>Features</Link>
        </div>
        <div>
          <Link className="hover:text-gray-300"  href={'/pricing'}>Pricing</Link>
        </div>
        <div>
          <Link className="hover:text-gray-300"  href={'/testimonial'}>Testimonial</Link>
        </div>
        <div>
          <Link className="hover:text-gray-300"  href={'/contact'}>Contact</Link>
        </div>
      </div>

      <div className="hidden md:flex gap-4">
        <Link href={'#'} className="bg-zinc-800 px-6 py-3 rounded-full">Get Started</Link>
        <Link href={'/login'} className="bg-amber-600 px-6 py-3 rounded-full">Login</Link>
      </div>

      <button className="border-zinc-800 block md:hidden">
        Burger
      </button>
    </nav>
  )
}