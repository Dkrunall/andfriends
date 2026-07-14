'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';

const services = [
    {
        title: 'ARTIST MANAGEMENT',
        category: 'Full Service',
        image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800',
    },
    {
        title: 'HOSPITALITY MANAGEMENT',
        category: 'Experience',
        image: 'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80&w=800',
    },
    {
        title: 'ARTIST TOUR',
        category: 'Global',
        image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800',
    },
    {
        title: 'CONCEPT CREATION',
        category: 'Innovation',
        image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800',
    },
    {
        title: 'BRANDING',
        category: 'Identity',
        image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&q=80&w=800',
    }
];

export default function Services() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section id="services" className="py-20 bg-black text-white selection:bg-neon-pink selection:text-black">
            <div className="max-w-[1920px] mx-auto px-6 md:px-12">

                {/* Section Header */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-8xl uppercase tracking-tighter mb-12 text-white font-anton font-normal"
                >
                    OUR EXPERTISE
                </motion.h2>

                {/* Horizontal Scroll Container */}
                <div
                    ref={scrollRef}
                    className={`flex space-x-6 overflow-x-auto pb-8 scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} active:cursor-grabbing`}
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex-shrink-0 w-[85vw] md:w-[600px] h-[300px] md:h-[400px] group relative pointer-events-none md:pointer-events-auto overflow-hidden border border-gray-800 hover:border-neon-lilac transition-colors duration-500"
                        >
                            {/* Image with Grayscale to Color Effect */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 pointer-events-none"
                                draggable={false}
                            />

                            {/* Dark Gradient Overlay for text legibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="overflow-hidden mb-2">
                                    <span className="text-xs font-bold uppercase tracking-widest text-neon-green block transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                        {service.category}
                                    </span>
                                </div>

                                <h3 className="text-3xl md:text-5xl uppercase tracking-tighter text-white font-anton group-hover:text-neon-lilac transition-colors duration-300">
                                    {service.title}
                                </h3>
                            </div>

                            {/* Decorative Line */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-neon-lilac transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

                        </motion.div>
                    ))}

                    {/* Spacer for right padding */}
                    <div className="w-6 md:w-12 flex-shrink-0" />
                </div>

            </div>
        </section>
    );
}
