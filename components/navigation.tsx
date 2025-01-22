"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 w-full z-50 font-['Helvetica_Now',Helvetica,Arial,sans-serif] text-xs uppercase">
      <div className="flex justify-between p-6">
        <div className="flex flex-col">
          <Link href="/" className="mb-2 w-8 h-8 relative opacity-100">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ArtificeLogoMark-oSNw1d3yaRSEWYPzCKZUWR9txC04K2.png"
              alt="Artifice"
              fill
              className="object-contain"
            />
          </Link>
          <div className="flex flex-col gap-[2px]">
            <a href="mailto:admin@artificenyc.org" className="opacity-60 hover:opacity-100 transition-opacity">
              CONTACT
            </a>
            <a
              href="https://www.instagram.com/artifice.nyc"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              INSTAGRAM
            </a>
            <Link
              href="/about"
              className={`transition-opacity ${pathname === "/about" ? "opacity-100" : "opacity-60 hover:opacity-100"}`}
            >
              ABOUT
            </Link>
          </div>
        </div>

        <a
          href="https://www.instagram.com/artifice.nyc"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-20 h-10 opacity-60 hover:opacity-100 transition-opacity"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/004%20Link-EU5lmrZLD4Jbq8chxmO883YdEdNxJ1.png"
            alt="004"
            fill
            className="object-contain"
          />
        </a>
      </div>
    </nav>
  )
}

