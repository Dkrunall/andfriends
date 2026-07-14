'use client';

import { Menu, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
    themeColor?: string;
    textColor?: string;
}

export default function Navbar({ themeColor = 'bg-neon-lilac', textColor = 'text-black' }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuItems = [
        { label: 'ROSTER', href: '/roster' },
        { label: 'EVENTS', href: '/events' },
        { label: 'SERVICES', href: '/services' },
        { label: 'ABOUT', href: '/about' },
        { label: 'CONTACT', href: '/contact' },
    ];

    const menuVars = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0] as const,
            },
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1] as const,
            },
        },
    };

    const containerVars = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1,
            },
        },
        open: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.09,
                staggerDirection: 1,
            },
        },
    };

    const mobileLinkVars = {
        initial: {
            y: "30vh",
            transition: {
                duration: 0.5,
                ease: [0.37, 0, 0.63, 1] as const,
            },
        },
        open: {
            y: 0,
            transition: {
                ease: [0, 0.55, 0.45, 1] as const,
                duration: 0.7,
            },
        },
    };

    return (
        <>
            <nav className="fixed w-full z-50 top-4 flex flex-col items-center justify-center pointer-events-none">
                {/* Main Bar */}
                <div className={`${themeColor} ${textColor} px-8 py-2 w-[90%] md:w-[70%] max-w-4xl flex items-center justify-between shadow-lg pointer-events-auto transition-colors duration-500 rounded-full relative z-50`}>
                    {/* Left: Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl md:text-3xl font-black tracking-tighter uppercase hover:opacity-70 transition-opacity">
                            &FRIENDS
                        </Link>
                    </div>

                    {/* Right: Hamburger Menu */}
                    <button onClick={toggleMenu} className="flex items-center justify-center w-14 h-14 hover:opacity-70 transition-opacity focus:outline-none">
                        <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isOpen ? <X className="w-10 h-10 stroke-[1.5]" /> : <Menu className="w-10 h-10 stroke-[1.5]" />}
                        </motion.div>
                    </button>
                </div>


            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed inset-0 bg-black z-40 origin-top flex flex-col items-center justify-center"
                    >
                        <motion.div
                            variants={containerVars}
                            initial="initial"
                            animate="open"
                            exit="initial"
                            className="flex flex-col space-y-8 text-center"
                        >
                            {menuItems.map((item, index) => (
                                <div key={item.label} className="overflow-hidden">
                                    <motion.div variants={mobileLinkVars}>
                                        <Link
                                            href={item.href}
                                            onClick={toggleMenu}
                                            className="text-[12vw] md:text-7xl font-anton text-transparent hover:text-neon-lilac transition-colors duration-300"
                                            style={{ WebkitTextStroke: '1px white' }}
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
