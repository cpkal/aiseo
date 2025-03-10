export default function PricePlans() {
  return (
    <div className="p-6 md:p-20">
      <h2 className="text-2xl text-center md:text-left md:text-5xl font-semibold">Pricing <span className="text-amber-600">Plans</span></h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2 mt-8">
        <div className="p-8 rounded-3xl border-1 border-zinc-800 leading-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Starter</h2>
          <p>For starter bussiness looking for basic SEO Optimizations.</p>
          <p className="text-xl md:text-5xl">$5/mo</p>

          <hr className="my-8" />

          <ul>
            <li> Basic SEO Audit</li>
            <li>Keyword Research (10 keywords)</li>
            <li>On-Page Optimization</li>
            <li>Monthly Report</li>
          </ul>
        </div>

        <div className="p-8 rounded-3xl border-1 border-zinc-800 leading-8 bg-radial from-pink-400 from-40% to-fuchsia-700">
          <h2 className="text-2xl md:text-3xl font-semibold">Pro</h2>
          <p>For starter bussiness looking for basic SEO Optimizations.</p>
          <p className="text-xl md:text-5xl">$12/mo</p>

          <hr className="my-8" />

          <ul>
            <li>Everything in Starter</li>
            <li>Keyword Research (30 keywords)</li>
            <li>Backlink Analysis</li>
            <li>Competitor Analysis</li>
            <li>Bi-Weekly Report</li>
          </ul>
        </div>

        <div className="p-8 rounded-3xl border-1 border-zinc-800 leading-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Enterprise</h2>
          <p>For starter bussiness looking for basic SEO Optimizations.</p>
          <p className="text-xl md:text-5xl">Contact Sales</p>

          <hr className="my-8" />

          <ul>
            <li>Everything in Pro</li>
            <li>Full SEO Strategy</li>
            <li>Dedicated Account Manager</li>
            <li>Weekly Report & Consultation</li>
            <li>Advanced Link Building</li>
          </ul>
        </div>
      </div>
    </div>
  )
}