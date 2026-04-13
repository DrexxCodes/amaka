const steps = [
  {
    num: '01',
    title: 'Give Amaka a Personality',
    desc: 'Name her, set her tone — friendly, professional, or cheeky. Write her instructions: what she should say, avoid, and how she handles price negotiation.',
    icon: '🧠',
    color: 'bg-[#22C55E]',
  },
  {
    num: '02',
    title: 'Upload Your Products',
    desc: 'Add your items with prices, descriptions, and photos. Set your minimum acceptable price and let Amaka know your negotiation boundaries.',
    icon: '📦',
    color: 'bg-black',
    textWhite: true,
  },
  {
    num: '03',
    title: 'Connect to WhatsApp & Telegram',
    desc: 'Link your WhatsApp Business number or Telegram bot in one click. Amaka goes live instantly — ready to chat with customers 24/7.',
    icon: '🔗',
    color: 'bg-[#22C55E]',
  },
  {
    num: '04',
    title: 'Watch Deals Close',
    desc: 'Sit back. Amaka chats, negotiates and only escalates to you when a customer is ready to pay. You see only confirmed buyers in your dashboard.',
    icon: '💰',
    color: 'bg-white',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#f5f5f5] border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 bg-white mb-5" style={{boxShadow:'4px 4px 0 #000'}}>
            <span className="text-xs font-bold uppercase tracking-widest">How It Works</span>
          </div>
          <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4" style={{fontFamily:'Syne,sans-serif'}}>
            Set up in <span className="text-[#22C55E]">under</span><br />10 minutes.
          </h2>
          <p className="text-gray-600 text-lg font-body leading-relaxed">
            No technical skills needed. If you can send a WhatsApp message, you can set up Amaka.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`border-2 border-black p-6 relative ${step.color} ${step.textWhite ? 'text-white' : 'text-black'}`}
              style={{boxShadow:'6px 6px 0 #000'}}
            >
              {/* Step number */}
              <div className={`text-6xl font-black leading-none mb-4 opacity-20 absolute top-4 right-4 ${step.textWhite?'text-white':'text-black'}`} style={{fontFamily:'Syne,sans-serif'}}>{step.num}</div>
              {/* Icon */}
              <div className="text-4xl mb-4">{step.icon}</div>
              {/* Content */}
              <h3 className="font-black text-lg mb-2 leading-snug" style={{fontFamily:'Syne,sans-serif'}}>{step.title}</h3>
              <p className={`text-sm leading-relaxed ${step.textWhite ? 'text-white/80' : 'text-gray-700'}`}>{step.desc}</p>
              {/* Connector arrow (not last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-6 h-6 bg-white border-2 border-black flex items-center justify-center text-xs font-black" style={{boxShadow:'3px 3px 0 #000'}}>→</div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-12 border-3 border-black bg-[#22C55E] p-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{boxShadow:'6px 6px 0 #000'}}>
          <p className="font-black text-xl" style={{fontFamily:'Syne,sans-serif'}}>Ready to set up your Amaka today?</p>
          <a href="#pricing" className="shrink-0 px-6 py-3 bg-black text-white font-bold border-2 border-black" style={{fontFamily:'Syne,sans-serif',boxShadow:'5px 5px 0 #fff'}}>
            Start Now →
          </a>
        </div>
      </div>
    </section>
  )
}
