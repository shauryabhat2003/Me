'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TiltedCard from '../ui/TiltedCard';

const aboutImages = [
    "/images/AboutMe/Shaurya_image.jpg",
    "/images/AboutMe/Shaurya_image2.jpg"
];

export default function AboutMe() {
    const [currentImage, setCurrentImage] = useState<string>("");
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Randomly select an image on the client side to prevent hydration mismatch
        const randomIndex = Math.floor(Math.random() * aboutImages.length);
        setCurrentImage(aboutImages[randomIndex]);
        setIsMounted(true);
    }, []);

    return (
        <section id="about" className="relative w-full py-24 px-6 md:px-12 lg:px-24 text-white min-h-screen flex items-center">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

                {/* Left Side: Titled Card */}
                <motion.div
                    className="w-full md:w-1/2 flex justify-center h-[350px] sm:h-[400px] md:h-[500px]"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    {isMounted && (
                        <TiltedCard
                            imageSrc={currentImage || aboutImages[0]}
                            altText="Shaurya Bhatnagar"
                            captionText="Shaurya Bhatnagar"
                            containerClassName="w-full h-full max-w-[400px]"
                            rotateAmplitude={12}
                            scaleOnHover={1.05}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                        />
                    )}
                </motion.div>

                {/* Right Side: Text Entry */}
                <motion.div
                    className="w-full md:w-1/2 flex flex-col justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                        About Me
                    </h2>
                    <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
                        <p>
                            I'm a <span className="text-white font-medium">Full Stack Developer</span> at Veersa Technologies, building scalable digital solutions for a global clientele.
                            I thrive at the intersection of design and engineering - transforming complex requirements into pixel-perfect user interfaces and highly resilient backend architectures.
                        </p>
                        <p>
                            Equipped with a versatile toolkit encompassing <span className="text-white font-medium">Next.js, the MERN stack, TypeScript, C#, and .NET Core</span>, I engineer systems that are built to perform.
                            Beyond traditional web development, my expertise extends to AI innovation. I specialize in designing intelligent, end-to-end AI Agents using RAG architectures, powered by robust database ecosystems like PostgreSQL and MongoDB.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
