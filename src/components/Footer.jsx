"use client";

import { companyName, getData } from "@/libs/data";
import NavLink from "./header/NavLink";
import Image from "next/image";
import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

// brand-specific configs
const brandConfig= {
  lg: {
    logo: "/static/lg.svg",
    logoWidth: 100,
    logoHeight: 50,
    footerBg: "text-black",
  },
  samsung: {
    logo: "/static/samsung.svg",
    logoWidth: 120,
    logoHeight: 50,
    footerBg: "bg-samsungSecondary border-samsungSecondary text-black",
  },
  bosch: {
    logo: "/static/bosch.svg",
    logoWidth: 150,
    logoHeight: 50,
    footerBg: "text-black",
  },
  siemens: {
    logo: "/static/siemens.svg",
    logoWidth: 150,
    logoHeight: 50,
    footerBg: "bg-siemensSecondary border-siemensSecondary text-black",
  },
  default: {
    footerBg: "bg-secondary border-secondary text-black",
  },
};

const Footer = () => {
  const pathname = usePathname();
  const isWaterHeaterRoute = pathname === "/companies/water-heater";

  // normalize everything to lowercase
  const companyKey = isWaterHeaterRoute ? "water-heater" : companyName.toLowerCase();
  const config = brandConfig[companyKey] || brandConfig.default;

  return (
    <footer
      className={cn("w-full flex items-center justify-center", config.footerBg)}
    >
      <div className="grid md:grid-cols-[2fr_1fr_1fr] border-t border-black/5 w-full max-w-7xl gap-10 px-5 py-10">
        <div className="flex flex-col gap-4">
          {/* Company logo or fallback */}
          {config.logo ? (
            <Link href={`/companies/${companyKey}`}>
              <Image
                src={config.logo}
                width={config.logoWidth}
                height={config.logoHeight}
                alt={companyKey}
              />
            </Link>
          ) : (
            <Link href="/" className="text-xl font-bold">
              {isWaterHeaterRoute ? "Appliance Repairs AE" : companyName}
            </Link>
          )}

          <span className="text-sm font-light max-w-sm">
            Welcome to{" "}
            {isWaterHeaterRoute ? "Appliance Repairs AE" : companyName}, your
            most trusted partner in home appliance repair! With over years of
            experience, we specialize in providing reliable and efficient repair
            services for a wide range of household appliances.
          </span>

          <CallAndWhatsappButton
            company={isWaterHeaterRoute ? "Appliance Repairs AE" : companyName}
          />
        </div>

        {/* Services */}
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-semibold">Repair Services</h1>
          {getData(isWaterHeaterRoute ? "Appliance Repairs AE" : companyName).map(
            (service, index) => (
              <NavLink
                title={service.title}
                href={`/#${service.slug}`}
                className="text-sm"
                key={index}
              />
            )
          )}
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-semibold">Links</h1>
          <NavLink title="Home" href="/" className="text-sm" />
          <NavLink title="About" href="/#about" className="text-sm" />
          <NavLink title="Services" href="/#services" className="text-sm" />
          <NavLink title="Contact" href="/#contact" className="text-sm" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
