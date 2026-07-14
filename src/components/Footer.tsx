'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Instagram, Twitter, Facebook, Youtube, Linkedin } from 'lucide-react';

const footerLinks = {
    events: [
        { name: 'Upcoming Events', href: '/events' },
        { name: 'Past Highlights', href: '/events' },
        { name: 'Tour Dates', href: '/events' },
        { name: 'Bookings', href: '/contact' },
    ],
    services: [
        { name: 'Artist Management', href: '/services' },
        { name: 'Event Production', href: '/services' },
        { name: 'Creative Direction', href: '/services' },
        { name: 'Hospitality', href: '/services' },
    ],
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'The Roster', href: '/roster' },
        { name: 'Contact', href: '/contact' },
        { name: 'Submit Demo', href: '/contact' },
    ],
};

const SocialButton = ({ icon: Icon, href }: { icon: any, href: string }) => (
    <Link
        href={href}
        className="flex items-center justify-center w-full aspect-square border border-gray-800 hover:bg-white hover:text-black transition-colors duration-300 group"
    >
        <Icon className="w-6 h-6 md:w-8 md:h-8" />
    </Link>
);

export default function Footer() {
    return (
        <footer className="bg-black text-white border-t border-gray-800 pt-10 pb-0 overflow-hidden">
            <div className="max-w-[1920px] mx-auto px-6 md:px-12">

                {/* Top Section: Links & Socials */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">

                    {/* Column 1: EVENTS */}
                    <div className="border border-gray-800 p-6 md:p-8 flex flex-col min-h-[300px]">
                        <h3 className="font-bold uppercase tracking-widest mb-6 text-sm text-gray-400">Live</h3>
                        <ul className="space-y-3">
                            {footerLinks.events.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm md:text-base hover:text-neon-lilac transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: SERVICES */}
                    <div className="border border-gray-800 p-6 md:p-8 flex flex-col min-h-[300px]">
                        <h3 className="font-bold uppercase tracking-widest mb-6 text-sm text-gray-400">Services</h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm md:text-base hover:text-neon-lilac transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: COMPANY */}
                    <div className="border border-gray-800 p-6 md:p-8 flex flex-col min-h-[300px]">
                        <h3 className="font-bold uppercase tracking-widest mb-6 text-sm text-gray-400">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm md:text-base hover:text-neon-lilac transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: SOCIALS */}
                    <div className="border border-gray-800 p-6 md:p-8 flex flex-col min-h-[300px]">
                        <h3 className="font-bold uppercase tracking-widest mb-6 text-sm text-gray-400">Social</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="https://www.instagram.com/andfriendsmgmt/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm md:text-base hover:text-neon-lilac transition-colors"
                                >
                                    <Instagram className="w-5 h-5 inline-block" /> Instagram
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom Section: MASSIVE LOGO - Cropped Top/Bottom */}
            <div className="w-full overflow-hidden flex flex-col items-center bg-black leading-none">
                <h1 className="text-[30vw] font-anton text-center tracking-tighter uppercase select-none pointer-events-none mix-blend-difference text-white leading-none">
                    &FRIENDS
                </h1>

                {/* Copyright / Small Text - Below Logo */}
                <div className="flex flex-col md:flex-row justify-between w-full px-6 md:px-12 pb-8 items-center md:items-end text-[10px] md:text-sm font-mono text-gray-500 uppercase tracking-widest z-20 gap-4 md:gap-0">
                    <span className="flex items-center gap-2">
                        <span className="border border-gray-600 rounded-full w-5 h-5 flex items-center justify-center text-[8px]">N</span>
                        <span>2025 &FRIENDS MGMT.</span>
                    </span>
                    <span>ALL RIGHTS RESERVED.</span>
                </div>
            </div>
        </footer>
    );
}
