"use client"

import { companyName, dialPhone, phoneNumber, sendMessage } from "@/libs/data"
import { cn } from "@/lib/utils"
import { Phone, MessageCircle } from "lucide-react"

const Topbar = ({ company }) => {
  const normalized = (company || "").toLowerCase()

  const getBgColor = () => {
    switch (normalized) {
      case "lg":
        return "bg-lgPrimary"
      case "samsung":
        return "bg-samsungPrimary"
      case "bosch":
        return "bg-boschPrimary"
      case "siemens":
        return "bg-siemensPrimary"
      default:
        return "bg-primary"
    }
  }

  const isOtherCompany = company !== companyName

  return (
    <div
      className={cn(
        "w-full py-2 shadow-sm",
        getBgColor(),
        isOtherCompany ? "text-white" : "text-primary-foreground"
      )}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-center md:justify-end gap-4">
          {/* Phone contact */}
          <button
            onClick={dialPhone}
            className="group flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors hover:bg-black/10"
          >
            <Phone size={16} className="shrink-0" />
            <span className="text-sm font-medium">Call us</span>
            <span className="hidden sm:block text-sm relative">
              {phoneNumber}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-current opacity-70 transition-all group-hover:w-full"></span>
            </span>
          </button>

          <div className="h-6 w-px bg-current opacity-30"></div>

          {/* WhatsApp contact */}
          <button
            onClick={sendMessage}
            className="group flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors hover:bg-black/10"
          >
            <MessageCircle size={16} className="shrink-0" />
            <span className="text-sm font-medium">WhatsApp</span>
            <span className="hidden sm:block text-sm relative">
              {phoneNumber}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-current opacity-70 transition-all group-hover:w-full"></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Topbar
