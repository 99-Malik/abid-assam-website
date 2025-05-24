"use client"
import { companyName } from "@/libs/data";
import Link from "next/link";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import NavLink from "./NavLink";
import ServicesDropdown from "./ServicesDropdown";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = ({ company = companyName }) => {
  const pathname = usePathname();

  // Check the route and override company name for specific paths
  const dynamicCompany =
  pathname === "/companies/water-heater"
    ? "Appliance Repairs AE"
    : pathname === "/companies/ac"
    ? "Appliance Repairs AE"
    : company;
  return (
    <header className="flex flex-col w-full items-center justify-center border-b border-black/5">
      <Topbar company={dynamicCompany} />
      <div className="flex w-full justify-between px-5 py-4 max-w-7xl items-center gap-5">
        {dynamicCompany === "Siemens" ? (
          <Link href="/companies/siemens">
            <Image
              src="/static/siemens.svg"
              width={150}
              height={50}
              alt="Siemens"
            />
          </Link>
        ) : dynamicCompany === "Bosch" ? (
          <Link href="/companies/bosch">
            <Image src="/static/bosch.svg" width={150} height={50} alt="Bosch" />
          </Link>
        ) : dynamicCompany === "Samsung" ? (
          <Link href="/companies/samsung">
            <Image
              src="/static/samsung.svg"
              width={120}
              height={50}
              alt="Samsung"
            />
          </Link>
        ) : dynamicCompany === "Lg" ? (
          <Link href="/companies/lg">
            <Image src="/static/lg.svg" width={100} height={50} alt="LG" />
          </Link>
        ) : dynamicCompany === "Appliance Repairs AE" ? (
          <Link href="/companies/water-heater" className="text-xl font-bold">
            {dynamicCompany}
          </Link>
        ) : dynamicCompany === "Appliance Repairs AE" ? (
          <Link href="/companies/ac">
            <Image src="/static/ac.svg" width={120} height={50} alt="AC" />
          </Link>
        ) : (
          <Link href="/" className="text-xl font-bold">
            {dynamicCompany}
          </Link>
        )}
        <Sidebar company={dynamicCompany} />
        <div className="items-center hidden md:flex gap-4">
          <NavLink title="Home" href="/" />
          <NavLink title="About" href="#about" />
          <ServicesDropdown company={dynamicCompany} />
          <NavLink title="Contact" href="#contact" />
        </div>
      </div>
    </header>
  );
};

export default Header;
