"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';

const words = [
    "Software Engineer",
    "Backend Developer",
];

const sectionIds = ["about", "tech", "experience", "projects"];

export default function Hero() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [activeSection, setActiveSection] = useState("about");

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

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.1 }
        );

        sectionIds.forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

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
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                    href="/resume.pdf"
                    download="Justin_Smith_Resume.pdf"
                    className="bg-indigo-600 text-gray-300 border border-transparent hover:bg-indigo-700 hover:border-indigo-700 hover:text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                    Download Resume
                </a>
                <a
                    href="#contact"
                    className="bg-transparent border-2 border-indigo-500 text-gray-300 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                    Contact Me
                </a>
            </div>


            {/* ScrollSpy Navigation */}
            <div className="mt-8 flex flex-col gap-6 text-center">
                {sectionIds.map((id) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        className={`block text-sm transition-all duration-300 transform ${activeSection === id
                            ? "text-white text-lg scale-110"
                            : "text-gray-500 text-sm"
                            } hover:text-white hover:scale-110 hover:font-semibold`}
                    >
                        <span className="block px-2 py-1">
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                        </span>
                    </a>
                ))}
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-6 mt-auto mb-4">
                <a href="https://github.com/justnsmith" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                        icon={faGithub}
                        className="w-8 h-8 hover:scale-110 transition-transform duration-300"
                    />
                </a>
                <a href="https://linkedin.com/in/jstinsmith" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        className="w-8 h-8 hover:scale-110 transition-transform duration-300"
                    />
                </a>
                <a href="mailto:jstinwsmith@gmail.com">
                    <FontAwesomeIcon
                        icon={faGoogle}
                        className="w-8 h-8 hover:scale-110 transition-transform duration-300"
                    />
                </a>
            </div>
        </section>
    );
}
