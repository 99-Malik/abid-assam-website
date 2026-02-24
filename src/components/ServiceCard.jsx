"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";
import { companyName } from "@/libs/data";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getBrandTheme } from "@/libs/brandTheme";

const ServiceCard = ({ title, desc, imgUrl, slug, company = companyName }) => {
  const theme = getBrandTheme(company);
  const isBrand = ["lg", "siemens", "samsung", "bosch"].includes(company.toLowerCase());

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "group relative w-full rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1",
        isBrand
          ? "bg-white border border-gray-200 shadow-sm hover:shadow-xl"
          : "bg-white rounded-xl shadow-lg hover:shadow-2xl"
      )}
    >
      {/* Brand color top strip */}
      <div className={cn("absolute top-0 left-0 right-0 h-1 z-10", isBrand ? theme.bgPrimary : "bg-primary")} />

      {/* Image Section */}
      <div className="relative h-56 w-full overflow-hidden bg-gray-100">
        <motion.div
          className="relative w-full h-full"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src={imgUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>

        {/* Brand dot badge */}
        <div className="absolute top-4 right-4">
          <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
            <div className={cn("w-3 h-3 rounded-full", isBrand ? theme.bgPrimary : "bg-primary")} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 bg-white">
        <h3 className={cn("text-xl font-bold mb-2 transition-colors duration-200", isBrand ? `text-gray-900 group-hover:${theme.textPrimary}` : "text-gray-900 group-hover:text-primary")}>
          {title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
          {desc}
        </p>

        <div className={cn("h-px mb-5", isBrand ? `bg-gradient-to-r ${theme.divider}` : "bg-gray-200")} />

        <div className="space-y-3">
          {slug && (
            <Link
              href={`/services/${slug}`}
              className={cn(
                "flex items-center justify-center gap-2 w-full px-4 py-2.5 font-medium rounded-lg transition-all group/link text-white hover:opacity-90",
                !isBrand && "bg-primary"
              )}
              style={isBrand ? { backgroundColor: theme.primary } : {}}
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          )}
          <CallAndWhatsappButton company={company} className="w-full" />
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
