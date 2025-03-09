import Image from "next/image"

export default function Footer() {
  return (
    <footer className="p-16 flex gap-12 border-t-1 border-amber-800">
      <div className="w-1/5">
        <Image src={'https://framerusercontent.com/images/0DKffaybgkUTX9tYwtLbVoYCp0.svg'} width={150} height={100} alt="Logo" />
        <p className="py-4">KloudMate Technologies Inc; <br /> Austin, TX, USA | Bengaluru, India</p>
        <p>hello@kloudmate.com</p>
      </div>

      <div className="w-1/5">
        <p className="font-semibold">Product</p>
        <p className="mt-5">Home</p>
        <p className="mt-5">Features</p>
        <p className="mt-5">Pricing</p>
        <p className="mt-5">Testimonial</p>
      </div>

      <div className="w-1/5">
        <p className="font-semibold">Features</p>
        <p className="mt-5">Home</p>
        <p className="mt-5">Features</p>
        <p className="mt-5">Pricing</p>
        <p className="mt-5">Testimonial</p>
      </div>

      <div className="w-1/5">
        <p className="font-semibold">Company</p>
        <p className="mt-5">Home</p>
        <p className="mt-5">Features</p>
        <p className="mt-5">Pricing</p>
        <p className="mt-5">Testimonial</p>
        <p className="mt-5">Home</p>
        <p className="mt-5">Features</p>
        <p className="mt-5">Pricing</p>
        <p className="mt-5">Testimonial</p>
        <p className="mt-5">Home</p>
        <p className="mt-5">Features</p>
        <p className="mt-5">Pricing</p>
        <p className="mt-5">Testimonial</p>
      </div>

      <div className="w-1/5">
        <p className="font-semibold">Legal</p>
        <p className="mt-5">Home</p>
        <p className="mt-5">Features</p>
        <p className="mt-5">Pricing</p>
        <p className="mt-5">Testimonial</p>
      </div>
    </footer>
  )
}