"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { allServices, companyName, getData } from "@/libs/data";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ServicesDropdown = ({company = companyName}) => {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group relative w-fit">
        <span>Services</span>
        <span className="w-0 absolute bottom-0.5 left-0 transition-all ease-in duration-200 group-hover:w-full h-[1px] bg-black"></span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {getData(company).map((service) => (
          <DropdownMenuItem key={service.slug}>
            <Link href={`/services/${service.slug}`}>{service.title}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ServicesDropdown;
