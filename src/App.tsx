import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";

export default function App() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="relative min-h-screen text-white bg-gray-900">
            {/* Global spotlight effect */}
            <div
                className="pointer-events-none fixed inset-0 z-0 transition-all duration-200"
                style={{
                    background: `radial-gradient(200px at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.1), transparent 80%)`,
                }}
            />

            {/* Responsive container */}
            <div className="flex flex-col md:flex-row h-full">
                {/* Hero Section */}
                <div className="w-full md:w-1/2 h-screen sticky top-0 z-10">
                    <Hero />
                </div>

                {/* About Section */}
                <div className="w-full md:w-1/2 h-screen overflow-y-auto z-10">
                    <About />
                </div>
            </div>
        </div>
    );
}
