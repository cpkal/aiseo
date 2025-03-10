import Image from "next/image"

export default function OurPartners() {
  return (
    <div className="bg-zinc-900 py-10 flex flex-col items-center">
      <h2 className="text-xl md:text-5xl font-semibold">Our Internal System Partners</h2>

      <div className="mt-16 flex gap-8">
        <Image src={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Logo_Google_Analytics.svg/2560px-Logo_Google_Analytics.svg.png'} width={150} height={100} alt="Google Analytics" />
        <Image src={'https://www.cncf.io/wp-content/uploads/2022/07/1_74Ds73EYN-uqliyrxp1OKQ.png'} width={150} height={100} alt="OpenTelemetry" />
      </div>
    </div>
  )
}