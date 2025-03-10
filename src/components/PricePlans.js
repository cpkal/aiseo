export default function PricePlans() {
  return (
    <div className="p-6 md:p-20">
      <h2 className="text-2xl text-center md:text-left md:text-5xl font-semibold">Pricing <span className="text-amber-600">Plans</span></h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 mt-8">
        <div className="p-8 rounded-3xl border-1 border-zinc-800 leading-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Starter</h2>
          <p>For starter bussiness looking for basic SEO Optimizations.</p>
          <p className="text-xl md:text-5xl">$5/mo</p>

          <hr className="my-8" />

          <ul>
            <li>8 GB RAM / 8 vCPU per service</li>
            <li>Single developer workspace</li>
            <li>Community support</li>
            <li>7-day log history</li>
            <li>Global regions New!</li>
          </ul>
        </div>

        <div className="p-8 rounded-3xl border-1 border-zinc-800 leading-8 md:scale-y-125 md:scale-x-110 bg-radial from-pink-400 from-40% to-fuchsia-700">
          <h2 className="text-2xl md:text-3xl font-semibold">Pro</h2>
          <p>For starter bussiness looking for basic SEO Optimizations.</p>
          <p className="text-xl md:text-5xl">$12/mo</p>

          <hr className="my-8" />

          <ul>
            <li>8 GB RAM / 8 vCPU per service</li>
            <li>Single developer workspace</li>
            <li>Community support</li>
            <li>7-day log history</li>
            <li>Global regions New!</li>
          </ul>
        </div>

        <div className="p-8 rounded-3xl border-1 border-zinc-800 leading-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Custom</h2>
          <p>For starter bussiness looking for basic SEO Optimizations.</p>
          <p className="text-xl md:text-5xl">Contact Sales</p>

          <hr className="my-8" />

          <ul>
            <li>8 GB RAM / 8 vCPU per service</li>
            <li>Single developer workspace</li>
            <li>Community support</li>
            <li>7-day log history</li>
            <li>Global regions New!</li>
          </ul>
        </div>
      </div>
    </div>
  )
}