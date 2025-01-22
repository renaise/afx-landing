import { Navigation } from "@/components/navigation"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white uppercase">
      <Navigation />

      <div className="flex flex-col items-center justify-center min-h-screen px-6">
        <div className="w-full max-w-[460px] aspect-square relative mb-2">
          <video
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AFX%20Reel%20(2)-NvnAP1M3g1O6gMfF9j2u6TkPaJ6nZG.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full max-w-[460px]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artifice%20Vertical%20White%20Text-27I44xPg6oSxE8wULSZ4TSDis8ShmY.png"
            alt="Artifice"
            width={1000}
            height={200}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </main>
  )
}

