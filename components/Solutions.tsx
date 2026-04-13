const solutions = [
  {
    icon: '🤝',
    title: 'No More Manual Back & Forth',
    desc: "Stop spending hours replying 'How much?' over and over. Amaka handles every inquiry, price question, and negotiation automatically — without you lifting a finger.",
    tag: 'Save Time',
    bg: 'bg-white',
  },
  {
    icon: '✅',
    title: 'Only See People Ready to Buy',
    desc: "Your dashboard shows only customers who have paid or are finalising payment. No tyre-kickers, no time-wasters. You deal with buyers, not browsers.",
    tag: 'Boost Conversions',
    bg: 'bg-[#22C55E]',
  },
  {
    icon: '🎯',
    title: 'Real Negotiation Feel',
    desc: 'Nigerians love to negotiate. Amaka understands that. She haggles within your set limits — giving customers the satisfaction of "winning" a deal while protecting your margin.',
    tag: 'Increase Sales',
    bg: 'bg-white',
  },
  {
    icon: '📚',
    title: 'Perfect for Student Entrepreneurs',
    desc: 'Selling from campus? Amaka runs your shop while you attend lectures. Focus on school and advertise your products — let her handle the customer conversations.',
    tag: 'Work-Life Balance',
    bg: 'bg-black',
    textWhite: true,
  },
  {
    icon: '🌙',
    title: '24/7 Customer Support',
    desc: "Customers message at midnight, on weekends, during ASUU strikes. Amaka never sleeps, never gets tired, and always responds professionally — every single time.",
    tag: 'Always Available',
    bg: 'bg-[#22C55E]',
  },
  {
    icon: '📊',
    title: 'Full Business Dashboard',
    desc: 'Track conversations, see pending deals, monitor inventory, and measure your revenue — all from one clean dashboard built for Nigerian business owners.',
    tag: 'Stay In Control',
    bg: 'bg-white',
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 lg:py-28 bg-white border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 border-2 border-black px-3 py-1.5 bg-[#DCFCE7] mb-5" style={{boxShadow:'3px 3px 0 #000'}}>
            <span className="text-xs font-bold uppercase tracking-widest">Solutions</span>
          </div>
          <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4" style={{fontFamily:'Syne,sans-serif'}}>
            Problems Amaka<br /><span className="text-[#22C55E]">Solves For You</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Running a business in Nigeria is tough enough. Let Amaka handle the hard parts.
          </p>
        </div>

        {/* Solutions grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <div
              key={i}
              className={`border-2 border-black p-6 ${s.bg} ${s.textWhite ? 'text-white' : 'text-black'} hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform`}
              style={{boxShadow:'5px 5px 0 #000'}}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{s.icon}</span>
                <span className={`text-xs font-bold uppercase tracking-widest border px-2 py-1 ${s.textWhite ? 'border-white/40 text-white/80' : 'border-black text-black'}`}>
                  {s.tag}
                </span>
              </div>
              <h3 className="font-black text-lg mb-2 leading-snug" style={{fontFamily:'Syne,sans-serif'}}>{s.title}</h3>
              <p className={`text-sm leading-relaxed ${s.textWhite ? 'text-white/80' : 'text-gray-600'}`}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-14 border-2 border-black p-8 bg-[#f9f9f9] relative" style={{boxShadow:'6px 6px 0 #22C55E'}}>
          <div className="text-6xl font-black text-[#22C55E] leading-none mb-2" style={{fontFamily:'Syne,sans-serif'}}>"</div>
          <p className="text-xl sm:text-2xl font-black leading-snug max-w-2xl" style={{fontFamily:'Syne,sans-serif'}}>
            I used to spend 4 hours a day replying customers on WhatsApp. Now Amaka does it and I only step in to confirm payments.
          </p>
          <p className="mt-4 text-sm text-gray-500 font-semibold">— Chisom, Fashion Business Owner, Awka</p>
        </div>
      </div>
    </section>
  )
}
