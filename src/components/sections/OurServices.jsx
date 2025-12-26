"use client";
import { companyName } from "@/libs/data";
import React from "react";
import ServicesCarousel from "../ServicesCarousel";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const OurServices = ({ company = companyName }) => {
  const pathname = usePathname();

  // Determine whether to show company name
  const showCompanyName = pathname !== "/companies/water-heater";

  return (
    <section id="services" className="relative flex w-full items-center justify-center bg-background py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl px-5 gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-primary font-bold uppercase tracking-wider text-sm border border-primary/20 px-3 py-1 rounded-full bg-primary/10">
            {company === "Water-heater" ? "Solar Expertise" : "What We Do"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            {company === "Water-heater" ? "Solar Water Heater Services" : "Our Premium Services"}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <p className="max-w-2xl text-muted-foreground text-lg">
            {company === "Water-heater"
              ? "We specialize in diagnosing, repairing, and maintaining solar water heating systems for maximum efficiency."
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
