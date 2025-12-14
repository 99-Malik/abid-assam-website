'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Do you provide a warranty on repairs?",
        answer: "Yes, we provide a warranty on both labor and parts used during the repair. The duration depends on the specific repair but typically ranges from 3 to 12 months."
    },
    {
        question: "How quickly can you come out?",
        answer: "We offer same-day service in most areas if you book before 12 PM. Emergency services are also available."
    },
    {
        question: "Do you use genuine parts?",
        answer: "Absolutely. We use original equipment manufacturer (OEM) parts to ensure the longevity and performance of your appliance."
    },
    {
        question: "Is there a service call fee?",
        answer: "We have a standard diagnostic fee, which is WAIVED if you proceed with the repair. You only pay for the repair itself."
    },
    {
        question: "Which areas do you cover?",
        answer: "We cover all major areas in Dubai and surrounding emirates. Contact us to confirm coverage for your specific location."
    }
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Common Questions</h2>
                    <h3 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked <span className="text-gradient">Questions</span></h3>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="glass rounded-xl overflow-hidden border border-white/5 data-[state=open]:border-primary/50 transition-colors">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="text-lg font-semibold">{faq.question}</span>
                                {activeIndex === index ? <Minus className="text-primary" /> : <Plus className="text-muted-foreground" />}
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-muted-foreground">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
