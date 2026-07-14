'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import BookingModal from './BookingModal';

export default function InstantBookingButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
                <motion.button
                    onClick={() => setIsModalOpen(true)}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="group flex items-center gap-2 bg-neon-green text-black px-6 py-3 rounded-full shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_30px_rgba(204,255,0,0.6)] transition-shadow duration-300 cursor-pointer"
                >
                    <span className="font-anton text-lg md:text-xl uppercase tracking-wide">
                        INSTANT BOOKING
                    </span>
                    <div className="bg-black text-neon-green rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
                        <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                </motion.button>
            </div>

            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}

