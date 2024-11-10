import type { Metadata } from 'next'  
import '@/app/globals.css'


export const metadata: Metadata = {
  title: 'Next.js',
  description: 'Your automated social media posting solution',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <div>
          {children}
        </div>
  )
}