import Image from "next/image"
import './scroll.css'

export default function BrandMarquee() {
  return (
    <div className="scrolling-wrapper">
      <div className="scrolling-content">
        {/* Original Logos */}
        {[...Array(10)].map((_, index) => (
          <Image
            key={index}
            src="https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png"
            width={100}
            height={60}
            alt="Google Logo"
          />
        ))}
        {/* Duplicate Logos for Smooth Loop */}
        {[...Array(10)].map((_, index) => (
          <Image
            key={`duplicate-${index}`}
            src="https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png"
            width={100}
            height={60}
            alt="Google Logo"
          />
        ))}
      </div>
    </div>
  )
}