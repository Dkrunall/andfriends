'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    image: string;
}

export default function PageHero({ title, subtitle, image }: PageHeroProps) {
    return (
        <div className="relative h-[70vh] w-full overflow-hidden bg-black flex flex-col justify-center items-center text-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 select-none">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />
            </div>

            {/* Content */}
            <div className="relative z-10 px-6 max-w-4xl mx-auto mt-20">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-7xl md:text-9xl font-anton uppercase mb-6 text-transparent leading-none tracking-tighter"
                    style={{ WebkitTextStroke: '2px white' }}
                >
                    {title}
                </motion.h1>

                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-lg md:text-2xl text-gray-200 font-light max-w-2xl mx-auto"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 z-10 animate-bounce"
            >
                <ArrowDown className="w-8 h-8 text-white/50" />
            </motion.div>
        </div>
    );
}
