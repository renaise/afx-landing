import { Navigation } from "@/components/navigation"
import Image from "next/image"

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white uppercase">
      <Navigation />

      <div className="flex flex-col min-h-screen relative">
        {/* Top Text Section */}
        <div className="w-full pt-32 px-6 md:px-12 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-start-2">
              <div className="font-medium">
                <p className="text-sm md:text-sm font-['Helvetica_Now',Helvetica,Arial,sans-serif] leading-none">
                  Artifice is the hybrid experience of <span className="text-white">physical and digital works</span>{" "}
                  presented in the same space (i.e, art and technology) - conceptually framed as White Box and Black Box.
                  Artifice presents 12 works per chapter; 6 artists for White Box and 6 technologists for Black Box.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 absolute bottom-0 left-0 right-0">
          <div className="relative aspect-square w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cover%20white%20box%2001-62JxVCPd2vsgMemKFgTImNDTfPIMs4.png"
              alt="White Box"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative aspect-square w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cover%20black%20box%2001-kz8la0qvzux6vl5YcQnI4sWLb1iCnD.png"
              alt="Black Box"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  )
}

