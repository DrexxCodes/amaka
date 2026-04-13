export default function CTA() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-black border-t-2 border-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div>
            <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6" style={{fontFamily:'Syne,sans-serif'}}>
              Your customers are<br />
              <span className="text-[#22C55E]">messaging right now.</span><br />
              Is anyone replying?
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Every unanswered message is money left on the table. Get Amaka today and never lose a sale to slow response time again.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#pricing" className="px-7 py-3.5 bg-[#22C55E] text-black border-2 border-black font-bold text-base hover:translate-x-[2px] hover:translate-y-[2px] transition-transform" style={{fontFamily:'Syne,sans-serif',boxShadow:'5px 5px 0 #000'}}>
                Get Started Now →
              </a>
              <a href="mailto:hello@amaka.ng" className="px-7 py-3.5 bg-white text-black border-2 border-white font-bold text-base hover:translate-x-[2px] hover:translate-y-[2px] transition-transform" style={{fontFamily:'Syne,sans-serif',boxShadow:'5px 5px 0 #fff'}}>
                Talk to Sales
              </a>
            </div>
          </div>

          {/* Right — stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {num:'3x',label:'More sales closed with AI negotiation'},
              {num:'4hrs',label:'Saved daily by business owners on average'},
              {num:'98%',label:'Customer satisfaction rate'},
              {num:'24/7',label:'Availability — no sick days, no breaks'},
            ].map((stat,i)=>(
              <div key={i} className="border-2 border-white p-5" style={{boxShadow:'4px 4px 0 #fff'}}>
                <div className="font-black text-4xl text-[#22C55E] mb-2" style={{fontFamily:'Syne,sans-serif'}}>{stat.num}</div>
                <div className="text-white/70 text-sm leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
