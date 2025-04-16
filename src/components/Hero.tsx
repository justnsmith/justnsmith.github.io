"use client";
import { useEffect, useState } from "react";

const words = [
    "Software Engineer",
    "Backend Developer",
];

export default function Hero() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[currentWordIndex];
        const speed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            setDisplayText((prev) =>
                isDeleting
                    ? currentWord.substring(0, prev.length - 1)
                    : currentWord.substring(0, prev.length + 1)
            );

            if (!isDeleting && displayText === currentWord) {
                setTimeout(() => setIsDeleting(true), 1200);
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentWordIndex]);

    return (
        <section className="h-full flex flex-col justify-start items-center px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 pt-20 bg-transparent text-white text-center">
            {/* Profile Picture */}
            <img
                src="/profile.jpeg"
                alt="Profile"
                className="w-36 h-36 mb-6 rounded-full border-2 border-indigo-500 shadow-md"
            />

            {/* Name */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Justin Smith
            </h1>

            {/* Animated Role */}
            <p className="text-indigo-400 text-xl md:text-2xl font-mono mb-6 h-12">
                {displayText}
                <span className="animate-pulse">|</span>
            </p>

            {/* Description */}
            <p className="text-gray-400 max-w-lg mb-6">
                I build thoughtful, efficient software experiences. Passionate about backend engineering,
                clean architecture, and great user experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
                <a
                    href="/resume.pdf" // Replace with your actual resume path
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition"
                >
                    View Resume
                </a>
                <a
                    href="#contact"
                    className="border border-indigo-500 hover:bg-indigo-500 text-white font-semibold py-2 px-6 rounded-lg transition"
                >
                    Contact Me
                </a>
            </div>
        </section>
    );
}
