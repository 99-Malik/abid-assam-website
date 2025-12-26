"use client";

import { getData, companyName } from "@/libs/data";
import { getSolarData } from "@/libs/solardata"; // Import solar data
import OneService from "./OneService";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { getAcData } from "@/libs/getAcData"; // Import solar data

const ServiceDetails = ({ company = companyName }) => {
  const pathname = usePathname();

  // Determine which data to use based on the route
  const services =
    pathname === "/companies/water-heater"
      ? getSolarData(company) // Use solar data for water-heater route
      : pathname === "/companies/ac"
        ? getAcData(company) // Use AC-specific data for AC route
        : getData(company); // Use general data for other routes

  return (
    <div
      className="flex flex-col items-center justify-center w-full py-20 bg-background"
      id="service-details"
    >
      <div className="flex flex-col items-center justify-center w-full max-w-7xl px-5 mb-16 gap-8">
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-primary font-bold uppercase tracking-wider text-sm border border-primary/20 px-3 py-1 rounded-full bg-primary/10">
            {company === "Water-heater" ? "Solar Solutions" : "Comprehensive Care"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            {company === "Water-heater" ? "Common Solar Issues" : "Detailed Service Information"}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            {company === "Water-heater"
              ? "From leaking pipes to faulty sensors, we cover all aspects of solar water heater repair and maintenance."
              : "We offer a comprehensive range of home appliance repair services tailored to meet your specific needs. From rigorous diagnostics to premium repairs, we ensure everything is handled with care."}
          </p>
        </div>
      </div>

      <div className="w-full max-w-7xl px-5">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {services.map((service) => (
            <OneService
              key={service.slug}
              title={service.title}
              description={service.description}
              commonProblems={service.commonProblems}
              slug={service.slug}
              company={company}
              imgUrl={service.imgUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
