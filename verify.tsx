"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight } from "lucide-react"

export default function VerifyHuman() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-6">
          <h1 className="text-2xl md:text-3xl font-mono text-[#FF9500] font-normal">
            Let&apos;s confirm you are human
          </h1>

          <p className="text-neutral-400 text-sm font-mono leading-relaxed">
            Complete the security check before continuing. This step verifies that you are not a bot, which helps to
            protect your account and prevent spam.
          </p>
        </div>

        <Button
          size="lg"
          className="bg-[#FF9500] text-black hover:bg-[#FF9500]/90 font-mono rounded-none w-full sm:w-auto"
        >
          Begin
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <div className="pt-8">
          <Select defaultValue="english">
            <SelectTrigger className="w-[180px] mx-auto font-mono rounded-none border-neutral-800 bg-transparent text-neutral-400 focus:ring-0 focus:ring-offset-0">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent className="font-mono rounded-none border-neutral-800 bg-black text-neutral-400">
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="spanish">Español</SelectItem>
              <SelectItem value="french">Français</SelectItem>
              <SelectItem value="german">Deutsch</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}

