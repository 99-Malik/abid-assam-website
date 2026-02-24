import React from "react";
import Link from "next/link";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";
import { companyName } from "@/libs/data";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { getBrandTheme } from "@/libs/brandTheme";

const OneService = ({
  title,
  description,
  commonProblems = [],
  bgColor = "white",
  slug,
  imgUrl,
  company = companyName,
}) => {
  const theme = getBrandTheme(company);
  const isBrand = ["lg", "siemens", "samsung", "bosch"].includes(company.toLowerCase());

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 h-full",
        isBrand
          ? `${theme.cardBg} ${theme.cardBorder} ${theme.cardHover} shadow-sm`
          : "bg-white/5 border-white/10 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(var(--primary),0.2)] backdrop-blur-sm"
      )}
      id={slug}
    >
      {/* Image Header */}
      <div className="relative h-56 w-full overflow-hidden">
        {/* Brand color top strip */}
        <div className={cn("absolute top-0 left-0 right-0 h-1 z-20", theme.bgPrimary)} />
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${imgUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />

        {/* Floating Title Badge */}
        <div className="absolute bottom-4 left-4 z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] font-medium text-white uppercase tracking-wider">Available Now</span>
          </div>
          <h3 className="text-2xl font-bold text-white drop-shadow-lg tracking-tight">
            {title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col p-6 gap-5 h-full">
        <p className={cn("text-sm leading-relaxed", isBrand ? theme.bodyText : "text-gray-300")}>
          {description}
        </p>

        <div className="flex-1 space-y-3">
          <h4 className={cn(
            "text-sm font-semibold uppercase tracking-wider flex items-center gap-2 pb-2 border-b",
            isBrand ? `${theme.headingText} border-gray-200` : "text-white border-white/10"
          )}>
            <span style={isBrand ? { color: theme.primary } : {}} className={isBrand ? "" : "text-primary"}>●</span> Expert Solutions for:
          </h4>
          <ul className="grid grid-cols-1 gap-2">
            {commonProblems.slice(0, 5).map((problem, index) => (
              <li key={index} className={cn("flex items-start gap-3 text-sm", isBrand ? theme.bodyText : "text-gray-400")}>
                <CheckCircle2
                  className="w-4 h-4 shrink-0 mt-0.5"
                  style={isBrand ? { color: theme.primary } : {}}
                />
                <span>{problem}</span>
              </li>
            ))}
            {commonProblems.length > 5 && (
              <li className={cn("text-xs italic pl-7", isBrand ? theme.badgeText : "text-primary")}>+ many more issues resolved</li>
            )}
          </ul>
        </div>

        <div className={cn("mt-auto pt-5 border-t space-y-3", isBrand ? "border-gray-200" : "border-white/10")}>
          <Link
            href={`/services/${slug}`}
            className={cn(
              "flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg font-medium transition-all group/link",
              isBrand
                ? "text-white hover:opacity-90 border-0"
                : "bg-primary/20 hover:bg-primary/30 border border-primary/30 text-white"
            )}
            style={isBrand ? { backgroundColor: theme.primary } : {}}
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
          <CallAndWhatsappButton company={company} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default OneService;
