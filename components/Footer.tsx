export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-black py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#22C55E] border-2 border-black flex items-center justify-center font-black text-xs" style={{boxShadow:'2px 2px 0 #000'}}>A</div>
            <span className="font-black text-lg" style={{fontFamily:'Syne,sans-serif'}}>amaka</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-gray-600">
            <a href="#how-it-works" className="hover:text-[#22C55E] transition-colors">How it Works</a>
            <a href="#solutions" className="hover:text-[#22C55E] transition-colors">Solutions</a>
            <a href="#pricing" className="hover:text-[#22C55E] transition-colors">Pricing</a>
            <a href="mailto:hello@amaka.ng" className="hover:text-[#22C55E] transition-colors">Contact</a>
          </div>
          <p className="text-xs text-gray-400">© 2025 Amaka. Built in 🇳🇬 Nigeria.</p>
        </div>
      </div>
    </footer>
  )
}
