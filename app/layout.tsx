import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MyGPT: ChatGPT Clone',
  description: 'Clone ChatGPT with Next.JS 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex'>
          {/* sidebar */}

          {/* client-provider for notifications */}

          <div className='flex-1 bg-[#343741]'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
