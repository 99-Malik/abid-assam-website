"use client";

import { companyName, getData } from "@/libs/data";
import NavLink from "./header/NavLink";
import Image from "next/image";
import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Twitter, MapPin, Phone } from "lucide-react";

// brand-specific configs
const brandConfig = {
  lg: {
    logo: "/static/lg.svg",
    logoWidth: 100,
    logoHeight: 50,
    footerBg: "text-black",
  },
  samsung: {
    logo: "/static/samsung.svg",
    logoWidth: 120,
    logoHeight: 50,
    footerBg: "bg-samsungSecondary border-samsungSecondary text-black",
  },
  bosch: {
    logo: "/static/bosch.svg",
    logoWidth: 150,
    logoHeight: 50,
    footerBg: "text-black",
  },
  siemens: {
    logo: "/static/siemens.svg",
    logoWidth: 150,
    logoHeight: 50,
    footerBg: "bg-siemensSecondary border-siemensSecondary text-black",
  },
  default: {
    footerBg: "bg-card border-t border-white/10 text-white",
  },
};

const Footer = () => {
  const pathname = usePathname();
  const isWaterHeaterRoute = pathname === "/companies/water-heater";

  // normalize everything to lowercase
  const companyKey = isWaterHeaterRoute ? "water-heater" : companyName.toLowerCase();
  const config = brandConfig[companyKey] || brandConfig.default;

  return (
    <footer
      className={cn("w-full flex items-center justify-center pt-16 pb-8", config.footerBg)}
    >
      <div className="w-full max-w-7xl px-5 flex flex-col gap-12">

        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
          {/* Column 1: Brand & Info */}
          <div className="flex flex-col gap-6">
            {config.logo ? (
              <Link href={`/companies/${companyKey}`}>
                <Image
                  src={config.logo}
                  width={config.logoWidth}
                  height={config.logoHeight}
                  alt={companyKey}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                />
              </Link>
            ) : (
              <Link href="/" className="text-2xl font-bold tracking-tight text-white">
                {isWaterHeaterRoute ? "Instant Repairs UAE" : companyName}
              </Link>
            )}
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Your most trusted partner for home appliance repairs in Dubai and UAE.
              Professional, reliable, and affordable services at your doorstep.
            </p>
            <div className="flex gap-4 text-white/60">
              <Link href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></Link>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white">Our Services</h3>
            <div className="flex flex-col gap-2">
              {getData(isWaterHeaterRoute ? "Instant Repairs UAE" : companyName).map(
                (service, index) => (
                  <Link
                    key={index}
                    href={`/services/${service.slug}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 duration-300 inline-block"
                  >
                    {service.title}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link href="/#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              <Link href="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</Link>
              <Link href="/#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white">Contact Us</h3>
            <div className="flex flex-col gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <MapPin className="text-primary w-5 h-5 shrink-0" />
                <span>Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary w-5 h-5 shrink-0" />
                <span>+971 52 752 0038</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} {isWaterHeaterRoute ? "Instant Repairs UAE" : companyName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
