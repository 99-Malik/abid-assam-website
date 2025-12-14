"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { companyName, getData } from "@/libs/data";
import { getSolarData } from "@/libs/solardata";
import { getAcData } from "@/libs/getAcData";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import { usePathname } from "next/navigation";
import { 
  Wrench, 
  CheckCircle2, 
  Clock, 
  Shield, 
  Star, 
  AlertCircle,
  Phone,
  MessageCircle,
  ArrowRight,
  Check
} from "lucide-react";

const ServiceDetailPage = ({ slug, company = companyName }) => {
  const pathname = usePathname();
  
  // Get the appropriate data based on route
  const allServices = 
    pathname?.includes("/water-heater")
      ? getSolarData(company)
      : pathname?.includes("/ac")
        ? getAcData(company)
        : getData(company);
  
  const service = allServices.find((s) => s.slug === slug);
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white">Service not found</p>
      </div>
    );
  }

  // Industry-standard content sections for each appliance type
  const getServiceContent = (serviceSlug) => {
    const contentMap = {
      "dishwasher-repair": {
        overview: "Professional dishwasher repair services ensure your kitchen runs smoothly. Our certified technicians diagnose and fix all dishwasher issues with precision and care.",
        keyFeatures: [
          "Complete diagnostic assessment",
          "Water pump and motor repair",
          "Drain system maintenance",
          "Spray arm and filter cleaning",
          "Control panel and sensor repair",
          "Door seal replacement",
          "Heating element replacement",
          "Drain valve repair"
        ],
        benefits: [
          "Restore full cleaning power",
          "Extend appliance lifespan",
          "Save on water and energy costs",
          "Prevent costly replacements",
          "Ensure hygienic dishwashing"
        ],
        process: [
          "Initial inspection and diagnosis",
          "Detailed problem identification",
          "Transparent cost estimation",
          "Professional repair execution",
          "Quality testing and verification",
          "Maintenance tips and advice"
        ],
        brands: ["Bosch", "Siemens", "Samsung", "LG", "Whirlpool", "KitchenAid", "Maytag", "GE"],
        warranty: "90-day warranty on all repairs",
        responseTime: "Same-day service available"
      },
      "dryer-repair": {
        overview: "Expert dryer repair services to keep your laundry routine uninterrupted. We handle all dryer types and brands with professional expertise.",
        keyFeatures: [
          "Drum and belt replacement",
          "Heating element repair",
          "Thermostat calibration",
          "Lint trap system cleaning",
          "Motor and pulley repair",
          "Control board diagnostics",
          "Ventilation system maintenance",
          "Door switch replacement"
        ],
        benefits: [
          "Fast and efficient drying",
          "Reduced energy consumption",
          "Prevent fire hazards",
          "Extend dryer lifespan",
          "Safe operation guaranteed"
        ],
        process: [
          "Comprehensive safety inspection",
          "Component testing and diagnosis",
          "Detailed repair plan",
          "Professional component replacement",
          "Performance testing",
          "Safety verification"
        ],
        brands: ["Samsung", "LG", "Whirlpool", "Maytag", "GE", "Bosch", "Electrolux"],
        warranty: "90-day warranty on all repairs",
        responseTime: "Same-day service available"
      },
      "washing-machine-repair": {
        overview: "Comprehensive washing machine repair services for all makes and models. Our technicians restore your washer to optimal performance.",
        keyFeatures: [
          "Drum and tub repair",
          "Motor and transmission service",
          "Water inlet valve replacement",
          "Drain pump repair",
          "Control board diagnostics",
          "Suspension system repair",
          "Door lock mechanism fix",
          "Bearing replacement"
        ],
        benefits: [
          "Restore washing efficiency",
          "Prevent water damage",
          "Extend machine lifespan",
          "Save on replacement costs",
          "Ensure clean laundry results"
        ],
        process: [
          "Full system inspection",
          "Water flow testing",
          "Component diagnosis",
          "Professional repair",
          "Leak testing",
          "Performance verification"
        ],
        brands: ["Samsung", "LG", "Whirlpool", "Maytag", "Bosch", "Siemens", "GE", "Electrolux"],
        warranty: "90-day warranty on all repairs",
        responseTime: "Same-day service available"
      },
      "stove-cooker-repair": {
        overview: "Professional stove and cooker repair services for gas and electric models. We ensure safe and efficient cooking operations.",
        keyFeatures: [
          "Burner ignition repair",
          "Oven heating element replacement",
          "Control knob and switch repair",
          "Gas valve and regulator service",
          "Thermostat calibration",
          "Control panel replacement",
          "Door seal replacement",
          "Safety valve inspection"
        ],
        benefits: [
          "Safe cooking operations",
          "Precise temperature control",
          "Energy efficiency",
          "Extended appliance life",
          "Prevent gas leaks"
        ],
        process: [
          "Safety inspection first",
          "Gas/electric system check",
          "Component testing",
          "Professional repair",
          "Safety verification",
          "Performance testing"
        ],
        brands: ["Bosch", "Siemens", "Samsung", "LG", "Whirlpool", "GE", "KitchenAid"],
        warranty: "90-day warranty on all repairs",
        responseTime: "Same-day service available"
      },
      "oven-repair": {
        overview: "Expert oven repair services for all types including conventional, convection, and self-cleaning models. We restore perfect baking and roasting.",
        keyFeatures: [
          "Heating element replacement",
          "Thermostat calibration",
          "Control board repair",
          "Door seal replacement",
          "Igniter replacement",
          "Temperature sensor repair",
          "Self-cleaning system fix",
          "Interior light replacement"
        ],
        benefits: [
          "Accurate temperature control",
          "Even heating distribution",
          "Energy efficiency",
          "Extended oven lifespan",
          "Perfect cooking results"
        ],
        process: [
          "Temperature accuracy test",
          "Heating system inspection",
          "Component diagnosis",
          "Professional repair",
          "Calibration and testing",
          "Performance verification"
        ],
        brands: ["Bosch", "Siemens", "Samsung", "LG", "Whirlpool", "GE", "KitchenAid", "Maytag"],
        warranty: "90-day warranty on all repairs",
        responseTime: "Same-day service available"
      },
      "fridge-repair": {
        overview: "Comprehensive refrigerator repair services to protect your food and maintain optimal cooling. We fix all cooling system issues promptly.",
        keyFeatures: [
          "Compressor repair and replacement",
          "Condenser coil cleaning",
          "Evaporator fan replacement",
          "Thermostat calibration",
          "Door seal replacement",
          "Ice maker repair",
          "Water filter replacement",
          "Defrost system repair"
        ],
        benefits: [
          "Maintain food freshness",
          "Prevent food spoilage",
          "Reduce energy costs",
          "Extend fridge lifespan",
          "Optimal cooling performance"
        ],
        process: [
          "Cooling system inspection",
          "Temperature testing",
          "Component diagnosis",
          "Professional repair",
          "Cooling verification",
          "Energy efficiency check"
        ],
        brands: ["Samsung", "LG", "Whirlpool", "Maytag", "GE", "Bosch", "Siemens", "Electrolux"],
        warranty: "90-day warranty on all repairs",
        responseTime: "Same-day service available"
      },
      "tv-repair": {
        overview: "Professional TV repair services for all brands and screen types. Our technicians restore your entertainment system to perfect viewing quality.",
        keyFeatures: [
          "Screen repair and replacement",
          "Power supply board repair",
          "Main board diagnostics",
          "Backlight replacement",
          "HDMI port repair",
          "Remote control pairing",
          "Software updates",
          "Audio system repair"
        ],
        benefits: [
          "Restore picture quality",
          "Fix audio issues",
          "Extend TV lifespan",
          "Save on replacement costs",
          "Optimal viewing experience"
        ],
        process: [
          "Visual inspection",
          "Power and signal testing",
          "Component diagnosis",
          "Professional repair",
          "Picture quality test",
          "Audio verification"
        ],
        brands: ["Samsung", "LG", "Sony", "Panasonic", "TCL", "Hisense", "Vizio"],
        warranty: "90-day warranty on all repairs",
        responseTime: "Same-day service available"
      }
    };
    
    return contentMap[serviceSlug] || {
      overview: `${service.title} services with professional expertise and industry-standard solutions.`,
      keyFeatures: ["Professional diagnosis", "Expert repair", "Quality parts", "Warranty included"],
      benefits: ["Reliable service", "Cost-effective", "Fast response", "Expert technicians"],
      process: ["Inspection", "Diagnosis", "Repair", "Testing"],
      brands: ["All major brands"],
      warranty: "90-day warranty on all repairs",
      responseTime: "Same-day service available"
    };
  };

  const content = getServiceContent(service.slug);

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      {/* Hero Section */}
      <section className="relative w-full py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="container mx-auto max-w-7xl px-5 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-semibold mb-6">
                Professional Repair Service
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {content.overview}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CallAndWhatsappButton company={company} />
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{content.responseTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>{content.warranty}</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={service.imgUrl}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Problems Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto max-w-7xl px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Common Problems We Fix
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our expert technicians have experience diagnosing and repairing these common issues
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.commonProblems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-background border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <AlertCircle className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-white font-medium">{problem}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Service Features
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive repair solutions tailored to your appliance needs
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-white font-semibold mb-2">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto max-w-7xl px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our {service.title} Service?
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                We provide industry-leading repair services with unmatched expertise and customer satisfaction.
              </p>
              <div className="space-y-4">
                {content.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-white text-lg">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Service Statistics</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Customer Satisfaction</span>
                    <span className="text-primary font-bold">98%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "98%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">First-Time Fix Rate</span>
                    <span className="text-primary font-bold">95%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "95%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">On-Time Arrival</span>
                    <span className="text-primary font-bold">99%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "99%" }} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Repair Process
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A streamlined process designed for your convenience and peace of mind
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-card border border-white/10 rounded-xl p-8 hover:border-primary/50 transition-all">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 text-primary font-bold text-xl">
                    {index + 1}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{step}</h3>
                </div>
                {index < content.process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30">
                    <ArrowRight className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto max-w-7xl px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Brands We Service
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Expert repair services for all major appliance brands
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {content.brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-background border border-white/10 rounded-xl p-6 text-center hover:border-primary/50 transition-all"
              >
                <p className="text-white font-medium">{brand}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/20 to-purple-500/20 border border-primary/30 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Fix Your {service.title.split(" ")[0]}?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today for professional repair services. Same-day service available!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CallAndWhatsappButton company={company} />
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span>4.9/5 Customer Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>Certified Technicians</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>90-Day Warranty</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;

