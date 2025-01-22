"use client"

import Image from "next/image"
import { useState } from "react"

export default function Page() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    { id: 1, src: "/placeholder.svg?height=800&width=1200", title: "Neque Gravida", subtitle: "2734-234" },
    { id: 2, src: "/placeholder.svg?height=800&width=1200", title: "Diam Finibus", subtitle: "2734-235" },
    { id: 3, src: "/placeholder.svg?height=800&width=1200", title: "Habitasse Platea", subtitle: "2734-236" },
    { id: 4, src: "/placeholder.svg?height=800&width=1200", title: "Etiam Maximus", subtitle: "2734-237" },
  ]

  return (
    <div className="min-h-screen bg-black text-neutral-400">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row">
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen relative">
          <Image
            src="https://sjc.microlink.io/UQfarIP2f77B9WBLzr_a3yn34F9H_TBiKika2_lTjI9dSr9uSB3cFMLT_7v6TwCVAAoOJ6Rr2eJ-d22ism8etQ.jpeg"
            alt="Abstract gradient"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right side - Content */}
        <div className="w-full lg:w-1/2 p-12 font-mono text-sm">
          <div className="max-w-2xl">
            {/* Header text */}
            <div className="mb-24 space-y-8">
              <p className="leading-relaxed">
                Nulla ipsum augue, viverra ac neque a, gravida temps tellus. Nam vitae nisl risus. Pellentesque ex
                libero pharetra sodales vel eu ante. Quisque interdum ipsum a ante lacinia, a vehicula quam gravida. In
                hac habitasse platea dictum.
              </p>

              <div className="grid grid-cols-4 gap-4 text-xs tracking-wide">
                <div>
                  <p>Sed Faucibus Condi</p>
                  <p>Cras Gravida</p>
                  <p>Pellentesque Est</p>
                </div>
                <div>
                  <p>Sed Faucibus</p>
                  <p>Donec AC Ultrici</p>
                  <p>Mauris Sed</p>
                </div>
                <div>
                  <p>Gravida</p>
                </div>
                <div>
                  <p>Laoreet Sollici</p>
                  <p>Est Laro</p>
                  <p>Communicado</p>
                </div>
              </div>
            </div>

            {/* Main heading */}
            <h1 className="text-6xl font-sans text-neutral-200 mb-24">Lorem Ipsum</h1>

            {/* Project grid */}
            <div className="space-y-8">
              {[
                {
                  number: "2734-234",
                  subtitle: "Neque",
                  description:
                    "Quisque elit velit, efficitur eu erat non, suscipit consectetur neque. Sed a dignissim ex. Donec nec eleifend ipsum. Curabitur ligula dui.",
                },
                {
                  number: "2734-234",
                  subtitle: "Diam Gravida",
                  description:
                    "Aenean ut bibendum lacus. Nam vitae felis diam. Aenean ligula ligula, malesuada at volutpat ullamcorper, convallis quis dolor.",
                },
                {
                  number: "2734-234",
                  subtitle: "Habitasse",
                  description:
                    "Aenean id mattis enim. Aliquam semper est a efficitur dictum. Nullam laoreet vitae ante quis dictum. Fusce maximus vel purus.",
                },
                {
                  number: "2734-234",
                  subtitle: "Etiam Finibus",
                  description:
                    "Aenean suscipit felis vel luctus iaculis. Etiam finibus maximus posuere. Suspendisse facilisis euismod facilisis.",
                },
              ].map((item, index) => (
                <div key={index} className="grid grid-cols-[1fr,2fr] gap-8 group cursor-pointer">
                  <div className="space-y-1">
                    <p className="font-mono text-xs">{item.number}</p>
                    <p className="font-mono text-xs">{item.subtitle}</p>
                  </div>
                  <p className="text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="px-12 py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="space-y-4 group cursor-pointer"
                onClick={() => setSelectedImage(selectedImage === image.id ? null : image.id)}
              >
                <div className="relative aspect-[3/2] bg-neutral-900 overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    fill
                    className={`object-cover transition-transform duration-700 
                      ${selectedImage === image.id ? "scale-110" : "group-hover:scale-105"}`}
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-neutral-200 text-sm font-mono">{image.title}</h3>
                    <p className="text-xs font-mono">{image.subtitle}</p>
                  </div>
                  <div className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                    View Project →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for selected image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-6xl mx-4">
            <Image
              src={galleryImages.find((img) => img.id === selectedImage)?.src || ""}
              alt="Selected project"
              width={1200}
              height={800}
              className="object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-sm font-mono hover:text-neutral-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

