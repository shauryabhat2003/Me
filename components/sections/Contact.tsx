'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
    return (
        <footer id="contact" className="relative w-full h-screen flex flex-col pt-24 overflow-hidden">
            <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-2xl bg-white/5 backdrop-blur-md rounded-3xl p-10 md:p-16 border border-white/10 shadow-2xl"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Ready to innovate?</h2>
                    <p className="text-gray-400 text-lg md:text-xl font-light mb-10 max-w-lg mx-auto">
                        Always exploring new frontiers in AI integration and distributed systems. Whether you have an ambitious vision, a complex backend challenge, or just want to talk tech - my inbox is open.
                    </p>

                    <a
                        href="mailto:shauryabhatnagar1511@gmail.com"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full font-medium text-lg hover:scale-105 transition-transform duration-300 ease-out shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                    >
                        Say Hello
                    </a>

                    <div className="flex justify-center gap-8 mt-16 text-gray-400">
                        <a href="https://github.com/shauryabhat2003" className="hover:text-white hover:scale-110 transition-all duration-300"><Github size={24} /></a>
                        <a href="https://www.linkedin.com/in/shaurya-bhatnagar-418752263/" className="hover:text-white hover:scale-110 transition-all duration-300"><Linkedin size={24} /></a>
                        {/* <a href="#" className="hover:text-white hover:scale-110 transition-all duration-300"><Twitter size={24} /></a> */}
                        <a href="mailto:shauryabhatnagar1511@gmail.com" className="hover:text-white hover:scale-110 transition-all duration-300"><Mail size={24} /></a>
                    </div>
                </motion.div>
            </div>

            {/* Footer Bottom */}
            <div className="relative z-10 w-full py-8 text-center text-gray-600 font-mono text-sm border-t border-white/5">
                <p>&copy; {new Date().getFullYear()} Shaurya Bhatnagar.</p>
            </div>
        </footer>
    );
}
