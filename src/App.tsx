import { useEffect, useRef, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import "./styles/global.css";

export default function App() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const rightScrollRef = useRef<HTMLDivElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        const leftEl = leftRef.current;
        const rightEl = rightScrollRef.current;

        if (!leftEl || !rightEl) return;

        const handleScroll = (e: WheelEvent) => {
            if (rightEl) {
                rightEl.scrollBy({
                    top: e.deltaY,
                    behavior: "auto",
                });
            }

            e.preventDefault(); // prevent scroll on left side
        };

        leftEl.addEventListener("wheel", handleScroll, { passive: false });

        return () => {
            leftEl.removeEventListener("wheel", handleScroll);
        };
    }, []);

    return (
        <div className="relative flex flex-col lg:flex-row h-screen text-white bg-gray-900">
            {/* Global spotlight effect */}
            <div
                className="pointer-events-none fixed inset-0 z-0 transition-all duration-200"
                style={{
                    background: `radial-gradient(200px at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.1), transparent 80%)`,
                }}
            />

            {/* Hero on the left */}
            <div ref={leftRef} className="w-full lg:w-1/2 h-screen overflow-hidden z-10">
                <Hero />
            </div>

            {/* Scrollable sections on the right */}
            <div ref={rightScrollRef} className="w-full lg:w-1/2 h-screen overflow-y-auto z-10 space-y-16 pb-24">
                <About />
                <TechStack />
                <Experience />
                <Projects />
            </div>
        </div>
    );
}
