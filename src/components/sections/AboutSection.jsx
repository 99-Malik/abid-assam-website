"use client";

import { companyName } from "@/libs/data";
import React from "react";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { getBrandTheme, getBrandDisplayName } from "@/libs/brandTheme";

const AboutSection = ({ company = companyName }) => {
  const pathname = usePathname();
  const theme = getBrandTheme(company);
  const isBrand = ["lg", "siemens", "samsung", "bosch"].includes(company.toLowerCase());
  const name = getBrandDisplayName(company);

  const waterHeaterServices = [
    "Solar Water Heater Repair",
    "Leaking Pipes and Connections",
    "Faulty Temperature Sensors",
    "Improper Installation Issues",
    "Blocked or Clogged Pipes",
    "Circulation Pump Not Working",
  ];

  const acServices = [
    "AC Repair & Maintenance",
    "AC Leaking Water Issues",
    "Faulty Thermostat Issues",
    "Improper AC Installation",
    "Compressor & Refrigerant Issues",
    "Weak Airflow & Ventilation Problems",
  ];

  const generalServices = [
    "Washing Machine Repair",
    "Dryer Repair",
    "Dishwasher Repair",
    "Stove/Cooker Repair",
    "Television Repair",
    "Gas Oven Repair",
    "Fridge Repair",
  ];

  const services =
    pathname === "/companies/water-heater"
      ? waterHeaterServices
      : pathname === "/companies/ac"
        ? acServices
        : generalServices;

  return (
    <section id="about" className={cn("relative w-full", isBrand ? `${theme.sectionAlt} py-16` : "bg-black/20 py-24")}>
      <div className="container px-5 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image Side */}
          <div className="relative">
            {!isBrand && (
              <div className="absolute -inset-4 rounded-2xl opacity-20 blur-2xl animate-pulse bg-gradient-to-r from-primary to-purple-600" />
            )}
            <div
              className={cn(
                "relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl",
                isBrand ? "border border-gray-200" : "border border-white/10"
              )}
              style={{
                backgroundImage: `url(${pathname === "/companies/water-heater"
                    ? "/static/solar-7.jpg"
                    : "/static/about.jpg"
                  })`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Brand badge overlay on image */}
              {isBrand && (
                <div className={cn("absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wider", theme.bgPrimary)}>
                  {name} Specialist
                </div>
              )}

              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                  <p className="text-white font-medium">
                    "Dedicated to excellence in every repair."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="flex flex-col gap-8">
            <div>
              <span
                className="font-bold uppercase tracking-wider text-sm px-3 py-1 rounded-full border"
                style={isBrand
                  ? { backgroundColor: theme.primary, color: "#fff", borderColor: theme.primary }
                  : {}}
              >
                About Us
              </span>
              <h2 className={cn("text-3xl md:text-5xl font-bold mt-4 tracking-tight", isBrand ? theme.headingText : "text-white")}>
                {isBrand ? (
                  <>Trusted {name} Repair Specialists</>
                ) : (
                  <>Reliable Repairs, Exceptional Service</>
                )}
              </h2>
            </div>

            <p className={cn("text-lg leading-relaxed", isBrand ? theme.bodyText : "text-muted-foreground")}>
              {isBrand
                ? `We are specialist repair experts for ${name} appliances in Dubai & UAE. Our skilled technicians are trained to diagnose and repair all ${name} models with genuine parts and industry-leading standards.`
                : "We are dedicated to providing exceptional home appliance repair services with a focus on quality and customer satisfaction. Our team of skilled technicians is experienced in diagnosing and fixing a wide range of appliances, ensuring your home runs smoothly."
              }
            </p>

            <div className={cn("border rounded-2xl p-6", isBrand ? `bg-white ${theme.cardBorder}` : "bg-card border-white/5")}>
              <h3 className={cn("text-xl font-bold mb-4 flex items-center gap-2", isBrand ? theme.headingText : "text-white")}>
                <span className={cn("w-1 h-6 rounded-full", isBrand ? theme.bgPrimary : "bg-primary")} />
                Services We Offer
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <li key={index} className={cn("flex items-center gap-2 text-sm", isBrand ? theme.bodyText : "text-gray-300")}>
                    <CheckCircle2
                      className="w-4 h-4 shrink-0"
                      style={isBrand ? { color: theme.primary } : {}}
                    />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <CallAndWhatsappButton company={company} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
