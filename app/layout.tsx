"use client"
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import Aos from 'aos'

import './globals.css'
import "aos/dist/aos.css"

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'Watercraft',
  description: 'A server where some friends do survive',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
