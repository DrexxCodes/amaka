export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] border-t-4 border-black py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#22C55E] border-2 border-black flex items-center justify-center font-black text-sm" style={{boxShadow:'4px 4px 0 #000'}}>A</div>
            <span className="font-black text-xl" style={{fontFamily:'Syne,sans-serif'}}>amaka</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-black">
            <a href="#how-it-works" className="border-b-2 border-transparent hover:border-[#22C55E] transition-colors">How it Works</a>
            <a href="#solutions" className="border-b-2 border-transparent hover:border-[#22C55E] transition-colors">Solutions</a>
            <a href="#pricing" className="border-b-2 border-transparent hover:border-[#22C55E] transition-colors">Pricing</a>
            <a href="mailto:hello@amaka.ng" className="border-b-2 border-transparent hover:border-[#22C55E] transition-colors">Contact</a>
          </div>
          <p className="text-xs text-black font-semibold">© 2025 Amaka. Built in Nigeria.</p>
        </div>
      </div>
    </footer>
  )
}
