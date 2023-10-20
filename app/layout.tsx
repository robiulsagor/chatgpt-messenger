import './globals.css'
import type { Metadata } from 'next'
import Sidebar from './components/Sidebar'
import { SessionProvider } from './components/SessionProvider'
import { getServerSession } from "next-auth"
import Login from './components/Login'
import { authOptions } from './api/auth/[...nextauth]/route'

export const metadata: Metadata = {
  title: 'MyGPT: ChatGPT Clone',
  description: 'Clone ChatGPT with Next.JS 13',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className='flex'>
              <div className='bg-[#202123] h-screen max-w-xs  
        md:min-w-[17rem] '>
                <Sidebar />
              </div>

              {/* client-provider for notifications */}

              <div className='flex-1 bg-[#343741]'>
                {children}
              </div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  )
}
