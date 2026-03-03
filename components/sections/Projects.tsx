'use client';

import { motion } from 'framer-motion';
import SpreadCards, { Project } from '../ui/SpreadCards';

const projectsData: Project[] = [
    {
        id: 1,
        title: "Relate",
        description: "AI-driven platform analyzing trust behaviors. Reduced AI processing time by 75% through optimized prompt orchestration and model architecture. Delivered real-time dashboards for customer engagement.",
        url: "https://www.relate.us/",
        handle: "Next.js • Supabase • .NET Framework • Azure SQL",
        image: "/images/projects/logo.svg",
        role: "",
        // imageClassName: "object-contain p-12",
    },
    {
        id: 2,
        title: "Sandi",
        description: "Agentic AI Agent built with .NET Core, Bot Framework, and GPT-4o. Engineered intelligent workflows and predictive responses, reducing manual intervention by 40%.",
        url: "https://www.relate.us/meet",
        handle: ".NET Core • Bot Framework",
        image: "/images/projects/sandi.jpg",
        role: "",
        // imageClassName: "object-contain p-12",
    },
    {
        id: 3,
        title: "Meeting Action Item Enforcer",
        description: "Distributed system transforming transcripts into structured action items. Includes a Next.js app with JIRA integration and a Python bot leveraging Whisper and Assembly AI.",
        url: "https://meeting-action-enforcer.vercel.app/",
        handle: "Next.js • Python • Gemini • JIRA",
        image: "/images/projects/meeting_enforcer.png",
        role: "",
    },
    {
        id: 4,
        title: "ATLAS",
        description: "Premium AI chat assistant with streaming responses, image understanding, and code assistance using Gemini 2.5 Flash. Wrapped in a sleek glassmorphism UI.",
        url: "https://atlas-qvwy.onrender.com/",
        handle: "React • Node.js • Express • MongoDB",
        image: "/images/projects/logo.png",
        role: "",
        imageClassName: "object-contain p-20",
    },
    {
        id: 5,
        title: "Review It",
        description: "Modern web app leveraging Gemini AI to analyze, review, and refactor code snippets. Features a sleek glassmorphism UI connecting to an Express backend enforcing strict JSON schemas.",
        url: "https://ai-code-reviewer-io.onrender.com/",
        handle: "React • Node.js • Express • Gemini",
        image: "/images/projects/review_it.png",
        role: "",
    }
];

export default function Projects() {
    return (
        <section id="projects" className="relative w-full pt-12 pb-32 text-white min-h-screen flex flex-col justify-start items-center overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 text-center mb-16 z-10">
                <motion.h2
                    className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 uppercase"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Selected Works
                </motion.h2>
                <motion.p
                    className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    A collection of projects showcasing my technical capabilities and design sensibility.
                    Scroll down to explore.
                </motion.p>
            </div>

            <motion.div
                className="w-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <SpreadCards
                    className="my-custom-spread-cards"
                    projects={projectsData}
                />
            </motion.div>
        </section>
    );
}
