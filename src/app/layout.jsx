import "./globals.css";
import { companyName } from '../libs/data';
import { Outfit } from "next/font/google";
import { cn } from "@/lib/utils";
import FixedCallButtons from "@/components/buttons/FixedCallButtons";
import Script from "next/script";

const font = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title: companyName,
  description: "Expert Appliance Repair Services in UAE. Brand authorized partners for Bosch, Siemens, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={cn(font.className, "flex flex-col w-full min-h-screen bg-background antialiased selection:bg-primary/20")}>
        {children}
        <FixedCallButtons />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16918976305"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config','AW-16918976305');
          `}
        </Script>
      </body>
    </html>
  );
}
