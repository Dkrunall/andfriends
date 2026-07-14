'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const eventSlides = [
  {
    id: 0,
    title: ["UPCOMING", "& PAST"],
    year: "2024-25",
    theme: "bg-neon-red",
    textColor: "text-neon-red",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2670&auto=format&fit=crop",
  }
];

const events = [
  {
    id: 101,
    title: "IP-SYNK (HARD TECH)",
    date: "MAR 2025",
    location: "MANCHESTER, UK",
    venue: "Festival Grounds",
    image: "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=800&auto=format&fit=crop",
    ticketLink: "#",
    status: "upcoming"
  },
  {
    id: 102,
    title: "F2F",
    date: "FEB 2025",
    location: "PARIS, FR",
    venue: "Festival Grounds",
    image: "https://images.unsplash.com/photo-1514525253440-b393452e3383?q=80&w=800&auto=format&fit=crop",
    ticketLink: "#",
    status: "upcoming"
  },
  {
    id: 103,
    title: "TULUM TALES",
    date: "JAN 2025",
    location: "TULUM, MX",
    venue: "Festival Grounds",
    image: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=800&auto=format&fit=crop",
    ticketLink: "#",
    status: "upcoming"
  },
  {
    id: 104,
    title: "RISE OF EUROPA",
    date: "DEC 2024",
    location: "AMSTERDAM, NL",
    venue: "Festival Grounds",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop",
    ticketLink: "#",
    status: "upcoming"
  }
];

export default function EventsPage() {
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(events[0].id);

  return (
    <main className="bg-black text-white min-h-screen font-sans selection:bg-neon-pink selection:text-black">
      <Navbar themeColor="bg-neon-red/80 backdrop-blur-md" textColor="text-black" />

      <Hero slides={eventSlides} />

      <div className="bg-black relative z-10 border-t border-gray-800">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Column: Event List */}
          <div className="border-r border-gray-800">
            <div className="py-20 px-6 md:px-12 border-b border-gray-800">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-xl md:text-2xl font-light text-gray-300 max-w-xl"
              >
                Relive the energy. A chronology of our most iconic gatherings across the globe.
              </motion.p>
            </div>

            <div>
              {events.map((event) => (
                <motion.div
                  key={event.id}
                  className="group relative border-b border-gray-800 p-8 md:p-16 cursor-pointer overflow-hidden"
                  onMouseEnter={() => setHoveredEvent(event.id)}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative z-10 flex flex-col gap-4 transition-colors duration-300">
                    <div className="flex justify-between items-start">
                      <span className="font-mono text-xs md:text-sm tracking-[0.2em] text-neon-red mb-2 block">
                        {event.date}
                      </span>
                      <span className="font-mono text-xs md:text-sm tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors duration-300 block">
                        {event.location}
                      </span>
                    </div>

                    <h3 className="text-4xl md:text-7xl font-anton uppercase tracking-tighter leading-none group-hover:text-neon-red transition-colors duration-300">
                      {event.title}
                    </h3>
                  </div>

                  {/* Hover Background Reveal - Subtle Gradient instead of solid white */}
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

          {/* Right Column: Sticky Image Preview */}
          <div className="hidden lg:block relative bg-gray-900 overflow-hidden h-[100vh]">
            <div className="sticky top-0 h-full w-full">
              <AnimatePresence mode="wait">
                {hoveredEvent && (
                  <motion.div
                    key={hoveredEvent}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Image
                      src={events.find(e => e.id === hoveredEvent)?.image || ''}
                      alt="Event Preview"
                      fill
                      className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                    {/* Large Date Overlay */}
                    <div className="absolute bottom-12 left-12">
                      <h2 className="text-[8vw] font-anton text-transparent leading-none" style={{ WebkitTextStroke: '2px white' }}>
                        {events.find(e => e.id === hoveredEvent)?.date.split(' ')[0]}
                      </h2>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>





      <Footer />
    </main>
  );
}
