"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { getBrandTheme } from "@/libs/brandTheme";

// Per-brand hero copy
const brandCopy = {
  lg: {
    heading: "LG Service Center",
    sub: "Fast, reliable, and professional repair for all your LG appliances. We bring your home back to life with quality workmanship you can trust.",
  },
  siemens: {
    heading: "Siemens Service Center",
    sub: "Expert repair and maintenance for all Siemens appliances in Dubai & UAE. Certified technicians, genuine parts, guaranteed satisfaction.",
  },
  samsung: {
    heading: "Samsung Service Center",
    sub: "Trusted repair for all Samsung appliances across Dubai & UAE. Fast diagnosis, original parts, and a warranty on every repair.",
  },
  bosch: {
    heading: "Bosch Service Center",
    sub: "Professional repair for your Bosch appliances by expert technicians. Quality parts, transparent pricing, same-day service available.",
  },
};

function MainBanner({ company = "Appliance Service Center UAE" }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const bannerImage = "/static/main-banner.jpg";
  const theme = getBrandTheme(company);
  const isBrand = ["lg", "siemens", "samsung", "bosch"].includes(company.toLowerCase());
  const copy = brandCopy[company.toLowerCase()];

  useEffect(() => {
    const img = new window.Image();
    img.src = company === "Water-heater" ? "/static/solar-1.jpg" : bannerImage;
    img.onload = () => setImageLoaded(true);
  }, [company, bannerImage]);

  return (
    <section className="relative h-[600px] md:h-[680px] lg:h-[750px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        {imageLoaded ? (
          <Image
            src={company === "Water-heater" ? "/static/solar-1.jpg" : bannerImage}
            alt="Appliance Repair Service"
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="100vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 animate-pulse" />
        )}
      </div>

      {/* Dark overlay — deep enough for white text clarity */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: "rgba(0,0,0,0.78)" }}
      />

      {/* Brand primary accent strip at bottom of header area */}
      {isBrand && (
        <div className={cn("absolute top-0 left-0 right-0 h-[3px] z-20", theme.bgPrimary)} />
      )}

      {/* Content */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          {/* Main Heading — brand name is the hero */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="font-bold tracking-tight text-white leading-[1.1] mb-5"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
          >
            {isBrand && copy ? (
              copy.heading
            ) : company === "Water-heater" ? (
              <>Expert Repair for Your Solar Water Heater</>
            ) : (
              <>Expert Appliance Repair in UAE</>
            )}
          </motion.h1>

          {/* Accent line under heading — brand colored */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
            className={cn("h-[4px] w-24 rounded-full mb-6 origin-left", isBrand ? theme.bgPrimary : "bg-white/40")}
          />

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(1rem, 2.2vw, 1.25rem)" }}
          >
            {isBrand && copy ? (
              copy.sub
            ) : company === "Water-heater" ? (
              "Specialized repair for all solar water heater brands. We ensure consistent hot water efficiently."
            ) : (
              "Specialized repair for Bosch, Siemens, Samsung & LG appliances in Dubai & UAE. Certified technicians, genuine parts, guaranteed results."
            )}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
          >
            <CallAndWhatsappButton company={company} banner />
          </motion.div>
        </motion.div>
      </div>

      {/* Fade to page bg at bottom */}
      {!isBrand && (
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
      )}
    </section>
  );
}

export default MainBanner;
