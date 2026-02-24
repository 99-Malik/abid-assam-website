"use client";
import { companyName } from "@/libs/data";
import React from "react";
import ServicesCarousel from "../ServicesCarousel";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { getBrandTheme, getBrandDisplayName } from "@/libs/brandTheme";

const OurServices = ({ company = companyName }) => {
  const pathname = usePathname();
  const theme = getBrandTheme(company);
  const isBrand = ["lg", "siemens", "samsung", "bosch"].includes(company.toLowerCase());
  const name = getBrandDisplayName(company);

  return (
    <section id="services" className={cn("relative flex w-full items-center justify-center", isBrand ? `${theme.sectionBg} py-16` : "bg-background py-24")}>
      {/* Non-brand background gradient only */}
      {!isBrand && (
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      )}

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl px-5 gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <span
            className="font-bold uppercase tracking-wider text-sm px-3 py-1 rounded-full border"
            style={isBrand
              ? { backgroundColor: theme.primary, color: "#fff", borderColor: theme.primary }
              : {}}
          >
            {company === "Water-heater" ? "Solar Expertise" : isBrand ? `${name} Expertise` : "What We Do"}
          </span>
          <h2 className={cn("text-3xl md:text-5xl font-bold tracking-tight", isBrand ? theme.headingText : "text-white")}>
            {company === "Water-heater"
              ? "Solar Water Heater Services"
              : isBrand
                ? `${name} Repair Services`
                : "Our Premium Services"
            }
          </h2>
          <div className={cn("h-1 w-24 bg-gradient-to-r", theme.divider)} />
          <p className={cn("max-w-2xl text-lg", isBrand ? theme.bodyText : "text-muted-foreground")}>
            {company === "Water-heater"
              ? "We specialize in diagnosing, repairing, and maintaining solar water heating systems for maximum efficiency."
              : isBrand
                ? `We are trusted specialists for all ${name} appliances. Expert repair, genuine parts, and fast turnaround in Dubai & UAE.`
                : "We specialize in diagnosing and repairing a wide range of household appliances. Experience the difference with our expert care."
            }
          </p>
        </div>

        <ServicesCarousel company={company} />
      </div>
    </section>
  );
};

export default OurServices;
