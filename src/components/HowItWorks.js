'use client'
import { act, useState } from "react"
import Image from "next/image";

export default function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(0);

  const activeBorder = "border-t-1 border-amber-600";
  const inActiveBorder = "border-t-1 border-zinc-800";

  return (
    <div className="p-6 md:p-20">
      <h2 className="text-2xl md:text-5xl font-semibold">Start Optimizing With Only <span className="text-amber-600">4 Steps</span></h2>

      <div className="flex mt-8 w-full text-center">
        <div className={`p-6 w-1/4 hover:cursor-pointer flex items-center ${currentStep == 0 ? activeBorder : inActiveBorder}`} onClick={() => setCurrentStep(0)}>
          <div className="rounded-full border-3 border-amber-600 size-8 flex items-center justify-center">1</div>
          &nbsp;&nbsp;
          <h3 className="hidden md:block"> Enter your website URL</h3>
        </div>
        <div className={`p-6 w-1/4 hover:cursor-pointer flex items-center ${currentStep == 1 ? activeBorder : inActiveBorder}`} onClick={() => setCurrentStep(1)}>
          <div className="rounded-full border-3 border-amber-600 size-8 flex items-center justify-center">2</div>
          &nbsp;&nbsp;
          <h3 className="hidden md:block">Get a Full SEO Audit Report</h3>
        </div>
        <div className={`p-6 w-1/4 hover:cursor-pointer flex items-center ${currentStep == 2 ? activeBorder : inActiveBorder}`} onClick={() => setCurrentStep(2)}>
          <div className="rounded-full border-3 border-amber-600 size-8 flex items-center justify-center">3</div>
          &nbsp;&nbsp;
          <h3 className="hidden md:block">Optimize with AI Suggestions</h3>
        </div>
        <div className={`p-6 w-1/4 hover:cursor-pointer flex items-center ${currentStep == 3 ? activeBorder : inActiveBorder}`} onClick={() => setCurrentStep(3)}>
          <div className="rounded-full border-3 border-amber-600 size-8 flex items-center justify-center">4</div>
          &nbsp;&nbsp;
          <h3 className="hidden md:block">Track & Improve Rankings</h3>
        </div>
      </div>

      {currentStep == 0 ? (
        <div className="border-1 border-zinc-800 rounded-2xl p-6 md:p-16 grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="leading-8 order-2 md:order-1">
            <h2 className="text-xl md:text-5xl font-medium"> Submit your website to start the SEO analysis.</h2>
            <p>Our system scans for technical issues, keywords, and backlinks.</p>
          </div>
          <div className="order-1 md:order-2">
            <Image src={'https://pictory.ai/wp-content/uploads/2024/10/Enter-Url-1.png'} width={600} height={300} alt="Enter URL" />
          </div>
        </div>
      ) : ''}

      {currentStep == 1 ? (
        <div className="border-1 border-zinc-800 rounded-2xl p-6 md:p-16 grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="leading-8 order-2 md:order-1">
            <h2 className="text-xl md:text-5xl font-medium"> See detailed insights on speed, backlinks, keywords & more.</h2>
            <p>Identify strengths and weaknesses in your current SEO strategy.</p>
          </div>
          <div className="order-1 md:order-2">
            <Image className="rounded-xl" src={'https://cdn.dribbble.com/users/2228114/screenshots/18012350/media/c6d7ff0b45778205bfd6f106ea08c440.png?format=webp&resize=400x300&vertical=center'} width={600} height={300} alt="Enter URL" />
          </div>
        </div>
      ) : ''}

      {currentStep == 2 ? (
        <div className="border-1 border-zinc-800 rounded-2xl p-6 md:p-16 grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="leading-8 order-2 md:order-1">
            <h2 className="text-xl md:text-5xl font-medium"> Get actionable steps to fix errors & boost rankings.</h2>
            <p> AI-powered recommendations for on-page & off-page SEO.</p>
          </div>
          <div className="order-1 md:order-2">
            <Image className="rounded-xl" src={'https://qubstudio.com/wp-content/uploads/2024/02/AI-in-UX-cover.jpg'} width={600} height={300} alt="Enter URL" />
          </div>
        </div>
      ) : ''}

      {currentStep == 3 ? (
        <div className="border-1 border-zinc-800 rounded-2xl p-6 md:p-16 grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="leading-8 order-2 md:order-1">
            <h2 className="text-xl md:text-5xl font-medium"> Monitor progress with real-time SEO reports.</h2>
            <p> Stay ahead of competitors with ongoing optimization.</p>
          </div>
          <div className="order-1 md:order-2">
            <Image className="rounded-xl" src={'https://themewagon.com/wp-content/uploads/2024/06/DashDarkX-_edit.webp'} width={600} height={300} alt="Enter URL" />
          </div>
        </div>
      ) : ''}

      
    </div>
  )
}