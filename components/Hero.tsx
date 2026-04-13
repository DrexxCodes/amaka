export default function Hero() {
  return (
    <section className="min-h-screen pt-16 bg-white relative overflow-hidden flex flex-col">
      {/* Marquee ticker */}
      <div className="bg-[#22C55E] border-b-2 border-black py-2 overflow-hidden">
        <div className="flex whitespace-nowrap animate-ticker">
          {Array(4).fill(['AI Sales Agent', 'Close Deals 24/7', 'WhatsApp & Telegram', 'No More Back & Forth', 'Nigerian Businesses', 'Smart Negotiation']).flat().map((t,i)=>(
            <span key={i} className="mx-6 text-sm font-bold text-black uppercase tracking-widest">{t} <span className="mx-2 text-black/40">✦</span></span>
          ))}
        </div>
      </div>

      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
          {/* Left */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 border-2 border-black px-3 py-1.5 bg-[#DCFCE7] animate-fade-up" style={{boxShadow:'3px 3px 0 #000'}}>
              <span className="w-2 h-2 rounded-full bg-[#22C55E] inline-block"></span>
              <span className="text-xs font-bold uppercase tracking-widest">Powered by AI · Built for Nigeria</span>
            </div>

            <h1 className="font-black text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight animate-fade-up-d1" style={{fontFamily:'Syne,sans-serif'}}>
              Meet{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Amaka</span>
                <span className="absolute bottom-1 left-0 right-0 h-4 bg-[#22C55E] z-0 -rotate-1"></span>
              </span>
              <br />
              <span className="text-black">Your Best</span>
              <br />
              <span className="text-[#22C55E]">Sales Girl.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 max-w-lg leading-relaxed animate-fade-up-d2 font-body">
              She replies customers, haggles prices, handles objections and closes deals — on <strong>WhatsApp</strong> and <strong>Telegram</strong> — while you sleep, eat, or attend class.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up-d3">
              <a href="#pricing" className="px-7 py-3.5 bg-[#22C55E] border-2 border-black font-bold text-base hover:translate-x-[2px] hover:translate-y-[2px] transition-transform" style={{fontFamily:'Syne,sans-serif',boxShadow:'5px 5px 0 #000'}}>
                Get Started →
              </a>
              <a href="#contact" className="px-7 py-3.5 bg-white border-2 border-black font-bold text-base hover:bg-black hover:text-white transition-colors" style={{fontFamily:'Syne,sans-serif',boxShadow:'5px 5px 0 #000'}}>
                Contact Sales
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-2 animate-fade-up-d4">
              {[['500+','Businesses'],['98%','Customer Satisfaction'],['24/7','Always Online']].map(([num,label])=>(
                <div key={label} className="text-center">
                  <div className="font-black text-2xl" style={{fontFamily:'Syne,sans-serif'}}>{num}</div>
                  <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Chat mockup */}
          <div className="relative flex justify-center lg:justify-end animate-fade-up-d2">
            {/* Phone mockup */}
            <div className="relative w-72 sm:w-80 border-2 border-black bg-white animate-float" style={{boxShadow:'8px 8px 0 #000'}}>
              {/* Phone top bar */}
              <div className="bg-[#22C55E] border-b-2 border-black px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border-2 border-black bg-white flex items-center justify-center font-black text-xs" style={{fontFamily:'Syne,sans-serif'}}>A</div>
                <div>
                  <div className="font-bold text-sm text-black" style={{fontFamily:'Syne,sans-serif'}}>Amaka</div>
                  <div className="text-xs text-black/70 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-black inline-block"></span>Online</div>
                </div>
              </div>
              {/* Chat bubbles */}
              <div className="p-4 space-y-3 bg-[#f7f7f7] min-h-[320px]">
                <ChatBubble from="customer" text="Hello, I saw your page. How much is the HP laptop?" />
                <ChatBubble from="amaka" text="Hi! 👋 The HP laptop is ₦285,000. It's a great pick — fast processor, 8GB RAM. What's your budget?" />
                <ChatBubble from="customer" text="Hmm that's steep. Can you do ₦240k?" />
                <ChatBubble from="amaka" text="I can meet you at ₦265,000 — that's the best I can do and it includes free delivery to your doorstep! 🎁" />
                <ChatBubble from="customer" text="Deal! How do I pay?" />
                <ChatBubble from="amaka" text="Great choice! 🎉 Click here to pay securely and I'll have it shipped today 👇" />
                <div className="flex justify-end">
                  <div className="bg-[#22C55E] border-2 border-black text-xs font-bold px-3 py-2 cursor-pointer" style={{boxShadow:'2px 2px 0 #000'}}>Pay ₦265,000 →</div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -left-4 sm:-left-8 bg-white border-2 border-black px-3 py-2 text-xs font-bold animate-float" style={{boxShadow:'4px 4px 0 #000',animationDelay:'1s'}}>
              🤝 Deal closed!
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-right-8 bg-[#22C55E] border-2 border-black px-3 py-2 text-xs font-bold animate-float" style={{boxShadow:'4px 4px 0 #000',animationDelay:'2s'}}>
              💬 3 chats closing...
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ChatBubble({ from, text }: { from: 'customer' | 'amaka'; text: string }) {
  const isAmaka = from === 'amaka'
  return (
    <div className={`flex ${isAmaka ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`max-w-[80%] px-3 py-2 text-xs leading-relaxed border-2 border-black ${isAmaka ? 'bg-white' : 'bg-[#22C55E]'}`}
        style={{boxShadow:'2px 2px 0 #000'}}
      >
        {text}
      </div>
    </div>
  )
}
