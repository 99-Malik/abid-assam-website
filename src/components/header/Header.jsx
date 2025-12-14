"use client"
import { companyName, dialPhone, sendMessage, phoneNumber } from "@/libs/data";
import Link from "next/link";
import Sidebar from "./Sidebar";
import NavLink from "./NavLink";
import ServicesDropdown from "./ServicesDropdown";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Phone, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const Header = ({ company = companyName }) => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check the route and override company name for specific paths
  let dynamicCompany = company;

  if (pathname === "/companies/water-heater") {
    dynamicCompany = "water-heater";
  } else if (pathname === "/companies/ac") {
    dynamicCompany = "ac";
  } else if (pathname.includes("/companies/siemens")) {
    dynamicCompany = "siemens";
  } else if (pathname.includes("/companies/bosch")) {
    dynamicCompany = "bosch";
  } else if (pathname.includes("/companies/samsung")) {
    dynamicCompany = "samsung";
  } else if (pathname.includes("/companies/lg")) {
    dynamicCompany = "lg";
  }

  const isOtherCompany = dynamicCompany !== companyName;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-white/10 shadow-lg py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto max-w-7xl px-5 flex w-full justify-between items-center">

        {/* Logo Section */}
        <div className="flex-shrink-0">
          {dynamicCompany === "siemens" ? (
            <Link href="/companies/siemens">
              <Image src="/static/siemens.svg" width={140} height={40} alt="Siemens" className="h-10 w-auto" />
            </Link>
          ) : dynamicCompany === "bosch" ? (
            <Link href="/companies/bosch">
              <Image src="/static/bosch.svg" width={140} height={40} alt="Bosch" className="h-10 w-auto" />
            </Link>
          ) : dynamicCompany === "samsung" ? (
            <Link href="/companies/samsung">
              <Image src="/static/samsung.svg" width={120} height={40} alt="Samsung" className="h-8 w-auto" />
            </Link>
          ) : dynamicCompany === "lg" ? (
            <Link href="/companies/lg">
              <Image src="/static/lg.svg" width={90} height={40} alt="LG" className="h-8 w-auto" />
            </Link>
          ) : dynamicCompany === "Instant Repairs UAE" ? (
            <Link href="/companies/water-heater" className="text-xl md:text-2xl font-bold font-heading tracking-tight text-white hover:text-primary transition-colors">
              {dynamicCompany}
            </Link>
          ) : dynamicCompany === "Instant Repairs UAE" ? (
            <Link href="/companies/ac">
              <Image src="/static/ac.svg" width={120} height={50} alt="AC" className="h-10 w-auto" />
            </Link>
          ) : (
            <Link href="/" className="text-xl md:text-2xl font-bold font-heading tracking-tight text-white hover:text-primary transition-colors">
              {companyName}
            </Link>
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6 bg-white/5 px-6 py-2 rounded-full border border-white/10 backdrop-blur-sm">
            <NavLink title="Home" href="/" />
            <NavLink title="About" href="#about" />
            <ServicesDropdown company={dynamicCompany} />
            <NavLink title="Contact" href="#contact" />
          </nav>

          <div className="flex items-center gap-3 pl-4 border-l border-white/10">
            <button
              onClick={dialPhone}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary hover:bg-primary/90 text-white transition-colors"
              title="Call Us"
            >
              <Phone size={18} />
            </button>
            <button
              onClick={sendMessage}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 text-white transition-colors"
              title="WhatsApp Us"
            >
              <MessageCircle size={18} />
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
