import React from 'react';
import { Star, User } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Homeowner",
        content: "Absolutely fantastic service! My washing machine broke down on a weekend, and they were here within 2 hours. Professional, clean, and reasonably priced.",
        rating: 5
    },
    {
        name: "Mohammed Al-Fayed",
        role: "Restaurant Owner",
        content: "We rely on our ovens for our business. When one went down, their team got it up and running in no time. Highly recommended for commercial repairs.",
        rating: 5
    },
    {
        name: "Emily Davis",
        role: "Resident",
        content: "The technician was very knowledgeable and explained exactly what was wrong with my fridge. He had the spare part in his truck and fixed it immediately.",
        rating: 5
    },
    {
        name: "Ahmed Khan",
        role: "Resident",
        content: "Great service for my dishwasher. Friendly staff and transparent pricing.",
        rating: 4
    }
];

const TestimonialsSection = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 z-0" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Customer Stories</h2>
                    <h3 className="text-4xl md:text-5xl font-bold mb-6">Trusted by <span className="text-gradient">Thousands</span></h3>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        See what our satisfied customers have to say about our premium appliance repair services.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="glass p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-2 group"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex gap-1 mb-4 text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill={i < testimonial.rating ? "currentColor" : "none"} className={i < testimonial.rating ? "" : "text-gray-600"} />
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <User size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                                    <span className="text-xs text-muted-foreground">{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
