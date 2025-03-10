import Link from "next/link"
import Image from "next/image"
import LinkButton from "./LinkButton"

export default function Hero() {
  return (
    <>
      <div className="p-16 md:p-32 bg-radial-[at_50%_75%] from-violet-700 to-gray-900 to-90%">
        <div className="flex flex-col items-center">
          <div className="block">
            <div className="text-xs md:text-md border-1 border-gray-400 w-auto inline-block px-4 py-2 md:px-2 md:py-1 rounded-full">
              <p>Leverage the power of SEO Optimization + Google Analytics</p>
            </div>
          </div>

          <div className="py-8 text-center">
            <h1 className="text-2xl md:text-6xl font-semibold">Your Easy to Use SEO Optimizer <br /> Boost Your Website&apos;s Ranking Today</h1>
          </div>

          <div>
            <p className="text-md md:text-xl">SEO improvment recommendations, Robust monitoring software, See your website performance - <span className="text-violet-400 font-semibold">All in one place</span></p>
          </div>

          <div className="py-8 flex gap-4">
            <LinkButton href={'#'} type="primary">Get Started</LinkButton>
            <LinkButton href={'/login'}>Read Manual</LinkButton>
          </div>
        </div>
      </div>

      <Image
        className="border-3 border-violet-500 rounded-3xl mx-auto -translate-y-20"
        src={'https://themewagon.com/wp-content/uploads/2024/06/DashDarkX-_edit.webp'}
        width={1280}
        height={720}
        alt="SEO Monitoring Tools"
      />
    </>
  )
}