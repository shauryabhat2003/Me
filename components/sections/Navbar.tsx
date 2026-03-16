'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 100], [0, 1]);
    const [isOpen, setIsOpen] = useState(false);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        setIsOpen(false);
        // Wait for next tick / menu close animation to start so scroll isn't interrupted
        setTimeout(() => {
            const element = document.querySelector(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else if (window.location.pathname !== '/') {
                window.location.href = `/${targetId}`;
            }
        }, 100);
    };

    return (
        <motion.header
            className="fixed top-0 left-0 w-full z-50 flex justify-center mt-6 px-4"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <div className="flex flex-col w-full md:w-[500px] max-w-full rounded-[30px] backdrop-blur-md bg-[#0a0a0a]/80 border border-white/10 shadow-lg text-white tracking-wide overflow-hidden transition-all duration-300">
                <div className="flex items-center justify-between h-[60px] px-6">
                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center justify-between w-full text-sm font-medium">
                        <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-gray-300 transition-colors">About Me</a>
                        <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="hover:text-gray-300 transition-colors">Projects</a>
                        <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')} className="hover:text-gray-300 transition-colors">Experience</a>
                        <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-gray-300 transition-colors">Contact Me</a>
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center justify-between w-full">
                        <span className="font-bold text-lg tracking-tighter">SB</span>
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none p-1">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="md:hidden flex flex-col items-center gap-6 py-6 border-t border-white/10"
                        >
                            <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-base font-medium hover:text-gray-300 transition-colors">About Me</a>
                            <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="text-base font-medium hover:text-gray-300 transition-colors">Projects</a>
                            <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')} className="text-base font-medium hover:text-gray-300 transition-colors">Experience</a>
                            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-base font-medium hover:text-gray-300 transition-colors">Contact Me</a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}
