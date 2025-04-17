import { useRef, useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

// Hook to track mouse position
function useMousePosition() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return mousePos;
}

// Hook to detect screen width
function useIsLargeScreen(breakpoint = 1024) {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= breakpoint);

    useEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth >= breakpoint);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);

    return isLargeScreen;
}

export default function App() {
    const leftRef = useRef<HTMLDivElement>(null);
    const rightScrollRef = useRef<HTMLDivElement>(null);
    const mousePos = useMousePosition();
    const isLargeScreen = useIsLargeScreen();

    const handleScroll = (e: WheelEvent) => {
        if (isLargeScreen && leftRef.current && rightScrollRef.current) {
            const heroRect = leftRef.current.getBoundingClientRect();

            // Check if the mouse is over the Hero section
            const isMouseOverHero =
                mousePos.y >= heroRect.top && mousePos.y <= heroRect.bottom;

            if (isMouseOverHero) {
                // If the mouse is over the Hero, redirect scroll to the About section
                e.preventDefault();

                // Scroll the About section instead
                const aboutSection = rightScrollRef.current;
                if (aboutSection) {
                    aboutSection.scrollTop += e.deltaY;
                }
            }
        }
    };

    useEffect(() => {
        if (isLargeScreen) {
            // Add wheel event listener for scroll redirection
            window.addEventListener("wheel", handleScroll, { passive: false });
            return () => window.removeEventListener("wheel", handleScroll);
        }
    }, [isLargeScreen, mousePos]);

    return (
        <div className="relative min-h-screen text-white bg-gray-900">
            {/* Spotlight effect */}
            <div
                className="pointer-events-none fixed inset-0 z-0 transition-all duration-200"
                style={{
                    background: `radial-gradient(200px at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.1), transparent 80%)`,
                }}
            />

            {isLargeScreen ? (
                <div className="flex flex-row h-screen">
                    {/* Left */}
                    <div ref={leftRef} className="w-1/2 h-screen overflow-hidden z-10">
                        <Hero />
                    </div>

                    {/* Right scrollable */}
                    <div
                        ref={rightScrollRef}
                        className="w-1/2 h-screen overflow-y-auto z-10 space-y-16 pb-24"
                    >
                        <About />
                        <TechStack />
                        <Experience />
                        <Projects />
                    </div>
                </div>
            ) : (
                // Mobile stacked view — make sure background extends!
                <div className="flex flex-col min-h-screen bg-gray-900 z-10 space-y-16 pb-24">
                    <Hero />
                    <About />
                    <TechStack />
                    <Experience />
                    <Projects />
                </div>
            )}
        </div>
    );
}
