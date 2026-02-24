"use client";

import { getData, companyName } from "@/libs/data";
import { getSolarData } from "@/libs/solardata"; // Import solar data
import OneService from "./OneService";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { getAcData } from "@/libs/getAcData"; // Import solar data
import { getBrandTheme, getBrandDisplayName } from "@/libs/brandTheme";

const ServiceDetails = ({ company = companyName }) => {
  const pathname = usePathname();
  const theme = getBrandTheme(company);
  const isBrand = ["lg", "siemens", "samsung", "bosch"].includes(company.toLowerCase());
  const name = getBrandDisplayName(company);

  // Determine which data to use based on the route
  const services =
    pathname === "/companies/water-heater"
      ? getSolarData(company) // Use solar data for water-heater route
      : pathname === "/companies/ac"
        ? getAcData(company) // Use AC-specific data for AC route
        : getData(company); // Use general data for other routes

  return (
    <div
      className={cn("flex flex-col items-center justify-center w-full", isBrand ? `${theme.sectionBg}` : "bg-background py-20")}
      id="service-details"
    >
      <div className={cn("flex flex-col items-center justify-center w-full max-w-7xl px-5 gap-8", isBrand ? "mb-10" : "mb-16")}>
        <div className="flex flex-col items-center text-center gap-4">
          <span
            className="font-bold uppercase tracking-wider text-sm px-3 py-1 rounded-full border"
            style={isBrand
              ? { backgroundColor: theme.primary, color: "#fff", borderColor: theme.primary }
              : {}}
          >
            {company === "Water-heater" ? "Solar Solutions" : isBrand ? `${name} Services` : "Comprehensive Care"}
          </span>
          <h2 className={cn("text-3xl md:text-5xl font-bold", isBrand ? theme.headingText : "text-white")}>
            {company === "Water-heater"
              ? "Common Solar Issues"
              : isBrand
                ? `Detailed ${name} Repair Information`
                : "Detailed Service Information"
            }
          </h2>
          <p className={cn("max-w-3xl mx-auto text-lg", isBrand ? theme.bodyText : "text-muted-foreground")}>
            {company === "Water-heater"
              ? "From leaking pipes to faulty sensors, we cover all aspects of solar water heater repair and maintenance."
              : isBrand
                ? `From washing machines to ovens, our ${name}-certified technicians cover every appliance with precision, genuine parts, and comprehensive repair expertise.`
                : "We offer a comprehensive range of home appliance repair services tailored to meet your specific needs. From rigorous diagnostics to premium repairs, we ensure everything is handled with care."
            }
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
