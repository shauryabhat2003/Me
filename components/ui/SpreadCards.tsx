'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

export interface Project {
    id: string | number;
    title: string;
    description: string;
    url: string;
    handle: string;
    image: string;
    role: string;
    imageClassName?: string;
}

interface SpreadCardsProps {
    projects: Project[];
    className?: string;
}

export default function SpreadCards({ projects, className = '' }: SpreadCardsProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, {
        once: false,
        margin: "-200px 0px" // Trigger when it's reasonably in view
    });

    const [rotations, setRotations] = useState<number[]>([]);
    const [windowWidth, setWindowWidth] = useState(1200);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        // Generate stable random rotations on mount to avoid hydration mismatch
        setRotations(projects.map(() => Math.random() * 20 - 10));

        // Handle resize for grid calculation
        const handleResize = () => setWindowWidth(window.innerWidth);
        handleResize(); // Initial set
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [projects]);

    // Lift grid calculation setup out of getGridPosition so height can adapt
    const cols = windowWidth < 768 ? 1 : (windowWidth < 1024 ? 2 : 3);
    const isMobile = windowWidth < 640;
    const cardWidth = isMobile ? 280 : 320;
    const cardHeight = isMobile ? 380 : 420;
    const gap = isMobile ? 16 : 32;

    const totalRows = Math.ceil(projects.length / cols);
    const totalWidth = cols * cardWidth + (cols - 1) * gap;
    const totalHeight = totalRows * cardHeight + (totalRows - 1) * gap;

    // Grid calculation helpers
    const getGridPosition = (index: number) => {
        const row = Math.floor(index / cols);
        const col = index % cols;

        // Offset from absolute center of container
        let startX = -(totalWidth / 2) + (cardWidth / 2);
        const startY = -(totalHeight / 2) + (cardHeight / 2);

        // Center bottom row if not full
        const isLastRow = row === totalRows - 1;
        const itemsOnLastRow = projects.length % cols === 0 ? cols : projects.length % cols;

        if (isLastRow && itemsOnLastRow < cols) {
            const emptySpaceWidth = (cols - itemsOnLastRow) * (cardWidth + gap);
            startX += emptySpaceWidth / 2;
        }

        return {
            x: startX + col * (cardWidth + gap),
            y: startY + row * (cardHeight + gap)
        };
    };

    return (
        <div
            ref={containerRef}
            className={`relative w-full flex items-center justify-center py-24 ${className}`}
        >
            <div 
                className={`relative w-full max-w-6xl mx-auto flex justify-center items-center h-full transition-all duration-500 ${selectedProject ? 'blur-md opacity-40 pointer-events-none' : ''}`}
                style={{ height: Math.max(600, totalHeight) }}
            >
                {projects.map((project, index) => {
                    const isStacked = !isInView;
                    const rotation = isStacked ? (rotations[index] || 0) : 0;

                    // Calculate target position based on grid logic
                    const targetPos = getGridPosition(index);

                    return (
                        <motion.div
                            onClick={() => setSelectedProject(project)}
                            key={project.id}
                            initial={false}
                            animate={{
                                rotate: rotation,
                                zIndex: isStacked ? projects.length - index : 1,
                                scale: isStacked ? 1 - index * 0.03 : 1,
                                x: isStacked ? 0 : targetPos.x,
                                y: isStacked ? index * 5 : targetPos.y,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 70, // Much higher stiffness
                                damping: 13,    // Lower damping for faster snap
                                mass: 0.2,      // Very light mass to move immediately
                                delay: isStacked ? 0 : index * 0.01 // Almost instant stagger
                            }}
                            style={{ 
                                top: '50%', 
                                left: '50%', 
                                marginTop: -cardHeight / 2, 
                                marginLeft: -cardWidth / 2 
                            }}
                            className={`group absolute flex flex-col justify-end overflow-hidden rounded-3xl bg-neutral-900 border border-white/10 hover:border-white/30 cursor-pointer w-[280px] h-[380px] sm:w-[320px] sm:h-[420px] shadow-2xl origin-center mx-auto`}
                            whileHover={!isStacked ? { y: targetPos.y - 8, scale: 1.02, transition: { duration: 0.2 } } : { scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {/* Background Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className={`absolute inset-0 w-full h-full transition-all duration-700 ${project.imageClassName || 'object-cover'} ${isStacked ? 'opacity-50 grayscale' : 'opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105'
                                    }`}
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                            {/* Content */}
                            <div className={`relative z-10 p-6 sm:p-8 flex flex-col justify-end transition-transform duration-300 ${isStacked ? 'translate-y-4 opacity-50' : 'translate-y-0 opacity-100'}`}>
                                <div className="flex justify-between items-end mb-2">
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{project.title}</h3>
                                </div>
                                <span className="text-sm font-medium text-emerald-400 mb-3">{project.handle}</span>

                                <p className="text-white/70 text-sm sm:text-base mb-6 line-clamp-2 md:line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="text-xs sm:text-sm font-semibold text-white/40 uppercase tracking-widest group-hover:text-white/80 transition-colors">
                                        {project.role}
                                    </div>

                                    {/* Link Icon */}
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 hover:bg-white/30"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Modal Popup */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 cursor-pointer"
                        onClick={() => setSelectedProject(null)}
                    >
                        {/* Backdrop */}
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-neutral-900 shadow-2xl overflow-y-auto max-h-[90vh] cursor-default border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors backdrop-blur-sm"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>

                            <div className="relative w-full h-64 sm:h-80 bg-neutral-950 flex flex-col justify-center items-center">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className={`w-full h-full ${selectedProject.imageClassName ? selectedProject.imageClassName : 'object-cover'} opacity-80`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
                            </div>

                            <div className="p-6 sm:p-10 -mt-16 relative z-10 w-full">
                                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">{selectedProject.title}</h3>
                                <div className="text-emerald-400 font-medium text-sm sm:text-base mb-6">{selectedProject.handle}</div>

                                <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-10 w-full whitespace-pre-line">
                                    {selectedProject.description}
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8 mt-auto">
                                    <div className="text-sm font-semibold text-white/40 uppercase tracking-widest">
                                        {selectedProject.role}
                                    </div>
                                    <a
                                        href={selectedProject.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors w-full sm:w-auto justify-center group"
                                    >
                                        Visit Application
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
