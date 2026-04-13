'use client'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#22C55E] border-2 border-black flex items-center justify-center font-bold text-black text-sm" style={{boxShadow:'3px 3px 0 #000'}}>A</div>
            <span className="font-black text-xl tracking-tight" style={{fontFamily:'Syne,sans-serif'}}>amaka</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {['How it Works','Solutions','Pricing'].map(item=>(
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g,'-')}`} className="font-semibold text-sm hover:text-[#22C55E] transition-colors">{item}</a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="px-4 py-2 text-sm font-bold border-2 border-black hover:bg-black hover:text-white transition-colors" style={{fontFamily:'Syne,sans-serif'}}>Contact Sales</a>
            <a href="#pricing" className="px-4 py-2 text-sm font-bold bg-[#22C55E] border-2 border-black hover:translate-x-[2px] hover:translate-y-[2px] transition-transform" style={{fontFamily:'Syne,sans-serif',boxShadow:'4px 4px 0 #000'}}>Get Started</a>
          </div>
          <button className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5 border-2 border-black" onClick={()=>setOpen(!open)}>
            <span className={`block w-5 h-0.5 bg-black transition-all ${open?'rotate-45 translate-y-2':''}`}/>
            <span className={`block w-5 h-0.5 bg-black transition-all ${open?'opacity-0':''}`}/>
            <span className={`block w-5 h-0.5 bg-black transition-all ${open?'-rotate-45 -translate-y-2':''}`}/>
          </button>
        </div>
      </div>
      {open&&(
        <div className="md:hidden border-t-2 border-black bg-white px-4 pb-4 pt-2 space-y-2">
          {['How it Works','Solutions','Pricing'].map(item=>(
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g,'-')}`} className="block py-2 font-semibold border-b border-gray-100" onClick={()=>setOpen(false)}>{item}</a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a href="#contact" className="w-full text-center px-4 py-2 text-sm font-bold border-2 border-black" style={{fontFamily:'Syne,sans-serif'}}>Contact Sales</a>
            <a href="#pricing" className="w-full text-center px-4 py-2 text-sm font-bold bg-[#22C55E] border-2 border-black" style={{fontFamily:'Syne,sans-serif',boxShadow:'4px 4px 0 #000'}}>Get Started</a>
          </div>
        </div>
      )}
    </header>
  )
}
