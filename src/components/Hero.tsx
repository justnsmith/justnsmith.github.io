"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const words = ["Software Engineer", "Backend Developer"];
const sectionIds = ["about", "tech", "experience", "projects"];

export default function Hero() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [activeSection, setActiveSection] = useState("about");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    const handleNavigationClick = (id: string, e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
        }
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center px-6 sm:px-12 pt-20 bg-transparent text-white text-center">
            {/* Burger Menu Top-Right (Only visible on small screens) */}
            <div className="absolute top-4 right-6 md:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-gray-300 hover:text-white"
                >
                    <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
                </button>

                {/* Dropdown Menu */}
                {isMenuOpen && (
                    <div className="absolute right-0 mt-2 bg-gray-800 border border-indigo-500 rounded-md shadow-lg py-2 z-50 w-40">
                        {sectionIds.map((id) => (
                            <a
                                key={id}
                                href={`#${id}`}
                                onClick={(e) => handleNavigationClick(id, e)}
                                className="block px-4 py-2 text-sm text-gray-300 hover:text-white"
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </a>
                        ))}
                    </div>
                )}
            </div>

            {/* Profile Image */}
            <img
                src="/profile.jpeg"
                alt="Profile"
                className="w-36 h-36 mb-6 rounded-full border-2 border-indigo-500 shadow-md"
            />

            {/* Name */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Justin Smith</h1>

            {/* Animated Role */}
            <p className="text-indigo-400 text-xl md:text-2xl font-mono mb-6 h-12">
                {displayText}
                <span className="animate-pulse">|</span>
            </p>

            {/* Description */}
            <p className="text-gray-400 max-w-lg mb-6">
                I build efficient, scalable systems and am interested in low-level programming and optimizing performance.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                    href="/resume.pdf"
                    download="Justin_Smith_Resume.pdf"
                    className="bg-indigo-600 text-gray-300 hover:bg-indigo-700 hover:text-white font-semibold py-2 px-6 rounded-lg transition-all"
                >
                    Download Resume
                </a>
                <a
                    href="#contact"
                    className="border-2 border-indigo-500 text-gray-300 hover:bg-indigo-500 hover:text-white font-semibold py-2 px-6 rounded-lg transition-all"
                >
                    Contact Me
                </a>
            </div>

            {/* Section Scrollspy Links (visible only on md+) */}
            <div className="hidden md:flex flex-col gap-6 mt-2">
                {sectionIds.map((id) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        onClick={(e) => handleNavigationClick(id, e)}
                        className={`text-sm font-medium transition ${
                            activeSection === id ? "text-white scale-110" : "text-gray-400"
                        } hover:text-white`}
                    >
                        {id.charAt(0).toUpperCase() + id.slice(1)}
                    </a>
                ))}
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-auto mb-4">
                <a href="https://github.com/justnsmith" target="_blank">
                    <FontAwesomeIcon
                        icon={faGithub}
                        className="w-8 h-8 text-gray-500 hover:text-white transition-transform transform hover:scale-125"
                    />
                </a>
                <a href="https://linkedin.com/in/jstinsmith" target="_blank">
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        className="w-8 h-8 text-gray-500 hover:text-white transition-transform transform hover:scale-125"
                    />
                </a>
                <a href="mailto:jstinwsmith@gmail.com">
                    <FontAwesomeIcon
                        icon={faGoogle}
                        className="w-8 h-8 text-gray-500 hover:text-white transition-transform transform hover:scale-125"
                    />
                </a>
            </div>
        </section>
    );
}
