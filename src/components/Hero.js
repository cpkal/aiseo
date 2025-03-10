import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <>
      <div className="p-16 md:p-32 bg-radial-[at_50%_75%] from-amber-700 to-gray-900 to-90%">
        <div className="flex flex-col items-center">
          <div className="block">
            <div className="text-xs md:text-md border-1 border-gray-400 w-auto inline-block px-4 py-2 md:px-2 md:py-1 rounded-full">
              <p>Leverage the power of SEO Optimization + Google Analytics</p>
            </div>
          </div>

          <div className="py-8 text-center">
            <h1 className="text-2xl md:text-6xl font-semibold">Your Easy to Use SEO Optimizer <br /> Boost Your Website's Ranking Today</h1>
          </div>

          <div>
            <p className="text-md md:text-xl">SEO improvment recommendations, Robust monitoring software, See your website performance - <span className="text-amber-400">All in one place</span></p>
          </div>

          <div className="py-8 flex gap-4">
            <Link href={'/get-started'} className="bg-amber-600 p-2 md:px-6 md:py-3 rounded-full">Get Started</Link>
            <Link href={'/login'} className="bg-zinc-600 p-2 md:px-6 md:py-3 rounded-full">Read Manual</Link>
          </div>
        </div>
      </div>

      <Image
        className="border-3 border-amber-600 rounded-3xl mx-auto -translate-y-20"
        src={'https://themewagon.com/wp-content/uploads/2024/06/DashDarkX-_edit.webp'}
        width={1280}
        height={720}
        alt="SEO Monitoring Tools"
      />
    </>
  )
}