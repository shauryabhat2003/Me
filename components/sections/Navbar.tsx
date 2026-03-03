'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function Navbar() {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 100], [0, 1]);

    return (
        <motion.header
            className="fixed top-0 left-0 w-full z-50 flex justify-center mt-6 px-4"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <div className="flex items-center justify-between w-[500px] h-[60px] max-w-full px-6 rounded-[30px] backdrop-blur-md bg-white/5 border border-white/10 shadow-lg text-white text-sm font-medium tracking-wide">
                <a href="#about" className="hover:text-gray-300 transition-colors">
                    About Me
                </a>
                <a href="#projects" className="hover:text-gray-300 transition-colors">
                    Projects
                </a>
                <a href="#experience" className="hover:text-gray-300 transition-colors">
                    Experience
                </a>
                <a href="#contact" className="hover:text-gray-300 transition-colors">
                    Contact Me
                </a>
            </div>
        </motion.header>
    );
}
