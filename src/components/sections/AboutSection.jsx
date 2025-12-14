"use client";

import { companyName } from "@/libs/data";
import React from "react";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

const AboutSection = ({ company = companyName }) => {
  const pathname = usePathname();

  // Define services for water-heater and general cases
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

  // Determine which services to display
  const services =
    pathname === "/companies/water-heater"
      ? waterHeaterServices
      : pathname === "/companies/ac"
        ? acServices
        : generalServices;

  return (
    <section id="about" className="relative w-full py-24 bg-black/20">
      <div className="container px-5 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image Side */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-2xl opacity-20 blur-2xl animate-pulse" />
            <div
              className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              style={{
                backgroundImage: "url(/static/solar-7.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
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
              <span className="text-primary font-bold uppercase tracking-wider text-sm border border-primary/20 px-3 py-1 rounded-full bg-primary/10">
                About Us
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight">
                Reliable Repairs, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Exceptional Service
                </span>
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              We are dedicated to providing exceptional home appliance repair services with a focus on quality and customer satisfaction.
              Our team of skilled technicians is experienced in diagnosing and fixing a wide range of appliances, ensuring your home runs smoothly.
            </p>

            <div className="bg-card border border-white/5 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full" />
                Services We Offer
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
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
