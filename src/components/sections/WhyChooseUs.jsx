import { companyName } from "@/libs/data";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";
import { ShieldCheck, Award, Clock, DollarSign, Wrench, Smile } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/20 hover:bg-white/5 transition-all duration-300">
    <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
      <Icon size={32} />
    </div>
    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

const WhyChooseUs = ({ company = companyName }) => {
  const features = [
    {
      icon: Wrench,
      title: "Expert Technicians",
      description: "Our certified technicians use the latest techniques for efficient and reliable service."
    },
    {
      icon: Award,
      title: "Quality Repairs",
      description: "We use only top-quality parts and tools to restore your appliances to optimal performance."
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Clear and competitive pricing with no hidden fees. You know exactly what to expect."
    },
    {
      icon: Clock,
      title: "Convenient Service",
      description: "Flexible scheduling, including same-day and emergency services to fit your busy lifestyle."
    },
    {
      icon: ShieldCheck,
      title: "Satisfaction Guarantee",
      description: "We back our work with a comprehensive warranty on all repairs for your peace of mind."
    },
    {
      icon: Smile,
      title: "Responsive Support",
      description: "Our friendly team is always ready to assist with any questions or concerns you may have."
    }
  ];

  return (
    <section id="why-us" className="flex justify-center w-full bg-black/20 py-24">
      <div className="flex w-full max-w-7xl px-5 flex-col items-center">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-sm">Why Choose Us</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">The {company} Difference</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We understand that choosing the right appliance repair service is crucial.
            Here is why thousands of customers trust us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <CallAndWhatsappButton company={company} className="py-5" />
      </div>
    </section>
  );
};

export default WhyChooseUs;
