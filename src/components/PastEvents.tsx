'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const events = [
    {
        id: 101,
        date: 'MAR 2025',
        name: 'IP-SYNK (HARD TECH)',
        location: 'MANCHESTER, UK',
        image: 'https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 102,
        date: 'FEB 2025',
        name: 'F2F',
        location: 'PARIS, FR',
        image: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 103,
        date: 'JAN 2025',
        name: 'TULUM TALES',
        location: 'TULUM, MX',
        image: 'https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 104,
        date: 'DEC 2024',
        name: 'RISE OF EUROPA',
        location: 'AMSTERDAM, NL',
        image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop'
    }
];

export default function PastEvents() {
    const [hoveredEvent, setHoveredEvent] = useState<number | null>(events[0].id);

    return (
        <section className="bg-black text-white border-t border-gray-800">
            <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* Left Column: List */}
                <div className="border-r border-gray-800 flex flex-col min-h-[60vh]">
                    <div className="py-20 px-6 md:px-12 border-b border-gray-800">
                        <h2 className="text-6xl md:text-8xl uppercase tracking-tighter font-anton leading-none">
                            Upcoming & Past
                        </h2>
                    </div>

                    <div className="flex-grow flex flex-col justify-center">
                        {events.map((event) => (
                            <motion.div
                                key={event.id}
                                className="group relative border-b border-gray-800 p-6 md:p-12 cursor-pointer overflow-hidden"
                                onMouseEnter={() => setHoveredEvent(event.id)}
                            >
                                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors duration-300">
                                    <h3 className="text-3xl md:text-5xl font-anton uppercase tracking-tight group-hover:text-neon-lilac transition-colors duration-300">
                                        {event.name}
                                    </h3>
                                    <div className="flex flex-col md:items-end font-mono text-sm tracking-widest uppercase text-gray-400 group-hover:text-white transition-colors duration-300">
                                        <span>{event.date}</span>
                                        <span>{event.location}</span>
                                    </div>
                                </div>

                                {/* Hover Background Reveal */}
                                <motion.div
                                    className="absolute inset-0 bg-white/5 z-0"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Image Preview */}
                <div className="hidden lg:block relative bg-gray-900 overflow-hidden">
                    <div className="relative h-full w-full">
                        <AnimatePresence mode="wait">
                            {hoveredEvent && (
                                <motion.div
                                    key={hoveredEvent}
                                    className="absolute inset-0"
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {events.find(e => e.id === hoveredEvent)?.image && (
                                        <Image
                                            src={events.find(e => e.id === hoveredEvent)?.image!}
                                            alt="Event Preview"
                                            fill
                                            className="object-cover opacity-60"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* CRT/Overlay Effect */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
                    </div>
                </div>

            </div>
        </section>
    );
}
