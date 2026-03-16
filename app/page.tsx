import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import AboutMe from '@/components/sections/AboutMe';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';
import Particles from '@/components/ui/Particles';

export default function Home() {
    return (
        <main className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black scroll-smooth w-full overflow-x-hidden">
            {/* Global Background Particles for the rest of the application */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <Particles
                    particleColors={["#ffffff"]}
                    particleCount={400}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                    pixelRatio={1}
                />
            </div>

            <div className="relative z-10 w-full">
                <Navbar />
                <Hero />
                <AboutMe />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </div>
        </main>
    );
}
