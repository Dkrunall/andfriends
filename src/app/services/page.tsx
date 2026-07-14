'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, ArrowUpRight, Check } from "lucide-react";

const serviceSlides = [
    {
        id: 0,
        title: ["OUR", "EXPERTISE"],
        year: "EST. 2020",
        theme: "bg-neon-lilac",
        textColor: "text-neon-lilac",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2670&auto=format&fit=crop",
    }
];

const services = [
    {
        id: 1,
        title: 'ARTIST MANAGEMENT',
        category: 'Full Service',
        description: "We provide 360-degree career management for artists, overseeing everything from creative direction and brand strategy to day-to-day operations and logistics. Our goal is to amplify your voice and sustain your vision.",
        image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 2,
        title: 'HOSPITALITY MANAGEMENT',
        category: 'Experience',
        description: "Elevating the guest experience through meticulous hospitality curation. Whether it's VIP artist handling or crowd flow management, we ensure every interaction is seamless and memorable.",
        image: 'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 3,
        title: 'ARTIST TOUR',
        category: 'Global',
        description: "Comprehensive touring solutions including routing, logistics, technical production, and on-the-ground support. We take your show on the road, ensuring consistent quality in every city.",
        image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 4,
        title: 'CONCEPT CREATION',
        category: 'Innovation',
        description: "From stage design to immersive installations, we turn abstract ideas into tangible realities. Our creative team works with you to build unique visual identities for events and performances.",
        image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 5,
        title: 'BRANDING',
        category: 'Identity',
        description: "Building sonic and visual brands that resonate. We offer logo design, merchandise strategy, and digital presence management to ensure your brand stands out in a crowded market.",
        image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&q=80&w=800',
    }
];

export default function ServicesPage() {
    const [expandedService, setExpandedService] = useState<number | null>(1);

    const toggleService = (id: number) => {
        setExpandedService(expandedService === id ? null : id);
    };

    return (
        <main className="bg-black text-white min-h-screen font-sans selection:bg-neon-pink selection:text-black">
            <Navbar themeColor="bg-neon-lilac/80 backdrop-blur-md" textColor="text-black" />

            <Hero slides={serviceSlides} />

            <div className="bg-black relative z-10 border-t border-gray-800">
                <div className="py-24 px-6 md:px-12 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <p className="text-xl md:text-2xl font-light text-gray-300 max-w-2xl leading-relaxed">
                            Comprehensive solutions for your event and production needs. We bring vision to reality with precision, style, and a deep understanding of the culture.
                        </p>
                    </motion.div>

                    {/* Accordion List */}
                    <div className="flex flex-col">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="border-b border-gray-800"
                            >
                                <button
                                    onClick={() => toggleService(service.id)}
                                    className="w-full py-12 flex flex-col md:flex-row md:items-center justify-between group outline-none text-left"
                                >
                                    <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
                                        <span className="font-mono text-xs md:text-sm text-neon-lilac tracking-widest uppercase">
                                            0{index + 1} / {service.category}
                                        </span>
                                        <h3 className="text-4xl md:text-6xl font-anton uppercase tracking-tighter transition-colors duration-300 group-hover:text-gray-300">
                                            {service.title}
                                        </h3>
                                    </div>
                                    <div className="mt-4 md:mt-0 flex items-center justify-between w-full md:w-auto">
                                        <span className={`p-2 rounded-full border border-gray-800 transition-all duration-300 ${expandedService === service.id ? 'bg-white text-black rotate-45' : 'text-white group-hover:border-white'}`}>
                                            <Plus className="w-6 h-6" />
                                        </span>
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {expandedService === service.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pb-12 pt-2 grid grid-cols-1 lg:grid-cols-2 gap-12">
                                                <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-sm">
                                                    <Image
                                                        src={service.image}
                                                        alt={service.title}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div className="flex flex-col justify-between">
                                                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                                                        {service.description}
                                                    </p>
                                                    <div className="mt-8">
                                                        <button className="flex items-center gap-2 text-neon-lilac font-mono uppercase tracking-widest text-sm hover:text-white transition-colors group">
                                                            Inquire Now <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* The Process Section */}
            <section className="py-24 px-6 md:px-12 bg-zinc-950 border-t border-gray-800">
                <div className="w-full">
                    <span className="font-mono text-xs text-neon-lilac tracking-widest uppercase mb-12 block">
                        HOW WE WORK
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {[
                            { step: "01", title: "Discovery", desc: "We start by understanding your vision, goals, and audience to build a solid foundation." },
                            { step: "02", title: "Strategy", desc: "Developing a roadmap that aligns creative concepts with logistical realities." },
                            { step: "03", title: "Execution", desc: "Bringing the vision to life with precision production and seamless coordination." },
                            { step: "04", title: "Amplification", desc: "Extending the impact through post-event content and brand storytelling." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative"
                            >
                                <div className="text-6xl font-anton text-gray-800 mb-6 opacity-30">
                                    {item.step}
                                </div>
                                <h3 className="text-2xl font-bold uppercase mb-4 text-white">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                                {i < 3 && (
                                    <div className="hidden md:block absolute top-8 right-0 w-full h-px bg-gradient-to-r from-gray-800 to-transparent transform translate-x-12" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-32 px-6 md:px-12 bg-black border-t border-gray-800 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-neon-lilac/5 z-0 pointer-events-none" />
                <div className="w-full relative z-10">
                    <div className="mb-8 text-neon-lilac">
                        <Check className="w-12 h-12 mx-auto" />
                    </div>
                    <blockquote className="text-3xl md:text-5xl font-light italic leading-tight text-gray-200 mb-12">
                        "&FRIENDS brought an energy to the stage that was unmatched. Their deep understanding of the crowd and cultural nuance made them a highlight of our festival season in Goa."
                    </blockquote>
                    <cite className="not-italic">
                        <span className="block font-anton uppercase text-xl text-white">Arjun Khanna</span>
                        <span className="block font-mono text-xs text-gray-500 uppercase tracking-widest mt-2">Curator, Sunburn Festival</span>
                    </cite>
                </div>
            </section>

            <Footer />
        </main>
    );
}
