import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ProjectsArchive() {
    const navigate = useNavigate();

    // Projects data
    const projects = [
        {
            year: 2025,
            title: "Custom Memory Allocator + Visualizer",
            technologies: ["C", "Memory Management", "Web Assembly"],
            link: "projects/custom-memory-allocator",
            isInternal: true,
            madeFor: "Personal"
        },
        {
            year: 2025,
            title: "Portfolio Website",
            technologies: ["React", "Tailwind CSS", "Vite"],
            link: "https://github.com/justnsmith/justnsmith.github.io",
            isInternal: false,
            madeFor: "Personal",
        },
        {
            year: 2025,
            title: "Puzzle Game",
            technologies: ["C++"],
            link: "https://github.com/justnsmith/puzzlegame",
            isInternal: false,
            madeFor: "Personal"
        },
        {
            year: 2024,
            title: "Study Buddy",
            technologies: ["React", "PostgreSQL", "Vercel"],
            link: "https://thesoftwaredevelopers.github.io",
            isInternal: false,
            madeFor: "College"
        },
        {
            year: 2024,
            title: "Polynesian Navigation Route Planner",
            technologies: ["Java", "Performance Optimization"],
            link: "https://github.com/justnsmith/ics311-assignment5",
            isInternal: false,
            madeFor: "College"
        },
        {
            year: 2024,
            title: "Data Encryption",
            technologies: ["Java", "Cryptography"],
            link: "https://github.com/justnsmith/ics311-assignment7",
            isInternal: false,
            madeFor: "College"
        },
        {
            year: 2024,
            title: "Bank Database",
            technologies: ["C", "Makefile", "Vim"],
            link: "https://github.com/justnsmith/ICS212/tree/main/project1",
            isInternal: false,
            madeFor: "College"
        }
    ];

    // For the mouse follow effect
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return (
        <div className="relative min-h-screen text-white bg-gray-900">
            {/* Mouse follow effect */}
            <div
                className="pointer-events-none fixed inset-0 z-0 transition-all duration-200"
                style={{
                    background: `radial-gradient(200px at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.1), transparent 80%)`,
                }}
            />

            {/* Add text selection highlighting style */}
            <style>{`
                ::selection {
                    background-color: rgba(34, 211, 238, 0.3);
                    color: white;
                }
                ::-moz-selection {
                    background-color: rgba(34, 211, 238, 0.3);
                    color: white;
                }
            `}</style>

            <div className="max-w-5xl mx-auto p-6 sm:p-8 md:p-12">
                <div className="mb-6 flex flex-col gap-2">
                    {/* Back button */}
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                        <svg
                            className="w-5 h-5 mr-2 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                        <span className="font-medium">
                            Justin Smith
                        </span>
                    </button>

                    {/* Title */}
                    <h1 className="text-4xl font-bold text-white">All Projects</h1>
                </div>

                {/* Column Headers */}
                <div className="grid grid-cols-12 py-3 text-sm font-medium text-white">
                    <div className="col-span-1">Year</div>
                    <div className="col-span-3 pl-2">Project</div>
                    <div className="col-span-2 pl-2">Made for</div>
                    <div className="col-span-4 pl-2">Built with</div>
                    <div className="col-span-2 text-left pl-2">Link</div>
                </div>

                <div className="border-b border-gray-800 my-2"></div>

                {/* Projects table */}
                <div>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-12 border-b border-gray-800 py-4 hover:bg-gray-800/20 transition-colors cursor-pointer text-sm"
                        >
                            {/* Year */}
                            <div className="col-span-1 text-gray-400 flex items-center">
                                {project.year}
                            </div>

                            {/* Project Title */}
                            <div className="col-span-3 pl-2 pr-4 flex items-center text-white font-semibold">
                                {project.title}
                            </div>

                            {/* Made for */}
                            <div className="col-span-2 pl-2 pr-4 font-medium text-gray-400 flex items-center">
                                {project.madeFor}
                            </div>

                            {/* Built With */}
                            <div className="col-span-4 pl-2 pr-4 flex flex-wrap gap-1 items-center">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-2 py-0.5 border border-cyan-900/30 bg-cyan-900/10 text-cyan-400 rounded-md text-xs"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Link */}
                            <div className="col-span-2 text-left pl-2 flex items-center justify-start text-gray-400 hover:text-cyan-400 transition-colors">
                                <span
                                    className="mr-1 text-xs cursor-pointer"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (project.isInternal) {
                                            navigate(`/${project.link}`);
                                        } else {
                                            window.open(project.link, '_blank');
                                        }
                                    }}
                                >
                                    {project.isInternal ? 'View Details' : 'View Repo'}
                                </span>
                                <svg
                                    className="w-3 h-3"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
