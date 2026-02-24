"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { companyName, getData } from "@/libs/data";
import { getSolarData } from "@/libs/solardata";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BRANDS = ["lg", "siemens", "samsung", "bosch"];

const ServicesDropdown = ({ company = companyName }) => {
  const pathname = usePathname();
  const isBrand = BRANDS.some((b) => pathname.includes(`/companies/${b}`));

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={`group relative w-fit text-sm font-medium transition-colors outline-none ${isBrand ? "text-gray-700 hover:text-gray-900" : "text-white/80 hover:text-white"}`}>
        <span>Services</span>
        <span className={`w-0 absolute bottom-0.5 left-0 transition-all ease-in duration-200 group-hover:w-full h-[1px] ${isBrand ? "bg-gray-900" : "bg-white"}`}></span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-h-[60vh] overflow-y-auto">
        {getData(company).map((service) => (
          <DropdownMenuItem key={service.slug}>
            <Link href={`/services/${service.slug}`}>{service.title}</Link>
          </DropdownMenuItem>
        ))}
        {!isBrand && getSolarData(company).map((service) => (
          <DropdownMenuItem key={service.slug}>
            <Link href={`/services/${service.slug}`}>{service.title}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ServicesDropdown;
