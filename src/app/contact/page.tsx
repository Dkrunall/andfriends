'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Mail, Plus, Minus } from "lucide-react";
import { useState } from "react";

const contactSlides = [
    {
        id: 0,
        title: ["GET", "IN TOUCH"],
        year: "WORLDWIDE",
        theme: "bg-neon-pink",
        textColor: "text-neon-pink",
        image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2670&auto=format&fit=crop",
    }
];

const contactLinks = [
    {
        title: "MANAGEMENT",
        email: "andfriends26@gmail.com",
    }
];

export default function ContactPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent("Contact Form Submission from &friends");
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:andfriends26@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <main className="bg-black text-white min-h-screen font-sans selection:bg-neon-pink selection:text-black">
            <Navbar themeColor="bg-neon-pink/80 backdrop-blur-md" textColor="text-black" />

            <Hero slides={contactSlides} />

            <div className="bg-black relative z-10 border-t border-gray-800">
                <div className="grid grid-cols-1 lg:grid-cols-2">

                    {/* Left Column: Contact Links */}
                    <div className="border-r border-gray-800 flex flex-col justify-between min-h-[80vh]">
                        <div className="p-8 md:p-16">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-xl md:text-2xl font-light text-gray-300 max-w-xl mb-20 leading-relaxed"
                            >
                                Ready to create something unforgettable? distinct? Whether you're looking to book an artist or plan an entire event, let's make it happen.
                            </motion.p>

                            <div className="flex flex-col gap-12">
                                {[
                                    { email: "andfriends26@gmail.com", label: "MANAGEMENT" }
                                ].map((link, index) => (
                                    <motion.div
                                        key={link.email}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group"
                                    >
                                        <span className="font-mono text-xs text-neon-pink tracking-widest uppercase mb-2 block">
                                            {link.label}
                                        </span>
                                        <a
                                            href={`mailto:${link.email}`}
                                            className="text-2xl md:text-4xl font-anton uppercase tracking-tighter hover:text-neon-pink transition-colors duration-300 flex items-center gap-4 group-hover:gap-6"
                                        >
                                            {link.email}
                                            <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                        </a>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 md:p-16 border-t border-gray-800">
                            <div className="flex flex-col gap-2">
                                <span className="font-mono text-xs text-gray-500 tracking-widest uppercase">
                                    LOCATION
                                </span>
                                <p className="text-xl font-bold uppercase leading-relaxed">
                                    Mumbai, India
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="md:border-t md:border-gray-800 lg:border-t-0 bg-zinc-950 p-8 md:p-16 flex flex-col justify-center">
                        <span className="font-mono text-xs text-neon-pink tracking-widest uppercase mb-8 block">
                            SEND A MESSAGE
                        </span>
                        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type="text"
                                    placeholder="NAME"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-black border-b border-gray-800 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-neon-pink transition-colors font-mono uppercase tracking-widest text-sm"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="EMAIL"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-black border-b border-gray-800 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-neon-pink transition-colors font-mono uppercase tracking-widest text-sm"
                                />
                            </div>
                            <div>
                                <textarea
                                    rows={4}
                                    placeholder="MESSAGE"
                                    required
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full bg-black border-b border-gray-800 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-neon-pink transition-colors font-mono uppercase tracking-widest text-sm resize-none"
                                />
                            </div>
                            <button type="submit" className="bg-neon-pink text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 mt-4 w-full md:w-auto self-start">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            {/* FAQ Section */}
            <section className="py-24 px-6 md:px-12 bg-black border-t border-gray-800">
                <div className="w-full">
                    <span className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-12 block text-center">
                        FREQUENTLY ASKED QUESTIONS
                    </span>
                    <div className="flex flex-col">
                        {[
                            { q: "How do I submit a demo to &FRIENDS?", a: "Please use the 'Demos' email link above. We review all submissions but can only respond to those that fit our current roster needs." },
                            { q: "Do you offer internship programs?", a: "Yes, we offer seasonal internships in our LA and Berlin offices. Keep an eye on our social media for open calls." },
                            { q: "How far in advance should I book an artist?", a: "For international touring, we recommend booking at least 3-6 months in advance. For local events, 1-2 months is typically sufficient." },
                            { q: "Can I hire &FRIENDS for full event production?", a: "Absolutely. Our Services division handles end-to-end production, from concept to execution. Contact us for a consultation." }
                        ].map((faq, index) => (
                            <div key={index} className="border-b border-gray-800 last:border-none">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full py-8 flex items-center justify-between text-left group outline-none"
                                >
                                    <h4 className="text-xl md:text-2xl font-light group-hover:text-neon-pink transition-colors pr-8">
                                        {faq.q}
                                    </h4>
                                    <div className={`flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                                        {openFaq === index ? <Minus className="w-6 h-6 text-neon-pink" /> : <Plus className="w-6 h-6 text-gray-500 group-hover:text-neon-pink" />}
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-gray-400 pb-8 leading-relaxed max-w-2xl">
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
