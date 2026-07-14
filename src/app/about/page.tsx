'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const aboutSlides = [
    {
        id: 0,
        title: ["WHO", "WE ARE"],
        year: "EST. 2020",
        theme: "bg-neon-green",
        textColor: "text-neon-green",
        image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=2670&auto=format&fit=crop",
    }
];

export default function AboutPage() {
    return (
        <main className="bg-black text-white min-h-screen font-sans selection:bg-neon-pink selection:text-black">
            <Navbar themeColor="bg-neon-green/80 backdrop-blur-md" textColor="text-black" />

            <Hero slides={aboutSlides} />

            <div className="bg-black relative z-10 border-t border-gray-800">

                {/* Introduction */}
                <section className="py-24 px-6 md:px-12 w-full text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-5xl font-light leading-tight max-w-5xl mx-auto mb-12"
                    >
                        <span className="text-gray-500">We are more than a label.</span> We are a movement dedicated to the curation of sound, visual art, and immersive experiences.
                    </motion.h2>
                    <div className="w-px h-24 bg-gradient-to-b from-transparent via-gray-500 to-transparent mx-auto" />
                </section>

                {/* Split Content: The Collective */}
                <section className="grid grid-cols-1 lg:grid-cols-2 border-t border-gray-800">
                    <div className="relative h-[60vh] lg:h-auto min-h-[600px] border-b lg:border-b-0 lg:border-r border-gray-800">
                        <Image
                            src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2670&auto=format&fit=crop"
                            alt="The Collective"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>
                    <div className="p-12 lg:p-24 flex flex-col justify-center">
                        <span className="font-mono text-xs text-neon-green tracking-widest uppercase mb-6 block">
                            THE COLLECTIVE
                        </span>
                        <h3 className="text-5xl md:text-7xl font-anton uppercase tracking-tighter mb-8">
                            Entertainment &<br />Hospitality
                        </h3>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
                            Founded in 2020, &friends is a multidisciplinary entertainment and hospitality company specializing in Artist Management, Branding, Hospitality Management, Concept Curation, and Artist Touring.
                            <br /><br />
                            We are the creative minds and concept creators behind premier venues and experiences, including Opa Bar & Café, Waikiki Mumbai, The Nest by Waikiki, and Azule Goa.
                        </p>
                    </div>
                </section>

                {/* Core Values Grid */}
                <section className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-800">
                    {[
                        { title: "COMMUNITY", desc: "Building a global family of like-minded souls." },
                        { title: "QUALITY", desc: "Uncompromising standards in sound and production." },
                        { title: "INNOVATION", desc: "Pushing the envelope of what an event can be." }
                    ].map((item, index) => (
                        <div key={item.title} className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-gray-800 group hover:bg-white/5 transition-colors duration-300">
                            <h4 className="text-3xl font-anton uppercase tracking-tight mb-4 group-hover:text-neon-green transition-colors duration-300">
                                {item.title}
                            </h4>
                            <p className="text-gray-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </section>

            </div>

            {/* Management Section */}
            <section className="py-24 px-6 md:px-12 w-full border-t border-gray-800">
                <div className="w-full text-center mb-16">
                    <span className="font-mono text-xs text-neon-green tracking-widest uppercase mb-6 block">
                        LEADERSHIP
                    </span>
                    <h2 className="text-4xl md:text-6xl font-anton uppercase tracking-tight">
                        Management
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-12 max-w-md mx-auto">
                    {[
                        { name: "&FRIENDS", email: "andfriends26@gmail.com", role: "Management" }
                    ].map((person, index) => (
                        <div key={person.name} className="p-8 border border-gray-800 hover:border-neon-green transition-colors duration-300 text-center group">
                            <h3 className="text-2xl font-anton uppercase tracking-wide mb-2 group-hover:text-neon-green transition-colors">
                                {person.name}
                            </h3>
                            <p className="font-mono text-xs text-neon-green tracking-widest uppercase mb-4">
                                {person.role}
                            </p>
                            <div className="w-8 h-px bg-gray-800 mx-auto my-4 group-hover:bg-neon-green transition-colors" />
                            <a href={`mailto:${person.email}`} className="font-mono text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-widest">
                                {person.email}
                            </a>
                        </div>
                    ))}
                </div>
            </section>



            <Footer />
        </main>
    );
}
