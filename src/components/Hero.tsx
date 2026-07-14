'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Play, Heart, ArrowLeft, ArrowRight, Palette } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Slide {
    id: number;
    title: string[];
    year: string;
    theme: string;
    textColor: string;
    image: string;
    video?: string;
}

const defaultSlides: Slide[] = [
    {
        id: 0,
        title: ["IP-SYNK", "(HARD TECH)"],
        year: "2025",
        theme: "bg-neon-lilac",
        textColor: "text-neon-lilac",
        video: "/synk.mp4",
        image: "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=2670&auto=format&fit=crop",
    },
    {
        id: 1,
        title: ["F2F", "(LIVE)"],
        year: "2025",
        theme: "bg-neon-red",
        textColor: "text-neon-red",
        video: "/f2f.mp4",
        image: 'https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=2670&auto=format&fit=crop',
    },
];

interface HeroProps {
    onThemeChange?: (theme: string) => void;
    slides?: Slide[];
}

export default function Hero({ onThemeChange, slides = defaultSlides }: HeroProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState<'left' | 'right' | null>(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const currentSlide = slides[currentSlideIndex];

    useEffect(() => {
        if (onThemeChange) {
            onThemeChange(currentSlide.theme);
        }
    }, [currentSlideIndex, onThemeChange, currentSlide.theme]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            // Determine left or right side of window
            if (e.clientX < window.innerWidth / 2) {
                setCursorVariant('left');
            } else {
                setCursorVariant('right');
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleNavigation = () => {
        if (slides.length <= 1) return;

        if (cursorVariant === 'left') {
            setCurrentSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
        } else {
            setCurrentSlideIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }
    };

    return (
        <div
            className={`relative h-[100svh] w-full overflow-hidden bg-black ${currentSlide.textColor} font-sans selection:bg-neon-pink selection:text-white ${slides.length > 1 ? 'cursor-none' : 'cursor-default'} transition-colors duration-700`}
            onClick={handleNavigation}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Custom Cursor Arrow */}
            {slides.length > 1 && (
                <motion.div
                    className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
                    animate={{
                        x: mousePosition.x - 96,
                        y: mousePosition.y - 96,
                        opacity: isHovered ? 1 : 0
                    }}
                    transition={{
                        type: 'tween',
                        ease: 'linear',
                        duration: 0.1,
                        opacity: { duration: 0.2 }
                    }}
                >
                    {cursorVariant === 'left' ? (
                        <ArrowLeft className={`w-48 h-48 ${currentSlide.textColor} stroke-[0.5]`} />
                    ) : (
                        <ArrowRight className={`w-48 h-48 ${currentSlide.textColor} stroke-[0.5]`} />
                    )}
                </motion.div>
            )}

            {/* Background Media (Video or Image) */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide.id}
                    className="absolute inset-0 z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    {currentSlide.video ? (
                        <video
                            src={currentSlide.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="object-cover w-full h-full opacity-60"
                        />
                    ) : (
                        <Image
                            src={currentSlide.image}
                            alt="Background"
                            fill
                            className="object-cover opacity-60"
                            priority
                        />
                    )}
                    <div className="absolute inset-0 bg-black/40" />
                </motion.div>
            </AnimatePresence>

            {/* Main Content */}
            <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 pointer-events-none">

                {/* Large Typography */}
                <div className="mt-20">
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={currentSlideIndex}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className={`text-[12vw] leading-[0.85] font-black uppercase tracking-tighter ${currentSlide.textColor} drop-shadow-lg`}
                        >
                            {currentSlide.title[0]}
                            <br />
                            {currentSlide.title[1]}
                        </motion.h1>
                    </AnimatePresence>

                    <motion.p
                        key={`year-${currentSlideIndex}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-4 text-xs font-bold tracking-[0.2em] text-white"
                    >
                        {currentSlide.year}
                    </motion.p>
                </div>

                {/* Bottom Controls - Removed per user request */}
                {/* <div className="absolute bottom-12 left-6 md:left-12 flex items-center space-x-8 pointer-events-auto">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="group cursor-none"
                    >
                        <Play className={`w-10 h-10 md:w-16 md:h-16 ${currentSlide.textColor} stroke-[0.5] fill-transparent group-hover:fill-current/10 transition-colors`} />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="group cursor-none"
                    >
                        <Heart className={`w-10 h-10 md:w-16 md:h-16 ${currentSlide.textColor} stroke-[0.5] group-hover:fill-current/10 transition-colors`} />
                    </motion.button>
                </div> */}

                {/* Carousel Dots */}
                {slides.length > 1 && (
                    <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4 pointer-events-auto">
                        {slides.map((_, i) => (
                            <div
                                key={i}
                                className={`w-2 h-2 rounded-full border border-white/50 transition-all duration-300 ${i === currentSlideIndex ? 'w-8 bg-white border-white' : 'bg-transparent'}`}
                            />
                        ))}
                    </div>
                )}

                {/* Bottom Right Icon */}
                <div className="absolute bottom-12 right-6 md:right-12 pointer-events-auto">
                    <div className="w-12 h-12 rounded-full bg-green-900/80 flex items-center justify-center border border-green-500/50 hover:bg-green-800 transition-colors cursor-pointer">
                        <Palette className="w-6 h-6 text-green-400" />
                    </div>
                </div>

            </div>
        </div>
    );
}
