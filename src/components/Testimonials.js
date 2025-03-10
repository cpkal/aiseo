import Image from "next/image"

export default function Testimonials() {
  return (
    <div className="p-6 md:p-20 flex flex-col md:flex-row gap-4 md:gap-8 ">
      <div className="border-1 border-zinc-800 p-10 rounded-3xl w-1/1 md:w-1/3 flex flex-col justify-between">
        <p>Love AISEO focus on application monitoring and performance. Their platform has helped us a lot in pin-pointing issues and resolving them real quick.</p>

        <div className="flex gap-4 mt-4 mt-4 md:mt-0">
          <div className="flex gap-4 mt-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
              <Image
                className="rounded-md w-full h-full object-cover"
                src="https://framerusercontent.com/images/kYqPSLmnh0YLw0OvqPXH7kaUek.webp"
                width={80}
                height={80}
                alt="User Testimonial"
              />
            </div>
            <div>
              <p className="text-lg sm:text-xl">Prashant Jha</p>
              <p className="text-sm sm:text-base">Senior SRE, Unacademy (India)</p>
            </div>
          </div>

        </div>
      </div>
      <div className="border-1 border-zinc-800 p-10 rounded-3xl w-1/1 md:w-1/3 flex flex-col justify-between">
        <p>Love AISEO focus on application monitoring and performance. Their platform has helped us a lot in pin-pointing issues and resolving them real quick.</p>

        <div className="flex gap-4 mt-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
            <Image
              className="rounded-md w-full h-full object-cover"
              src="https://framerusercontent.com/images/kYqPSLmnh0YLw0OvqPXH7kaUek.webp"
              width={80}
              height={80}
              alt="User Testimonial"
            />
          </div>
          <div>
            <p className="text-lg sm:text-xl">Prashant Jha</p>
            <p className="text-sm sm:text-base">Senior SRE, Unacademy (India)</p>
          </div>
        </div>

      </div>
      <div className="border-1 border-zinc-800 p-10 rounded-3xl w-1/1 md:w-1/3 flex flex-col justify-between">
        <p>Love AISEO focus on application monitoring and performance. Their platform has helped us a lot in pin-pointing issues and resolving them real quick.</p>

        <div className="flex gap-4 mt-4">
          <div className="flex gap-4 mt-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
              <Image
                className="rounded-md w-full h-full object-cover"
                src="https://framerusercontent.com/images/kYqPSLmnh0YLw0OvqPXH7kaUek.webp"
                width={80}
                height={80}
                alt="User Testimonial"
              />
            </div>
            <div>
              <p className="text-lg sm:text-xl">Prashant Jha</p>
              <p className="text-sm sm:text-base">Senior SRE, Unacademy (India)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}