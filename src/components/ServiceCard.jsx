"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";
import { companyName } from "@/libs/data";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ title, desc, imgUrl, slug, company = companyName }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative w-full bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
    >
      {/* Image Section - Top Half */}
      <div className="relative h-64 w-full overflow-hidden bg-gray-100">
        <motion.div
          className="relative w-full h-full"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src={imgUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
        </motion.div>
        
        {/* Service Badge */}
        <div className="absolute top-4 right-4">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md"
          >
            <div className="w-3 h-3 rounded-full bg-primary" />
          </motion.div>
        </div>
      </div>

      {/* Content Section - Bottom Half */}
      <div className="p-6 bg-white">
        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300"
        >
          {title}
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3"
        >
          {desc}
        </motion.p>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-6" />

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="space-y-3"
        >
          {slug && (
            <Link
              href={`/services/${slug}`}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all group/link"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          )}
          <CallAndWhatsappButton company={company} className="w-full" />
        </motion.div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-xl transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default ServiceCard;
