'use client';

import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Software Engineer",
        company: "Veersa Technologies",
        period: "Aug 2025 - Present",
        description: [
            "Designed and implemented scalable backend services using .NET Core and Azure to support AI-driven workloads.",
            "Owned the end-to-end lifecycle of production AI applications from architecture design to deployment and publishing.",
            "Built an AI-powered meeting intelligence platform analyzing trust, buyer intent, and communication quality.",
            "Reduced AI processing latency by 75% (20 minutes to under 5 minutes) by optimizing prompt orchestration and asynchronous pipelines."
        ],
        techStack: ".NET Core • .NET Framework • SQL • PostgreSQL • NextJS • Azure • Agentic RAG"
    },
    {
        role: "SDE Intern",
        company: "Veersa Technologies",
        period: "Mar 2025 - Jul 2025",
        description: [
            "Engineered full-stack features using ReactJS and .NET Framework to enhance internal enterprise applications.",
            "Optimized SQL database schemas and queries, significantly reducing data load times for reporting dashboards.",
            "Deployed and monitored hosting environments on Microsoft Azure, ensuring reliable access and secure data handling."
        ],
        techStack: ".NET Framework • SQL • Azure • ReactJS"
    },
    {
        role: "Backend Intern",
        company: "Celebal Technologies",
        period: "June 2024 - Aug 2024",
        description: [
            "Developed scalable REST APIs using Node.js and MongoDB, increasing concurrent user handling by 30%.",
            "Optimized DB queries and indexing strategies, improving data retrieval performance by 35%.",
            "Ensured reliable backend-frontend data flow for analytics and reporting features."
        ],
        techStack: "ReactJs • NodeJs • ExpressJS • MongoDB"
    }
];

export default function Experience() {
    return (
        <section id="experience" className="relative w-full py-32 text-white min-h-screen flex items-center">
            <div className="max-w-4xl mx-auto px-6 w-full">

                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Experience</h2>
                    <p className="text-gray-400 mt-4 font-light text-lg">My professional journey so far</p>
                </motion.div>

                <div className="relative border-l border-white/20 ml-4 md:ml-0 md:space-y-16 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="relative pl-8 md:pl-12"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-white ring-4 ring-neutral-950" />

                            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2 md:gap-8">
                                <h3 className="text-2xl font-semibold tracking-tight">{exp.role}</h3>
                                <span className="text-sm text-gray-400 font-mono tracking-wider">{exp.period}</span>
                            </div>

                            <h4 className="text-lg text-gray-300 font-medium mb-4">{exp.company}</h4>
                            <ul className="text-gray-500 font-light leading-relaxed max-w-2xl text-base md:text-lg mb-4 space-y-2 list-disc list-inside marker:text-emerald-500">
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                            {exp.techStack && (
                                <div className="text-sm font-medium text-emerald-400">
                                    {exp.techStack}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
