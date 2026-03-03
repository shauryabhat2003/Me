'use client';

import LogoLoop from '../ui/LogoLoop';
import {
    SiCplusplus, SiSharp, SiDotnet, SiNextdotjs, SiReact, SiTypescript,
    SiExpress, SiNodedotjs, SiTailwindcss, SiHtml5, SiCss3,
    SiPython, SiFirebase, SiSupabase, SiMongodb, SiPostgresql,
    SiFramer, SiVercel, SiGithub, SiMysql
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

const CSharpIcon = ({ size = 48 }: { size?: number }) => (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="currentColor">
        <path d="M109 50h-4.8l-1.2 6h-3.8l1.2-6h-4.9l-1.2 6H89v5h4.4l-.9 4H89v5h2.5l-1.2 6h4.8l1.2-6h3.8l-1.2 6h4.9l1.2-6h5v-5h-4.1l.9-4h3.2v-5h-2.2l1.2-6zm-7.9 15h-3.8l.9-4h3.8l-.9 4zm15.4-32.7c-.6-1.1-1.4-2.1-2.3-2.6L66.1 1.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7L11.4 29.7c-1.7 1-3.4 3.5-3.4 5.4v55.7c0 1.1.7 2.3 1.4 3.4l.1.1c.5.8 1.3 1.5 2 1.9l48.3 27.9c.8.5 2 .7 3.2.7 1.2 0 2.3-.3 3.1-.7l47.5-27.9c1.7-1 2.4-3.5 2.4-5.4V35.1c0-.8.4-1.8 0-2.6l.5-.2zm-4.2 2.1c0 .3-.3.5-.3.7v55.7c0 .8-.2 1.7-.4 2L64 120.6c-.1.1-.5.2-1.1.2-.6 0-1-.1-1.1-.2L13.6 92.8s-.1-.1-.2-.1l-.6-.6c-.4-.7.2-1.1-.8-1.2V35.2c1-.5.9-1.7 1.4-1.9L61.7 5.4c.1 0 .6-.2 1.2-.2s1 .1 1.1.2l48 27.7.4.9c.1.1-.1.3-.1.4zM63 87.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6C80.1 82.5 72.1 87.5 63 87.5z" />
    </svg>
);

const techLogos = [
    { node: <SiCplusplus size={48} />, title: "C++", ariaLabel: "C++" },
    { node: <CSharpIcon size={48} />, title: "C#", ariaLabel: "C#" },
    { node: <SiDotnet size={48} />, title: ".NET", ariaLabel: ".NET Framework & Core" },
    { node: <SiNextdotjs size={48} />, title: "Next.js", ariaLabel: "Next.js" },
    { node: <SiReact size={48} />, title: "React", ariaLabel: "React" },
    { node: <SiTypescript size={48} />, title: "TypeScript", ariaLabel: "TypeScript" },
    { node: <SiExpress size={48} />, title: "Express.js", ariaLabel: "Express.js" },
    { node: <SiNodedotjs size={48} />, title: "Node.js", ariaLabel: "Node.js" },
    { node: <SiTailwindcss size={48} />, title: "Tailwind CSS", ariaLabel: "Tailwind CSS" },
    { node: <SiHtml5 size={48} />, title: "HTML5", ariaLabel: "HTML5" },
    { node: <SiCss3 size={48} />, title: "CSS3", ariaLabel: "CSS3" },
    { node: <SiPython size={48} />, title: "Python", ariaLabel: "Python" },
    { node: <SiFirebase size={48} />, title: "Firebase", ariaLabel: "Firebase" },
    { node: <SiSupabase size={48} />, title: "Supabase", ariaLabel: "Supabase" },
    { node: <SiMongodb size={48} />, title: "MongoDB", ariaLabel: "MongoDB" },
    { node: <SiPostgresql size={48} />, title: "PostgreSQL", ariaLabel: "PostgreSQL" },
    { node: <SiMysql size={48} />, title: "SQL", ariaLabel: "SQL" },
    { node: <SiFramer size={48} />, title: "Framer Motion", ariaLabel: "Framer Motion" },
    { node: <VscAzure size={48} />, title: "Azure", ariaLabel: "Azure" },
    { node: <SiGithub size={48} />, title: "GitHub", ariaLabel: "GitHub" },
    { node: <SiVercel size={48} />, title: "Vercel", ariaLabel: "Vercel" }
];

export default function Skills() {
    return (
        <section className="relative w-full pt-24 pb-8 overflow-hidden text-white">
            <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-200">My Arsenal</h2>
                <p className="text-gray-500 mt-2 font-light">Technologies I use to bring ideas to life</p>
            </div>

            <div className="flex w-full h-32 items-center text-gray-400">
                <LogoLoop
                    logos={techLogos}
                    speed={150}
                    direction="left"
                    logoHeight={60}
                    gap={80}
                    hoverSpeed={20}
                    scaleOnHover={true}
                    fadeOut={true}
                    fadeOutColor="#0a0a0a"
                    ariaLabel="Technology stack"
                />
            </div>
        </section>
    );
}
