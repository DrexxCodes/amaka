import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amaka — Your AI Sales Agent',
  description: 'Amaka handles your customer chats, haggles prices, and closes deals 24/7 on WhatsApp and Telegram.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
