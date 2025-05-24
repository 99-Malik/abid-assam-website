"use client";

import { companyName } from "@/libs/data";
import React from "react";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

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
    <section id="about" className="grid md:grid-cols-2 w-full min-h-[40rem]">
      <div
        className="w-full bg-cover min-h-[30rem] bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/static/solar-7.jpg)",
        }}
      ></div>
      <div className="w-full bg-black/5 px-10 py-16">
        <div className="text-3xl w-fit flex justify-center flex-col gap-2 font-semibold uppercase">
          About us
          <div
            className={cn(
              "w-1/2 h-0.5",
              company === "Lg"
                ? "bg-lgPrimary"
                : company === "Samsung"
                ? "bg-samsungPrimary"
                : company === "Bosch"
                ? "bg-boschPrimary"
                : company === "Siemens"
                ? "bg-siemensPrimary"
                : "bg-primary"
            )}
          ></div>
        </div>
        <p className="my-5">
         We are dedicated to providing exceptional home appliance
          repair services with a focus on quality and customer satisfaction. Our
          team of skilled technicians is experienced in diagnosing and fixing a
          wide range of appliances, ensuring your home runs smoothly. Trust us
          to restore your appliances quickly and efficiently, allowing you to
          get back to your daily routine.
        </p>
        <h3 className="text-xl font-semibold mb-2">Services We Offer:</h3>
        <ul className="list-disc list-inside">
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
        <CallAndWhatsappButton company={company} className="py-10" />
      </div>
    </section>
  );
};

export default AboutSection;
