"use client"
import { companyName, dialPhone, sendMessage } from "@/libs/data";
import Link from "next/link";
import Sidebar from "./Sidebar";
import NavLink from "./NavLink";
import ServicesDropdown from "./ServicesDropdown";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Phone, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { getBrandTheme } from "@/libs/brandTheme";

// Brand SVG sizes
const brandLogos = {
  siemens: { src: "/static/siemens.svg", width: 140, height: 40, href: "/companies/siemens", alt: "Siemens" },
  bosch:   { src: "/static/bosch.svg",   width: 130, height: 40, href: "/companies/bosch",   alt: "Bosch"   },
  samsung: { src: "/static/samsung.svg", width: 120, height: 40, href: "/companies/samsung", alt: "Samsung" },
  lg:      { src: "/static/lg.svg",      width: 80,  height: 40, href: "/companies/lg",      alt: "LG"      },
};

const Header = ({ company = companyName }) => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect brand from pathname
  let dynamicCompany = company;
  if (pathname.includes("/companies/siemens")) dynamicCompany = "siemens";
  else if (pathname.includes("/companies/bosch")) dynamicCompany = "bosch";
  else if (pathname.includes("/companies/samsung")) dynamicCompany = "samsung";
  else if (pathname.includes("/companies/lg")) dynamicCompany = "lg";
  else if (pathname === "/companies/water-heater") dynamicCompany = "water-heater";
  else if (pathname === "/companies/ac") dynamicCompany = "ac";

  const isBrand = ["siemens", "bosch", "samsung", "lg"].includes(dynamicCompany);
  const theme = getBrandTheme(dynamicCompany);
  const logo = brandLogos[dynamicCompany] || null;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isBrand
          ? scrolled
            ? "bg-white shadow-md py-2 border-b border-gray-200"
            : "bg-white py-3 border-b border-gray-100"
          : scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-white/10 shadow-lg py-2"
            : "bg-transparent py-4"
      )}
    >
      {/* Brand accent line at very top */}
      {isBrand && <div className={cn("absolute top-0 left-0 right-0 h-[3px]", theme.bgPrimary)} />}

      <div className="container mx-auto max-w-7xl px-5 flex w-full justify-between items-center">

        {/* Logo */}
        <div className="flex-shrink-0">
          {isBrand && logo ? (
            <Link href={logo.href} className="inline-flex items-center">
              <Image
                src={logo.src}
                width={logo.width}
                height={logo.height}
                alt={logo.alt}
                className="h-9 w-auto object-contain"
              />
            </Link>
          ) : (
            <Link href="/" className="text-xl md:text-2xl font-bold font-heading tracking-tight text-white hover:opacity-80 transition-opacity">
              {companyName}
            </Link>
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <nav className={cn(
            "flex items-center gap-6 px-6 py-2 rounded-full border",
            isBrand ? "bg-gray-50 border-gray-200" : "bg-white/5 border-white/10 backdrop-blur-sm"
          )}>
            <NavLink title="Home" href="/" className={isBrand ? "!text-gray-700 hover:!text-gray-900" : ""} />
            <NavLink title="About" href="#about" className={isBrand ? "!text-gray-700 hover:!text-gray-900" : ""} />
            <ServicesDropdown company={dynamicCompany} />
            <NavLink title="Contact" href="#contact" className={isBrand ? "!text-gray-700 hover:!text-gray-900" : ""} />
          </nav>

          {/* CTA Buttons — labeled, prominent */}
          <div className="flex items-center gap-2">
            <button
              onClick={dialPhone}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200",
                isBrand
                  ? `${theme.bgPrimary} hover:opacity-90 shadow-lg`
                  : "bg-primary hover:bg-primary/90"
              )}
            >
              <Phone size={15} />
              Call Now
            </button>
            <button
              onClick={sendMessage}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-[#25D366] hover:bg-[#22c55e] text-white transition-all duration-200 shadow-lg"
            >
              <MessageCircle size={15} />
              WhatsApp
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <Sidebar company={dynamicCompany} />
      </div>
    </header>
  );
};

export default Header;
