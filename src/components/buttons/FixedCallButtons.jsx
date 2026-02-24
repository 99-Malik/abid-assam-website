"use client";

import { dialPhone, phoneNumber, sendMessage } from "@/libs/data";
import { Phone, MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { getBrandTheme } from "@/libs/brandTheme";

const BRANDS = ["lg", "siemens", "samsung", "bosch"];

export default function FixedCallButtons() {
  const pathname = usePathname();
  const brandKey = BRANDS.find((b) => pathname.includes(`/companies/${b}`)) || null;
  const isBrand = !!brandKey;
  const theme = getBrandTheme(brandKey || "");

  return (
    <div className="fixed bottom-6 right-6 z-[101] flex flex-col gap-3" style={{ width: "148px" }}>
      {/* WhatsApp Button */}
      <button
        onClick={sendMessage}
        className="flex items-center justify-center gap-2 w-full py-3 rounded-full shadow-xl text-white font-medium text-sm transition-all hover:scale-105 bg-[#25D366] hover:bg-[#22c55e]"
      >
        <MessageCircle className="w-5 h-5 shrink-0" />
        <span>WhatsApp</span>
      </button>

      {/* Call Button */}
      <button
        onClick={dialPhone}
        className={`flex items-center justify-center gap-2 w-full py-3 rounded-full shadow-xl text-white font-medium text-sm transition-all hover:scale-105 hover:opacity-90 ${!isBrand ? "bg-primary" : ""}`}
        style={isBrand ? { backgroundColor: theme.primary } : {}}
      >
        <Phone className="w-5 h-5 shrink-0" />
        <span>Call Now</span>
      </button>
    </div>
  );
}
