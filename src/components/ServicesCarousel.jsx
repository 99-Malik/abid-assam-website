"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ServiceCard from "./ServiceCard";
import Autoplay from "embla-carousel-autoplay";
import { companyName, getData } from "@/libs/data";
import { getSolarData } from "@/libs/solardata"; // Import solar data
import { usePathname } from "next/navigation";
import { getAcData } from "@/libs/getAcData"; // Import solar data

const ServicesCarousel = ({ company = companyName }) => {
  const pathname = usePathname();

  // Determine which data to use based on the route
  const dynamicData =
  pathname === "/companies/water-heater"
    ? getSolarData(company) // Use solar data for water-heater route
    : pathname === "/companies/ac"
    ? getAcData(company) // Use AC-specific data for AC route
    : getData(company); // Use general data for other routestData(company); // Use general data for other routes
    const services = dynamicData || []; // Ensure services is always an array

  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="max-w-[80vw] w-full py-10"
    >
      <CarouselContent>
        {services.map((service) => (
          <CarouselItem
            className="md:basis-1/2 lg:basis-1/3"
            key={service.slug}
          >
            <ServiceCard
              imgUrl={service.imgUrl}
              title={service.title}
              desc={service.description}
              slug={service.slug}
              company={company}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ServicesCarousel;
