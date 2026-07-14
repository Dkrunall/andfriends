'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, Calendar, User, Mail, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import { artists } from '@/data/artists';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
    const [step, setStep] = useState<'select' | 'form'>('select');
    const [selectedArtist, setSelectedArtist] = useState<typeof artists[0] | null>(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [details, setDetails] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Booking Request: ${selectedArtist?.name}`);
        const body = encodeURIComponent(`Artist: ${selectedArtist?.name}\nClient Name: ${name}\nClient Email: ${email}\nEvent Date: ${date}\n\nDetails:\n${details}`);
        window.location.href = `mailto:andfriends26@gmail.com?subject=${subject}&body=${body}`;
    };

    const handleArtistSelect = (artist: typeof artists[0]) => {
        setSelectedArtist(artist);
        setStep('form');
    };

    const handleBack = () => {
        setStep('select');
        setSelectedArtist(null);
    };

    // Reset interactions when closing
    const handleClose = () => {
        onClose();
        setTimeout(() => {
            setStep('select');
            setSelectedArtist(null);
        }, 300);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 flex items-center justify-center z-[70] p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-[#111] border border-gray-800 w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl pointer-events-auto flex flex-col"
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-gray-800 flex items-center justify-between bg-black/50">
                                <div className="flex items-center gap-4">
                                    {step === 'form' && (
                                        <button
                                            onClick={handleBack}
                                            className="p-2 hover:bg-gray-800 rounded-full transition-colors"
                                        >
                                            <ChevronLeft className="w-5 h-5 text-white" />
                                        </button>
                                    )}
                                    <h2 className="text-2xl md:text-3xl font-anton uppercase text-white tracking-wide">
                                        {step === 'select' ? 'SELECT ARTIST' : `BOOK ${selectedArtist?.name}`}
                                    </h2>
                                </div>
                                <button
                                    onClick={handleClose}
                                    className="p-2 hover:bg-gray-800 rounded-full transition-colors group"
                                >
                                    <X className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
                                {step === 'select' ? (
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                        {artists.map((artist) => (
                                            <motion.button
                                                key={artist.name}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => handleArtistSelect(artist)}
                                                className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-900 w-full text-left"
                                            >
                                                <Image
                                                    src={artist.image}
                                                    alt={artist.name}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                                                <div className="absolute inset-0 p-5 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                                    <h3 className="font-anton text-3xl uppercase text-white leading-none mb-2 drop-shadow-md">
                                                        {artist.name}
                                                    </h3>
                                                    <div className="h-[1px] w-12 bg-neon-green mb-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                                    <p className="text-xs font-mono uppercase text-gray-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                                        {artist.role}
                                                    </p>
                                                </div>
                                            </motion.button>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="max-w-xl mx-auto py-8">
                                        <form className="space-y-6" onSubmit={handleSubmit}>
                                            {/* Pre-filled Artist Field */}
                                            <div className="space-y-2">
                                                <label className="text-xs font-mono uppercase text-neon-green ml-1">Selected Artist</label>
                                                <div className="relative opacity-80">
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neon-green" />
                                                    <input
                                                        type="text"
                                                        readOnly
                                                        value={`${selectedArtist?.name} | ${selectedArtist?.role}`}
                                                        className="w-full bg-[#1a1a1a] border border-neon-green/30 rounded-xl py-4 pl-12 pr-4 text-white font-mono text-sm focus:outline-none cursor-not-allowed"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs font-mono uppercase text-gray-400 ml-1">Your Name</label>
                                                <div className="relative">
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                                    <input
                                                        type="text"
                                                        required
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-neon-green transition-colors"
                                                        placeholder="Enter your full name"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-mono uppercase text-gray-400 ml-1">Email Address</label>
                                                    <div className="relative">
                                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                                        <input
                                                            type="email"
                                                            required
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-neon-green transition-colors"
                                                            placeholder="john@example.com"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-mono uppercase text-gray-400 ml-1">Event Date</label>
                                                    <div className="relative">
                                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                                        <input
                                                            type="date"
                                                            required
                                                            value={date}
                                                            onChange={(e) => setDate(e.target.value)}
                                                            className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-neon-green transition-colors [color-scheme:dark]"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs font-mono uppercase text-gray-400 ml-1">Event Details</label>
                                                <div className="relative">
                                                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                                                    <textarea
                                                        rows={4}
                                                        required
                                                        value={details}
                                                        onChange={(e) => setDetails(e.target.value)}
                                                        className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-neon-green transition-colors resize-none"
                                                        placeholder="Tell us about your event..."
                                                    />
                                                </div>
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full bg-neon-green text-black font-anton uppercase text-xl py-4 rounded-xl hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(204,255,0,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                                            >
                                                Submit Booking Request
                                            </button>
                                        </form>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
