"use client";
import { companyName, getData } from "@/libs/data";
import NavLink from "./header/NavLink";
import Image from "next/image";
import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const isWaterHeaterRoute = pathname === "/companies/water-heater";
  const company = isWaterHeaterRoute ? "Appliance Repairs AE" : companyName;

  return (
    <footer
      className={cn(
        "w-full flex items-center justify-center",
        company === "Lg"
          ? "text-black"
          : company === "Samsung"
          ? "bg-samsungSecondary border-samsungSecondary text-black"
          : company === "Bosch"
          ? "text-black"
          : company === "Siemens"
          ? "bg-siemensSecondary border-siemensSecondary text-black"
          : "bg-secondary border-secondary text-black"
      )}
    >
      <div className="grid md:grid-cols-[2fr_1fr_1fr] border-t border-black/5 w-full max-w-7xl gap-10 px-5 py-10">
        <div className="flex flex-col gap-4">
          {company === "Siemens" ? (
            <Link href="/companies/siemens">
              <Image
                src="/static/siemens.svg"
                width={150}
                height={50}
                alt="Siemens"
              />
            </Link>
          ) : company === "Bosch" ? (
            <Link href="/companies/bosch">
              <Image src="/static/bosch.svg" width={150} height={50} alt="Bosch" />
            </Link>
          ) : company === "Samsung" ? (
            <Link href="/companies/samsung">
              <Image
                src="/static/samsung.svg"
                width={120}
                height={50}
                alt="Samsung"
              />
            </Link>
          ) : company === "Lg" ? (
            <Link href="/companies/lg">
              <Image src="/static/lg.svg" width={100} height={50} alt="LG" />
            </Link>
          ) : (
            <Link href="/" className="text-xl font-bold">
              {company}
            </Link>
          )}
          <span className="text-sm font-light max-w-sm">
            Welcome to {company}, your most trusted partner in home appliance repair!
            With over years of experience, we specialize in providing reliable
            and efficient repair services for a wide range of household
            appliances.
          </span>
          <CallAndWhatsappButton company={company} />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-semibold">Repair Services</h1>
          {getData(company).map((service, index) => (
            <NavLink
              title={service.title}
              href={`/#${service.slug}`}
              className="text-sm"
              key={index}
            />
          ))}
        </div>
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
