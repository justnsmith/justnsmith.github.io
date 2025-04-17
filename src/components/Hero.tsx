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
    const [isMobileView, setIsMobileView] = useState(false);

    // Check window size and update mobile view state
    useEffect(() => {
        const checkMobileView = () => {
            setIsMobileView(window.innerWidth < 1024); // Use lg breakpoint (1024px)
        };

        // Initial check
        checkMobileView();

        // Add event listener for window resize
        window.addEventListener('resize', checkMobileView);

        // Cleanup
        return () => window.removeEventListener('resize', checkMobileView);
    }, []);

    // Close menu when switching from mobile to desktop
    useEffect(() => {
        if (!isMobileView) {
            setIsMenuOpen(false);
        }
    }, [isMobileView]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (isMenuOpen && !target.closest('.menu-container')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

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
            {/* Burger Menu - Only visible on mobile/tablet view */}
            {isMobileView && (
                <div className="fixed top-4 right-6 z-50 menu-container">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                        <FontAwesomeIcon
                            icon={faBars}
                            className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
                        />
                    </button>

                    {/* Dropdown Menu with Animation */}
                    <div
                        className={`absolute right-0 mt-2 w-48 bg-gray-800 border border-indigo-500 rounded-md shadow-lg shadow-indigo-500/20 overflow-hidden transition-all duration-300 origin-top-right ${
                            isMenuOpen
                                ? 'opacity-100 scale-100 translate-y-0'
                                : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                        }`}
                    >
                        <div className="py-2">
                            {sectionIds.map((id, index) => (
                                <a
                                    key={id}
                                    href={`#${id}`}
                                    onClick={(e) => handleNavigationClick(id, e)}
                                    className={`block px-4 py-2 text-sm transition-all duration-300 hover:bg-gray-700 ${
                                        activeSection === id
                                            ? "text-indigo-400 border-l-2 border-indigo-500 pl-3"
                                            : "text-gray-300 hover:text-white"
                                    }`}
                                    style={{
                                        transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                                    }}
                                >
                                    {id.charAt(0).toUpperCase() + id.slice(1)}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}

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
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                    href="/resume.pdf"
                    download="Justin_Smith_Resume.pdf"
                    className="bg-indigo-600 text-gray-300 hover:bg-indigo-700 hover:text-white font-semibold py-2 px-6 rounded-lg transition-all hover:shadow-lg hover:shadow-indigo-600/20 transform hover:-translate-y-0.5"
                >
                    Download Resume
                </a>
                <a
                    href="#contact"
                    className="border-2 border-indigo-500 text-gray-300 hover:bg-indigo-500 hover:text-white font-semibold py-2 px-6 rounded-lg transition-all hover:shadow-lg hover:shadow-indigo-500/20 transform hover:-translate-y-0.5"
                >
                    Contact Me
                </a>
            </div>

            {/* Selection Indicator - Only visible on desktop/larger screens */}
            {!isMobileView && (
                <div className="flex flex-col gap-8 mb-8">
                    {sectionIds.map((id) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            onClick={(e) => handleNavigationClick(id, e)}
                            className={`relative text-sm font-medium transition-all duration-300 hover:text-white group ${
                                activeSection === id
                                    ? "text-white scale-110"
                                    : "text-gray-400"
                            }`}
                        >
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                            <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-indigo-500 transform origin-left transition-transform duration-300 ${
                                activeSection === id ? 'scale-x-100' : 'scale-x-0'
                            } group-hover:scale-x-100`}></span>
                        </a>
                    ))}
                </div>
            )}

            {/* Social Icons - Fixed footer */}
            <div className="fixed bottom-0 w-full flex justify-center gap-6 py-4 bg-gray-900 z-30">
                <a href="https://github.com/justnsmith" target="_blank" className="bg-gray-900 group">
                    <FontAwesomeIcon
                        icon={faGithub}
                        className="w-8 h-8 text-gray-500 transition-all duration-300 transform group-hover:text-white group-hover:scale-125"
                    />
                </a>
                <a href="https://linkedin.com/in/jstinsmith" target="_blank" className="bg-gray-900 group">
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        className="w-8 h-8 text-gray-500 transition-all duration-300 transform group-hover:text-white group-hover:scale-125"
                    />
                </a>
                <a href="mailto:jstinwsmith@gmail.com" className="bg-gray-900 group">
                    <FontAwesomeIcon
                        icon={faGoogle}
                        className="w-8 h-8 text-gray-500 transition-all duration-300 transform group-hover:text-white group-hover:scale-125"
                    />
                </a>
            </div>
        </section>
    );
}
