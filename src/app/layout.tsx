// Global layout: wraps all pages

import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'News Aggregator AI',
  description: 'Smart news, curated for you by AI',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        {/* 👇 Shared components like Header will go here in future */}
        <main>{children}</main>
      </body>
    </html>
  )
}
