import AboutSection from "@/components/sections/AboutSection";
import MainBanner from "@/components/sections/MainBanner";
import OurServices from "@/components/sections/OurServices";
import ServiceDetails from "@/components/sections/ServiceDetails";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";

const BRAND_SLUGS = ["lg", "siemens", "samsung", "bosch"];

const Company = async ({ params }) => {
  const { slug } = await params;
  const company = slug.charAt(0).toUpperCase() + slug.slice(1);
  const isBrand = BRAND_SLUGS.includes(slug.toLowerCase());
  const brandClass = isBrand ? `brand-${slug.toLowerCase()}` : "";

  return (
    <div className={brandClass} style={isBrand ? { backgroundColor: "#ffffff", backgroundImage: "none" } : {}}>
      <Header company={company} />
      <MainBanner company={company} />
      <OurServices company={company} />
      <AboutSection company={company} />
      <WhyChooseUs company={company} />
      <ServiceDetails company={company} />
      <Footer company={company} />
    </div>
  );
};

export default Company;
