import Image from "next/image"

export default function Testimonials() {
  return (
    <div className="p-20 flex gap-8 h-120">
      <div className="border-1 border-zinc-800 p-10 rounded-3xl w-1/3 flex flex-col justify-between">
        <p>Love KloudMate’s focus on application monitoring and performance. Their platform has helped us a lot in pin-pointing issues and resolving them real quick.</p>

        <div className="flex  gap-4">
          <Image className="rounded-md aspect-square" src={'https://framerusercontent.com/images/kYqPSLmnh0YLw0OvqPXH7kaUek.webp'} width={48} height={32} alt="User Testimonial" />
          <div>
            <p className="text-xl">Prashant Jha</p>
            <p>Senior SRE, Unacademy (India)</p>
          </div>
        </div>
      </div>
      <div className="border-1 border-zinc-800 p-10 rounded-3xl w-1/3 flex flex-col justify-between">
        <p>Love KloudMate’s focus on application monitoring and performance. Their platform has helped us a lot in pin-pointing issues and resolving them real quick.</p>

        <div className="flex  gap-4">
          <Image className="rounded-md aspect-square" src={'https://framerusercontent.com/images/kYqPSLmnh0YLw0OvqPXH7kaUek.webp'} width={48} height={32} alt="User Testimonial" />
          <div>
            <p className="text-xl">Prashant Jha</p>
            <p>Senior SRE, Unacademy (India)</p>
          </div>
        </div>
      </div>
      <div className="border-1 border-zinc-800 p-10 rounded-3xl w-1/3 flex flex-col justify-between">
        <p>Love KloudMate’s focus on application monitoring and performance. Their platform has helped us a lot in pin-pointing issues and resolving them real quick.</p>

        <div className="flex  gap-4">
          <Image className="rounded-md aspect-square" src={'https://framerusercontent.com/images/kYqPSLmnh0YLw0OvqPXH7kaUek.webp'} width={48} height={32} alt="User Testimonial" />
          <div>
            <p className="text-xl">Prashant Jha</p>
            <p>Senior SRE, Unacademy (India)</p>
          </div>
        </div>
      </div>
    </div>
  )
}