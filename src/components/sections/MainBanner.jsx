"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";
import Image from "next/image";

function MainBanner({ company = "Appliance Service Center UAE" }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const bannerImage = "/static/main-banner.jpg";

  useEffect(() => {
    const img = new window.Image();
    img.src = bannerImage;
    img.onload = () => setImageLoaded(true);
  }, [bannerImage]);

  return (
    <section
      className={cn(
        "relative h-[600px] md:h-[700px] lg:h-[800px] w-full overflow-hidden flex items-center justify-center",
        company === "Siemens" ? "mt-0" : "mt-0"
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        {imageLoaded ? (
          <Image
            src={bannerImage}
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

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 z-10" />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center items-center text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6 backdrop-blur-md shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            #1 Premium Appliance Repair Service
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-white tracking-tight leading-tight"
          >
            Expert Care for Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Premium Appliances
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Specialized repair for Bosch, Siemens, Samsung, LG.
            <br className="hidden sm:block" />
            We restore the <span className="text-white font-semibold">soul</span> of your home with certified expertise.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
          >
            <CallAndWhatsappButton company={company} banner />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}

export default MainBanner;
