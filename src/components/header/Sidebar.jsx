"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { companyName, getData } from "@/libs/data";
import { getSolarData } from "@/libs/solardata";
import { Menu, ChevronDown } from "lucide-react";
import NavLink from "./NavLink";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { getBrandTheme, getBrandDisplayName } from "@/libs/brandTheme";

const brandLogos = {
  lg:      { src: "/static/lg.svg",      width: 60,  height: 36, href: "/companies/lg"      },
  siemens: { src: "/static/siemens.svg", width: 120, height: 36, href: "/companies/siemens" },
  samsung: { src: "/static/samsung.svg", width: 110, height: 36, href: "/companies/samsung" },
  bosch:   { src: "/static/bosch.svg",   width: 110, height: 36, href: "/companies/bosch"   },
};

const Sidebar = ({ company = companyName }) => {
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const key = company.toLowerCase();
  const isBrand = ["lg", "siemens", "samsung", "bosch"].includes(key);
  const theme = getBrandTheme(company);
  const name = getBrandDisplayName(company);
  const logo = brandLogos[key];

  // On brand pages, all links stay within the brand page
  const baseHref = isBrand ? `/companies/${key}` : "";
  const homeHref = isBrand ? `/companies/${key}` : "/";
  const aboutHref = `${baseHref}#about`;
  const contactHref = `${baseHref}#contact`;
  const serviceHref = (slug) => isBrand ? `${baseHref}#service-details` : `/services/${slug}`;

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className={cn("backdrop-blur-xl w-[300px] sm:w-[400px]", isBrand ? "bg-white border-l border-gray-200 text-gray-900" : "bg-background/95 border-l border-white/10 text-white")}>
          <SheetHeader>
            <SheetTitle className={cn(
              "text-left py-4 border-b",
              isBrand ? "border-white/20" : "border-white/10"
            )}>
              {isBrand && logo ? (
                <Link href={homeHref}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={name}
                    style={{ height: 36, width: "auto", objectFit: "contain" }}
                  />
                </Link>
              ) : (
                <span className="text-2xl font-bold text-white">{name}</span>
              )}
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-2 mt-8">
            <SheetClose asChild>
              <Link href={homeHref} className={cn("text-lg font-medium transition-colors py-2", isBrand ? "text-gray-800 hover:text-gray-600" : "text-white hover:text-white/70")}>Home</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={aboutHref} className={cn("text-lg font-medium transition-colors py-2", isBrand ? "text-gray-800 hover:text-gray-600" : "text-white hover:text-white/70")}>About</Link>
            </SheetClose>

            <div className="flex flex-col">
              <button
                onClick={() => setServicesDropdown(!servicesDropdown)}
                className={cn("flex items-center justify-between text-lg font-medium transition-colors py-2", isBrand ? "text-gray-800 hover:text-gray-600" : "text-white hover:text-white/70")}
              >
                Services
                <ChevronDown className={cn("w-5 h-5 transition-transform duration-200", servicesDropdown ? "rotate-180" : "rotate-0")} />
              </button>

              <div
                className={cn(
                  "flex flex-col gap-1 pl-4 overflow-hidden transition-all duration-300",
                  servicesDropdown ? "max-h-[500px] opacity-100 mt-1" : "max-h-0 opacity-0"
                )}
              >
                {getData(company).map((service, index) => (
                  <SheetClose asChild key={index}>
                    <Link
                      href={serviceHref(service.slug)}
                      className={cn("py-2 text-base block transition-colors", isBrand ? "text-gray-500 hover:text-gray-800" : "text-muted-foreground hover:text-white")}
                    >
                      {service.title}
                    </Link>
                  </SheetClose>
                ))}
                {!isBrand && getSolarData(company).map((service, index) => (
                  <SheetClose asChild key={`solar-${index}`}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-muted-foreground hover:text-white py-2 text-base block"
                    >
                      {service.title}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </div>

            <SheetClose asChild>
              <Link href={contactHref} className={cn("text-lg font-medium transition-colors py-2", isBrand ? "text-gray-800 hover:text-gray-600" : "text-white hover:text-white/70")}>Contact</Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;
