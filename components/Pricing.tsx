'use client'
import { useState } from 'react'

const plans = [
  {
    name: 'Starter',
    price: '₦4,000',
    period: '/month',
    tag: 'Start Small',
    tagBg: 'bg-white border-black',
    highlight: false,
    features: [
      { text: 'Telegram connection', ok: true },
      { text: 'WhatsApp connection', ok: false },
      { text: '2,000 messages / month', ok: true },
      { text: '20 inventory items', ok: true },
      { text: 'Product & general FAQs', ok: false },
      { text: 'Custom personality', ok: false },
      { text: 'Priority support', ok: false },
      { text: 'Custom workflows', ok: false },
    ],
    cta: 'Get Started',
    bg: 'bg-white',
    ctaBg: 'bg-black text-white',
    ctaShadow: '4px 4px 0 #22C55E',
  },
  {
    name: 'Growth',
    price: '₦8,500',
    period: '/month',
    tag: 'Most Popular',
    tagBg: 'bg-[#22C55E] border-black',
    highlight: false,
    features: [
      { text: 'Telegram connection', ok: true },
      { text: 'WhatsApp connection', ok: true },
      { text: '5,000 messages / month', ok: true },
      { text: '50 inventory items', ok: true },
      { text: '10 product & general FAQs', ok: true },
      { text: 'Custom personality', ok: false },
      { text: 'Priority support', ok: false },
      { text: 'Custom workflows', ok: false },
    ],
    cta: 'Get Started',
    bg: 'bg-[#22C55E]',
    ctaBg: 'bg-black text-white',
    ctaShadow: '4px 4px 0 #000',
  },
  {
    name: 'Professional',
    price: '₦18,000',
    period: '/month',
    tag: 'For Serious Sellers',
    tagBg: 'bg-black border-black text-white',
    highlight: true,
    features: [
      { text: 'Telegram connection', ok: true },
      { text: 'WhatsApp connection', ok: true },
      { text: '10,000 messages / month', ok: true },
      { text: '100 inventory items', ok: true },
      { text: '20 product & general FAQs', ok: true },
      { text: 'Custom personality addition', ok: true },
      { text: 'Priority support', ok: false },
      { text: 'Custom workflows', ok: false },
    ],
    cta: 'Get Started',
    bg: 'bg-white',
    ctaBg: 'bg-[#22C55E] text-black',
    ctaShadow: '4px 4px 0 #000',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    tag: 'For Large Operations',
    tagBg: 'bg-white border-black',
    highlight: false,
    features: [
      { text: 'Telegram connection', ok: true },
      { text: 'WhatsApp connection', ok: true },
      { text: 'Unlimited messages', ok: true },
      { text: 'Unlimited inventory items', ok: true },
      { text: 'Unlimited FAQs', ok: true },
      { text: 'Custom personality addition', ok: true },
      { text: 'Priority support & new features', ok: true },
      { text: 'Custom workflows', ok: true },
    ],
    cta: 'Contact Sales',
    bg: 'bg-black',
    textWhite: true,
    ctaBg: 'bg-[#22C55E] text-black',
    ctaShadow: '4px 4px 0 #fff',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#f9f9f9] border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 border-2 border-black px-3 py-1.5 bg-white mb-5" style={{boxShadow:'3px 3px 0 #000'}}>
            <span className="text-xs font-bold uppercase tracking-widest">Pricing</span>
          </div>
          <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4" style={{fontFamily:'Syne,sans-serif'}}>
            Simple,<br /><span className="text-[#22C55E]">Honest Pricing.</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            No hidden fees. No wahala. Pay monthly, cancel anytime.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`border-2 border-black flex flex-col ${plan.bg} ${plan.textWhite ? 'text-white' : 'text-black'} relative`}
              style={{boxShadow: plan.highlight ? '7px 7px 0 #22C55E' : '5px 5px 0 #000'}}
            >
              {/* Tag */}
              <div className={`border-b-2 border-black px-4 py-2 ${plan.tagBg} ${plan.textWhite&&plan.tagBg==='bg-white border-black'?'text-black':''}`}>
                <span className="text-xs font-bold uppercase tracking-widest">{plan.tag}</span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                {/* Name & price */}
                <div className="mb-6">
                  <h3 className="font-black text-2xl mb-1" style={{fontFamily:'Syne,sans-serif'}}>{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="font-black text-3xl" style={{fontFamily:'Syne,sans-serif'}}>{plan.price}</span>
                    <span className={`text-sm font-semibold ${plan.textWhite?'text-white/60':'text-gray-500'}`}>{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 flex-1 mb-6">
                  {plan.features.map((f, j) => (
                    <li key={j} className={`flex items-start gap-2 text-sm ${f.ok ? '' : plan.textWhite ? 'opacity-40' : 'opacity-30'}`}>
                      <span className={`mt-0.5 shrink-0 w-4 h-4 flex items-center justify-center border text-xs font-bold ${
                        f.ok
                          ? plan.bg === 'bg-[#22C55E]'
                            ? 'bg-black text-white border-black'
                            : 'bg-[#22C55E] text-black border-black'
                          : plan.textWhite ? 'border-white/40 text-white/40' : 'border-black/30 text-black/30'
                      }`}>
                        {f.ok ? '✓' : '✕'}
                      </span>
                      <span className="leading-snug">{f.text}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={plan.name === 'Enterprise' ? '#contact' : '#'}
                  className={`block text-center py-3 px-4 border-2 border-black font-bold text-sm hover:opacity-90 transition-opacity ${plan.ctaBg}`}
                  style={{fontFamily:'Syne,sans-serif', boxShadow: plan.ctaShadow}}
                >
                  {plan.cta} →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee note */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-gray-500 font-semibold">
          <span>🔒 Secured payments via Paystack</span>
          <span className="hidden sm:block">•</span>
          <span>✅ Cancel anytime, no lock-in</span>
          <span className="hidden sm:block">•</span>
          <span>💬 Setup support included on all plans</span>
        </div>
      </div>
    </section>
  )
}
