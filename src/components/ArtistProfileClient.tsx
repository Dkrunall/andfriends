'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Globe, Download, Instagram, Music, Headphones, Facebook, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import { artists } from '@/data/artists';

interface ArtistProfileClientProps {
    artist: typeof artists[0];
}

export default function ArtistProfileClient({ artist }: ArtistProfileClientProps) {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-neon-green selection:text-black">
            {/* Back Navigation */}
            <div className="fixed top-6 left-6 z-50 mix-blend-difference">
                <Link
                    href="/#artists"
                    className="flex items-center gap-2 text-white hover:text-neon-green transition-colors group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-sm uppercase tracking-wider">Back to Roster</span>
                </Link>
            </div>

            <div className="flex flex-col lg:flex-row min-h-screen">
                {/* Left Column: Giant Name */}
                <div className="lg:w-1/2 relative lg:sticky lg:top-0 lg:h-screen flex flex-col items-center lg:items-start justify-center p-6 border-r border-gray-900 overflow-hidden bg-black/50 backdrop-blur-sm z-10">
                    <div className="absolute inset-0 bg-grid-white/[0.02]" />
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className={`text-[20vw] lg:text-[15vw] leading-[0.8] font-anton text-center lg:text-left uppercase break-words w-full select-none ${artist.color} opacity-20 lg:opacity-100 transition-colors duration-500`}
                        style={{ WebkitTextStroke: '2px currentColor', WebkitTextFillColor: 'transparent' }}
                    >
                        {artist.name}
                    </motion.h1>

                    {/* Social Icons - Positioned below name */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="mt-8 w-full flex justify-center lg:justify-start gap-6 z-20"
                    >
                        {artist.instagram && (
                            <a
                                href={artist.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:border-neon-green hover:text-neon-green hover:scale-110 transition-all duration-300 bg-black/50 backdrop-blur-sm"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        )}
                        {artist.spotify && (
                            <a
                                href={artist.spotify}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:border-neon-green hover:text-neon-green hover:scale-110 transition-all duration-300 bg-black/50 backdrop-blur-sm"
                            >
                                <Headphones className="w-5 h-5" />
                            </a>
                        )}
                        {artist.soundcloud && (
                            <a
                                href={artist.soundcloud}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:border-neon-green hover:text-neon-green hover:scale-110 transition-all duration-300 bg-black/50 backdrop-blur-sm"
                            >
                                <Music className="w-5 h-5" />
                            </a>
                        )}
                        {artist.facebook && (
                            <a
                                href={artist.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:border-neon-green hover:text-neon-green hover:scale-110 transition-all duration-300 bg-black/50 backdrop-blur-sm"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                        )}
                        {artist.youtube && (
                            <a
                                href={artist.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:border-neon-green hover:text-neon-green hover:scale-110 transition-all duration-300 bg-black/50 backdrop-blur-sm"
                            >
                                <Youtube className="w-5 h-5" />
                            </a>
                        )}

                    </motion.div>
                </div>

                {/* Right Column: Content */}
                <div className="lg:w-1/2 relative z-20">
                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative w-full aspect-[3/4] lg:aspect-square border-b border-gray-900"
                    >
                        <Image
                            src={artist.image}
                            alt={artist.name}
                            fill
                            className={`object-cover grayscale hover:grayscale-0 transition-all duration-700 ${artist.position || 'object-center'}`}
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                        {/* Mobile Name Overlay */}
                        <div className="absolute bottom-6 left-6 lg:hidden">
                            <h2 className={`text-6xl font-anton uppercase text-white drop-shadow-lg ${artist.color}`}>
                                {artist.name}
                            </h2>
                        </div>
                    </motion.div>

                    {/* Info Section */}
                    <div className="p-8 lg:p-16 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="space-y-6"
                        >
                            <div className="space-y-2">
                                <h3 className="text-sm font-mono uppercase text-neon-green tracking-widest">
                                    Genres & Style
                                </h3>
                                <p className="text-xl md:text-2xl font-light text-gray-300 leading-tight">
                                    {artist.role}
                                </p>
                            </div>

                            <div className="h-px w-24 bg-gray-800" />

                            <div className="space-y-4">
                                <h3 className="text-sm font-mono uppercase text-gray-500 tracking-widest">
                                    Biography
                                </h3>
                                <p className="text-gray-400 leading-relaxed max-w-xl">
                                    {artist.bio}
                                </p>
                            </div>
                        </motion.div>


                    </div>
                </div>
            </div>
        </main>
    );
}
