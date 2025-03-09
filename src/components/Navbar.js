import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="px-32 py-6 flex justify-between items-center">
      <Link href={'/'}>
        <Image src={'https://framerusercontent.com/images/0DKffaybgkUTX9tYwtLbVoYCp0.svg'} width={210} height={100} alt="Logo" />
      </Link>

      <div className="flex gap-8 text-gray-400">
        <div>
          <Link href={'/features'}>Features</Link>
        </div>
        <div>
          <Link href={'/pricing'}>Pricing</Link>
        </div>
        <div>
          <Link href={'/testimonial'}>Testimonial</Link>
        </div>
        <div>
          <Link href={'/contact'}>Contact</Link>
        </div>
      </div>

      <div className="flex gap-4">
        <Link href={'#'} className="bg-zinc-800 px-6 py-3 rounded-full">Get Started</Link>
        <Link href={'/login'} className="bg-amber-600 px-6 py-3 rounded-full">Login</Link>
      </div>
    </nav>
  )
}