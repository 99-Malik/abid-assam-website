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

const Sidebar = ({ company = companyName }) => {
  const [servicesDropdown, setServicesDropdown] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-l border-white/10 text-white w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle className="text-left text-2xl font-bold text-white py-4 border-b border-white/10">{company}</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-2 mt-8">
            <SheetClose asChild>
              <Link href="/" className="text-lg font-medium hover:text-primary transition-colors py-2">Home</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/#about" className="text-lg font-medium hover:text-primary transition-colors py-2">About</Link>
            </SheetClose>

            <div className="flex flex-col">
              <button
                onClick={() => setServicesDropdown(!servicesDropdown)}
                className="flex items-center justify-between text-lg font-medium hover:text-primary transition-colors py-2 group"
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
                      href={`/services/${service.slug}`}
                      className="text-muted-foreground hover:text-white py-2 text-base block"
                    >
                      {service.title}
                    </Link>
                  </SheetClose>
                ))}
                {getSolarData(company).map((service, index) => (
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
              <Link href="/#contact" className="text-lg font-medium hover:text-primary transition-colors py-2">Contact</Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;
