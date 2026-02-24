"use client";

import { companyName, getData } from "@/libs/data";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Twitter, MapPin, Phone } from "lucide-react";
import { getBrandTheme } from "@/libs/brandTheme";

// Brand SVG configs
const brandConfig = {
  lg:      { logo: "/static/lg.svg",      logoWidth: 90,  logoHeight: 45, displayName: "LG"      },
  samsung: { logo: "/static/samsung.svg", logoWidth: 130, logoHeight: 45, displayName: "Samsung" },
  bosch:   { logo: "/static/bosch.svg",   logoWidth: 140, logoHeight: 45, displayName: "Bosch"   },
  siemens: { logo: "/static/siemens.svg", logoWidth: 140, logoHeight: 45, displayName: "Siemens" },
};

const Footer = ({ company }) => {
  const pathname = usePathname();

  // Detect brand from pathname
  const brandKey = ["lg", "siemens", "samsung", "bosch"].find((b) =>
    pathname.includes(`/companies/${b}`)
  ) || null;

  const isBrand = !!brandKey;
  const theme = getBrandTheme(brandKey || "");
  const config = brandConfig[brandKey] || null;

  const resolvedCompany = company || companyName;
  const dataCompany = isBrand ? config.displayName : resolvedCompany;

  return (
    <footer className={cn(
      "w-full bg-zinc-950 flex items-center justify-center border-t-[3px]",
      isBrand ? theme.borderPrimary : "border-zinc-800"
    )}>

      <div className="w-full max-w-7xl px-5 flex flex-col">

        {/* Top section */}
        <div className="pt-14 pb-10 grid md:grid-cols-[1.8fr_1fr_1fr_1.2fr] gap-10 border-b border-white/8">

          {/* Column 1: Logo & info */}
          <div className="flex flex-col gap-5">
            {isBrand && config ? (
              <Link href={`/companies/${brandKey}`} className="inline-block w-fit">
                <Image
                  src={config.logo}
                  width={config.logoWidth}
                  height={config.logoHeight}
                  alt={config.displayName}
                  className="h-11 w-auto object-contain opacity-95 hover:opacity-100 transition-opacity"
                />
              </Link>
            ) : (
              <Link href="/" className="text-2xl font-bold text-white tracking-tight">
                {resolvedCompany}
              </Link>
            )}

            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              {isBrand
                ? `Certified ${config.displayName} repair specialists in Dubai & UAE. Genuine parts, expert technicians, and full service warranty.`
                : "Your trusted partner for home appliance repairs in Dubai & UAE. Professional, reliable, and affordable."
              }
            </p>

            <div className="flex gap-4 text-zinc-500">
              <Link href="#" className={cn("transition-colors hover:text-white")}><Facebook size={18} /></Link>
              <Link href="#" className={cn("transition-colors hover:text-white")}><Instagram size={18} /></Link>
              <Link href="#" className={cn("transition-colors hover:text-white")}><Twitter size={18} /></Link>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col gap-4">
            <h3 className={cn("text-sm font-semibold uppercase tracking-widest", isBrand ? theme.badgeText : "text-primary")}>
              Services
            </h3>
            <div className="flex flex-col gap-2.5">
              {getData(dataCompany).map((service, index) => (
                <Link
                  key={index}
                  href={`/services/${service.slug}`}
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className={cn("text-sm font-semibold uppercase tracking-widest", isBrand ? theme.badgeText : "text-primary")}>
              Quick Links
            </h3>
            <div className="flex flex-col gap-2.5">
              <Link href="/" className="text-sm text-zinc-400 hover:text-white transition-colors">Home</Link>
              <Link href="#about" className="text-sm text-zinc-400 hover:text-white transition-colors">About Us</Link>
              <Link href="#services" className="text-sm text-zinc-400 hover:text-white transition-colors">Services</Link>
              <Link href="#contact" className="text-sm text-zinc-400 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col gap-4">
            <h3 className={cn("text-sm font-semibold uppercase tracking-widest", isBrand ? theme.badgeText : "text-primary")}>
              Contact Us
            </h3>
            <div className="flex flex-col gap-3 text-sm text-zinc-400">
              <div className="flex items-start gap-3">
                <MapPin className={cn("w-4 h-4 shrink-0 mt-0.5", isBrand ? theme.iconText : "text-primary")} />
                <span>Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className={cn("w-4 h-4 shrink-0", isBrand ? theme.iconText : "text-primary")} />
                <span>+971 52 372 2012</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} {isBrand ? config.displayName : resolvedCompany}. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-zinc-600">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
