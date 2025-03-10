import Image from "next/image"

export default function Testimonials() {
  return (
    <div className="p-6 md:p-20 flex flex-col md:flex-row gap-4 md:gap-8">
      <div className="border-1 border-zinc-800 p-10 rounded-3xl w-1/1 md:w-1/3 flex flex-col justify-between">
        <p>The team at RankBoost transformed our website's visibility. Within months, we saw a 3x increase in organic traffic!</p>

        <div className="flex gap-4 mt-4 mt-4 md:mt-0">
          <div className="flex gap-4 mt-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
              <Image
                className="rounded-md w-full h-full object-cover"
                src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                width={80}
                height={80}
                alt="User Testimonial"
              />
            </div>
            <div>
              <p className="text-lg sm:text-xl">Emily Carter</p>
              <p className="text-sm sm:text-base">Marketing Director, TechNova Solutions</p>
            </div>
          </div>

        </div>
      </div>
      <div className="border-1 border-zinc-800 p-10 rounded-3xl w-1/1 md:w-1/3 flex flex-col justify-between">
        <p>SEO was always a mystery to us until we started using this service. Their data-driven approach helped us rank for competitive keywords effortlessly.</p>

        <div className="flex gap-4 mt-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
            <Image
              className="rounded-md w-full h-full object-cover"
              src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
              width={80}
              height={80}
              alt="User Testimonial"
            />
          </div>
          <div>
            <p className="text-lg sm:text-xl">James O’Neill</p>
            <p className="text-sm sm:text-base">Founder, EcoGear Store</p>
          </div>
        </div>

      </div>
      <div className="border-1 border-zinc-800 p-10 rounded-3xl w-1/1 md:w-1/3 flex flex-col justify-between">
        <p>From keyword research to technical SEO fixes, this platform covers everything. Our lead generation has improved significantly!</p>

        <div className="flex gap-4 mt-4">
          <div className="flex gap-4 mt-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
              <Image
                className="rounded-md w-full h-full object-cover"
                src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                width={80}
                height={80}
                alt="User Testimonial"
              />
            </div>
            <div>
              <p className="text-lg sm:text-xl">Sofia Martinez</p>
              <p className="text-sm sm:text-base">CMO, BrightPath Consulting</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}