import ServiceDetailPage from "@/components/sections/ServiceDetailPage";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { companyName } from "@/libs/data";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  
  return {
    title: `${title} - Instant Repairs UAE`,
    description: `Professional ${title} services in Dubai and UAE. Expert technicians, same-day service, 90-day warranty.`,
  };
}

const ServicePage = async ({ params }) => {
  const { slug } = await params;
  
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header company={companyName} />
      <ServiceDetailPage slug={slug} company={companyName} />
      <Footer />
    </main>
  );
};

export default ServicePage;

