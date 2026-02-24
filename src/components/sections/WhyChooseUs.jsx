import { companyName } from "@/libs/data";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";
import { ShieldCheck, Award, Clock, DollarSign, Wrench, Smile } from "lucide-react";
import { getBrandTheme, getBrandDisplayName } from "@/libs/brandTheme";

const FeatureCard = ({ icon: Icon, title, description, theme, isBrand }) => (
  <div className={cn(
    "flex flex-col items-center text-center p-6 rounded-2xl border transition-all duration-300",
    isBrand
      ? `${theme.cardBg} ${theme.cardBorder} ${theme.cardHover}`
      : "bg-card border-white/5 hover:border-primary/20 hover:bg-white/5"
  )}>
    <div
      className={cn("p-4 rounded-full mb-4", isBrand ? theme.iconBg : "bg-primary/10")}
      style={isBrand ? { color: theme.primary } : {}}
    >
      <Icon size={32} color={isBrand ? theme.primary : undefined} />
    </div>
    <h3 className={cn("text-lg font-bold mb-2", isBrand ? theme.headingText : "text-white")}>{title}</h3>
    <p className={cn("text-sm", isBrand ? theme.bodyText : "text-muted-foreground")}>{description}</p>
  </div>
);

const WhyChooseUs = ({ company = companyName }) => {
  const theme = getBrandTheme(company);
  const isBrand = ["lg", "siemens", "samsung", "bosch"].includes(company.toLowerCase());
  const name = getBrandDisplayName(company);

  const features = [
    {
      icon: Wrench,
      title: "Expert Technicians",
      description: isBrand
        ? `Factory-certified ${name} technicians using manufacturer-approved techniques for precise, reliable repairs.`
        : "Our certified technicians use the latest techniques for efficient and reliable service."
    },
    {
      icon: Award,
      title: "Genuine Parts",
      description: isBrand
        ? `We use only original ${name} parts to ensure your appliance performs exactly as designed.`
        : "We use only top-quality parts and tools to restore your appliances to optimal performance."
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Clear and competitive pricing with no hidden fees. You know exactly what to expect."
    },
    {
      icon: Clock,
      title: "Same-Day Service",
      description: "Flexible scheduling, including same-day and emergency services to fit your busy lifestyle."
    },
    {
      icon: ShieldCheck,
      title: "Warranty Guaranteed",
      description: isBrand
        ? `All ${name} repairs come with a comprehensive service warranty for your complete peace of mind.`
        : "We back our work with a comprehensive warranty on all repairs for your peace of mind."
    },
    {
      icon: Smile,
      title: "Responsive Support",
      description: "Our friendly team is always ready to assist with any questions or concerns you may have."
    }
  ];

  return (
    <section id="why-us" className={cn("flex justify-center w-full", isBrand ? `${theme.sectionBg} py-16` : "bg-black/20 py-24")}>
      <div className="flex w-full max-w-7xl px-5 flex-col items-center">
        <div className="text-center mb-16">
          <span
            className="font-bold uppercase tracking-wider text-sm px-3 py-1 rounded-full border"
            style={isBrand
              ? { backgroundColor: theme.primary, color: "#fff", borderColor: theme.primary }
              : {}}
          >
            Why Choose Us
          </span>
          <h2 className={cn("text-3xl md:text-5xl font-bold mt-2 mb-4", isBrand ? theme.headingText : "text-white")}>
            The {name} Difference
          </h2>
          <p className={cn("max-w-2xl mx-auto text-lg", isBrand ? theme.bodyText : "text-muted-foreground")}>
            {isBrand
              ? `We understand that choosing the right ${name} repair service is crucial. Here is why thousands of customers across Dubai & UAE trust us.`
              : "We understand that choosing the right appliance repair service is crucial. Here is why thousands of customers trust us."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} theme={theme} isBrand={isBrand} />
          ))}
        </div>

        <CallAndWhatsappButton company={company} className="py-5" />
      </div>
    </section>
  );
};

export default WhyChooseUs;
