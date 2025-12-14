import React from "react";
import Link from "next/link";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";
import { companyName } from "@/libs/data";
import { CheckCircle2, ArrowRight } from "lucide-react";

const OneService = ({
  title,
  description,
  commonProblems = [],
  bgColor = "white",
  slug,
  imgUrl,
  company = companyName,
}) => {
  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white/5 border border-white/10 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(var(--primary),0.2)] h-full backdrop-blur-sm"
      id={slug}
    >
      {/* Animated Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Image Header */}
      <div className="relative h-64 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
          style={{ backgroundImage: `url(${imgUrl})` }}
        />

        {/* Floating Title Badge */}
        <div className="absolute bottom-4 left-4 z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-medium text-white uppercase tracking-wider">Available Now</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg tracking-tight group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col p-6 gap-6 h-full relative z-20">
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
          {description}
        </p>

        <div className="flex-1 space-y-4">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider flex items-center gap-2 pb-2 border-b border-white/10">
            <span className="text-primary">●</span> Expert Solutions for:
          </h4>
          <ul className="grid grid-cols-1 gap-2">
            {commonProblems.slice(0, 5).map((problem, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{problem}</span>
              </li>
            ))}
            {commonProblems.length > 5 && (
              <li className="text-xs text-primary italic pl-7">+ many more issues resolved</li>
            )}
          </ul>
        </div>

        <div className="mt-auto pt-6 border-t border-white/10 space-y-3">
          <Link
            href={`/services/${slug}`}
            className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary/20 hover:bg-primary/30 border border-primary/30 rounded-lg text-white font-medium transition-all group/link"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
          <CallAndWhatsappButton company={company} className="w-full shadow-lg shadow-primary/20" />
        </div>
      </div>
    </div>
  );
};

export default OneService;
