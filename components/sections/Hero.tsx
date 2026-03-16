'use client';

import ColorBends from '../ui/ColorBends';
import DecryptedText from '../ui/DecryptedText';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
            {/* Background */}
            <div className="absolute inset-0 z-0 bg-black">
                <ColorBends
                    colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
                    rotation={0}
                    speed={0.2}
                    scale={1}
                    frequency={1}
                    warpStrength={1}
                    mouseInfluence={1}
                    parallax={0.5}
                    noise={0.1}
                    transparent={true}
                    autoRotate={0}
                />
            </div>

            <div className="absolute inset-0 z-0 bg-black/40 mix-blend-multiply" />

            {/* Content */}
            <div className="relative z-10 text-center flex flex-col items-center px-4">
                <motion.p
                    className="text-gray-300 text-lg md:text-xl font-light mb-4 tracking-widest uppercase"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="font-bold text-lg md:text-4xl">Hello, I'm</span>
                </motion.p>

                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter w-full max-w-[90vw] mx-auto flex justify-center text-center flex-wrap">
                    <DecryptedText
                        text="SHAURYA BHATNAGAR"
                        speed={60}
                        maxIterations={15}
                        sequential={true}
                        revealDirection="center"
                        className="text-white"
                        parentClassName="inline-block"
                        encryptedClassName="text-white/30"
                        animateOn="view"
                    />
                </h1>
            </div>
        </section>
    );
}
