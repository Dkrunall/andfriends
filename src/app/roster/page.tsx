'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { artists } from "@/data/artists";

const rosterSlides = [
    {
        id: 0,
        title: ["THE", "ROSTER"],
        year: "2025",
        theme: "bg-neon-blue",
        textColor: "text-neon-blue",
        image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2670&auto=format&fit=crop",
    }
];

export default function RosterPage() {
    return (
        <main className="bg-black text-white min-h-screen font-sans selection:bg-neon-pink selection:text-black">
            <Navbar themeColor="bg-neon-blue/80 backdrop-blur-md" textColor="text-black" />

            {/* Reused Hero Component with Roster Content */}
            <Hero slides={rosterSlides} />

            <div className="bg-black relative z-10">
                {/* Introduction */}
                <div className="py-24 px-6 md:px-12 w-full text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-xl md:text-3xl font-light text-gray-300 max-w-4xl mx-auto leading-relaxed"
                    >
                        Meet the talent that defines our sound. A curated selection of artists pushing the boundaries of music, performance, and visual art.
                    </motion.p>
                </div>

                {/* Custom Artist Grid - Full Width & Premium */}
                <div className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-800">
                    {artists.map((artist, index) => (
                        <Link href={`/roster/${artist.slug}`} key={artist.name}>
                            <motion.div
                                className="relative h-[500px] md:h-[700px] group cursor-pointer border-r border-b border-gray-800 overflow-hidden"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Image
                                    src={artist.image}
                                    alt={artist.name}
                                    fill
                                    className={`object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 ${artist.position || 'object-center'}`}
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-500" />

                                {/* Interactive Overlay */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                                    <h3
                                        className={`text-[12vw] md:text-[5rem] lg:text-[6rem] font-anton uppercase text-transparent leading-none transition-all duration-500 group-hover:text-white group-hover:scale-110`}
                                        style={{ WebkitTextStroke: '1px white' }}
                                    >
                                        {artist.name}
                                    </h3>
                                    <span className="mt-4 px-4 py-1 border border-white/50 text-xs font-mono tracking-widest uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                        View Profile
                                    </span>
                                </div>

                                {/* Hover details */}
                                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    <p className="text-white/80 font-mono text-sm max-w-[70%] text-left">
                                        {artist.role}
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Latest Releases Section */}
            <section className="py-24 px-6 md:px-12 bg-zinc-950 border-t border-gray-800">
                <div className="w-full">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <span className="font-mono text-xs text-neon-blue tracking-widest uppercase mb-4 block">
                                FRESH DROPS
                            </span>
                            <h2 className="text-4xl md:text-6xl font-anton uppercase tracking-tight">
                                Latest Releases
                            </h2>
                        </div>
                        <Link href="https://spotify.com" target="_blank" className="hidden md:flex items-center gap-2 text-sm font-mono uppercase tracking-widest hover:text-neon-blue transition-colors">
                            Listen on Spotify <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { title: "Neon Nights", artist: "Alex Rivera", image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=800&auto=format&fit=crop" },
                            { title: "Echoes", artist: "Sarah Chen", image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=800&auto=format&fit=crop" },
                            { title: "Midnight Sun", artist: "Marcus Thorne", image: "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=800&auto=format&fit=crop" },
                            { title: "Velvet Rope", artist: "Isabella Rossi", image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=800&auto=format&fit=crop" }
                        ].map((release, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="aspect-square relative overflow-hidden mb-4 bg-gray-900">
                                    <Image
                                        src={release.image}
                                        alt={release.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                            <Play className="w-5 h-5 ml-1 fill-current" />
                                        </div>
                                    </div>
                                </div>
                                <h4 className="font-bold uppercase text-lg leading-none mb-1 group-hover:text-neon-blue transition-colors">{release.title}</h4>
                                <p className="text-gray-400 text-sm font-mono uppercase">{release.artist}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Us CTA */}
            <section className="py-32 px-6 text-center border-t border-gray-800 bg-gradient-to-b from-black to-zinc-900">
                <div className="w-full">
                    <h2 className="text-[10vw] md:text-8xl font-anton uppercase leading-none mb-8 text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
                        Join The Family
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                        We are always looking for unique voices and boundary-pushing talent.
                        If you think you have what it takes to be part of &FRIENDS, we want to hear from you.
                    </p>
                    <Link href="/contact" className="inline-block border border-white px-12 py-4 text-sm font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                        Submit Demo
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
