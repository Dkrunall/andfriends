'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram } from 'lucide-react';

import { useRef, useEffect, useState } from 'react';
import { artists } from '@/data/artists';


export default function Artists() {
    return (
        <section id="artists" className="bg-black relative">
            {/* Header */}
            <div className="py-8 px-6 md:px-12">
                <motion.h2
                    className="text-6xl md:text-8xl uppercase tracking-tighter mb-4 text-white font-anton font-normal text-left"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    OUR ROSTER
                </motion.h2>
            </div>

            {/* First Row (4 items) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-gray-800">
                {artists.slice(0, 4).map((artist, index) => (
                    <Link href={`/roster/${artist.slug}`} key={artist.name}>
                        <motion.div
                            className="relative h-[400px] md:h-[600px] group cursor-pointer border-r border-b border-gray-800 overflow-hidden"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Image
                                src={artist.image}
                                alt={artist.name}
                                fill
                                className={`object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100 ${artist.position || 'object-center'}`}
                            />

                            {/* Centered Outlined Text */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
                                <h3
                                    className={`text-[15vw] md:text-[6rem] lg:text-[5rem] font-anton uppercase text-transparent leading-none transition-colors duration-300 group-hover:${artist.color}`}
                                    style={{ WebkitTextStroke: '1px white' }}
                                >
                                    {artist.name}
                                </h3>
                                <p className="text-white/70 font-mono uppercase text-[10px] mt-2 group-hover:text-white transition-colors max-w-[80%] text-center leading-tight px-4">
                                    {artist.role}
                                </p>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>

            {/* Second Row (3 items) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-gray-800">
                {artists.slice(4).map((artist, index) => (
                    <Link href={`/roster/${artist.slug}`} key={artist.name}>
                        <motion.div
                            className="relative h-[400px] md:h-[600px] group cursor-pointer border-r border-b border-gray-800 overflow-hidden"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index + 4) * 0.1 }}
                        >
                            <Image
                                src={artist.image}
                                alt={artist.name}
                                fill
                                className={`object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100 ${artist.position || 'object-center'}`}
                            />

                            {/* Centered Outlined Text */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
                                <h3
                                    className={`text-[15vw] md:text-[8rem] lg:text-[7rem] font-anton uppercase text-transparent leading-none transition-colors duration-300 group-hover:${artist.color}`}
                                    style={{ WebkitTextStroke: '1px white' }}
                                >
                                    {artist.name}
                                </h3>
                                <p className="text-white/70 font-mono uppercase text-[10px] mt-2 group-hover:text-white transition-colors max-w-[80%] text-center leading-tight px-4">
                                    {artist.role}
                                </p>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
