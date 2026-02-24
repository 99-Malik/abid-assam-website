import React from 'react';
import { PhoneCall, Wrench, Smile } from 'lucide-react';

const steps = [
    {
        icon: <PhoneCall size={32} />,
        title: "1. Contact Us",
        description: "Book online or call us directly. We'll schedule a technician at your convenience."
    },
    {
        icon: <Wrench size={32} />,
        title: "2. Expert Diagnosis",
        description: "Our expert technician arrives, diagnoses the issue, and provides a transparent quote."
    },
    {
        icon: <Smile size={32} />,
        title: "3. Relax & Enjoy",
        description: "We fix it fast with genuine parts. You get back to your routine with a warranty."
    }
];

const HowItWorksSection = () => {
    return (
        <section className="py-20 relative bg-black/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Simple Process</h2>
                    <h3 className="text-4xl md:text-5xl font-bold mb-6">How It <span className="text-gradient-gold">Works</span></h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent -z-10" />

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full glass flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300 border-2 border-primary/20 group-hover:border-primary shadow-[0_0_20px_rgba(var(--primary),0.3)] bg-background relative z-10">
                                {step.icon}
                            </div>
                            <h4 className="text-2xl font-bold mb-3">{step.title}</h4>
                            <p className="text-muted-foreground max-w-xs">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
